import React from 'react'
import { Post } from '../Post'

const PostList = ({ posts, postHorizontal, maxPosts, title }) => {
    maxPosts ? posts = posts.slice(0, Number(maxPosts)) : posts

    return (
        <div className='postList'>
            {title &&
                <p className='postListTitle'>{title}</p>
            }
            {posts.map((item, index) => {

                if (!item.main_post) {
                    return (
                        <div key={index} className="item_list">
                            <Post postHorizontal={postHorizontal} item={item} />
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default PostList