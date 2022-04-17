export type InitStateType = typeof initState

const initState = {
    isLoading: false
}

type LoadingReducerActionsType = ReturnType<typeof loadingAC>

export const loadingReducer = (state: InitStateType = initState, action: LoadingReducerActionsType): InitStateType => {
    switch (action.type) {
        case 'TOGGLE-IS-LOADING': {
            return { ...state, isLoading: action.payload.value }
        }

        default:
            return state
    }
}

export const loadingAC = (value: boolean) => {
    return {
        type: 'TOGGLE-IS-LOADING',
        payload: { value }
    } as const
}