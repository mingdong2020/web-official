import React from 'react';
import { Link } from 'react-router-dom';
import wxCode from '../../image/wxCode.png';
import Image from '../image';
import './index.scss';
export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [
        {
          title: '增值电信',
          list: [
            {
              name: 'ICP许可证',
              path: '/approve/1/1'
            },
            {
              name: 'SP许可证',
              path: '/approve/1/2'
            },
            {
              name: 'IDC许可证',
              path: '/approve/1/3'
            },
            {
              name: 'ISP许可证',
              path: '/approve/1/4'
            },
            {
              name: '呼叫中心许可证',
              path: '/approve/1/5'
            },
            {
              name: '电信码号',
              path: '/approve/1/6'
            },
            {
              name: 'EDI许可证',
              path: '/approve/1/7'
            },
            {
              name: 'IP-VPN许可证',
              path: '/approve/1/8'
            }
          ]
        },
        {
          title: '资质许可',
          list: [
            {
              name: '保健食品经营许可证',
              path: '/approve/2/1'
            },
            {
              name: '食品经营许可证',
              path: '/approve/2/2'
            },
            {
              name: '绿色食品办理',
              path: '/approve/2/3'
            },
            {
              name: '定型包装食品审批',
              path: '/approve/2/4'
            },
            {
              name: '营业性演出许可证',
              path: '/approve/2/5'
            },
            {
              name: '危化品许可证',
              path: '/approve/2/6'
            },
            {
              name: '医疗器械许可证',
              path: '/approve/2/7'
            }
          ]
        },
        {
          title: '互联网服务',
          list: [
            {
              name: '文化经营许可证',
              path: '/approve/3/1'
            },
            {
              name: '游戏版号',
              path: '/approve/3/2'
            },
            {
              name: '互联网医疗保健',
              path: '/approve/3/3'
            },
            {
              name: '网络视听许可证',
              path: '/approve/3/4'
            },
            {
              name: '广播电视节目许可证',
              path: '/approve/3/5'
            },
            {
              name: '互联网出版',
              path: '/approve/3/6'
            }
          ]
        },
        {
          title: '财税代理',
          list: [
            {
              name: '零申报',
              path: '/account/00'
            },
            {
              name: '税务汇算清缴',
              path: '/account/01'
            },
            {
              name: '企业验资咨询',
              path: '/account/02'
            },
            {
              name: '一般纳税人申请',
              path: '/account/03'
            },
            {
              name: '小规模纳税人申请',
              path: '/account/04'
            }
          ]
        },
        {
          title: '审计报告',
          list: [
            {
              name: '财务报表审计',
              path: '/account/10'
            },
            {
              name: '工商年检审计',
              path: '/account/11'
            },
            {
              name: '财产转移审计',
              path: '/account/12'
            },
            {
              name: '企业改制审计',
              path: '/account/13'
            },
            {
              name: '外汇年检审计',
              path: '/account/14'
            },
            {
              name: '高新技术审计',
              path: '/account/15'
            },
            {
              name: '专项审计报告',
              path: '/account/16'
            },
            {
              name: '内资企业财务报表',
              path: '/account/17'
            },
            {
              name: '清算审计报告',
              path: '/account/18'
            }
          ]
        },
        {
          title: '审计评估',
          list: [
            {
              name: '企业验资报告',
              path: '/account/20'
            },
            {
              name: '增资验资报告',
              path: '/account/21'
            },
            {
              name: '减资验资报告',
              path: '/account/22'
            }
          ]
        }
      ],
      icpBei: '沪ICP备17000006号-1'
    }
  }
  componentDidMount() {
    const { companySite } = this.props
    if (companySite) {
      this.setState({
        icpBei: '沪ICP备14004441号-5'
      })
    }
  }
  componentDidUpdate() {

  }
  componentWillUnmount() {

  }
  render() {
    const { itemList, icpBei } = this.state;
    const { tel } = this.props.stands;
    const { simpleName } = this.props.company;
    return (
      <div className='footer-box'>
        <div className='footer-relate'>
          <div className='relate-item'>
            {itemList.map((item, index) => {
              return (<div className='relate-list' key={index}>
                <h5>{item.title}</h5>
                <div className='relate-link'>
                  {item.list.map((list, idx) => {
                    return <Link to={list.path} key={idx}>{list.name}</Link>
                  })}
                </div>
              </div>);
            })}
          </div>
          <div className='relate-other'>
            <div className='relate-ercode'>
              <Image src={wxCode}></Image>
            </div>
            <div className='serve-item'>{tel}</div>
          </div>
        </div>
        <div className='footer-owner'>
          <div>中国（上海）自由贸易试验区，马吉路28号东华金融大厦1206-1208室</div>
          <div>Room 1206-1208 Donghua Finance Mansion,No.28 Maji Road,China (Shanghai) Pilot Free Trade Zone.</div>
          <div>
            <span>Copyright 2010-2026 MDTZZX.CN {simpleName}投资咨询 版权所有 ICP备案号： </span>
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">{ icpBei }</a>
          </div>
        </div>
      </div>
    )
  }
}