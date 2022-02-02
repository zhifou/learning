import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./components/useSelector/reducer";

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});
