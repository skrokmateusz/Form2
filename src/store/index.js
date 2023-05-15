import { configureStore } from '@reduxjs/toolkit'

import navigationSlice from './navigation'
import validitySlice from './validity'
import dataSlice from './data'
import submitSlice from './submit'


// const store = configureStore(myCartVisibleSlice.reducer)

const store = configureStore({
	reducer: { nav: navigationSlice.reducer, val: validitySlice.reducer, data: dataSlice.reducer, submit: submitSlice.reducer },
})

export default store
