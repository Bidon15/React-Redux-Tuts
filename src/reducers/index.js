import { combineReducers } from 'redux';
import BudgetReducer from './budget_reducer';

const rootReducer = combineReducers({
  budget: BudgetReducer
});

export default rootReducer;
