import React from 'react';
import './TodoList.css'

function TodoList(props) {
  return (
    <section>
      <ul>
        {props.children}
        {/* {console.log(props.children.length)} */}
      </ul>
    </section>
  );
}

export { TodoList };
