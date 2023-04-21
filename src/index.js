import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './store/index';
import router from './config/router';
import reportWebVitals from './reportWebVitals';
import Loading from './component/loading';
import './styles/index.scss';

console.log(process.env.REACT_APP_HOST, process.env.NODE_ENV, process.env.REACT_APP_ENV);

store.dispatch({
  type: 'SET_RESERVE',
  reserve: true
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Loading/>}>
        <BrowserRouter>
          <Switch>
            {router.map(({path, component: Component}, i) => {
              return (
                <Route key={i} exact path={path} component={() => <Component/>}></Route>
              );
            })}
          </Switch>
        </BrowserRouter>
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();