import React from 'react'
import _ from 'lodash'
import { Link } from 'gatsby'

import HashIcon from '../Icon/Hash'
import TestingIcon from '../Icon/Testing'
import NodeIcon from '../Icon/Node'
import JavaScriptIcon from '../Icon/JavaScript'
import RegExpIcon from '../Icon/RegExp'

import './PostTags.scss'

function PostTags({ tags }) {
  const renderTagIcon = (tag) =>
    tag === 'BlogPost' ? (
      <HashIcon />
    ) : tag === 'Testing' ? (
      <TestingIcon />
    ) : tag === 'JavaScript' ? (
      <JavaScriptIcon />
    ) : tag === 'Node' ? (
      <NodeIcon />
    ) : tag === 'RegExp' ? (
      <RegExpIcon />
    ) : null

  return (
    <ul className="post-tags-list">
      {tags &&
        tags.map((tag) => (
          <a
            key={tag}
            className="post-tags-link"
            href={`/tags/${_.kebabCase(tag)}`}
          >
            <li className="post-tags-item">
              {renderTagIcon(tag)}
              <Link key={tag} to={`/tags/${_.kebabCase(tag)}`}>
                {tag}
              </Link>
            </li>
          </a>
        ))}
    </ul>
  )
}

export default PostTags
