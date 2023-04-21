import React from 'react';
import Cancel from '../../image/Cancel.png';
import { setCookie } from '../../utils/custom';
import { apiMail } from '../../api/home';
import './index.scss';
export default class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userTel: '',
      verifyName: false,
      verifyTel: false,
      warnName: 0,
      warnTel: 0,
      tipsName: '请输入姓名',
      tipsTel: '请输入手机号',
    }
  }
  componentDidMount() {

  }
  componentDidUpdate() {

  }
  componentWillUnmount() {

  }
  handleName(e) {
    this.setState({userName: e.target.value});
  }
  handlePhone(e) {
    this.setState({userTel: e.target.value});
  }
  nameVerify() { // 校验姓名
    const { userName, warnName } = this.state;
    const result = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,16}$/.test(userName);
    if (userName && userName.length > 1 && result) {
      this.setState({verifyName: true});
      if (warnName !== 0) {
        this.animateName(true);
      }
      return true;
    } else {
      userName ? this.setState({tipsName: '请输入正确的姓名'}) : this.setState({tipsName: '请输入姓名'});
      this.setState({verifyName: false});
      if (warnName !== -15) {
        this.animateName(false);
      }
      return false;
    }
  }
  telVerify() { // 校验手机号
    const { userTel, warnTel } = this.state;
    const result = /^1[0-9]{10}$/.test(userTel);
    if (userTel && userTel.length > 1 && result) {
      this.setState({verifyTel: true});
      if (warnTel !== 0) {
        this.animateTel(true);
      }
      return true;
    } else {
      userTel ? this.setState({tipsTel: '请输入正确的手机号'}) : this.setState({tipsTel: '请输入手机号'});
      this.setState({verifyTel: false});
      if (warnTel !== -15) {
        this.animateTel(false);
      }
      return false;
    }
  }
  animateName(verify) {
    const { warnName } = this.state;
    let count = warnName;
    const timer = setInterval(() => {
      verify ? count += 1 : count -= 1;
      if (count === 0 || count === -15) {
        clearInterval(timer);
        verify ? this.setState({warnName: 0}) : this.setState({warnName: -15});
      }
      this.setState({warnName: count});
    }, 12);
  }
  animateTel(verify) {
    const { warnTel } = this.state;
    let count = warnTel;
    const timer = setInterval(() => {
      verify ? count += 1 : count -= 1;
      if (count === 0 || count === -15) {
        clearInterval(timer);
        verify ? this.setState({warnTel: 0}) : this.setState({warnTel: -15});
      }
      this.setState({warnTel: count});
    }, 12);
  }
  handleCancel() {
    setCookie('home-reserve', true, 1 / 60 / 60 * 1800);
    this.props.store.dispatch({
      type: 'SET_RESERVE',
      reserve: false
    })
  }
  handleSubmit() {
    const verifyName = this.nameVerify();
    const verifyTel = this.telVerify()
    if (verifyName && verifyTel) {
      const { userName, userTel } = this.state;
      const { normalName } = this.props.company;
      apiMail({
        source: normalName,
        name: userName,
        phone: userTel,
        company: '未知',
        word: '未知'
      }).then((val) => {
        this.props.store.dispatch({
          type: 'SET_RESERVE',
          reserve: false
        })
        this.props.store.dispatch({
          type: 'SET_TOAST',
          toast: true
        })
      })
    }
  }
  render() {
    const { userName, userTel, verifyName, verifyTel, warnName, warnTel, tipsName, tipsTel } = this.state;
    return (
      <div className='dialog-panel'>
        <div className='dialog-box'>
          <div className='dialog-title'>
            <div></div>
            <h1>留言咨询</h1>
            <div onClick={() => this.handleCancel()}>
              <img alt='' src={Cancel}></img>
            </div>
          </div>
          <div className='dialog-form'>
            <div className='form-item'>
              <label>姓名: </label>
              <div className={`form-list ${!verifyName && userName.length > 0 ? 'list-warn' : ''}`}>
                <span style={{bottom: `${warnName / 16}rem`}}>{ tipsName }</span>
                <input type='text' name='name' value={ userName } placeholder='请输入姓名' onChange={(e) => this.handleName(e)} onBlur={() => this.nameVerify()}/>
              </div>
            </div>
            <div className='form-item'>
              <label>手机号: </label>
              <div className={`form-list ${!verifyTel && userTel.length > 0 ? 'list-warn' : ''}`}>
                <span style={{bottom: `${warnTel / 16}rem`}}>{ tipsTel }</span>
                <input type='number' name='phone' value={ userTel } placeholder='请输入手机号' onChange={(e) => this.handlePhone(e)} onBlur={() => this.telVerify()}/>
              </div>
            </div>
            <div className='form-submit' onClick={() => this.handleSubmit()}>提交</div>
          </div>
        </div>
      </div>
    )
  }
}