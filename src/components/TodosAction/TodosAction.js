import CreateMenuButtons from '../create-menu-buttons/createMenuButtons'
import './to-do-actions.css'
const ToDosActions = ({ deleteTodos }) => {
  return (
    <div className="ToDoActions">
      <button onClick={deleteTodos}>Delete All</button>
    </div>
  )
}

export default ToDosActions
