import { createSlice, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const initialUserState = {
    username: '',
    fullname: '',
    display: ''
};

const userSlice = createSlice({
    name: 'User',
    initialState: initialUserState,
    reducers: {
        userDetails : (state, action) => {
            state.username = action.payload['username'];
            state.fullname = action.payload['fullname']
            state.display = action.payload['display'];

            console.log("Inside Store")
            console.log(state.username)
            console.log(state.fullname)
            console.log(action.payload)
        }
    }
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, userSlice.reducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const userActions = userSlice.actions;

export const persistor = persistStore(store)

// export const selectUser = (state) => state.user;

export default store
