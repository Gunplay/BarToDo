import './create-list-todo.css'

const CreateListToDo = ({ text, id, onDelete }) => {
  return (
    <li className="listToDO">
      <div className="listToDO-text">{text}</div>
      <button onClick={onDelete} type="button" className="listToDO-delete">
        x
      </button>
    </li>
  )
}

export default CreateListToDo

// function getRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// function App() {
//   return (
//     <div style={{ backgroundColor: getRandomColor(), height: "100vh" }}>
//       <h1>Рандомный цвет</h1>
//     </div>
//   );
// }

// export default App;
