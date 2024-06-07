import React, { useState, useEffect} from "react";
import axios from "axios";


const ShopList = () => {
    const [todo, setTodo] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        axios.get('http://localhost:4000/tasks')
            .then(response => setTodo(response.data))
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);
    
      const addTask = () => {
        axios.post('http://localhost:4000/tasks', {text: text })
            .then(response => setTodo([response.data, ...todo]))
            .catch(error => console.error('Error adding task:', error));
        setText('');
    };
    
    const deleteTask = (text) => {
        axios.delete(`http://localhost:4000/tasks/${text}`)
            .then(() => setTodo(todo.filter(task => task.text !== text)))
            .catch(error => console.error('Error deleting task:', error));
    };
    
    
    
    return (
        <div className='grid justify-items-center mt-5'>
        <div className='mt-2 bg-sky-900 justify-center items-center text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border'>
        <h1 className='mt-2 text-cyan text-2xl text-center font-bold mb-3'>Shopping List </h1>
          <div className='flex justify-center mt-2 min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700'>
            <input className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button className='py-2 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
             onClick={addTask}>Add Task</button>
            <ul>
                {todo.map(item => (
                    <li key={item._id} className='list-inside flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900'>
                        {item.text}
                        &nbsp; &nbsp;
                        <button  className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' 
                        onClick={() => deleteTask(item.text)}>Delete</button>
                    </li>
                ))}
            </ul>
            </div>
          </div>
        </div>
    );
}

export default ShopList;
