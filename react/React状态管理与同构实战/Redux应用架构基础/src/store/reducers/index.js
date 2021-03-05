/**
 * @file reducer
 * @author zhaoyadong
 * @date 2019-02-14
 */

/* eslint-disable */
import {GET_PAGE_LIST} from "../actions/actionTypes";
import {createReducer} from '../lib/common';

let initState = {
	data: null
};

export default createReducer(initState, {
	[GET_PAGE_LIST]: (state, action) => {
		console.log(18, action.data);
		return {
			...state,
			data: action.data,
		}
	}
});
