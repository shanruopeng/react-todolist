import React from 'react'

const TodoListUI = (props) => {
  const { inputValue, list, changeInputValue, handleClick, handleDelete } = props
  return (
    <div>
      <input value={inputValue} onChange={changeInputValue} />
      <button onClick={handleClick}>提交</button>
      <ul>
        {
          list.map((item, index) => {
            return <li key={index} onClick={() => { handleDelete(index) }}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}
export default TodoListUI;