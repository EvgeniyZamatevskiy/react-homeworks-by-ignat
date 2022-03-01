import React from 'react'
import { messagesDataTypes } from '../../types'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: messagesDataTypes['avatar']
    message: messagesDataTypes['message']
    name: messagesDataTypes['name']
    time: messagesDataTypes['time']
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.messageBlock}>
            <div className={s.image}>
                <img src={props.avatar} alt='avatar' />
            </div>
            <div className={s.items}>
                <div className={s.body}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.message}>{props.message}</div>
                </div>
                <div className={s.time}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message