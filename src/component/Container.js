import React from 'react'
import "../App.css"
import Main from "./Main"
import Aside from "./Aside"

const Container = () => {
    return (
        <div className="Container">
            <Aside />
            <Main />
        </div>
    )
}

export default Container;