import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage  from "redux-persist/lib/storage";
import authSlice  from "../services/slices/userSlice";
import { authService } from "../services/authService";


// persit auth config for auth
const persistAuthConfig = {
    key: "Auth",
    storage
}

// apply persistreducer to authslice
const persistAuthReducer = persistReducer(persistAuthConfig, authSlice);

export const Store = configureStore({
    reducer: {
        auth: persistAuthReducer,
        [authService.reducerPath]: authService.reducer,
    }, // Add your reducer here
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: true})
    .concat(authService.middleware)
});




// Infer the type of Store
export type AppStore = typeof Store
// Infer the `RootState` and `AppDispatch` types from the store itself
export const persistor = persistStore(Store);
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']