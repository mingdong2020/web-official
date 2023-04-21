import React from 'react';
import Image from '../../component/image';
import RegistPoint from '../../image/RegistPoint.png';
import './index.scss';
export default class Regist extends React.Component {
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
    return (<div className='regist-box'>
      <div className='regist-point'>
        <div className='regist-ground'>
          <Image src={RegistPoint} auto={true}></Image>
        </div>
        <div className='regist-panel' onClick={() => this.props.customForm()}>
          <h1>上海自贸区公司注册优势</h1>
          <div className='regist-text'>
            <span>
              注册资本实行认缴和
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              实缴两种方式，营业执照只
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              记载注册资本也就是在注册公司时股东可以按照自己约定的方式缴纳注册资本，在不缴纳注册资本的情况下，也可以取得
              <br/>营业执照。
            </span>
            <span>
              某些行业对外<br/>&nbsp;&nbsp;&nbsp;
              资开放或者降
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              低对投资者的
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              要求。比如广
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              告融 资租赁
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              等行业。</span>
            <span>对负面清单外的外<br/>资公司实行备案制，<br/>而不是审批制。也<br/>就是注册外资公司<br/>时已经不需要先经<br/>过审批部门的审批，<br/>只需要商务部门备案即可（负面清单除外）。</span>
            <span>
              注册时间大大
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            缩短内资一周、
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            外资两周即可<br/>&nbsp;&nbsp;&nbsp;&nbsp;获得全部证件。</span>
          </div>
        </div>
      </div>
      <div className='regist-process'>
        <h1>上海自贸区公司注册流程</h1>
        <div className='process-box'>
          <div className='process-context'>
            <div className='process-item'>
              <span>核名 <em>01</em></span>
              <span><em>07</em> 公章刻制</span>
            </div>
            <div className='process-item'>
              <span>租房、签订租房合同 <em>02</em></span>
              <span><em>08</em> 银行基本户设立</span>
            </div>
            <div className='process-item'>
              <span>编写公司章程 <em>03</em></span>
              <span><em>09</em> FT账户设立（选择性）</span>
            </div>
            <div className='process-item'>
              <span>前置审批许可（特殊经营）<em>04</em></span>
              <span><em>10</em> 一般纳税人资格认定</span>
            </div>
            <div className='process-item'>
              <span>一口受理材料递交 <em>05</em></span>
              <span><em>11</em> 进出口经营权（或其他后置许可）</span>
            </div>
            <div className='process-item'>
              <span>领证“三证” <em>06</em></span>
              <span><em>12</em> 申领认购发票</span>
            </div>
          </div>
          <div className='process-circle'>
            <div className='circle-fault'>
              <div className='circle-bg'></div>
              <div className='circle-tx'>
                <h5>办理流程</h5>
                <div>上海自贸区注册公司</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='regist-material'>
        <h1>上海自贸区公司注册材料</h1>
        <div className='material-box'>
          <div className='material-item'>
            <div className='material-step'>
              <div className='step-box'></div>
            </div>
            <div className='material-context'>
              <h3>上海自贸区<em>内资公司</em>注册申请材料</h3>
              <div className='material-list'>
                <span>1，身份证（自然人股东）。</span>
                <span>2，营业执照及复印件加盖公章（企业法人股）。</span>
                <span>3，提供注册公司注册地址的租赁合同和产权证复印件。</span>
                <span>4，《企业名称预先核准申请书》。</span>
                <span>5，《企业公司设立登记申请书》。</span>
                <span>6，《指定代表或者共同委托人的证明》。</span>
                <span>7，《公司章程》。</span>
                <span>8，《股东会决议或决定》。</span>
                <span>9，《委托书》</span>
              </div>
            </div>
          </div>
          <div className='material-item'>
            <div className='material-step'>
              <div className='step-box'></div>
            </div>
            <div className='material-context'>
              <h3>上海自贸区<em>合资公司</em>注册申请材料</h3>
              <div className='material-list'>
                <span>1，驻当地大使馆开具的公证认证原件及翻译件。</span>
                <span>2，中方营业执照及复印件加盖公司公章。</span>
                <span>3，董事，法人，监事，财务的身份证复印件。</span>
                <span>4，经营范围。</span>
                <span>5，提供注册公司注册地址的租赁合同和产权证复印件。</span>
                <span>6，《公司章程》。</span>
                <span>7，《董事委派书，经理聘任书》。</span>
                <span>8，《设立登记申请书》。</span>
                <span>9，《企业名称预先核准申请书》。</span>
                <span>10，《指定代表或者共同委托人的证明》。</span>
                <span>11，《董事会决议或股东会决议》。</span>
              </div>
            </div>
          </div>
          <div className='material-item'>
            <div className='material-step'>
              <div className='step-box'></div>
            </div>
            <div className='material-context'>
              <h3>上海自贸区<em>外资公司</em>注册申请材料</h3>
              <div className='material-list'>
                <span>1、驻当地大使馆开具的公证认证原件及翻译件。</span>
                <span>2、国外公司有权签字人的护照。</span>
                <span>3、董事，法人，监事，财务的身份证或护照复印件。</span>
                <span>4、拟从事的经营范围。</span>
                <span>5、提供注册公司注册地址的租赁合同和产权证复印件。</span>
                <span>6、《企业名称预先核准通知书》。</span>
                <span>7、《企业公司设立登记申请书》。</span>
                <span>8、《指定代表或者共同委托人的证明》。</span>
                <span>9、《公司章程》。</span>
                <span>10、委派书及聘任书。</span>
                <span>11、委托书。</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}