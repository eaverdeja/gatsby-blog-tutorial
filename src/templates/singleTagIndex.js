import React from 'react'
import { Link } from 'gatsby'

const SingleTagTemplate = ({ pageContext }) => {
    const { posts, tagName } = pageContext
    console.log(posts)
    return (
        <div style={{ fontFamily: 'avenir' }}>
            <div>Posts about {tagName}</div>
            <div>
                <ul>
                    {posts.map((post, index) => (
                        <li key={index}>
                            <Link to={post.frontmatter.path}>
                                {post.frontmatter.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

//export const query = graphql``

export default SingleTagTemplate
