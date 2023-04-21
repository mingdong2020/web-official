import React from 'react';
import Image from '../../component/image/index';
import data from '../../library/matter.json';
import Buy from '../../image/approve-buy.png';
import './index.scss';
export default class Approve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cate: '',
      caid: '',
      itemData: {},
      toBuy: false,
    }
  }
  componentDidMount() {
    const { cate, caid } = this.props.getParams;
    this.setState({cate: cate})
    this.setState({caid: caid})
    this.fetchList(cate, caid);
  }
  static getDerivedStateFromProps(nextProps, prevState) { // 刷新页面
    const { cate, caid } = nextProps.getParams;
    if (cate !== prevState.cate || caid !== prevState.caid) {
      return {
        cate: cate,
        caid: caid,
      }
    }
    return null;
  }
  componentDidUpdate(nextProps, prevState) {
    if (this.state.cate !== prevState.cate || this.state.caid !== prevState.caid) {
      this.fetchList(this.state.cate, this.state.caid);
    }
  }
  fetchList = (cate, caid) => {
    console.log('请求数据', cate, caid, data[cate][caid])
    const value = data[cate][caid];
    this.setState({itemData: value});
  }
  componentWillUnmount() {

  }
  render() {
    const { itemData, toBuy } = this.state;
    return (<div className='approve-box'>
      <div className='approve-content'>
        <div className='content-title'>{itemData.name}</div>
        <div className='content-text'>
          <div className='content-desc'>{itemData.desc}</div>
          <div className='content-range'>
            <em>{itemData.type ? `${itemData.type}：` : "经营范围："}</em>
            <span>{itemData.range}</span>
          </div>
        </div>
      </div>
      <div className='approve-tell'>
        <div className='content-box'>
          <div className='content-chip'>
            <div className='chip-title'>{itemData.count ? itemData.count : "申请条件"}</div>
            {
              itemData.chip && itemData.chip.map((item, index) => {
                return (<div key={index} className='chip-text'>{`${index + 1}. ${item}`}</div>);
              })
            }
          </div>
          <div className='content-circle'>
            <div className='content-image'>
              <div className={toBuy ? 'content-icon content-check': 'content-icon'} onClick={() => this.props.customForm()} onMouseEnter={() => this.setState({toBuy: true})} onMouseLeave={() => this.setState({toBuy: false})}>
                <Image src={Buy} auto={false}></Image>
              </div>
            </div>
          </div>
          <div className='content-coor'>
            <div className='coor-title'>{itemData.volue ? itemData.volue : "必备材料" }</div>
            {
              itemData.coor && itemData.coor.map((item, index) => {
                return (<div key={index} className='coor-text'>{`${index + 1}. ${item}`}</div>);
              })
            }
          </div>
        </div>
      </div>
      <div className='variety-box'>
        {
          itemData.variety && itemData.variety.map((item, index) => {
            return (
              <div key={index} className='variety-item'>
                <div className='variety-name'>{item}</div>
              </div>
            );
          })
        }
      </div>
    </div>);
  }
}