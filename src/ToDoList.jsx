import React, { useState } from 'react'

function ToDoList() {

    const [tasks, setTasks] = useState(["Drink Coffee", "Shaving", "Take a shower", "Go to the College"]);
    const [newTask, setNewTask] = useState("");

    function handleChanges(event) {
        setNewTask(event.target.value);
    }
    function addTask() {
        if (newTask.trim() != "") {
            setTasks(task => [...task, newTask]);
            setNewTask("");
        } else { alert("Task field is Empty!") }

    }
    function handleKeyPress(e) {
        if (e.key === "Enter") {
            addTask()
        }
    }
    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks)

    }
    function moveUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }
    function moveDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }


    return (
        <div className='todolist'>
            <h1>To-Do List</h1>

            <div className='d-flex'>
                <input type="text" placeholder='Enter New Task...' value={newTask} onKeyDown={(e) => (e.key === "Enter" ? addTask() : null)} onChange={handleChanges} />
                <button className='add' onClick={addTask}>ADD</button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li className='d-flex justify-content-between' key={index}>
                        <span className="text">{task}</span>
                        <div>
                            <button className='done'
                                onClick={() => deleteTask(index)}>
                                Done
                            </button>
                            <button className='edit'
                                onClick={() => editTask(index)}>
                                🖋️
                            </button>
                            <button className='moveUp'
                                onClick={() => moveUp(index)}>
                                ☝🏻
                            </button>
                            <button className='moveDown'
                                onClick={() => moveDown(index)}>
                                👇🏼
                            </button>
                        </div>
                    </li>
                )}
            </ol>

        </div>
    )

}
export default ToDoList