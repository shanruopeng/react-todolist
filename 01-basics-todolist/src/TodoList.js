import React, { Component, Fragment } from 'react'
import './style.css'
import TodoItem from './TodoItem'

class TodoList extends Component {

  // 最优先执行的函数
  constructor(props) {
    super(props);
    // 定义数据，定义在状态里面
    this.state = {
      inputValue: '',
      list: []
    }

    this.hanleInputChange = this.hanleInputChange.bind(this);
    this.hanleBtnClick = this.hanleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render () {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容：</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.hanleInputChange}
          />
          <button onClick={this.hanleBtnClick}>提交</button>
        </div>
        <ul>
          {
            this.getTodoItem()
          }
        </ul>
      </Fragment>
    )
  }

  getTodoItem(){
    return this.state.list.map((item, index) => {
      return (
          <TodoItem
            key={index}
            content={item}
            index={index}
            deleteItem={this.handleItemDelete}
          />
      )
    })
  }

  hanleInputChange (e) {
    console.log(this)
    // this.state.inputValue = e.target.value;
    // 在react 中不能通过引用的形式去改变state的值
    // 需要调用setState方法
    // this.setState({
    //   inputValue: e.target.value
    // })
    const value = e.target.value
    this.setState(()=>{
      return {
        inputValue: value
      }
    })
  }

  hanleBtnClick () {
    this.setState((prevState)=>{
      return {
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
      }
    })
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
  }

  handleItemDelete (index) {
    console.log(index)
    // immutable - state 不允许我们做任何的改变
    this.setState((prevState)=>{
      const list = [...prevState.list]
      list.splice(index, 1)
      return {list}
    })
  }
}

export default TodoList;