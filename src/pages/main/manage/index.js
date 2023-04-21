import React from 'react';
import './index.scss';
export default class Manage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        {
          id: 1,
          name: '贸易类',
          text: '贸易、经贸发展、工贸、国际贸易、商贸等'
        },
        {
          id: 2,
          name: '工程类',
          text: '建筑装饰工程、土石方工程、园林绿化工程、市政工程、钢结构工程、环境工程、能源工程等'
        },
        {
          id: 3,
          name: '材料类',
          text: '建材、装潢材料、新材料、能源材料、符合材料、环保材料、塑料、符合材料等'
        },
        {
          id: 4,
          name: '设计、企划类',
          text: '建筑设计，平面设计、动漫设计、广告、文化传播、市场营销、企业形象策划、形象设计等'
        },
        {
          id: 5,
          name: '服务类',
          text: '商务咨询、企业管理咨询、会务服务、翻译服务、展览展示服务、礼仪服务、建筑设计咨询、船务、电子商务等'
        },
        {
          id: 6,
          name: '管理类',
          text: '企业管理、投资管理、餐饮管理、酒店管理、物业管理等'
        },
        {
          id: 7,
          name: '产品类',
          text: '机电、电子、机械、泵阀、家具、箱包、服饰、袜业、裤业、电器、实业、实业发展、木业、汽配、酒店设备、环保设备、化妆品、工艺品、礼品等，只要是产品名称几乎都可以作为行业类别。'
        },
        {
          id: 8,
          name: '科技类',
          text: '化工科技、能源科技、环保科技、环境科技、生物科技、信息科技、网络科技、数码科技、通讯科技、动力科技、化工科技、电子科技等，其形式是产品+科技/技术，技术在这里等同于科技。'
        },
        {
          id: 9,
          name: '投资类',
          text: '实业投资、投资管理、投资咨询、投资控股等'
        },
        {
          id: 10,
          name: '综合类',
          text: '实业、企业发展、集团、股份等'
        },
        {
          id: 11,
          name: '物流类',
          text: '物流、国际物流、运输、客运、仓储第三方物流管理、海运、航空等'
        },
        {
          id: 12,
          name: '代理类',
          text: '货运代理、国际货运代理、商标代理、专利代理、知识产权代理、代理报关、代理记账、代理登记等'
        },
        {
          id: 13,
          name: '人才类',
          text: '劳务派遣、劳务服务、人力资源等'
        },
        {
          id: 14,
          name: '房产类',
          text: '房地产开发、置业公司、房屋经纪公司等'
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
    const { tableData } = this.state;
    return (<div className='manage-box'>
      <h1>行业分类</h1>
      <table border={0} cellSpacing={0} cellPadding={0}>
        <thead>
          <td width="6%">序号</td>
          <td width="12%">大分类</td>
          <td>公司行业类别具体分类</td>
        </thead>
        {
          tableData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.text}</td>
            </tr>
            );
          })
        }
      </table>
    </div>);
  }
}