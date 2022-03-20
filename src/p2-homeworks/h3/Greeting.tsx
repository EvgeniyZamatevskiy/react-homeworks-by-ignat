import React, { ChangeEvent } from 'react'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    error: string
    totalUsers: number
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
}

const Greeting: React.FC<GreetingPropsType> = ({ name, setNameCallback, addUser, error, totalUsers }) => {
    return (
        <div className={s.greeting}>
            <div>
                <SuperInputText error={error} value={name} onChange={setNameCallback} onEnter={addUser} />
            </div>
            <SuperButton onClick={addUser}>+</SuperButton>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting