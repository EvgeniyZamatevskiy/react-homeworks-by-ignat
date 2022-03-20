import React from 'react'
import Message from './Message'

const messageData = {
    avatar: 'https://static.tildacdn.com/tild6130-3833-4461-a465-393034623039/noroot.png',
    name: 'Dimych',
    message: 'Samurai, welcome to IT-INCUBATOR!!',
    time: '18:00',
}

function HW1() {
    return (
        <div>
            <hr />
            homeworks 1
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <hr />
            {/*<AlternativeMessage/>*/}
            <hr />
        </div>
    )
}

export default HW1