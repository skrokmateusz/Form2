import { createSlice } from '@reduxjs/toolkit'

const initialState = { complainCart: false, questionCart: false, commentCart: false, submissionCart: false, resultCart: false, isBacked: false }

const navigationSlice = createSlice({
	name: 'nav',
	initialState: initialState,
	reducers: {
		navToHomePage(state) {
			state.complainCart = false
			state.questionCart = false
			state.commentCart = false
			state.submissionCart = false
			state.resultCart = false
		},
		navToComplainCart(state) {
			state.complainCart = true
		},
		navToQuestionCart(state) {
			state.questionCart = true
		},
		navToCommentCart(state) {
			state.commentCart = true
		},
		navToSubmissionCart(state) {
			state.submissionCart = true
		},
		navToPreviousCart(state) {
			state.submissionCart = false
			state.isBacked = true
		},
		navToResultCart(state) {
			state.resultCart = true
		},
		
	},
})

export const navActions = navigationSlice.actions
export default navigationSlice
