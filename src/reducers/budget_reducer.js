import { ADD_ITEM } from '../actions/add-item';
import { DELETE_ITEM } from '../actions/delete-item';

const initialState = {
  totalInc: 0,
  totalExp: 0,
  incomes: [],
  expenses: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      console.log(action.data);
      if (action.data.type === 'inc') {
        return {
          ...state,
          incomes: [...state.incomes, action.data],
          totalInc: state.totalInc + parseInt(action.data.val, 10)
        }
      } else {
        return {
          ...state,
          expenses: [...state.expenses, action.data],
          totalExp: state.totalExp + parseInt(action.data.val, 10)
        }
      }
    }

    case DELETE_ITEM: {
      if (action.data.item.type === 'inc') {
        console.log(state.incomes);
        return {
          ...state,
          incomes: state.incomes.filter((income, index) => income !== action.data.item),
          totalInc: state.totalInc - parseInt(action.data.val, 10)
        }
      } else {
        return {
          ...state,
          expenses: state.expenses.filter((expense, index) => (expense !== action.data)&&(index !== action.data.index)),
          totalExp: state.totalExp - parseInt(action.data.val, 10)
        }
      }
    }

    default:
      return state

  }
}
