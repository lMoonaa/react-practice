import React,{Component} from 'react';
import {GlobalStyle} from './style.js';
import Header from './common/Header';
import {BrowserRouter,Route} from 'react-router-dom'
import {GlobalStyle2}from './statics/iconfont/iconfont';
import store from'./store/index';
import {Provider} from 'react-redux';
import Home from './pages/home';
import Details from './pages/details/loadable.js';
import Login from './pages/login';
import Write from './pages/write';
class App extends Component{
  render(){
  return (
    <Provider store={store}>
      <GlobalStyle2/>
     <GlobalStyle/>
     <BrowserRouter>
     <div>
     <Header></Header>
     <Route path='/' exact component={Home}></Route>
     <Route path='/details/:id' exact component={Details}></Route>
     {/* 异步组件details */}
     <Route path='/login' exact component={Login}></Route>
     <Route path='/write' exact component={Write}></Route>
     </div>
     </BrowserRouter>
    </Provider>
  );
}
}




export default App;
