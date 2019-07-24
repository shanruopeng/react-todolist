import React, { Component } from 'react'


class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this); // 改变作用域，比单独写在下面节约一定的性能
  }

  render () {
    const { content } = this.props;
    return (
      <div onClick={this.handleClick}>{content}</div>
    )
  }

  handleClick () {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
}

export default TodoItem;