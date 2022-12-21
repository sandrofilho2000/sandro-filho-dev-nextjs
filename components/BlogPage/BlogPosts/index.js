/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Post from './Post'

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
                                <>
                                    <Post item={item} index={index} />
                                </>
                            )
                        }
                    })}
                </div>
                <div className='mostReads'>
                    <p>Mais lidas</p>
                    <div className='mostReadsWrapper'>
                    {posts.map((item, index) => {

                            return (
                                <Link key={index} href={'/posts/' + item.slug} className="post">
                                    <img src={item.coverPhoto.url}
                                        title={item.title}
                                        alt={item.title} />
                                    <div className="text_content">
                                        <div className="text blog_headline">{item.title}</div>
                                        <div className='text_content' dangerouslySetInnerHTML={{ __html: item.content.html }}>
                                        </div>
                                    </div>
                                </Link>
                            )
                            
                        })}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default BlogPosts