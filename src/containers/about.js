import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/user';
import { push } from 'react-router-redux';


// @connect((state, ownProps)=>{
//     return { user : state.user };
// })
class About extends PureComponent {
	render() {
        const { setUserAge, setUserName,dispatch } = this.props;
        console.log(this.props)
		return (
			<div className="page-about">
                <div onClick={() => { setUserName('taotao');}}>setName taotao</div>
                <div onClick={() => { setUserAge(25)}}>setAge25</div>
                <div onClick={() => { dispatch(push(`/topics`)) }}>查看tweetlist</div>
				<div className="content">
                    <div>姓名是2:{this.props.user.name}</div>
                    <div>age是:{this.props.user.age}</div>
                </div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
    return { user : state.user };
}
const mapDispatchToProps = ( dispatch,ownProps)=>{
    return {
        dispatch,
        setUserAge: (...args)=>{
            dispatch(actions.setUserAge(...args))
        },
        setUserName:(...args)=>{
            dispatch(actions.setUserName(...args));
        }
    }
}
const Comp = connect(mapStateToProps, mapDispatchToProps)(About);
export default Comp;
