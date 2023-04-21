import React from 'react';
import Image from '../image';
import data from '../../library/category.json';
import './index.scss';
export default class Papers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cate: '',
      caid: '',
      paperData: {}
    }
  }
  componentDidMount() {
    this.handlePapers();
    this.handleToggle(true);
  }
  static getDerivedStateFromProps(nextProps, prevState) { // 切换tab
    const { cate, caid } = nextProps.getParams;
    if (cate !== prevState.cate || caid !== prevState.caid) {
      return {
        cate: cate,
        caid: caid
      }
    }
    return null;
  }
  componentDidUpdate(nextProps, prevState) {
    if (this.state.cate !== prevState.cate || this.state.caid !== prevState.caid) {
      this.handlePapers();
    }
  }
  handlePapers = () => {
    const { cate, caid } = this.props.getParams;
    console.log(cate, caid)
    switch(parseInt(cate)) {
      case 1:
        this.setState({paperData: this.handleCheck(data['corr'], caid)});
        break;
      case 2:
        this.setState({paperData: this.handleCheck(data['bumf'], caid)});
        break;
      case 3:
        this.setState({paperData: this.handleCheck(data['wire'], caid)});
        break;
      default:
        break;
    }
  }
  handleCheck = (data, caid) => {
    data.list.forEach((item, index) => {
      item.check = false;
    })
    data.list[caid - 1].check = true;
    return data;
  }
  handleToggle = (status) => { // 切换主题
    this.props.store.dispatch({
      type: 'SET_TOGGLE',
      toggle: status
    })
    if (status) {
      document.getElementsByTagName('body')[0].style.setProperty('--head-top', '#2b3033');
      document.getElementsByTagName('body')[0].style.setProperty('--head-tab', '#2b3033');
      document.getElementsByTagName('body')[0].style.setProperty('--head-name', '#ffffff');
      document.getElementsByTagName('body')[0].style.setProperty('--head-tips', '#ffffff');
      document.getElementsByTagName('body')[0].style.setProperty('--head-tel', '#ffffff');
      document.getElementsByTagName('body')[0].style.setProperty('--head-hover', '#1890ff');
      document.getElementsByTagName('body')[0].style.setProperty('--head-border', '#2b3033');
    } else {
      document.getElementsByTagName('body')[0].style.setProperty('--head-top', '#f5f5f5');
      document.getElementsByTagName('body')[0].style.setProperty('--head-tab', '#ffffff');
      document.getElementsByTagName('body')[0].style.setProperty('--head-name', '#141414');
      document.getElementsByTagName('body')[0].style.setProperty('--head-tips', '#262626');
      document.getElementsByTagName('body')[0].style.setProperty('--head-tel', '#cf1322');
      document.getElementsByTagName('body')[0].style.setProperty('--head-hover', '#cf1322');
      document.getElementsByTagName('body')[0].style.setProperty('--head-border', '#d9d9d9');
    }
  }
  componentWillUnmount() {
    this.handleToggle(false);
  }
  handleItem = (index, item) => {
    const { cate, paperData } = this.state;
    const { history } = this.props;
    paperData.list.forEach((k, j) => {
      paperData.list[j].check = false;
    })
    paperData.list[index].check = true;
    this.setState({...paperData});
    history.push(`/approve/${cate}/${item.id}`)
  }
  render() {
    const { paperData: { name, list } } = this.state;
    return (
      <div className='papers-box'>
        <div className='papers-name'>{name}</div>
        <div className='papers-list'>
          {
            list && list.map((item, index) => {
              return (
                <div className={item.check ? 'papers-item papers-check' :'papers-item'} key={index} onClick={() => this.handleItem(index, item)}>
                  <div className='papers-art'>
                    <div className='papers-title'>{item.title}</div>
                    <div className='papers-text'>{item.text}</div>
                  </div>
                  <div className='papers-img'>
                    <Image src={require(`../../image/${item.image}`)}></Image>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    )
  }
}