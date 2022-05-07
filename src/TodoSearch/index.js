import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

// class Componente extends React.Component{
//   constructor(){
//     this.state ={
//       patito: 'algo'
//     };
//   }

//   render(){
//     return(
//       <div
//         onClick={() => this.setState('Enrique')}
//       >
//         {this.state.patito}
//       </div>
//     )
//   }
// }

function TodoSearch() {

  const {searchValue, setSearchValue} = React.useContext(TodoContext)

  const onSearchValueSearch = (event) =>{
    console.log(event.target.value);
    setSearchValue(event.target.value)
  };

  return (
    <>
    <input 
    className="TodoSearch" 
    placeholder="Get a coffe" 
    value={searchValue}
    onChange={onSearchValueSearch}
    />
    
    </>
  );
}

export { TodoSearch };
