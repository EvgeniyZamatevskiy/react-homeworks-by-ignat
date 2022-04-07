import { PeopleType } from "../HW8"

type sortUpActionType = {
    type: 'sort'
    payload: 'up' | 'down'
}

type checkActionType = {
    type: 'check'
    payload: number
}

type PeopleReducerType = sortUpActionType | checkActionType

export const homeWorkReducer = (state: Array<PeopleType>, action: PeopleReducerType): Array<PeopleType> => {
    switch (action.type) {
        case 'sort': {
            return action.payload === 'up' ? [...state].sort((a, b) => a.name > b.name ? 1 : -1) : [...state].sort((a, b) => a.name < b.name ? 1 : -1)
        }
        case 'check': {
            return state.filter((s) => s.age >= action.payload)
        }
        default:
            return state
    }
}