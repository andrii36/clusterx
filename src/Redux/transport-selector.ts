import { StateType } from './redux-store';
import { createSelector } from "reselect";

export const getTransportSelector = (state: StateType) => {
    return state.transport.transport
}
export const getMbiList = (state: StateType) => {
    return state.transport.mbiList
}