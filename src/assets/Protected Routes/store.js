import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlices";

const store= configureStore({
    reducer: {
        userInfo:userReducer,
    },
});
export default store;