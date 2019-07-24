import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this); // 改变作用域，比单独写在下面节约一定的性能
  }

  render () {
    const { content , test } = this.props;
    return (
      <div onClick={this.handleClick}>{test}{content}</div>
    )
  }

  handleClick () {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
  
  // 当一个组件从父组件接收了参数，只要父组件的render函数被重新执行，子组件的这个生命周期函数就会被执行
  // 如果这个组件第一次存在于父组件中，不会执行
  // 如果这个组件之前已经存在于父组件中，才会执行
  componentWillReceiveProps () {
    console.log('child componentWillReceiveProps')
  }
  
  // 当组件即将被从这个页面中剔除的时候，会被执行
  componentWillUnmount(){
    console.log('child componentWillUnmount')
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired, // test 是string类型，是必须传递
  content:PropTypes.string,
  deleteItem:PropTypes.func,
  index: PropTypes.number,
  test2: PropTypes.arrayOf(PropTypes.number, PropTypes.string)
}

TodoItem.defaultProps = {
  test: 'hello world' // 设置属性的默认值
}
export default TodoItem;