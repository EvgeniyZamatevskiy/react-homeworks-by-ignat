import { ThemesType } from "../HW12"

export type InitStateType = {
    theme: ThemesType
}

type ChangeThemeActionType = {
    type: 'CHANGE-THEME',
    theme: ThemesType
}

type ThemeReducerActionsType = ReturnType<typeof changeThemeAC>

const initState: InitStateType = {
    theme: 'dark'
}

export const themeReducer = (state: InitStateType = initState, action: ThemeReducerActionsType): InitStateType => {
    switch (action.type) {
        case 'CHANGE-THEME': {
            return { ...state, theme: action.theme }
        }

        default:
            return state
    }
}

export const changeThemeAC = (theme: ThemesType): ChangeThemeActionType => {
    return {
        type: 'CHANGE-THEME',
        theme: theme
    }
}