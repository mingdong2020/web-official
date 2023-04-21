import React from 'react';
import Image from '../image';
import './index.scss';
export default class Swiper extends React.Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      swiperData: [],
      activeIndex: 0,
      clientWidth: 0,
      leftOffset: 0,
    }
  }
  componentDidMount() {
    const { data } = this.props;
    this.setState({clientWidth: window.innerWidth});
    this.setState({swiperData: data});
    this.autoSwiper(data.length);
    // 解决setInterval加速问题
    let that = this;
    document.addEventListener('visibilitychange', function() {
      if (document.visibilityState === 'visible') {
        that.autoSwiper(data.length);
      } else {
        clearInterval(this.timer);
      }
    })
    window.onresize = function() {
      const { clientWidth } = that.state;
      if (clientWidth !== window.innerWidth) {
        that.setState({clientWidth: window.innerWidth})
      }
    }
  }
  componentDidUpdate() {

  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  autoSwiper(count) {
    if (!this.timer) {
      this.timer = setInterval(() => {
        const { activeIndex } = this.state;
        if (count - 1 === activeIndex) {
          const active = activeIndex - 1;
          this.setState({activeIndex: active}, () => {
            console.log(active, '@@ idx333');
            this.handleSwiper(active);
          });
        } else {
          const active = activeIndex + 1;
          this.setState({activeIndex: active}, () => {
            console.log(active, '@@ idx444');
            this.handleSwiper(active);
          });
        }
      }, 8000);
    }
  }
  handleSwiper(idx = 1) {
    console.log(idx, '@@ idx111');
    const { clientWidth } = this.state;
    const swiperDom = document.getElementsByClassName('swiper-box')[0].childNodes;
    swiperDom[0].style.marginLeft = `-${clientWidth * (idx)}px`;
  }
  handleToggle(idx) {
    this.setState({activeIndex: idx});
    this.handleSwiper(idx);
    clearInterval(this.timer);
  }
  render() {
    const { clientWidth, swiperData, leftOffset, activeIndex } = this.state;
    return (<div className='swiper-box'>
      {
        swiperData.map((item, index) => {
          return (
            <div
              key={index} className='swiper-item'
              style={{width: clientWidth + 'px', marginLeft: -leftOffset + 'px'}}
              onClick={() => this.props.customForm()}
            >
              <Image src={item}></Image>
            </div>
          );
        })
      }
      <div className='swiper-tab'>
        {
          swiperData.map((list, idx) => {
            return (
              <div
                key={idx}
                className={ activeIndex === idx ? 'swiper-list list-active' : 'swiper-list '}
                onClick={() => this.handleToggle(idx)}
              ></div>
            );
          })
        }
      </div>
    </div>);
  }
}