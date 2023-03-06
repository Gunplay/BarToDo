import './input-todo.css'
import CreateMenuButtons from '../create-menu-buttons/createMenuButtons'

const InputToDo = ({ text, setText, addTodo }) => {
  const onSubmitHandler = (e) => {
    e.preventDefault()

    if (text) {
      addTodo(text)
    }

    setText('')
    console.log(e.target)
  }
  return (
    <div class="input-container">
      <form onSubmit={onSubmitHandler}>
        <label className="input-field">Input Field:</label>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          id="input-field"
          type="text"
          placeholder="Enter your input here..."
        ></input>
        <div className="menuCreateBtn">
          {/* <CreateMenuButtons name="Delete"></CreateMenuButtons> */}
          <CreateMenuButtons title="AddToDO" name="+"></CreateMenuButtons>
          {/* <CreateMenuButtons name="User"></CreateMenuButtons> */}
        </div>
      </form>
    </div>
  )
}

export default InputToDo
