import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialUserState = {
    username: '',
    fullname: ''
};

const userSlice = createSlice({
    name: 'User',
    initialState: initialUserState,
    reducers: {
        userDetails : (state, action) => {
            state.username = action.payload.username;
            state.fullname = action.payload.fullname

            console.log("Inside Store")
            console.log(state.username)
            console.log(state.fullname)
            console.log(action.payload)
        }
    }
})



const store = configureStore({
    reducer: userSlice.reducer
})

export const userActions = userSlice.actions;

export const selectUser = (state) => state.user;

export default store
