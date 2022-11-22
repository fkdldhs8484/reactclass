import React, { useEffect, useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import ReactPlayer from 'react-player'
import { useParams, Link } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'

import { Videos, Loader } from './'

const VideoConts = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    fetchAPI(`videos?part=snippet, statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    )
    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    )
  }, [id])

  // 로딩소스 (꼭 넣어야 타이틀등이 나옴)
  if (!videoDetail?.snippet) return <Loader />

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail

  return (
    <section className="videoconts">
      <div className="container">
        <div className="left">
          <div className="play">
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} />
          </div>
          <div className="desc">
            <span className="title">{title}</span>
            <div className="channel">
              <Link to={`/channel/${channelId}`}>{channelTitle}</Link>
            </div>
            <div className="count">
              <span className="view">
                조회수 {videoDetail.statistics?.viewCount}회
              </span>
              <span className="like">
                <AiFillHeart />
                {videoDetail.statistics?.likeCount}
              </span>
            </div>
          </div>
        </div>
        <div className="right">
          <Videos videos={videos} layout="column" />
        </div>
      </div>
    </section>
  )
}

export default VideoConts
