import React from 'react'
import { messagesDataTypes } from '../../types'
import Message from './Message'

const messageData: messagesDataTypes = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Jennifer',
    message: 'Welcome to IT-INCUBATOR!',
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
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr />
        </div>
    )
}

export default HW1
