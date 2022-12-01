import React, { useContext, useState } from 'react'
import { TodoContext } from '../../TodoContext';
import './TodoSearch.css'

const TodoSearch = () => {

  const {searchValue, setSearchValue} = useContext(TodoContext);
  
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <input 
      className='TodoSearch' 
      onChange={onSearchValueChange}
      value={searchValue}
      placeholder='Cebolla' />
  )
}

export {TodoSearch}