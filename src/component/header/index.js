import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../image';
import Swiper from '../swiper';
import Papers from '../papers';
import Logo from '../../image/Logo.png';
import Logo2 from '../../image/Logo2.png';
import Phone from '../../image/Phone.png';
import Phone2 from '../../image/Phone2.png';
import Banner01 from '../../image/Banner01.png';
import Banner02 from '../../image/Banner02.png';
import Banner03 from '../../image/Banner03.png';
import './index.scss';
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    const { companySite } = this.props
    this.state = {
      tabList: [
        {
          id: 0,
          name: '首页',
          path: '/',
          active: true
        },
        {
          id: 1,
          name: '自贸区注册',
          path: '/regist',
          active: false
        },
        {
          id: 2,
          name: '类金融服务',
          path: '/finance',
          active: false
        },
        {
          id: 3,
          name: '增值电信',
          path: '/approve/1/1',
          active: false
        },
        {
          id: 4,
          name: '资质许可',
          path: '/approve/2/1',
          active: false
        },
        {
          id: 5,
          name: '互联网服务',
          path: '/approve/3/1',
          active: false
        },
        {
          id: 6,
          name: '财务代理',
          path: '/account',
          active: false
        },
        // {
        //   id: 7,
        //   name: '财政支持',
        //   path: '/fiscal',
        //   active: false
        // },
        {
          id: 8,
          name: '关于我们',
          path: '/about',
          active: false
        },
      ],
      banData: companySite ? [Banner01, Banner03] : [Banner01, Banner02],
      location: '',
      toggle: false,
    }
  }
  componentDidMount() {
    const { pathname } = this.props.location;
    this.setState({location: pathname});
    this.lightTabs();
    // tab切换主题
    const { toggle } = this.props.store.getState();
    this.setState({toggle});
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const { pathname } = nextProps.location;
    if (pathname !== prevState.location) {
      return {
        location: pathname
      }
    }
    return null;
  }
  componentDidUpdate(nextProps, prevState) {
    if (this.state.location !== prevState.location) {
      this.lightTabs();
    }
  }
  lightTabs() {
    // 当前页tab高亮显示
    const { tabList } = this.state;
    const { pathname } = this.props.location;
    // 处理approve类页面

    tabList.forEach((item, index) => {
      if (pathname !== '/') {
        tabList[index].active = false;
        // 处理approve类页面
        let path = item.path;
        if (path.includes('approve')) {
          path = path.substring(0, 10)
        }
        if (pathname.includes(path) && path !== '/') {
          if (pathname.includes('approve')) {
            const { cate } = this.props.getParams;
            if (pathname.includes(cate)) {
              tabList[index].active = true;
            }
          } else {
            tabList[index].active = true;
          }
        }
      }
      if (pathname.includes('/main')) {
        tabList[0].active = true;
      }
    });
    this.setState([...tabList]);
  }
  handlerReload() {
    this.props.history.replace('/');
  }
  render() {
    const { tabList, banData, location, toggle } = this.state;
    const { tel } = this.props.stands;
    const { simpleName, normalName } = this.props.company;
    const { companySite } = this.props
    return (
      <div className='header-panel'>
        {/* 顶部部分 */}
        <div className='header-top'>
          <div className='header-tips'>
            <h1>欢迎光临{simpleName}投资咨询官方网站！</h1>
            <div className='header-interact'>
              <div className='header-icon'>
                <Image src={toggle ? Phone2 : Phone} auto={false}></Image>
              </div>
              <div className='header-number'>{tel}</div>
            </div>
          </div>
        </div>
        {/* tab部分 */}
        <div className='header-tabber'>
          <div className='header-line'>
            <div className='header-logo' onClick={() => this.handlerReload()}>
              {
                toggle ? <div className='ming-dong'>
                  <h1>{normalName}</h1>
                  <span>MINGDONG ZIXUN</span>
                </div> : <Image src={ companySite ? Logo2 : Logo}></Image>
              }
            </div>
            <div className='header-tab'>
              {tabList.map((item, index) => {
                return (<div className={`header-item ${item.active ? 'item-active' : ''}`} key={index}>
                  <Link to={item.path}>{item.name}</Link>
                </div>);
              })}
            </div>
          </div>
        </div>
        {/* ban部分 */}
        {
          location.includes('approve') ? <Papers {...this.props} /> : <Swiper {...this.props} data={banData} />
        }
      </div>
    )
  }
}