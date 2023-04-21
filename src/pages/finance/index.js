import React from 'react';
import Image from '../../component/image';
import FinanceChoose from '../../image/FinanceChoose.png';
import Finance01 from '../../image/Finance01.png';
import Finance02 from '../../image/Finance02.png';
import Finance03 from '../../image/Finance03.png';
import Finance04 from '../../image/Finance04.png';
import Finance05 from '../../image/Finance05.png';
import Finance06 from '../../image/Finance06.png';
import FinanceBg from '../../image/FinanceBg.png';
import './index.scss';
export default class Finance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overData: [
        {
          image: Finance01,
          text: '企业名称和经营范围中'
        },
        {
          image: Finance02,
          text: '企业被列入重点监管对象'
        },
        {
          image: Finance03,
          text: '是否涉及“非法集资”'
        },
        {
          image: Finance04,
          text: '企业不正常报税！'
        },
        {
          image: Finance05,
          text: '公司未经营！'
        },
        {
          image: Finance06,
          text: '被扣上“僵尸企业”的名号。'
        },
      ]
    }
  }
  componentDidMount() {
    
  }
  componentDidUpdate() {

  }
  componentWillUnmount() {

  }
  render() {
    const { overData } = this.state;
    const { simpleName } = this.props.company;
    return (<div className='finance-box'>
      <div className='finance-firm'>
        <div className='firm-image'>
          <Image src={FinanceBg} auto={true}></Image>
        </div>
        <div className='firm-box'>
          <div className='firm-title'>自2016年4月14日出台的《互联网金融风险专项整治工作实施方案》，各省级政府联合当地金融监管部门开展互联网金融专项整治工作，在整治期内，全国各省市注册名称或经营范围出现跟“金融”有关字样的机构，均需金融主管部门审批。“严格意义上未经批准，注册名称和经营范围均不得使用这些字样”。</div>
          <div className='firm-tips'>未经批准，注册名称和经营范围均不得使用这些字样: 资产管理, 基金管理, 财富管理, 投资管理, 股权投资管理, 网络贷款, 股权众筹, 互联网保险, 交易所, 金融, 理财, 基金, 网贷, P2P, 支付等等</div>
        </div>
      </div>
      <div className='finance-choose'>
        <Image src={FinanceChoose} auto={false}></Image>
        <div className='finance-article'>
          <div className='article-head'>
            <p>金融类公司注册什么时候开放？</p>
            <p>这个政策要施行到什么时候？</p>
            <p>“大众创新，万众创业”的指导方针颁布出来之后，</p>
            <p>反而金融类公司全国停止注册，</p>
            <p>这使很多的投资者陷入了无奈之中。</p>
          </div>
          <div className='article-body'>{simpleName}咨询通过多方的努力，多次的沟通，全方位的协调之后，已经成功的注册了投资管理公司、资产管理公司和基金管理公司。很多同行业的人士或是客户都不敢相信，这怎么可能，市场都封闭的，转让都这么困难，新注册是怎么做到的？因为我们是创服行业，我们创造不可思议，我们走在行业的前沿。</div>
        </div>
      </div>
      <div className='finance-over'>
        <h1>公司转让</h1>
        <div className='over-tips'>在此{simpleName}给您提个醒，如果您之前已成功注册了金融类公司，现在根本没在经营，趁着工商局和金融管理部门没查到您的时候，赶紧出手吧，让那些真正需要做相关业务但注册不下来的创业者来经营。否则，不论是被扣上“非法集资”的帽子还是“僵尸企业”的名号，都逃不过吊销营业执照的厄运。</div>
        <div className='over-list'>
          {
            overData.map((item, index) => {
              return (
                <div className='over-item' key={index}>
                  <Image src={item.image} auto={false}></Image>
                  <div>{item.text}</div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>);
  }
}