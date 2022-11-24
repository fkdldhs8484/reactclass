import React from 'react'
import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { fetchAPI } from '../utils/fetchAPI'
import { Videos } from './'

const SearchConts = () => {
  const [videos, setVideos] = useState(null)
  const { serachTerm } = useParams()

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${serachTerm}`).then((data) =>
      setVideos(data.items)
    )
  }, [serachTerm])

  return (
    <>
      <div className="result">{serachTerm}를 검색하였습니다.</div>
      <div>
        <Videos videos={videos} />
      </div>
    </>
  )
}

export default SearchConts
