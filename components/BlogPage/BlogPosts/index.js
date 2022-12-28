/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import PostList from './PostList'

const BlogPosts = (param) => {
    var posts = param.posts

    return (
        <section className='blogPosts'>
            <div className='postsWrapper'>
                <PostList posts={posts} postHorizontal={'horizontal'}/>
                <PostList posts={posts} postHorizontal={'horizontalResponsive'} title="Veja tambem" maxPosts={3} />
            </div>

        </section>
    )
}

export default BlogPosts