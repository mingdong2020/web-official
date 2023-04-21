/* 常量挂载到props */
export const stands = {
  tel: '400-888-7899'
};
export const companySite = window.location.href.includes('nuotang.cn');
export const company = {
  simpleName: companySite ?  '诺唐' : '明动',
  normalName: companySite ? '诺唐咨询' : '明动咨询',
  fullName: companySite ?  '诺唐投资咨询（上海）有限公司' : '明动企业管理（上海）有限公司',
};