import React from 'react';
import {
  MainNav as Main,
  IndustryNav as Industry,
  ManageNav as Manage,
  RegistNav as Regist,
  FinanceNav as Finance,
  ApproveNav as Approve,
  AccountNav as Account,
  FiscalNav as Fiscal,
  AboutNav as About,
} from './navigate';

const router = [
  {
    path: '/',
    component: () => <Main/>,
  },
  {
    path: '/main/industry',
    component: () => <Industry/>,
  },
  {
    path: '/main/manage',
    component: () => <Manage/>,
  },
  {
    path: '/regist',
    component: () => <Regist/>,
  },
  {
    path: '/finance',
    component: () => <Finance/>,
  },
  {
    path: '/approve/:cate/:caid',
    component: () => <Approve/>,
  },
  {
    path: '/account/:acid?',
    component: () => <Account/>,
  },
  {
    path: '/fiscal',
    component: () => <Fiscal/>,
  },
  {
    path: '/about',
    component: () => <About/>,
  },
];
export default router;