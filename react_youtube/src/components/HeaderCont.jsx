import React from 'react'

import { SearchBar } from './'

import { Link } from 'react-router-dom'
import { AiFillYoutube } from 'react-icons/ai'

const HeaderCont = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <Link to="/">
          <AiFillYoutube className="iocn" /> Dev Youtube
        </Link>
      </h1>
      <SearchBar />
    </header>
  )
}

export default HeaderCont
