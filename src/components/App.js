import React,{useState} from "react";
import "./../styles/App.css";
import Items from "./Items";

function App() 
{
	const [input,setInput] = useState("");
	const [todolist,setTodolist] = useState([]);

	const handleInput = (e) =>{
		let text = e.target.value;
		setInput(text);
	}
	const addTasks = () =>{
		let list = {
			id: Date.now(),
			todo: input,
		}
		setTodolist(todolist.concat(list));
		setInput("");
	}
	
	const handleChangeInList = (id,newText) =>{
		let tasks = todolist.map((elem)=> {
			if(elem.id == id){
				elem.todo = newText;
				return elem;
			}
			return elem;
		});
		setTodolist(tasks);
	}

	const handleDelete = (id) =>{
		let tasks = todolist.filter((elem)=> elem.id !== id);
		setTodolist(tasks);
	}

	return (
	<div id="main">
	{/* //Do not alter main div */}
	{/* //Please do not alter the functional component as tests depend on the type of component. */}
		<textarea type="text" onChange={handleInput} value={input} name="task" id="task" cols="20" rows="3"></textarea>
		
		<button id="btn" onClick={addTasks}>Add task</button>
		<ul>
			{todolist ? todolist.map((item)=>{
				return(
					<Items key={item.id} item={item} handleChangeInList={handleChangeInList} handleDelete={handleDelete}/>
				)
			}):""}
		</ul>
	</div>
	);
}


export default App;
