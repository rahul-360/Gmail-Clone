import { createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "appSlice",
    initialState: {
        open: false
    },
    reducers: {
        // actions
        setOpen: (state, action) => {
            state.open = action.payload;
        }
    }
});
export const { setOpen } = appSlice.actions;
export default appSlice.reducer;