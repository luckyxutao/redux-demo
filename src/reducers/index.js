import { combineReducers} from 'redux';
import user from './userReducer';
import topics from './topicsReducer'
export default {
    user,
    topics
}