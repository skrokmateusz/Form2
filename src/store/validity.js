import { createSlice } from "@reduxjs/toolkit";

const initialState = { isNextStepButtonClicked: false, isSubmissionButtonClicked: false, isCorrectContent: false, isErrorShown: false }

const validitySlice = createSlice({
    name: 'val',
    initialState: initialState,
    reducers: {
        setDefaultValues(state) {
            state.isNextStepButtonClicked = false
            state.isSubmissionButtonClicked = false
            state.isCorrectContent = false
            state.isErrorShown = false
        },
        buttonNextStepIsClicked(state) {
            state.isNextStepButtonClicked = true
        },
        buttonNextStepIsNotClicked(state) {
            state.isNextStepButtonClicked = false
        },
        buttonSubmissionIsClicked(state) {
            state.isSubmissionButtonClicked = true
        },
        buttonSubmissionIsNotClicked(state) {
            state.isSubmissionButtonClicked = false
        },
        contentIsCorrect(state) {
            state.isCorrectContent = true
        },
        contentIsNotCorrect(state) {
            state.isCorrectContent = false
        },
        errorIsShown(state) {
            state.isErrorShown = true
        },
        errorIsNotShown(state) {
            state.isErrorShown = false
        }
    }
})

export const valActions = validitySlice.actions
export default validitySlice