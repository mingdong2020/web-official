import React from 'react';
import store from '../store/index';
import { customForm } from '../utils/index';
import { stands, company, companySite } from '../utils/stands';
import { useHistory, useLocation, useParams } from 'react-router-dom';
const Container = React.lazy(() => import('../component/container/index.js'));
const Main = React.lazy(() => import('../pages/main/index.js'));
const Industry = React.lazy(() => import('../pages/main/industry/index.js'));
const Manage = React.lazy(() => import('../pages/main/manage/index.js'));
const Regist = React.lazy(() => import('../pages/regist/index.js'));
const Finance = React.lazy(() => import('../pages/finance/index.js'));
const Approve = React.lazy(() => import('../pages/approve/index.js'));
const Account = React.lazy(() => import('../pages/account/index.js'));
const Fiscal = React.lazy(() => import('../pages/fiscal/index.js'));
const About = React.lazy(() => import('../pages/about/index.js'));

const NavProps = () => {
  const history = useHistory();
  const location = useLocation();
  const getParams = useParams();
  return {store, history, location, getParams, customForm, stands, company, companySite};
}

const NavMiddle = (props) => {
  const _props = NavProps();
  return <Container {..._props}>
    {props.children}
  </Container>
}

export function MainNav() {
  const props = NavProps();
  return <NavMiddle>
    <Main {...props}/>
  </NavMiddle> 
}
export function IndustryNav() {
  const props = NavProps();
  return <NavMiddle>
    <Industry {...props}/>
  </NavMiddle> 
}
export function ManageNav() {
  const props = NavProps();
  return <NavMiddle>
    <Manage {...props}/>
  </NavMiddle> 
}
export function RegistNav() {
  const props = NavProps();
  return <NavMiddle>
    <Regist {...props}/>
  </NavMiddle>
}
export function FinanceNav() {
  const props = NavProps();
  return <NavMiddle>
    <Finance {...props}/>
  </NavMiddle>
}
export function ApproveNav() {
  const props = NavProps();
  return <NavMiddle>
    <Approve {...props}/>
  </NavMiddle> 
}
export function AccountNav() {
  const props = NavProps();
  return <NavMiddle>
    <Account {...props}/>
  </NavMiddle> 
}
export function FiscalNav() {
  const props = NavProps();
  return <NavMiddle>
    <Fiscal {...props}/>
  </NavMiddle>
}
export function AboutNav() {
  const props = NavProps();
  return <NavMiddle>
    <About {...props}/>
  </NavMiddle>
}