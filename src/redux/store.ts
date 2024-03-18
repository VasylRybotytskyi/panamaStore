import { configureStore } from "@reduxjs/toolkit";
import { sneakersApi } from "./services/sneakersApi";
// import orderSlice from "./slices/orderSlice";
import userSlice from "./slices/userSlice"; // Імпортуйте користувача
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// const persistedOrderReducer = persistReducer(persistConfig, orderSlice);
const persistedUserReducer = persistReducer(persistConfig, userSlice);

export const store = configureStore({
  reducer: {
    // order: persistedOrderReducer,
    user: persistedUserReducer,
    [sneakersApi.reducerPath]: sneakersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sneakersApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
