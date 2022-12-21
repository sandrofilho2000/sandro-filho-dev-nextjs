/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FaEye } from 'react-icons/fa'
import moment from "moment";
import 'moment/locale/pt-br'
import Link from 'next/link';


const Post = ({item}) => {
    moment.locale('pt-br')
    return (
        <Link key={item.id} href={'/posts/' + item.slug} className="post">
            <img src={item.coverPhoto.url}
                title={item.title}
                alt={item.title} />
            <div className="text_content">
                <div className="text blog_headline">{item.title}</div>
                <div className="authorDate">

                    <span>
                        por: <span className='author'>Sandro Filho</span>
                    </span>

                    
                    |
                    <span>
                        {moment(item.datePublished).format("MMM D")}
                    </span>

                    <div className='views'>
                        <FaEye />
                        <span className='views_span'>
                            : 123
                        </span>
                    </div>

                </div>
            </div>
        </Link>

    )
}

export default Post