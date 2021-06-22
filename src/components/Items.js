
import React,{useState} from 'react'

export default function Items(props) {
    const {item,handleChangeInList,handleDelete} = props;
    const [isEdit,setIsedit] =  useState(false);
    const [newText,setNewtext] = useState("");
    
    const newInputChange=(e)=>{
        setNewtext(e.target.value);
    }
    return (
        <div >
            <li className="list">{item.todo}</li>
            <button className="edit" onClick={()=>setIsedit(!isEdit)}>Edit</button>
            <button onClick={()=>handleDelete(item.id)} className="delete">Delete</button>
            {isEdit?
            <div>
                <textarea onChange={newInputChange} className="editTask" type="text" cols="10" rows="3"></textarea>
                <button className="saveTask" onClick={()=>handleChangeInList(item.id,newText)}>Save</button>
            </div>:""}
        </div>
    )
}
