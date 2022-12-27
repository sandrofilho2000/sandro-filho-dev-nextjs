import React, { useContext } from 'react'
import AppContext from '../../AppContext'
import { Post } from '../BlogPosts/Post'

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
                    filteredPosts.map((item, index) => {
                        return (
                            <Post key={item.id} item={item} />
                        )
                    })
                }

            </main>
        </section>
    )
}

export default SearchPosts