import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import '../components/Card.css';
import { TiTick } from "react-icons/ti";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const Card = ({ index, lists, list, setLists }) => {
    const [currTask, setCurrTask] = useState(list.task);
    const [edit, setEdit] = useState(false);
    const [star,setStar] = useState(false);

    const deleteHandler = () => {
        setLists(prev => prev.filter(task => task.id !== list.id));
    }

    const upHandler = () => {
        if (index === 0) return;
        const newList = [...lists];
        const temp = newList[index];
        newList[index] = newList[index - 1];
        newList[index - 1] = temp;
        setLists(newList);
    }

    const downHandler = () => {
        if (index === lists.length - 1) return;
        const newList = [...lists];
        const temp = newList[index];
        newList[index] = newList[index + 1];
        newList[index + 1] = temp;
        setLists(newList);
    }

    const editHandler = () => {
        if (edit) {
            const newList = [...lists];
            newList[index].task = currTask;
            setLists(newList);
        }
        setEdit(!edit);
    }

    const changeHandler = (e) => {
        setCurrTask(e.target.value);
    } 


   

    return (
        <div className='cardsDiv'>
            <input className={`to-do-output ${edit ? 'editable' : 'read-only'}`} readOnly={!edit} type="text" onChange={changeHandler} value={currTask} />
            <button className='btns' onClick={deleteHandler}><MdDelete /></button>
            <button className='btns' onClick={upHandler}><IoIosArrowUp /></button>
            <button className='btns' onClick={downHandler}><IoIosArrowDown /></button>
            <button className='btns' onClick={editHandler}>
                {
                    edit ? <TiTick className="tick-icon" /> : <CiEdit />
                }
            </button>
        </div>
    )
}

export default Card;
