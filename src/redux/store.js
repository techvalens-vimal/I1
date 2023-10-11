import {configureStore} from '@reduxjs/toolkit'

import WatchReducer from './watchSlice'

const store = configureStore({
    reducer : {
        timezone : WatchReducer
    }
});

export default store;