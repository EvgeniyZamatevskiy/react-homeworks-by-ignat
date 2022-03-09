import React from 'react'
import { AffairType } from './HW2'
import s from './Affair.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    const priorityClasses = [s.priority]
    props.affair.priority === 'middle' && priorityClasses.push(s.middle)
    props.affair.priority === 'high' && priorityClasses.push(s.high)
    props.affair.priority === 'low' && priorityClasses.push(s.low)

    return (
        <div className={s.affair}>

            <div className={s.content}>
                {props.affair.name}

                <div className={priorityClasses.join(' ')}>
                    [{props.affair.priority}]
                </div>

                <button onClick={deleteCallback}>X</button>

            </div>
        </div>
    )
}

export default Affair