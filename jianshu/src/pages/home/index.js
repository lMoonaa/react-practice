import React,{PureComponent} from 'react';
import Topic from './components/Topic.js';
import Recommen from './components/Recommen';
import List from './components/List';
import Writer from './components/Writer';
import {actionCreators} from './store'
import {connect} from 'react-redux';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';

class Home extends PureComponent{

    handleScrollTop(){
        window.scrollTo(0,0);
    }

    render(){
        return <HomeWrapper>
                <HomeLeft>
                    <img  alt='' className='banner-img'src="https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <Topic/>
                    <List/> 
                </HomeLeft>
                <HomeRight>   
                    <Recommen/>
                    <Writer/>
                </HomeRight>
                {
                this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:null

            }
            </HomeWrapper>
        
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents()
}
componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changScrollTopShow)
}
bindEvents(){
    window.addEventListener('scroll',this.props.changScrollTopShow)
}
}
const mapState=(state)=>({
showScroll:state.getIn(['home','showScroll'])
})
const mapDispatch=(dispatch)=>({
    changeHomeData(){
    dispatch(actionCreators.getHomeInfo());
            },
    changScrollTopShow(){
        if(document.documentElement.scrollTop>100){
          dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
    }

        })
   



export default connect(mapState,mapDispatch)(Home);