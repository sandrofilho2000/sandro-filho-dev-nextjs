/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import MostReads from '../MostReads'
import { Post } from './Post'

const BlogPosts = (param) => {
    var posts = param.posts

    return (
        <section className='blogPosts'>
            <h2>
            </h2>
            <div className='postsWrapper'>
                <div className='postsList'>
                    {posts.map((item, index) => {

                        if (!item.main_post) {
                            return (
                            <div key={index} className="item_list">
                                <Post item={item}/>
                            </div>
                            )
                        }
                    })}
                </div>
                <MostReads posts={posts}/>
            </div>

        </section>
    )
}

export default BlogPosts