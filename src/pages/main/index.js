import React from 'react';
import { setCookie, getCookie } from '../../utils/custom';
import Image from '../../component/image';
import mainTel from '../../image/mainTel.png';
import QueryScope from '../../image/QueryScope.png';
import QueryType from '../../image/QueryType.png';
import QueryPerson from '../../image/QueryPerson.png';
import QueryServe from '../../image/QueryServe.png';
import MainAdvert from '../../image/MainAdvert.jpg';
import Advant01 from '../../image/Advant01.jpg';
import Advant02 from '../../image/Advant02.jpg';
import Advant03 from '../../image/Advant03.jpg';
import Advant04 from '../../image/Advant04.jpg';
import Project01 from '../../image/Project01.jpg';
import Project02 from '../../image/Project02.jpg';
import Project03 from '../../image/Project03.jpg';
import Project04 from '../../image/Project04.jpg';
import Project05 from '../../image/Project05.jpg';
import Coop01 from '../../image/Coop01.png';
import Coop02 from '../../image/Coop02.png';
import Coop03 from '../../image/Coop03.png';
import Coop04 from '../../image/Coop04.png';
import Coop05 from '../../image/Coop05.png';
import Coop06 from '../../image/Coop06.png';
import Coop07 from '../../image/Coop07.png';
import { apiMail } from '../../api/home';
import './index.scss';
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    const { simpleName } = this.props.company;
    this.scrollTimer = null;
    this.nameTimer = null;
    this.scrollRef = React.createRef();
    this.state = {
      registTotal: 0,
      companyName: '',
      companyTel: '',
      verifyName: false,
      verifyTel: false,
      warnName: 15,
      warnTel: 15,
      tipsName: '请输入名称',
      tipsTel: '请输入手机号',
      queryTotal: 0,
      queryData: [],
      nameCount: 0,
      advantData: [
        {
          name: '专业解读',
          image: Advant01,
          text: '积累了一整套详尽的自由贸易试验区的相关政策解读，配备专业自贸区政策研究组，对新政策进行汇总提炼。'
        },
        {
          name: '与时俱进',
          image: Advant02,
          text: '与时俱进自贸区金融政策，结合政策与案例的形式展现，自贸区发展的任何细微改变都会及时调整，第一时间出台应对方案。'
        },
        {
          name: '经验丰富',
          image: Advant03,
          text: `${simpleName}是自贸区首批专业从事企业资讯服务的机构之一，在上海最早一批开始做融资租赁公司注册业务100%办理。`
        },
        {
          name: '真诚服务',
          image: Advant04,
          text: '在全国各大自贸区都可以注册办理，为企业提供一体化的政策资讯和一站式的注册服务。'
        }
      ],
      ideaData: [
        {
          name: '自贸区公司注册',
          image: Project01,
          text: '自贸区将实施“一线逐步彻底放开、二线安全高效管住”的监管服务模式。“一线”指国境线，“二线”是指国内市场分界线。“一线放开”将简化进出境备案清单，简化国际中转、集拼和分拨等业务进出境手续；“二线管住”将推行“方便进出，严密防范质量安全风险”的检验检疫监管模式。'
        },
        {
          name: '融资租赁注册',
          image: Project02,
          text: '开设融资租赁公司可以办理的业务有：1、融资租赁业务;2、租赁业务;3、向国内外购买租赁财产;4、租赁财产的残值处理及维修;5、租赁交易咨询和担保;6、经审批部门批准的其他业务;7、以主营业务相关的保理业务。'
        },
        {
          name: '企业财务代理',
          image: Project03,
          text: '公司成立之后，无论有无收入，都应当在每个月15前对上个月的收入情况进行做账报税，首次报税时间请参考税务局核发的《税种核定通知书》，小规模纳税人的增值税和企业所得税按自然季度申报'
        },
        {
          name: '商业保理注册',
          image: Project04,
          text: '商业保理，指由非银行金融机构开展的保理。即销售商将其与买方订立的货物销售（服务）合同产生的应收账款转让给保理公司。《中国商业保理行业发展报告2015》截止2015年底我国规模以上工业企业应收账款达11.46万亿元'
        },
        {
          name: '私募基金备案',
          image: Project05,
          text: '不备案很多合作都无法开展。证券投资基金。根据《关于私募投资基金开户和结算有关问题的通知》，要求私募基金申请开立证券账户时必须提供证券业协会同意私募基金管理人登记相关证明文件，如管理人不登记备案则不能申'
        }
      ],
      ideaActive: 0,
      windData: {
        name: '自贸区公司注册',
        image: Project01,
        text: '自贸区将实施“一线逐步彻底放开、二线安全高效管住”的监管服务模式。“一线”指国境线，“二线”是指国内市场分界线。“一线放开”将简化进出境备案清单，简化国际中转、集拼和分拨等业务进出境手续；“二线管住”将推行“方便进出，严密防范质量安全风险”的检验检疫监管模式。'
      }
    }
  }
  componentDidMount() {
    // 查询名称
    this.countName();
    // 查询次数
    this.countTimer();
    this.scrollTimer = setInterval(() => {
      this.countTimer();
    }, 60000);
    // 查询数据
    this.countData();
  }
  componentDidUpdate() {

  }
  componentWillUnmount() {
    clearInterval(this.scrollTimer);
    clearInterval(this.nameTimer);
  }
  countName() {
    const time = new Date();
    const hour = time.getHours() * 10;
    const max = hour + 8;
    const total = parseInt((Math.floor(Math.random() * (max - hour) ) + hour) * 0.68);
    const count = getCookie(`hour-${hour}`);
    if (count) {
      this.setState({registTotal: count});
    } else {
      setCookie(`hour-${hour}`, total, 1);
      this.setState({registTotal: total});
    }
  }
  countTimer() {
    const time = new Date();
    const minute = time.getMinutes() * 10;
    const max = minute + 12;
    const total = parseInt((Math.floor(Math.random() * (max - minute) ) + minute) * 0.88);
    const count = getCookie(`minute-${minute}`);
    if (count) {
      this.setState({queryTotal: count});
    } else {
      setCookie(`minute-${minute}`, total, 1 / 60);
      this.setState({queryTotal: total});
    }
  }
  countData() {
    const name = [
      '投资股份有限公司',
      '租赁有限公司',
      '商贸有限公司',
      '文化传媒有限公司',
      '投资股份有限公司',
      '商贸有限公司',
      '贸易有限责任公司',
      '投资有限公司',
      '服装有限公司',
      '文化传媒有限公司',
      '科技有限公司',
      '实业有限公司',
      '投资有限公司',
      '投资有限公司',
      '实业有限公司',
      '服装有限公司',
      '电子商务有限公司',
      '文化传媒有限公司',
      '租赁有限公司',
      '艺术有限公司',
      '机械有限公司',
      '艺术有限公司',
      '贸易有限公司',
      '投资有限公司',
      '投资有限公司',
      '租赁有限公司',
    ];
    const mobile = [
      '134',
      '136',
      '137',
      '153',
      '189',
      '133',
      '180',
      '155',
      '185',
      '186',
      '134',
      '157',
      '188',
      '131',
      '150',
      '157',
      '182',
      '138',
      '134'
    ];
    const data = [];
    name.forEach((item) => {
      const company = `上海***${item}`;
      mobile.forEach((list) => {
        const total = parseInt((Math.floor(Math.random() * (9999 - 1000) ) + 1000));
        const person = `手机号：${list}****${total}`;
        const type = total % 2 === 0 ? '不能注册' : '可以注册';
        const result = `${company} ${person} ${type}`;
        data.push(result);
      })
    })
    this.setState({queryData: data}, () => {
      this.beginScroll();
    });
  }
  beginScroll() {
    this.nameTimer = setInterval(() => {
      const clientHeight = parseInt(this.scrollRef.current.offsetHeight);
      const { queryData, nameCount } = this.state;
      this.setState({nameCount: nameCount + 1})
      this.scrollRef.current.style.marginTop = -nameCount + 'px';
      if (clientHeight - nameCount < 150) {
        const data = JSON.parse(JSON.stringify(queryData));
        const gather = [...queryData, ...data].slice(queryData.length - 10);
        this.setState({queryData: gather});
      }
    }, 100);
  }
  handStop() {
    clearInterval(this.nameTimer);
  }
  handStart() {
    this.beginScroll();
  }
  handleName(e) {
    this.setState({companyName: e.target.value});
  }
  handlePhone(e) {
    this.setState({companyTel: e.target.value});
  }
  nameVerify() { // 校验姓名
    const { companyName, warnName } = this.state;
    const result = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,16}$/.test(companyName);
    if (companyName && companyName.length > 1 && result) {
      this.setState({verifyName: true});
      if (warnName !== 15) {
        this.animateName(true);
      }
      return true;
    } else {
      companyName ? this.setState({tipsName: '请输入正确的名称'}) : this.setState({tipsName: '请输入名称'});
      this.setState({verifyName: false});
      if (warnName !== 0) {
        this.animateName(false);
      }
      return false;
    }
  }
  telVerify() { // 校验手机号
    const { companyTel, warnTel } = this.state;
    const result = /^1[0-9]{10}$/.test(companyTel);
    if (companyTel && companyTel.length > 1 && result) {
      this.setState({verifyTel: true});
      if (warnTel !== 15) {
        this.animateTel(true);
      }
      return true;
    } else {
      companyTel ? this.setState({tipsTel: '请输入正确的手机号'}) : this.setState({tipsTel: '请输入手机号'});
      this.setState({verifyTel: false});
      if (warnTel !== 0) {
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
      if (count === 0 || count === 15) {
        clearInterval(timer);
        verify ? this.setState({warnName: 15}) : this.setState({warnName: 0});
      }
      this.setState({warnName: count});
    }, 12);
  }
  animateTel(verify) {
    const { warnTel } = this.state;
    let count = warnTel;
    const timer = setInterval(() => {
      verify ? count += 1 : count -= 1;
      if (count === 0 || count === 15) {
        clearInterval(timer);
        verify ? this.setState({warnTel: 15}) : this.setState({warnTel: 0});
      }
      this.setState({warnTel: count});
    }, 12);
  }
  handleSubmit() {
    const verifyName = this.nameVerify();
    const verifyTel = this.telVerify()
    if (verifyName && verifyTel) {
      const { companyName, companyTel } = this.state;
      const { normalName } = this.props.company;
      apiMail({
        source: normalName,
        name: '未知',
        phone: companyTel,
        company: companyName,
        word: '未知'
      }).then((val) => {
        this.props.store.dispatch({
          type: 'SET_TOAST',
          toast: true
        })
      })
    }
  }
  handTabber(index) {
    const { ideaData } = this.state;
    this.setState({ideaActive: index});
    this.setState({windData: ideaData[index]});
  }
  render() {
    const {
      registTotal,
      companyName,
      companyTel,
      warnName,
      warnTel,
      tipsName,
      tipsTel,
      queryTotal,
      queryData,
      advantData,
      ideaData,
      ideaActive,
      windData
    } = this.state;
    const { tel } = this.props.stands;
    const { history } = this.props;
    const { simpleName } = this.props.company;
    return (<div className='main-box'>
      {/* 企业名称查询 */}
      <h1><em>免费</em>查询名称</h1>
      <h5>今天已有<em>{ registTotal }</em>位创业者免费获取查询公司名称</h5>
      <div className='main-query'>
        <div className='query-form'>
          <div className='query-item'>
            <span style={{bottom: `${warnName / 16}rem`}}>{ tipsName }</span>
            <input type='text' name='name' value={ companyName } placeholder={`例：上海${simpleName}投资咨询有限公司`} onChange={(e) => this.handleName(e)} />
          </div>
          <div className='query-item'>
            <span style={{bottom: `${warnTel / 16}rem`}}>{ tipsTel }</span>
            <input type='number' name='phone' value={ companyTel } placeholder='输入手机号码' onChange={(e) => this.handlePhone(e)} />
          </div>
          <div className='query-submit' onClick={() => this.handleSubmit()}>
            <div className='query-tel'>
              <Image src={mainTel} auto={false}></Image>
            </div>
            <span>立即查询能否注册</span>
          </div>
        </div>
        <div className='query-other'>
          <div className='query-scroll'>
            <div className='query-title'>目前已有<em>{ queryTotal }</em>次查询 最新查询结果如下：</div>
            <div className='scroll-box'>
              <div className="scroll-list" ref={this.scrollRef} onMouseEnter={() => this.handStop()} onMouseLeave={() => this.handStart()}>
                {queryData.map((item, index) => {
                  return (
                    <div key={index} className="scroll-item">{item}</div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='query-tool'>
            <div className='query-title'>常用工具</div>
            <div className='tool-box'>
              <div className='tool-item' onClick={() => history.push('/main/industry')}>
                <div className='tool-image'>
                  <Image src={QueryScope} auto={false}></Image>
                </div>
                <span>经营范围表</span>
              </div>
              <div className='tool-item' onClick={() => history.push('/main/manage')}>
                <div className='tool-image'>
                  <Image src={QueryType} auto={false}></Image>
                </div>
                <span>行业分类表</span>
              </div>
              <div className='tool-item' onClick={() => this.props.customForm()}>
                <div className='tool-image'>
                  <Image src={QueryPerson} auto={false}></Image>
                </div>
                <span>工商查询</span>
              </div>
              <div className='tool-item' onClick={() => this.props.customForm()}>
                <div className='tool-image'>
                  <Image src={QueryServe} auto={false}></Image>
                </div>
                <span>立即咨询</span>
              </div>
            </div>
          </div>
        </div>
        <div className='query-inform'>
          <div className='query-tips'>{simpleName}为你提供<em>方便/快捷/精准</em>的一站式服务</div>
          <div className='query-tips'>服务热线：<em>{tel}</em></div>
        </div>
      </div>
      {/* 企业活动 */}
      <div className='main-advert'>
        <Image src={MainAdvert} auto={true}></Image>
      </div>
      {/* 企业优势 */}
      <div className='main-advant'>
        <h1>我们的优势</h1>
        <div className='main-tips'>全程网上办理，{simpleName}选择经验丰富工商代理人，快速为您注册公司</div>
        <div className='advant-box'>
          {
            advantData.map((item, index) => {
              return (
                <div className='advant-item' key={index}>
                  <h3>{item.name}</h3>
                  <div className='advant-image'>
                    <Image src={item.image} auto={true}></Image>
                  </div>
                  <div className='advant-text'>{item.text}</div>
                </div>
              );
            })
          }
        </div>
      </div>
      {/* 明动方案 */}
      <div className='idea-box'>
        <div className='idea-panel'>
          <h1>{simpleName}解决方案</h1>
          <div className='idea-tabber'>
            {
              ideaData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={ideaActive === index ? 'idea-item idea-active' : 'idea-item' }
                    onClick={() => this.handTabber(index)}
                  >{item.name}</div>
                );
              })
            }
          </div>
          <div className='idea-wind'>
            <div className='idea-image'>
              <Image src={windData.image} auto={true}></Image>
            </div>
            <div className='idea-text'>
              <h3>{windData.name}</h3>
              <span>{windData.text}</span>
            </div>
          </div>
        </div>
      </div>
      {/* 合作客户 */}
      <div className='coop-box'>
        <h1>合作客户</h1>
        <div className='coop-panel'>
          <div className='coop-item'>
            <Image src={Coop01} auto={true}></Image>
          </div>
          <div className='coop-item'>
            <Image src={Coop02} auto={true}></Image>
          </div>
          <div className='coop-item'>
            <Image src={Coop03} auto={true}></Image>
          </div>
          <div className='coop-item'>
            <Image src={Coop04} auto={true}></Image>
          </div>
          <div className='coop-item'>
            <Image src={Coop05} auto={true}></Image>
          </div>
          <div className='coop-item'>
            <Image src={Coop06} auto={true}></Image>
          </div>
          <div className='coop-item'>
            <Image src={Coop07} auto={true}></Image>
          </div>
        </div>
      </div>
    </div>);
  }
}