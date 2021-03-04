import React from 'react'
import Moment from 'react-moment'

import './PostTime.scss'

function PostTime({ timeIs }) {
  return (
    <time className="post-time">
      {<Moment format="MMM D YYYY">{timeIs}</Moment>}
    </time>
  )
}

export default PostTime
