import React from 'react'
import { Post } from '../BlogPosts/Post'

const MostReads = ({posts}) => {
    return (
        <div className='mostReads'>
        <p>Mais lidas</p>
        <div className='mostReadsWrapper'>
        {posts.map((item, index) => {
                if(index < 3){
                    return (
                        <Post key={item.id} item={item} />
                    )
                }
                
            })}
        </div>
    </div>
    )
}

export default MostReads