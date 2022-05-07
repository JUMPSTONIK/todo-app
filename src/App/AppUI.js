import React from 'react'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

export const AppUI = () => {

    const {
        error, 
        loading, 
        todos,
        searchValue, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <>
        <TodoCounter/>
        <TodoSearch/>

        <TodoList>
        {loading  && <p>Loading, wait please...</p>}
        {error  && <p>A error occured</p>}
        {(!loading  && !todos.length) && <p>Create your first todo clicking on + button</p>}
        {todos.map(todo => ( 
        todo.text.toLowerCase().includes(searchValue.toLowerCase()) === true &&
        <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete ={() => completeTodo(todo.text)}
            onDelete ={() => deleteTodo(todo.text)}
        />
        ))}
        </TodoList>
        {!!openModal && (
        <Modal>
            <TodoForm/>
        </Modal> 
        )}

        <CreateTodoButton/>
        </>
    )
}
