import { createSlice } from "@reduxjs/toolkit";

const initialState = {  
    id: "",
    name: "",
    email: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            const { id, name, email } = action.payload;
            state.id = id;
            state.name = name;
            state.email = email;
        },
        logout: (state) => {
            state.id = "";
            state.name = "";
            state.email = "";
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;