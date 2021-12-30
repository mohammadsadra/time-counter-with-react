import React from 'react'
import { useState } from 'react'
import Button from '../Buttons/Button'
import Buttonstyle from '../Buttons/ButtonStyle.module.css'

let isPause = false
let nIntervId
let isUp = true


function Timer() {
   
    const [seconds, setSeconds] = useState(0)
    let currentCount = seconds

    const stopTimer = () => {
        clearInterval(nIntervId)
        setSeconds(0)
        
        document.querySelector('.stop-button').setAttribute("disabled", "true")
        document.querySelector('.start-button').removeAttribute("disabled")
        document.querySelector('.start-button').innerText = "Start"
        
    }

    const startTimer = () => {
        
        if(document.querySelector('.start-button').innerHTML === 'Start') {
            isPause = false
            nIntervId = setInterval(() => {
                if(isUp) {
                    setSeconds(seconds => seconds + 1) 
                } else if(!isUp && currentCount > 0) {
                    setSeconds(seconds => seconds - 1) 
                    currentCount -= 1
                } else if(currentCount == 0) {
                    document.querySelector('.start-button').innerText = "Start"
                    isPause = true
                }
            }, 1000)
            
            document.querySelector('.start-button').innerText = "Pause"
            document.querySelector('.stop-button').removeAttribute("disabled")
            
        } else {
            isPause = true
            document.querySelector('.start-button').innerText = "Start"
            clearInterval(nIntervId)
        }

    }

    const setUpOrDown = () => {
        document.querySelector('.start-button').innerText = "Start"

        if (document.querySelector('.up-or-down-button').innerText === "Down counting") {
            document.querySelector('.up-or-down-button').innerText = "Up counting"
            isUp = false
            clearInterval(nIntervId)
            

        } else{
            document.querySelector('.up-or-down-button').innerText = "Down counting"
            isUp = true
            clearInterval(nIntervId)
            
        }
    }


    return (
        
        <div className="counter-container">
            <h3 id="counter">Counter: {currentCount}</h3>
            <Button text="Start" className={`start-button ${Buttonstyle.button}`} onClick={startTimer}></Button>
            <Button text="Stop" className={`stop-button ${Buttonstyle.button}`} onClick={stopTimer}></Button>
            <Button text="Down counting" className={`up-or-down-button ${Buttonstyle.button}`} onClick={setUpOrDown}></Button>
        </div>
    )
}

export default Timer