import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import globalReducer from "./reducers/globalReducer";
import cartReducer from "./reducers/cartReducer";
import authService from "./services/authService";

const Store = configureStore({
  reducer: {
    [authService.reducerPath]: authReducer.reducer,
    authReducer: authReducer,
    globalReducer: globalReducer,
    cartReducer,
  },
});

export default Store;
