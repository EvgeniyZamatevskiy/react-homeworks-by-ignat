import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppStoreType } from '../h10/bll/store'
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect'
import { changeThemeAC } from './bll/themeReducer'
import s from './HW12.module.css'

export type ThemesType = 'dark' | 'red' | 'some'

const themes: Array<ThemesType> = ['dark', 'red', 'some']

function HW12() {

    const theme = useSelector<AppStoreType, ThemesType>((state) => state.themeData.theme)
    const dispatch = useDispatch()

    const onChangeOption = (theme: ThemesType) => {
        dispatch(changeThemeAC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr />
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect
                onChangeOption={onChangeOption}
                options={themes}
            />
            <hr />
        </div>
    )
}

export default HW12
