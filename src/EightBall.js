import React, {useState}from 'react'
const EightBall = ({answers}) =>{
    const [color, setColor] = useState('black')
    const [message, setMessage] = useState('Think of a question')
    const genRandom = () => Math.floor(Math.random()*answers.length)
    const chooseAnswer = answers[genRandom()]
    const changeInfo = () =>{
        setColor(chooseAnswer.color)
        setMessage(chooseAnswer.msg)
    }
    return (
        <div className="EightBall" style={{backgroundColor: color}} onClick={changeInfo}>
            <h3 className="EightBall-text" >{message}</h3>
        </div>
    )
}
export default EightBall;