import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { RiSearchLine } from 'react-icons/ri'

const SearchBar = () => {
  const [serachTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      handleSearch()
    }
  }

  const handleSearch = () => {
    if (serachTerm) {
      navigate(`/search/${serachTerm}`)

      setSearchTerm('') //쓰고난뒤 빈칸으로..
    }

    console.log('dd')
  }

  return (
    <div className="search" onKeyPress={onKeyPress}>
      <label className="glass" htmlFor="searchInput">
        <RiSearchLine />
      </label>
      <input
        type="text"
        id="searchInput"
        className="input__search"
        placeholder="유튜버를 검색하세요!"
        title="검색"
        value={serachTerm || ''} //빈칸으로 하면 에러떠서 씀
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
