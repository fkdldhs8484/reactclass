import React from 'react'

import { SearchBar } from './'

import { AiFillYoutube } from 'react-icons/ai'

const HeaderCont = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <AiFillYoutube className="iocn" /> Dev Youtube
      </h1>
      <SearchBar />
    </header>
  )
}

export default HeaderCont
