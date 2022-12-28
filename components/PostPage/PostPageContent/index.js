import Link from 'next/link'
import React from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'

const PostPageContent = ({ html }) => {
    return (
        <div className='postPageContent'>
            <div className='text_content' dangerouslySetInnerHTML={{ __html: html }}></div>
            <Link className='backToBlog' href='../blog'>
                <FaArrowCircleLeft />
                <span>
                    Voltar ao Blog
                </span>
            </Link>
        </div>
    )
}

export default PostPageContent