import React, { Component, Fragment } from 'react'
import './style.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class App extends Component {

  // 最优先执行的函数
  constructor(props) {
    super(props);
    // 定义数据，定义在状态里面
    this.state = {
      list: []
    }

    this.handleAddItem = this.handleAddItem.bind(this);
  }

  render () {
    return (
      <Fragment>
        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  key={index}
                  timeout={1000}
                  classNames='fade'
                  onEntered={(el) => { el.style.color = 'blue' }}
                  appear={true}
                >
                  <div> {item}</div>
                </CSSTransition >
              )
            })
          }
        </TransitionGroup>
        <button onClick={this.handleAddItem}>add</button>
      </Fragment>
    )
  }

  handleAddItem () {
    this.setState((prevState)=>{
      return {
        list: [...prevState.list, 'item']
      }
    })
  }
}

export default App;