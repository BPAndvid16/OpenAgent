import React from 'react'
import Header from "../landscape/Header"
import Agent from "../landscape/Agent"
import Owner from "../landscape/Owner"
import Royal from "../landscape/RoyalState"
import './Land.css'

const Land = () => {
  return (
    <body>
        <header className='container' id='open'>
            <h1>Header</h1>
        </header>
        <main className='container' id='royal'>

            <div className='container-div'>
                <h1>Agent</h1>
            </div>

            <div className='container-div'>
                <h1>Owner</h1>
            </div>

        </main>

        <footer className='container' id='owner'>
                <h1>Royal</h1>
        </footer>

    </body>
  )
}

export default Land