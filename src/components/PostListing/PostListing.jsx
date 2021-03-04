import React from 'react'
import PostTags from '../PostTags/PostTags'
import PostTime from '../PostTime/PostTime'
import { Link } from 'gatsby'

import './PostListing.scss'

function PostListing({ postEdges }) {
  const postList = []

  postEdges.forEach((postEdge) => {
    postList.push({
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.fields.date,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead
    })
  })

  return postList.map((post) => (
    <li key={post.title}>
      <article>
        <PostTime timeIs={post.date} datetime={post.date}></PostTime>

        <Link to={post.path}>
          <h1 className="post-header">{post.title}</h1>
        </Link>

        <>
          <PostTags tags={post.tags} />
        </>

        <div className="post-excerpt">{post.excerpt}</div>
      </article>
      <hr />
    </li>
  ))
}

export default PostListing
