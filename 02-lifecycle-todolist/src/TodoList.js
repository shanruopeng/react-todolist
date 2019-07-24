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
   
  // 在组件即将被挂载到页面的时刻自动执行
  componentWillMount(){
    console.log( 'componentWillMount')
  }
  
  render () {
    console.log('render')
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容：</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.hanleInputChange}
            ref = { (input) => { this.input = input}} 
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
  
  // 组件被挂载到页面之后自动被执行
  componentDidMount () {
    console.log('componentDidMount')
  }
  
  // 组件更新之前会被自动执行
  shouldComponentUpdate () {
    console.log('shouldComponentUpdate')
    return true
  }

  // 组件更新之前，在shouldComponentUpdate返回true之后被执行
  componentWillUpdate () {
    console.log('componentWillUpdate')
  }

  // 组件更新完成之后，被执行
  componentDidUpdate () {
    console.log('componentDidUpdate')
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
    // const value = e.target.value
    const value = this.input.value
    this.setState(()=>{
      return {
        inputValue: value
      }
    })
    
  }

  hanleBtnClick () {
    this.setState((prevState)=>({
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
      }))
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