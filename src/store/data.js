import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	data: {},
}

const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		addData(state, action) {
			const newData = action.payload
			state.data = {
				flavour: newData.flavour,
				expirationDate: newData.expirationDate,
				message: newData.message,
				purchasePlace: newData.purchasePlace,
			}
		},
	},
})

export const dataActions = dataSlice.actions
export default dataSlice
