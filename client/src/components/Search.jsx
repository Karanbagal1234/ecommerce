import React from 'react'

const Search = (props) => {
    const {className, func, placeholder} = props
  return (
    <input type="text" className placeholder onClick={func}/>
  )
}

export default Search