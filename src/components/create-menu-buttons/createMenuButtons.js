import './menu-create-btn.css'

const CreateMenuButtons = ({ name, addTodoHandler }) => {
  return (
    <>
      <div className="menuCreateBtn">
        {/* <button type="button" className="btn btn-stop-wath">
          stop-wath
        </button> */}
        <button type="Sumbit" className="btn btn-add">
          {name}
        </button>
      </div>
    </>
  )
}

export default CreateMenuButtons
