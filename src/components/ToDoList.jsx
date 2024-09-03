import { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            isEditing ? updateTask() : setTasks((t) => [...t, newTask]);
            setNewTask("");  
        }
    }

    function showTask() {
        return (
            <ol>
                {tasks.map((task, idx) => (
                    <li key={idx}>
                        <span className="text">{task}</span>
                        {button(idx)} 
                    </li>
                ))}
            </ol>
        );
    }

    function button(index) {
        return (
            <>
                <button
                    className="edit-button"
                    onClick={() => editTask(index)}
                >
                    <i class="fa-regular fa-pen-to-square"></i>
                </button>

                <button
                    className="delete-button"
                    onClick={() => deleteTask(index)}
                >
                    <i class="fa-solid fa-trash-can"></i>
                </button>

                <button
                    className="move-button"
                    onClick={() => moveTaskUp(index)}
                >
                    <i class="fa-solid fa-arrow-up"></i>
                </button>

                <button
                    className="move-button"
                    onClick={() => moveTaskDown(index)}
                >
                    <i class="fa-solid fa-arrow-down"></i>
                </button>
            </>
        );
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [
                updatedTasks[index - 1],
                updatedTasks[index],
            ];

            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [
                updatedTasks[index + 1],
                updatedTasks[index],
            ];

            setTasks(updatedTasks);
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, idx) => idx !== index);
        setTasks(updatedTasks);
    }

    function editTask(index) {
        const taskToEdit = tasks[index];
        setNewTask(taskToEdit);
        setIsEditing(true);
        setCurrentTaskIndex(index);
    }

    function updateTask() {
        const updatedTasks = [...tasks];
        updatedTasks[currentTaskIndex] = newTask;
        setTasks(updatedTasks);
        setIsEditing(false);
        setCurrentTaskIndex(null);
    }

    function resetTasks() {
        setTasks([]);
    }

    function taskCompleted(){

    }

    function archiveTask(){
        
    }

    return (
        <div className="to-do-list"> 
            <h1>To-Do List</h1>

            <div>
                <input
                    type="text"
                    placeholder="Enter a Task..."
                    value={newTask}
                    onChange={handleInputChange}
                />

                <button className="add-button" onClick={addTask}>
                    {isEditing ? "Done" : "Add"}
                </button>
            </div>

            {showTask()}

            <button className="reset-button" onClick={resetTasks}> Reset </button>
        </div>
    );
}

export default ToDoList;
