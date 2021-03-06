import React,{Component} from 'react';
import {
    DetailWrapper,
    Header,
    Content
} from'./style';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {withRouter} from 'react-router-dom';
class Details extends Component{

    render(){
        // console.log(this.props.title);
        return (
        <DetailWrapper>
            <Header>              
                {this.props.title}
            </Header>
            <Content dangerouslySetInnerHTML={{__html:this.props.content}}/>
            </DetailWrapper>
            )
        
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
}
}

const mapState=(state)=>({
    title:state.getIn(['details','title']),
    content:state.getIn(['details','content'])
});

const mapDispatch=(dispatch) => ({
    getDetail(id){
        dispatch(actionCreators.getDetail(id));
    }
});

export default connect(mapState,mapDispatch)(withRouter(Details));