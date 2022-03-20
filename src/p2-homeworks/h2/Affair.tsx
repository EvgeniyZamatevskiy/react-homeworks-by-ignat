import React from 'react'
import { AffairType } from './HW2'
import s from './Affair.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    const priorityClass = `${s.item} ${s[props.affair.priority]}`

    return (
        <div className={s.affair}>
            <div className={s.item}>{props.affair.name}</div>
            <div className={priorityClass}>[{props.affair.priority}]</div>
            <SuperButton onClick={deleteCallback}>X</SuperButton>
        </div>
    )
}

export default Affair