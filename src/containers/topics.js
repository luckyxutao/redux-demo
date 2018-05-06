import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as topicsActionCreators from '../actions/topics';


// @connect((state, ownProps)=>{
//     return { user : state.user };
// })
class Topics extends PureComponent {
    componentDidMount(){
        this.props.getTopics();
    }
    render() {
        const {topics,user} = this.props;
        if(Array.isArray(topics.list)){
            return <div>
                <div>{user.name}</div>
                <ul>
                    {
                        topics.list.map((v,i)=>{
                            return <li key={i}>{v.name}</li>
                        })
                    }
                </ul>
            </div>
        } else {
            return <div>LOADING...</div>
        }

    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.user, topics : state.topics };
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators(topicsActionCreators, dispatch);
}
const Comp = connect(mapStateToProps, mapDispatchToProps)(Topics);
export default Comp;
