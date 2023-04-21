import React from 'react';
import Image from '../../component/image';
import account01 from '../../image/account01.png';
import account02 from '../../image/account02.png';
import account03 from '../../image/account03.png';
import data from '../../library/account.json';
import './index.scss';
export default class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acid: '00',
      itemData: [
        {
          name: "财税代理",
          image: account01,
          list: [
            "零申报",
            "税务汇算清缴",
            "企业验资咨询",
            "一般纳税人申请",
            "小规模纳税人申请"
          ]
        },
        {
          name: "审计报告",
          image: account02,
          list: [
            "财务报表审计",
            "工商年检审计",
            "财产转移审计",
            "企业改制审计",
            "外汇年检审计",
            "高新技术审计",
            "专项审计报告",
            "内资企业财务报表",
            "清算审计报告"
          ]
        },
        {
          name: "审计评估",
          image: account03,
          list: [
            "企业验资报告",
            "增资验资报告",
            "减资验资报告"
          ]
        },
      ],
      actData: {}
    }
  }
  componentDidMount() {
    const { acid = '00' } = this.props.getParams;
    this.handleData(acid);
  }
  static getDerivedStateFromProps(nextProps, prevState) { // 刷新页面
    const { acid = '00' } = nextProps.getParams;
    if (acid !== prevState.acid) {
      return {
        acid: acid,
      }
    }
    return null;
  }
  componentDidUpdate(nextProps, prevState) {
    if (this.state.acid !== prevState.acid) {
      this.handleData(this.state.acid);
    }
  }
  handleData = (acid) => {
    const actData = data[acid];
    this.setState({acid: acid});
    this.setState({actData: actData});
  }
  componentWillUnmount() {

  }
  handleItem = (index, idx) => {
    const { history } = this.props;
    history.push(`/account/${index}${idx}`)
  }
  render() {
    const { actData, acid, itemData } = this.state;
    return (<div className='account-box'>
      <div className='account-art'>
        <div className='account-title'>
          <h3>{actData.title}</h3>
          <div className='account-serve' onClick={() => this.props.customForm()}>去咨询</div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: actData.contex }} className='account-contex'></div>
      </div>
      <div className='account-nav'>
        {
          itemData.map((item, index) => {
            return (
              <div key={index} className='nav-item'>
                <div className='nav-title'>
                  <h6>{item.name}</h6>
                  <div className='nav-image'>
                    <Image src={item.image} auto={false}></Image>
                  </div>
                </div>
                <div className='nav-box'>
                  {
                    item.list.map((list, idx) => {
                      return (
                        <div key={idx} className={ `${index}${idx}` === acid ? 'nav-list nav-active' : 'nav-list'} onClick={() => this.handleItem(index, idx)}>{list}</div>
                      );
                    })
                  }
                </div>
              </div>
            );
          })
        }
      </div>
    </div>);
  }
}