import React, { ChangeEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => {

    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const totalUsers = users.length

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        setError('')
    }

    const addUser = () => {
        if (name.trim() !== '') {
            addUserCallback(name)
            alert(`Hello ${name}!`)
            setName('')
        } else {
            setError('Error!!!')
        }
    }

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
