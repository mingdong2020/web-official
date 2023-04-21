import React from 'react';
import { insertFile } from '../../utils/custom';
import Image from '../../component/image';
import AboutCompany from '../../image/AboutCompany.png';
import AboutMobile from '../../image/AboutMobile.png';
import AboutHome from '../../image/AboutHome.png';
import MapStart from '../../image/MapStart.png';
import MapEnd from '../../image/MapEnd.png';
import './index.scss';
export default class About extends React.Component {
  constructor(props) {
    super(props);
    const { simpleName, normalName } = this.props.company;
    const { companySite } = this.props
    this.mapRef = React.createRef();
    this.state = {
      choiceData: [
        {
          title: '我们有历史',
          text: companySite ? '诺唐投资咨询成立于2013年10月18日是第一批入驻上海自贸区的咨询行业公司。' : '明动企业管理（上海）有限公司（下称明动咨询）由原诺唐投资咨询（上海）有限公司根据发展需要，品牌升级而来。明动咨询成立于2013年10月18日是第一批入驻上海自贸区的咨询行业公司。'
        },
        {
          title: '我们有专家',
          text: `${normalName}主要服务于中国（上海）自由贸易试验区的招商引资、客户运营咨询，资产管理、投资管理、融资租赁、商业保理以及其他类金融行业咨询服务。10年行业经验，企业注册、变更数量超6000家，客户总数逾16000家。`
        },
        {
          title: '我们有态度',
          text: `基于自贸区的整体方案及进一步深化改革的方案，自贸区将从原来传统的货物贸易，向服务贸易、离岸贸易等新型业态方向发展，此次转变就包括跨境的维修、国际的检测、信息服务、离岸服务外包等内容。同时，依托上海“五个中心”的建设，${simpleName}投资咨询将以“尊重客户、服务客户、追求卓越”为核心竞争力，为国内外机构及个人精准对接中国自由贸易区。`
        },
        {
          title: '我们有担当',
          text: '作为一支富有朝气并有资深行业经验的团队，我们始终秉承“无论顾客有任何问题，一定在24小时之内解决，如果不能立即解决，也会给予一个圆满的答复”的服务理念，同时时刻保持空杯心态，从各个途径改进我们的服务体系尤其是敞开胸怀拥抱大互联时代。'
        },
        {
          title: '我们很卓越',
          text: '我们有理由相信，通过我们的服务理念以及核心竞争力，我们的品牌和团队正走在越来越开阔的道路上，我们的服务也将在不断改进、创新的过程中更好地服务于千千万万的客户。'
        },
      ],
      choiceActive: 2,
      coreData: [
        {
          name: `${simpleName}核心竞争力`,
          text: '尊重客户、服务客户、追求卓越！'
        },
        {
          name: `${simpleName}的使命`,
          text: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！'
        },
        {
          name: `${simpleName}的愿景`,
          text: '企业多元化咨询服务和一条龙服务的首选合作伙伴！'
        },
      ]
    }
  }
  componentDidMount() {
    this.handleMap();
    const { name } = this.props.store.getState();
    this.setState({name});
  }
  componentDidUpdate() {

  }
  componentWillUnmount() {

  }
  handleMap() {
    const url = 'https://map.qq.com/api/gljs?v=1.exp&key=5VDBZ-FM76U-VNRV3-BQAGW-HDN5F-YTFZU';
    insertFile(url, true).then(() => {
      const TMap = window.TMap;
      const center = new TMap.LatLng(31.348446, 121.588753);
      //定义map变量，调用 TMap.Map() 构造函数创建地图
      const map = new TMap.Map(this.mapRef.current, {
        center: center, //设置地图中心点坐标
        zoom: 17,    //设置地图缩放级别
        pitch: 48,    //设置俯仰角
        rotation: 0   //设置地图旋转角度
      });

      new TMap.MultiMarker({
        id: 'label-layer',
        map: map,
        styles: {
          //创建一个styleId为"myStyle"的样式（styles的子属性名即为styleId）
          "mapStart": new TMap.MarkerStyle({ 
            "width": 32,  // 点标记样式宽度（像素）
            "height": 48, // 点标记样式高度（像素）
            "src": MapStart,  //图片路径
            //焦点在图片中的像素位置，一般大头针类似形式的图片以针尖位置做为焦点，圆形点以圆心位置为焦点
            "anchor": { x: 16, y: 46 }  
          }),
          "mapEnd": new TMap.MarkerStyle({ 
            "width": 32,  // 点标记样式宽度（像素）
            "height": 48, // 点标记样式高度（像素）
            "src": MapEnd,  //图片路径
            //焦点在图片中的像素位置，一般大头针类似形式的图片以针尖位置做为焦点，圆形点以圆心位置为焦点
            "anchor": { x: 22, y: 38 }  
          }) 
        },
        geometries: [
          {
            "id": "1",   //点标记唯一标识，后续如果有删除、修改位置等操作，都需要此id
            "styleId": 'mapStart',  //指定样式id
            "position": new TMap.LatLng(31.347880, 121.587203),  //点标记坐标位置
          },
          {
            "id": "2",   //点标记唯一标识，后续如果有删除、修改位置等操作，都需要此id
            "styleId": 'mapEnd',  //指定样式id
            "position": center,  //点标记坐标位置
          }
        ]
      })

      new TMap.MultiPolyline({
        id: 'polyline-layer', //图层唯一标识
        map: map,//设置折线图层显示到哪个地图实例中
        styles: {
          'roadBlue': new TMap.PolylineStyle({
            'color': '#58b67d', //线填充色
            'width': 6, //折线宽度
            'borderWidth': 2, //边线宽度
            'borderColor': '#3c7f57', //边线颜色
            'lineCap': 'round', //线端头方式
            // 'dashArray': [10, 10],
            'showArrow': true
          })
        },
        geometries: [
          {
            'id': 'pl_1',//折线唯一标识，删除时使用
            'styleId': 'roadBlue',//绑定样式名
            'paths': [
              new TMap.LatLng(31.347880, 121.587203),
              new TMap.LatLng(31.349910, 121.586643),
              new TMap.LatLng(31.349970, 121.586963),
              new TMap.LatLng(31.347510, 121.587683),
              new TMap.LatLng(31.348060, 121.588843),
              new TMap.LatLng(31.348446, 121.588833)
            ]
          },
        ]
      })
    })
  }
  handlerEnter(index) {
    this.setState({choiceActive: index});
  }
  render() {
    const { choiceData, choiceActive, coreData } = this.state;
    const { tel } = this.props.stands;
    const { normalName, fullName } = this.props.company;
    return (<div className='about-box'>
      <div className='about-choice'>
        <h1>选择我们</h1>
        <div className='choice-box'>
          {
            choiceData.map((item, index) => {
              return (
                <div key={index} className={choiceActive === index ? 'choice-item choice-active' : 'choice-item'} onMouseEnter={() => this.handlerEnter(index)}>
                  <h3>{item.title}</h3>
                  <div className='choice-text'>{item.text}</div>
                </div>
              );
            })
          }
        </div>
      </div>
      <div className='about-company'>
        <h1>{normalName}</h1>
        <div className='company-box'>
          <div className='company-map' ref={this.mapRef}></div>
          <div className='company-msg'>
            <div className='company-core'>
              {
                coreData.map((item, index) => {
                  return (
                    <div key={index} className='core-item'>
                      <h5>{item.name}</h5>
                      <div className='core-text'>{item.text}</div>
                    </div>
                  );
                })
              }
            </div>
            <div className='company-tips'>
              <div className='tips-item'>
                <div className='tips-image'>
                  <Image src={AboutCompany} auto={true}></Image>
                </div>
                <div className='tips-text'>{ fullName }</div>
              </div>
              <div className='tips-item'>
                <div className='tips-image'>
                  <Image src={AboutMobile} auto={true}></Image>
                </div>
                <div className='tips-text'>{tel}</div>
              </div>
              <div className='tips-item'>
                <div className='tips-image'>
                  <Image src={AboutHome} auto={true}></Image>
                </div>
                <div className='tips-text'>中国（上海）自由贸易试验区，马吉路28号东华金融大厦1206-1208室。<br/>地铁6号线外高桥保税区北站一号口出</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}