// import React from 'react';
// import Image from '../../component/image/index';
// import fiscal01 from '../../image/fiscal01.jpeg';
// import fiscal02 from '../../image/fiscal02.jpeg';
// import choose from '../../image/choose.png';
// import './index.scss';
// export default class Fiscal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectId: 0,
//       companyValue: '',
//       companyCount: '',
//       capitalTax: '',
//       gainsTax: '',
//       capitalCount: '',
//       gainsCount: ''
//     }
//   }
//   componentDidMount() {
    
//   }
//   componentDidUpdate() {

//   }
//   componentWillUnmount() {

//   }
//   handleTab(index) {
//     this.setState({active: index});
//   }
//   handleCompany(event) {
//     this.setState({companyValue: event.target.value})
//   }
//   handleCapital(event) {
//     this.setState({capitalTax: event.target.value})
//   }
//   handleGains(event) {
//     this.setState({gainsTax: event.target.value})
//   }
//   handleFiscal(e) {
//     e.preventDefault();
//     const { selectId, companyValue } = this.state;
//     let count = 0;
//     if (companyValue && companyValue >= 100000 && companyValue > 0) {
//       switch(selectId)
//       {
//         case 0:
//           count = (parseInt(companyValue) * 0.3 * 0.3).toFixed(2);
//           break;
//         case 1:
//           count = (parseInt(companyValue) * 0.3 * 0.3).toFixed(2);
//           break;
//         case 2:
//           count = (parseInt(companyValue) * 0.5 * 0.4).toFixed(2);
//           break;
//         case 3:
//           count = (parseInt(companyValue) * 0.325 * 0.4).toFixed(2);
//           break;
//         default:
//           break;
//       }
//       this.setState({companyCount: count});
//     } else {
//       this.setState({companyCount: ''});
//     }
//   }
//   handleSupport(e) {
//     e.preventDefault();
//     const { capitalTax = 0, gainsTax = 0 } = this.state;
//     const capitalVal = parseInt(capitalTax) * 0.43 || 0;
//     const gainsVal = parseInt(gainsTax) * 0.343 || 0;
//     const total = capitalVal + gainsVal;
//     let capital;
//     let gains;
//     if (total <= 0) {
//       capital = '';
//       gains = '';
//     } else if (total >= 100000 && total < 3000000) {
//       capital = (capitalVal*0.7).toFixed(2);
//       gains = (gainsVal*0.8).toFixed(2);
//     } else if (total >=3000000 && total < 10000000) {
//       capital = (capitalVal*0.75).toFixed(2);
//       gains = (gainsVal*0.8).toFixed(2);
//     } else if (total > 10000000) {
//       capital = (capitalVal*0.8).toFixed(2);
//       gains = (gainsVal*0.8).toFixed(2);
//     }
//     this.setState({capitalCount: capital});
//     this.setState({gainsCount: gains});
//   }
//   render() {
//     const { selectId, companyValue, companyCount, capitalTax, gainsTax, capitalCount, gainsCount } = this.state;
//     return (<div className='fiscal-box'>
//       <div className='fiscal-head'>
//         <div className='fiscal-item'>
//           <div className='fiscal-image'>
//             <Image src={fiscal01}></Image>
//           </div>
//           <div className='fiscal-text' onClick={() => this.props.customForm()}>
//             <div className='fiscal-title'>
//               <h6>上海园区</h6>
//               <em>去咨询</em>
//             </div>
//             <span>奉贤区、浦东新区、崇明区、杨浦区。园区直招，享财政扶持可高达40%</span>
//           </div>
//         </div>
//         <div className='fiscal-choose' onClick={() => this.props.customForm()}>
//           <Image src={choose}></Image>
//         </div>
//         <div className='fiscal-item'>
//           <div className='fiscal-image'>
//             <Image src={fiscal02}></Image>
//           </div>
//           <div className='fiscal-text' onClick={() => this.props.customForm()}>
//             <div className='fiscal-title'>
//               <h6>舟山自贸区</h6>
//               <em>去咨询</em>
//             </div>
//             <span>新城区块、小干岛区块、沈家门区块、东港区块、朱家尖区块。享财政扶持可高达80%</span>
//           </div>
//         </div>
//       </div>
//       <div className='fiscal-body'>
//         <div className='fiscal-query'>
//           <div className='fiscal-contxt'>
//             <form onSubmit={(e) => this.handleFiscal(e)}>
//               <div className='fiscal-label'>
//                 <label htmlFor="company-label">企业年纳税额(元): </label>
//                 <input id="company-label" type='text' value={companyValue} placeholder='点击输入预计企业年纳税额' onChange={(event) => this.handleCompany(event)} />
//               </div>
//               <div className='fiscal-label'>
//                 <label>选择园区: </label>
//                 <div className='fiscal-select'>
//                   <span onClick={() => this.setState({selectId: 0})} className={selectId === 0 ? 'fiscal-check' : null}>奉贤区</span>
//                   <span onClick={() => this.setState({selectId: 1})} className={selectId === 1 ? 'fiscal-check' : null}>浦东新区</span>
//                   <span onClick={() => this.setState({selectId: 2})} className={selectId === 2 ? 'fiscal-check' : null}>崇明区</span>
//                   <span onClick={() => this.setState({selectId: 3})} className={selectId === 3 ? 'fiscal-check' : null}>杨浦去</span>
//                 </div>
//               </div>
//               {companyCount && <div className='fiscal-result'>预计年财政支持(元): { companyCount }</div>}
//               <div className='fiscal-submit'>
//                 <input type='submit' value='查询' />
//               </div>
//             </form>
//           </div>
//         </div>
//         <div className='fiscal-query'>
//           <div className='fiscal-contxt'>
//             <form onSubmit={(e) => this.handleSupport(e)}>
//               <div className='fiscal-label'>
//                 <label htmlFor="capital-label">企业增值税(元): </label>
//                 <input id="capital-label" type='number' value={capitalTax} placeholder='点击输入企业增值税' onChange={(event) => this.handleCapital(event)} />
//               </div>
//               <div className='fiscal-label'>
//                 <label htmlFor="gains-label">企业所得税(元): </label>
//                 <input id="gains-label" type='number' value={gainsTax} placeholder='点击输入企业所得税' onChange={(event) => this.handleGains(event)} />
//               </div>
//               {capitalCount && <div className='fiscal-result'>预计年财政支持(元): {capitalCount}</div>}
//               {gainsCount && <div className='fiscal-result'>预计年财政支持(元): {gainsCount}</div>}
//               <div className='fiscal-submit'>
//                 <input type='submit' value='查询' />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>);
//   }
// }