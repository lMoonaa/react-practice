import React ,{Component} from 'react';
import 
{HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
    SearchWrapper
} from './style';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import{actionCreator} from './store';
import {Link} from 'react-router-dom';
import {actionCreators as loginActionCreators} from '../../pages/login/store'


class Header extends Component{
    getListArea(){
        const {focused,list,page,handleMouseEnter,handleMouseLeave,mouseIn,handleChangePage,totalPage}=this.props;
        const newList=lobbylist.toJS();//转化成普通数组
        const pageList=[];
        if(newList.length){
        for(let i=(page-1)*10;i<page*10;i++){
            pageList.push(
                <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
            )
        }
    }

        if(click){
    return(
    <SearchInfo onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>
        <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}
            > 
            <span className="iconfont spin" ref={(icon)=>{this.spinIcon=icon}}>&#xe617;</span>
                换一批
            </SearchInfoSwitch>
        </SearchInfoTitle>
        <div>
            <SearchInfoList>
           {pageList}
            </SearchInfoList>
        </div>
    </SearchInfo>
    )
        }else{
            return null
        }
    }
    render(){
        const{focused,handleInputFocus,handleInputBlur,list,login,logout}=this.props;
        return(
            <HeaderWrapper>
                <Link to='/'>
                     <Logo/>
                </Link>
                     <Nav>
                     <NavItem className='left active'>首页</NavItem>
                     <NavItem className='left'>下载App</NavItem>
                     {
                         login?<NavItem className='right' onClick={logout}>退出</NavItem>:
                         <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
                     }
                     
                     <NavItem className='right'>
                     <span className="iconfont">&#xe636;</span>
                     </NavItem>
                     <SearchWrapper>   
                         {/* <CSSTransition
                         in={focused}
                         timeout={500}
                         classNames="slide"
                         > */}
                      <NavSearch
                      className={focused?'focused':''}
                      onFocus={()=>handleInputFocus(list)}
                      onBlur={handleInputBlur}
                      ></NavSearch>
                      {/* </CSSTransition> */}
                      <span className={focused ?'focused iconfont zoom':'iconfont zoom'}>&#xe600;</span>
                      {this.getListArea()}
                     </SearchWrapper>
                     </Nav>
                     <Addition>
     
                        <Button className='Write'>
                            <Link to='/write'>
                            <span className="iconfont">&#xe645;</span>
                            写文章
                            </Link>
                            </Button>
                         <Button>注册</Button>
                     </Addition>
                 </HeaderWrapper>
     );
     
    }
}



const mapStateToProps =(state) =>{

    return{
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        mouseIn:state.getIn(['header','mouseIn']),
        totalPage:state.getIn(['header','totalPage']),
        login:state.getIn(['login','login'])
        
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        handleInputFocus(list){
          (list.size===0) && dispatch(actionCreator.getList());
            dispatch(actionCreator.searchFocus())
        },
        handleInputBlur(){
            dispatch(actionCreator.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreator.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreator.mouseLeave());
        },
        handleChangePage(page,totalPage,spin){
            let originAngle=spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle=parseInt(originAngle,10);
            }else{
                originAngle=0;
            }
            console.log(originAngle);
            spin.style.transform='rotate('+(originAngle+360)+'deg)';
            if(page < totalPage){
                dispatch(actionCreator.changePage(page+1))
            }else{
                dispatch(actionCreator.changePage(1))
            }
           
        },
        logout(){
            dispatch(loginActionCreators.logout())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);