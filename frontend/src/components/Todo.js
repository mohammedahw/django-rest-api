import React from 'react'
import { useState } from 'react'
import { TodoForm } from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

export const Todo = ({todos, removeTodo, updateTodo}) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = (value) => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }
    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index) => (
        <div className={todo.completed ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id}>
                {todo.title}
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                onClick={() => removeTodo(todo.id)}
                className='delete-icon' />
                <TiEdit
                onClick={() => setEdit({id: todo.id, value: todo.text})}
                className='edit-icon' /> 
            </div>
        </div>
    ))
}
