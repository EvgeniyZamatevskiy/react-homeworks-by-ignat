import React, { ChangeEvent, KeyboardEvent } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    error: string
    totalUsers: number
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    handlerKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void
}

const Greeting: React.FC<GreetingPropsType> = (
    { name, setNameCallback, addUser, error, totalUsers, handlerKeyPress }
) => {

    const inputClass = error ? s.error : ''

    return (
        <div>
            <input className={inputClass} value={name} onChange={setNameCallback} onKeyPress={handlerKeyPress} />
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            {error && <div className={s.errorMessage}>{error}</div>}
        </div>
    )
}

export default Greeting