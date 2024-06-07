import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import CustomAccordion from './CustomAccordion';

const Supplies = () => {
    const [item, setItem] = useState([]);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [open, setOpen] = useState(0);
    const [nestedOpen, setNestedOpen] = useState(0);
    const [results, setResults] = useState([]);
    const [searchSupply, setSearchSupply] = useState('');


    useEffect(() => {
        axios.get('http://localhost:4000/stores')
          .then(response => {
            setItem(response.data);
          })
           .catch(error => 
            console.error('Error fetching stores:', error));
          });
         
    const addSupply = () => {
        axios.post('http://localhost:4000/stores', {
            category,
            name,
            quantity: parseInt(quantity, 10)
        })
        .then(response => setItem([response.data, ...item]))
        .catch(error => console.error('Error adding supplies:', error));

        setCategory('');
        setName('');
        setQuantity('');
    };
    const deleteSupplies= (name) => {
      axios.delete(`http://localhost:4000/stores/${name}`)
          .then(() => setTodo(todo.filter(supply => supply.name !== name)))
          .catch(error => console.error('Error deleting supplies:', error));
  };

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    const handleNestedOpen = (value) => setNestedOpen(nestedOpen === value ? 0 : value);

    const handleFilter = (selectedCategory) => {
        const filteredItems= item.filter(supply=>
         supply.category.toLowerCase() === selectedCategory.toLowerCase()
        );
        setResults(filteredItems);
      };

      const handleSupplieSearch = async (e) => {
        e.preventDefault();
        const filteredItems = item.filter(supply =>
            supply.name.toLowerCase().includes(searchSupply.toLowerCase())

        );
        setResults(filteredItems);
    };
    
     

    return (
        <div className='grid grid-row-2 text-center justify-items-center mt-5'>
            <CustomAccordion
                id={1}
                title="Search"
                content={
                    <div>
                        <form onSubmit={handleSupplieSearch}>
                            <input 
                             placeholder='Search supply'
                             value={searchSupply}
                             onChange={e => setSearchSupply(e.target.value)}
                             className='justify-items-center text-center w-full rounded-full border-0 py-1.5 pl-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                             />
                            <button 
                            className='justify-items-center h-10 w-full text-center me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                            >Search</button>
                        </form>
                        <CustomAccordion
                            id={3}
                            title="Filter"
                            content={
                                <div>
                                    {['Fish', 'Dairy', 'Fruit', 'Vegetables', 'Meal'].map(category => (
                                        <button key={category} 
                                        onClick={() => handleFilter(category)}
                                            className='justify-items-center py-2.5 h-full w-96 text-center me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            }
                            open={nestedOpen}
                            handleOpen={handleNestedOpen}
                        />
                    </div>
                }
                open={open}
                handleOpen={handleOpen}
            />
                <div className='w-full h-full'>
                    <h3 className='text-center'>My storage</h3>
                    <Popup trigger={<div className='object-left  w-16 h-16'>
                        <button className='h-full object-left w-16 text-center me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
                         +</button>
                        </div>} modal nested>
                            {close => (
                                <div className='w-full h-96 grid'>
                                    <button className='absolute top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none' onClick={close}>x</button>
                                    <p className='text-cyan text-xl text-center'>Category :</p>
                                    <input className='justify-items-center w-full rounded-full border-0 py-1.5 pl-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                        value={category}
                                        onChange={e => setCategory(e.target.value)}
                                    />
                                    <p className='text-cyan text-xl text-center'>Name :</p>
                                    <input className='justify-items-center w-full rounded-full border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                    <p className='text-cyan text-xl text-center'>How many :</p>
                                    <input className='justify-items-center w-full rounded-full border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                        value={quantity}
                                        onChange={e => setQuantity(e.target.value)}
                                    />
                                    <br />
                                    <button className='justify-items-center mt-3 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                                        onClick={addSupply}>Add Supply</button>
                                </div>
                            )}
                        </Popup>
                        <ul className='items-center w-full h-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900'>
                            {results.map((item, index) => (
                                <li key={index}>
                                    <div className='grid grid-cols-5 gap-5 w-50 h-16 text-center mt-2 bg-sky-900 justify-center items-center text-gray-700 bg-white shadow-md rounded-xl bg-clip-border'>
                                        <div className='mt-2 bg-sky-900 justify-center items-center text-center text-gray-700 bg-white w-30 h-30 rounded-xl bg-clip-border'>
                                            {item.name}<br />
                                        </div>
                                        <div className='grid justify-items-center'>
                                            <button className='justify-items-center w-5 h-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
                                                -
                                            </button>
                                        </div>
                                        <div className='text-center w-30 h-30'>{item.quantity}</div>
                                        <div className='grid justify-items-center'>
                                            <button className='justify-items-center rounded-full w-5 h-5 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
                                                +
                                            </button>
                                        </div>
                                        <button 
                                            onClick={() => deleteSupplies(item.name)}
                                            className='mr-2 text-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
                                            Delete
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
        </div>
        
    )
}

export default Supplies;
