import React, { useEffect, useRef } from 'react'
import { FaMusic, FaBackward, FaPause, FaPlay, FaForward } from 'react-icons/fa'
const RadioPlayer = () => {

    const setList = [

        {
            id: 0,
            index: 0,
            name: "Wait for you",
            artist: "Kurt Stewart",
            cover: "./assets/images/song_covers/wait for you.webp",
            path: "./assets/songs/Wait for you.mp3?v=10"
        },
        {
            id: 1,
            index: 1,
            name: "Ocean",
            artist: "Thaehan",
            cover: "./assets/images/song_covers/ocean.webp",
            path: "./assets/songs/Ocean.mp3?v=10"
        }
        ,
        {
            id: 2,
            index: 2,
            name: "Bikes at the pier",
            artist: "NOGYMX",
            cover: "./assets/images/song_covers/bikes at the pier.webp",
            path: "./assets/songs/Bikes at the pier.mp3?v=10"
        }
        ,
        {
            id: 3,
            index: 3,
            name: "Rainy",
            artist: "COSMONKEY",
            cover: "./assets/images/song_covers/rainy.webp",
            path: "./assets/songs/Rainy.mp3?v=10"
        }
        ,
        {
            id: 4,
            index: 4,
            name: "Homies",
            artist: "Ouska",
            cover: "./assets/images/song_covers/homies.webp",
            path: "./assets/songs/Homies.mp3?v=10"
        }
        ,
        {
            id: 5,
            index: 5,
            name: "Silhouette",
            artist: "ENRA & dr. niar",
            cover: "./assets/images/song_covers/silhouette.webp",
            path: "./assets/songs/Silhouette.mp3?v=10"
        }
        ,
        {
            id: 6,
            index: 6,
            name: "Beneath the trees",
            artist: "Mell-ø",
            cover: "./assets/images/song_covers/beneath the trees.webp",
            path: "./assets/songs/Beneath The Trees.mp3?v=10"
        }
        ,
        {
            id: 7,
            index: 7,
            name: "Flying away",
            artist: "Elijah Lee",
            cover: "./assets/images/song_covers/flying away.webp",
            path: "./assets/songs/Flying Away.mp3?v=10"
        }
        ,
        {
            id: 8,
            index: 8,
            name: "Fallen leaves",
            artist: "Hoogway",
            cover: "./assets/images/song_covers/fallen leaves.webp",
            path: "./assets/songs/Fallen leaves.mp3?v=10"
        }

        ,
        {
            id: 9,
            index: 9,
            name: "Memories together",
            artist: "Lemeria",
            cover: "./assets/images/song_covers/memories together.webp",
            path: "./assets/songs/Memories Together.mp3?v=10"
        }
        ,

        {
            id: 10,
            index: 10,
            name: "Memories",
            artist: "Yora",
            cover: "./assets/images/song_covers/memories.webp",
            path: "./assets/songs/Memories.mp3?v=10"
        }
        ,
        {
            id: 11,
            index: 11,
            name: "Giant leaves",
            artist: "T.stratt",
            cover: "./assets/images/song_covers/giant leaves.webp",
            path: "./assets/songs/Giant Leaves.mp3?v=10"
        }

    ]
    
    var radio_player = useRef(null)
    var radio_player_container = useRef(null)
    var radio_player_text_name = useRef(null)
    var radio_player_text_artist = useRef(null)
    var radio_player_img = useRef(null)
    var prev_song = useRef(null)
    var next_song = useRef(null)


    let getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    let update_radio_container = (obj) => {
        var song_name = obj.name
        var song_artist = obj.artist
        var song_cover = obj.cover

        radio_player_text_name.current.innerHTML = song_artist
        radio_player_text_artist.current.innerHTML = song_name
        radio_player_img.current.src = song_cover
    }

    let radio_play_init = () => {   
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }

        var playing_now_index = getRandomInt(setList.length - 1)
        var playing_now = setList[playing_now_index]
        var initial_vol = radio_player.current.getAttribute("initial-volume")

        radio_player.current.setAttribute("src", playing_now.path)
        radio_player.current.setAttribute("song_id", playing_now.id)
        radio_player.current.volume = initial_vol

        update_radio_container(playing_now)
    }

    let radio_player_pause = () => { 
        radio_player_container.current.classList.add("paused")
        radio_player_container.current.classList.remove("playing")
        var vol = 0.20;
        var initial_vol = radio_player.current.getAttribute("initial-volume")
        var interval = 40;
        radio_player.current.volume = vol >= initial_vol ? initial_vol : vol;
        var fadeout = setInterval(
            function () {
                if (vol > 0.1) {
                    vol -= 0.01;
                    radio_player.current.volume = vol;
                }
                else {
                    // Stop the setInterval when 0 is reached
                    clearInterval(fadeout);
                    radio_player.current.pause()
                }
            }, interval);
    }

    let radio_player_play = () => {
        radio_player_container.current.classList.remove("paused")
        radio_player_container.current.classList.add("playing")

        var vol = radio_player.current.volume
        var initial_vol = radio_player.current.getAttribute("initial-volume")
        var interval = 40;
        radio_player.current.volume = vol;

        radio_player.current.play()
        var fadeout = setInterval(
            function () {
                if (vol < initial_vol - 0.1) {
                    vol += 0.01;
                    radio_player.current.volume = vol;
                }
                else {
                    // Stop the setInterval when 0 is reached
                    clearInterval(fadeout);
                }
            }, interval);
    }
    
    let handle_radio_player_mouse_enters = () =>{
        if (!radio_player.current.paused) {
            radio_player_container.current.classList.add("playing")
        } else {
            radio_player_container.current.classList.add("not_playing")
        }
    }
    
    let handle_radio_player_mouse_leaves = () =>{
        if (!radio_player.current.paused) {
            radio_player_container.current.classList.add("playing")
        } else {
            radio_player_container.current.classList.add("not_playing")
        }
    }
    
    let handle_radio_player_click_init = () =>{
        var rd_container = radio_player_container.current
        console.log(rd_container)
        if (radio_player_container.current.classList.contains("not_playing")) {
            radio_player_container.current.classList.remove("not_playing")
            radio_player_play()
        }
    }


    let radio_play_next = () => {
        var playing_now = setList.filter((item) => {
            return item.id == radio_player.current.getAttribute("song_id")
        })

        var playing_now_index = playing_now[0].index
        var playing_next_index = playing_now_index + 1 >= setList.length ? 0 : playing_now_index + 1
        var playing_next = setList[playing_next_index]

        radio_player.current.setAttribute("src", playing_next.path)
        radio_player.current.setAttribute("song_id", playing_next.id)


        update_radio_container(playing_next)
        radio_player_container.current.classList.remove("paused")

        setTimeout(()=>{
            radio_player_play()
        }, 100)

    }

    let radio_play_ended = () => {
        radio_play_next()
        radio_player_container.current.classList.add("next_song")
        setTimeout(()=>{
            radio_player_container.current.classList.remove("next_song")
            radio_player_container.current.classList.add("playing")
        }, 10000)
    }

    let radio_play_prev = () => {
        var playing_now = setList.filter((item) => {
            return item.id == radio_player.current.getAttribute("song_id")
        })

        var playing_now_index = playing_now[0].index
        var playing_prev_index = playing_now_index - 1 < 0 ? setList.length - 1 : playing_now_index - 1
        var playing_prev = setList[playing_prev_index]

        radio_player.current.setAttribute("src", playing_prev.path)
        radio_player.current.setAttribute("song_id", playing_prev.id)

        radio_player_play()

        update_radio_container(playing_prev)
        radio_player_container.current.classList.remove("paused")
    }

    useEffect(()=>{
        radio_play_init()
    }, [])


    return (
        <div ref={radio_player_container} className="radio_container not_playing" onMouseLeave={()=>{handle_radio_player_mouse_leaves()}} onMouseEnter={()=>{handle_radio_player_mouse_enters()}} onClick={()=>{handle_radio_player_click_init()}}>

            <div className="playing_icon">
                <FaMusic/>
                <div className="music_waves">
                    <span className="stroke"></span>
                    <span className="stroke"></span>
                    <span className="stroke"></span>
                    <span className="stroke"></span>
                    <span className="stroke"></span>
                    <span className="stroke"></span>
                    <span className="stroke"></span>
                </div>
            </div>

            <div className="img_play_container">
                <div className="controls">
                    <div ref={prev_song} onClick={()=>{radio_play_prev()}} className="prev_song">
                        <FaBackward/>
                    </div>
                    <div onClick={()=>{}} className="play_pause">
                        <FaPlay className='fa-pause' onClick={()=>{radio_player_play()}}/>
                        <FaPause className='fa-play' onClick={()=>{radio_player_pause()}}/>
                    </div>
                    <div ref={next_song} onClick={()=>{radio_play_next()}} className="next_song">
                        <FaForward/>
                    </div>
                </div>
                <img ref={radio_player_img} height="70" width="70" alt="Banner da radio" title="Banner da radio"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcT0gfUfQFnyI5p8HCnWSbLHQhmy_cO80TxudY7E4ZtfoqI93Ky2Dx6FDvjoICrsBAj8&usqp=CAU"/>
            </div>

            <div className="radio_container_text">
                <p>
                    Agora na rádio
                </p>
                <div className="song_info">
                    <span ref={radio_player_text_artist} className="artist">
                    </span>
                    <div className="bullet"></div>
                    <span ref={radio_player_text_name} className="name">
                    </span>
                </div>
            </div>

            <audio ref={radio_player} style={{display: "none"}} onEnded={()=>{radio_play_ended()}} controls initial-volume='.4'>
                <source type="audio/mpeg"/>
            </audio>
        </div>
    )
}

export default RadioPlayer