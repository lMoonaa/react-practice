import React,{PureComponent} from 'react';
import {RecommenWrapper,RecommenItem} from '../style';
import {connect} from 'react-redux';

class Recommen extends PureComponent{

    render(){
        return (
          <RecommenWrapper>
              {
                  this.props.list.map((item)=>{
                      return <RecommenItem imgUrl={item.get('imgUrl')} key={item.get('id')}  />
                      
                  })
              }
             
              
          </RecommenWrapper>
        ) 
        
    }
    componentDidMount(){
        console.log(this.props.recommenList)
    }
}
const mapState=(state)=>({
list:state.getIn(['home','recommenList'])
})

export default connect(mapState,null) (Recommen);