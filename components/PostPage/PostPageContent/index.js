import React from 'react'

const PostPageContent = ({ title, html }) => {
    return (
        <div className='postPageContent'>
            <h1>
                {title}
            </h1>
            <div className='text_content' dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
    )
}

export default PostPageContent