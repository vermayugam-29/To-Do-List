import React, { useState } from 'react'
import '../components/Input.css'
import Card from './Card'
import toast from 'react-hot-toast';

const Input = ({ lists, setLists }) => {
    const [task, setTask] = useState('');

    const changeHandler = (e) => {
        setTask(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (task === '') {
            toast.error("Please enter a valid task");
            return;
        }
        const newTask = { id: lists.length, task: task };
        setLists(prev => [...prev, newTask]);
        setTask('');
    }

    return (
        <div className='container'>
            <form className='form' onSubmit={submitHandler}>
                <input className='inputBox' value={task} onChange={changeHandler} type="text" />
                <button className='btn' type='submit'>Enter</button>
            </form>

            <div className='innerContainer'>
                {lists.map((list, index) => (
                    <Card index={index} key={list.id} list={list} lists={lists} setLists={setLists} />
                ))}
            </div>
        </div>
    )
}

export default Input
