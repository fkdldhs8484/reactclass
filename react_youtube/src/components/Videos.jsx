import React from 'react'

import { VideoCard, Loader } from './'

const Videos = ({ videos, layout }) => {
  if (!videos?.length) return <Loader />

  return (
    <article className={`videos__inner ${layout}`}>
      {videos.map((item, idx) => (
        <VideoCard video={item} key={idx} />
      ))}
    </article>
  )
}

export default Videos
