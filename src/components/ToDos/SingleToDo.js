import React from 'react'

export default function SingleToDo(props) {
  return (
    <div className='singleToDo col-md-5 m-4'>
        <h3>{props.todo.name}</h3>
        {props.todo.done === true ?
            <p>{props.todo.done}</p> :
            <p>ToDo is not done.</p>
        }
        <a href={props.todo.url} target='_blank' rel='noreferrer' className='btn btn-info'>
            Visit {props.todo.linkText}
        </a>
    </div>
  )
}
