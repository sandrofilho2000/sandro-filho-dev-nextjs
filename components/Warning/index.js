import React, {useEffect, useRef} from 'react'

const Warning = () => {

    const warningRef = useRef()

    let close_warning = () => {
        warningRef.current.classList.remove("active")
        localStorage.setItem("warning_closed", true)
    }

    let open_warning = () => {
        if (localStorage.getItem("warning_closed") !== 'true') {
            warningRef.current.classList.add("active")
        }
    }

    useEffect(() => {
        setTimeout(() => {
            open_warning()
        }, 20000)
    }, []);


    return (
        <div ref={warningRef} className="warning">
            <div onClick={()=>{close_warning()}} className="close_warning">+</div>
        </div>
    )
}

export default Warning