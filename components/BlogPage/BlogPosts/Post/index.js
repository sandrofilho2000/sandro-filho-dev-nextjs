/* eslint-disable @next/next/no-img-element */
import React from 'react'
import moment from "moment";
import 'moment/locale/pt-br'
import Link from 'next/link';
import Tilt from 'react-parallax-tilt'


export const Post = ({ item }) => {

    const tiltOptions = {
        perspective: 500,
        glareEnable: true,
        glareMaxOpacity: .2,
        scale: 1,
        max: 1,
        tiltMaxAngleX: 1,
        tiltMaxAngleY: 1,
        glarePosition: "all",
    }

    moment.locale('pt-br')
    return (
        <Tilt className="Tilt"
            {...tiltOptions}
        >
            <Link href={'/' + item.slug} className="post">
                <img src={item.coverPhoto.url}
                    title={item.title}
                    alt={item.title} />
                <div className="text_wrapper">
                    <div className="text blog_headline" title={item.title}>{item.title}</div>
                    <div className="authorDateContent">


                        <div className='authorDate'>
                            <span>
                                por: <span className='author'>{item.author.name}</span>
                            </span>
                            |
                            <span>
                                {moment(item.datePublished).format("MMM D")}
                            </span>
                        </div>
                        

                        <div className='text_content' dangerouslySetInnerHTML={{ __html: item.content.html }}></div>


                    </div>
                </div>
            </Link>

        </Tilt>

    )
}
