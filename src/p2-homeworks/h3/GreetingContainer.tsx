import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [totalUsers, setTotalUsers] = useState<number>(0)

    const totalCount = () => users.length

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handlerKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        setError('')
        if (e.key === 'Enter') {
            addUser()
        }
    }

    const addUser = () => {
        if (name.trim() !== '') {
            addUserCallback(name)
            alert(`Hello ${name}!`)
            setTotalUsers(totalCount)
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
            handlerKeyPress={handlerKeyPress}
        />
    )
}

export default GreetingContainer
