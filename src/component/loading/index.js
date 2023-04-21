import React from 'react';
import './index.scss';
export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      percent: 0
    }
  }
  componentDidMount() {
    // 页面加载中
    let count = 0;
    this.timer = setInterval(() => {
      if (count <= 96) {
        count += 2;
        this.setState({ percent: count })
      } else {
        this.setState({ percent: 0 })
        clearInterval(this.timer);
      }
    }, 50)
  }
  componentWillUnmount() {
    this.setState({ percent: 0 })
    clearInterval(this.timer);
  }
  render() {
    const { percent } = this.state;
    return (
      <div className='loading-box'>
        <div style={{width: percent + '%'}} className='loading-line'></div>
      </div>
    )
  }
}