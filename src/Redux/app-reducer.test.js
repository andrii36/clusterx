import appReducer from "./app-reducer"

describe('reducer works properly', () => {
    test('state should initialize', () => {
        let state = {initialized : false}
        let action = {type: 'INITIALIZE'}
        let newState = appReducer(state, action)
        expect(newState.initialized).toBe(true)
    })
})
    