import React from 'react'
import Affair from './Affair'
import { AffairType, FilterType } from './HW2'
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

type AffairsPropsType = {
    data: Array<AffairType>
    filter: FilterType
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair key={a._id} affair={a} deleteAffairCallback={props.deleteAffairCallback} />
    ))

    const set = (filter: FilterType) => {
        props.setFilter(filter)
    }

    const cnAll = props.filter === 'all' ? s.active : ''
    const cnHigh = props.filter === 'high' ? s.active : ''
    const cnMiddle = props.filter === 'middle' ? s.active : ''
    const cnLow = props.filter === 'low' ? s.active : ''

    return (
        <div>
            {mappedAffairs}
            <SuperButton className={cnAll} onClick={() => set('all')}>All</SuperButton>
            <SuperButton className={cnHigh} onClick={() => set('high')}>High</SuperButton>
            <SuperButton className={cnMiddle} onClick={() => set('middle')}>Middle</SuperButton>
            <SuperButton className={cnLow} onClick={() => set('low')}>Low</SuperButton>
        </div>
    )
}

export default Affairs
