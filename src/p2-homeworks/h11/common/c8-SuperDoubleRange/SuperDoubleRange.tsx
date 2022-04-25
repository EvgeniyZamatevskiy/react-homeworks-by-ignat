import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useCallback, useEffect, useRef } from 'react'
import s from './SuperDoubleRange.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType = Omit<DefaultInputPropsType, 'type'> & {
    onChangeOneRange?: (value: number) => void
    onChangeTwoRange?: (value: number) => void
    value1: number
    value2: number
    min: number
    max: number
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({ onChange, onChangeOneRange, onChangeTwoRange, value1, value2, min, max }) => {

    const minValRef = useRef(min)
    const maxValRef = useRef(max)
    const range = useRef<HTMLDivElement>(null)

    const getPercent = useCallback((value) => {
        return Math.round(((value - min) / (max - min)) * 100)
    }, [min, max])

    useEffect(() => {
        const minPercent = getPercent(value1)
        const maxPercent = getPercent(maxValRef.current)

        if (range.current) {
            range.current.style.left = `${minPercent}%`
            range.current.style.width = `${maxPercent - minPercent}%`
        }
    }, [value1, getPercent])

    useEffect(() => {
        const minPercent = getPercent(minValRef.current)
        const maxPercent = getPercent(value2)

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`
        }
    }, [value2, getPercent])

    const onChangeOneRangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)

        const value = Math.min(Number(e.currentTarget.value), value2 - 1)
        onChangeOneRange && onChangeOneRange(value)
        minValRef.current = value
    }

    const onChangeTwoRangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)

        const value = Math.max(Number(e.currentTarget.value), value1 + 1)
        onChangeTwoRange && onChangeTwoRange(value)
        maxValRef.current = value
    }

    return (
        <div className={s.superDoubleRange}>
            <input
                type="range"
                value={value1}
                min={min}
                max={max}
                onChange={onChangeOneRangeHandler}
                className={`${s.thumb} ${s.thumbLeft}`}
            />
            <input
                type="range"
                value={value2}
                min={min}
                max={max}
                onChange={onChangeTwoRangeHandler}
                className={`${s.thumb} ${s.thumbRight}`}
            />

            <div className={s.slider}>
                <div className={s.sliderTrack} />
                <div ref={range} className={s.sliderRange} />
                <div className={s.sliderLeftValue}>{value1}</div>
                <div className={s.sliderRightValue}>{value2}</div>
            </div>
        </div>
    )
}

export default SuperDoubleRange