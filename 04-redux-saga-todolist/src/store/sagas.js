import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreators'
import axios from 'axios'
// generator 函数
function* getInitList (){
  try {
    const res = yield axios.get('/api/todo')
    const action = initListAction(res.data)
    yield put(action)
  } catch (e) {
    console.log('err')
  }
}

function* mySaga () {
  yield takeEvery(GET_INIT_LIST, getInitList)
}

// 导出一个generator函数
export default mySaga;