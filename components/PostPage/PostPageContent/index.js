import React from 'react'

const PostPageContent = ({ html }) => {
    return (
        <div className='postPageContent'>
            <div className='text_content' dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
    )
}

export default PostPageContent