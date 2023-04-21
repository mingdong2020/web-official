import React from 'react';
import './index.scss';

export default class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  componentDidMount() {

  }
  componentDidUpdate() {

  }
  componentWillUnmount() {

  }
  render() {
    const { src, auto = true } = this.props;
    return (
      <div className="image-box">
        <img className={auto ? 'width-fixed' : 'height-fixed'} src={src} loading='lazy' alt=''></img>
      </div>
    );
  }
}