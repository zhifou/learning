/**
 * @file 通用方法库
 * @author zhaoyadong
 * @date 2019-03-11
 */

export const createReducer = (initialState, handlers) => {
    return (state = initialState, action) => {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        }
        return state;
    };
};
