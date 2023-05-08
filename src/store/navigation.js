import { createSlice } from '@reduxjs/toolkit'

const initialState = { complainCart: false, questionCart: false, commentCart: false, submissionCart: false }

const navigationSlice = createSlice({
	name: 'nav',
	initialState: initialState,
	reducers: {
		navToHomePage(state) {
			state.complainCart = false
			state.questionCart = false
			state.commentCart = false
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
		}
	},
})

export const navActions = navigationSlice.actions
export default navigationSlice
