

import { configureStore } from "@reduxjs/toolkit";
import myans from "./CounterSlice"

const store=configureStore({
    reducer:{
        mycounter:myans
    }
})
export default store;