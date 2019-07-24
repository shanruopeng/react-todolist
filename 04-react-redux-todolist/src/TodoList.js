import { connect } from 'react-redux'
import TodoListUI from './TodoListUI'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'


const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
// store.dispatch('action', payload)
const mapDispatchToProps  = (dispatch) => {
  return {
    changeInputValue(e){
      const action = getInputChangeAction(e.target.value)
      dispatch(action)
    },
    handleClick(){
      const action =  getAddItemAction()
      dispatch(action)
    },
    handleDelete (index){
      const action = getDeleteItemAction(index)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListUI)