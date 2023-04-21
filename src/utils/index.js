import store from '../store/index';

/* 常用公共方法挂载到props */
const customForm = () => {
  store.dispatch({
    type: 'SET_RESERVE',
    reserve: true
  })
}

export { customForm };