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
        return {
          ...state,
          incomes: state.incomes.filter((income, index) => (index !== action.data.index)),
          totalInc: state.totalInc - parseInt(action.data.item.val, 10)
        }
      } else {
        return {
          ...state,
          expenses: state.expenses.filter((expense, index) => (index !== action.data.index)),
          totalExp: state.totalExp - parseInt(action.data.item.val, 10)
        }
      }
    }

    default:
      return state

  }
}
