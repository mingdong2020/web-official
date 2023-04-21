import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Dialog from '../dialog';
import Toast from '../toast';
import { getCookie } from '../../utils/custom';
import './index.scss';
export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reserve: '',
      toast: false
    }
  }
  componentDidMount() {
    document.oncontextmenu = function() {
      return false;
    }
    document.onselectstart = function() {
      return false;
    }
    // 初始化状态
    if (!getCookie('home-reserve')) {
      this.props.store.dispatch({
        type: 'SET_RESERVE',
        reserve: true
      })
      this.handReserve();
    }
    this.unsubscribe = this.props.store.subscribe(() => { // 订阅状态
      this.handReserve();
    })
  }
  componentDidUpdate() {

  }
  componentWillUnmount() {
    this.unsubscribe(); // 取消订阅
  }
  handReserve() {
    const { reserve, toast } = this.props.store.getState();
    this.setState({reserve});
    this.setState({toast});
    if (toast) {
      setTimeout(() => {
        this.props.store.dispatch({
          type: 'SET_TOAST',
          toast: false
        })
      }, 3000)
    }
  }
  render() {
    const { reserve, toast } = this.state;
    return (
      <React.Fragment>
        <Header {...this.props}/>
        {this.props.children}
        <Footer {...this.props}/>
        {reserve && <Dialog {...this.props}/>}
        {toast && <Toast {...this.props} />}
      </React.Fragment>
    )
  }
}