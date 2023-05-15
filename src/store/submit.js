import { createSlice } from "@reduxjs/toolkit";

const initialState = { isSubmitting: false, didSubmit: false }

const submitSlice = createSlice({
    name: 'submit',
    initialState,
    reducers: {
        setIsSubmitting(state) {
            state.isSubmitting = true
        },
        setIsNotSubmitting(state) {
            state.isSubmitting = false
        },
        setDidSubmit(state) {
            state.didSubmit = true
        },
        setDidNotSubmit(state) {
            state.didSubmit = false
        }
    }
})

export const submitActions = submitSlice.actions
export default submitSlice