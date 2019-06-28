import {reducer as headerReducer} from '../common/Header/store';
import {combineReducers} from 'redux-immutable';
import  {reducer as homeReducer}  from '../pages/home/store';
import  {reducer as detailReducer}  from '../pages/details/store';
import  {reducer as loginReducer}  from '../pages/login/store';

const reducer= combineReducers({
    header:headerReducer,
    home:homeReducer,
    details:detailReducer,
    login:loginReducer

});
export default reducer;