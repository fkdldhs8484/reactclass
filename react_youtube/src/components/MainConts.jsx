import React, { useEffect, useState } from 'react'

import { fetchAPI } from '../utils/fetchAPI'
import { Catrgory, Videos } from './'

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState('dog')
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=dog`).then((data) => console.log(data))
  }, [])

  return (
    <main id="main">
      <aside id="aside">
        <Catrgory
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </aside>
      <section id="contents">
        <h2>
          <em>{selectCategory}</em> 유튜버
        </h2>
        <Videos videos={videos} />
      </section>
    </main>
  )
}

export default MainConts
