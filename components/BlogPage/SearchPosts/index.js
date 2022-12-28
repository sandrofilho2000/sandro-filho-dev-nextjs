import React, { useContext } from 'react'
import AppContext from '../../AppContext'
import { Post } from '../BlogPosts/Post'
import PostList from '../BlogPosts/PostList'

const SearchPosts = ({ posts, searchInput }) => {
    const context = useContext(AppContext)
    const filteredPosts = !!searchInput ? posts.filter(post => {
        let titleMatch = post.title.toLowerCase().includes(
            searchInput.toLowerCase()
        )
        return titleMatch
    })
        : posts

    let handleClosePost = (e) =>{
        if(e.target.closest(".post")){
            context.setPostSearchActiveContext(false)
        }
    }

    return (
        <section className='searchPosts'>
            <main onClick={(e)=>{handleClosePost(e)}} className='item_list'>

                {
                    filteredPosts.length == 0 ?
                    (
                        <h1>
                            Busca vazia...
                        </h1>
                    )
                    :
                    <PostList posts={filteredPosts} postHorizontal={'horizontal'}/>
                }

            </main>
        </section>
    )
}

export default SearchPosts