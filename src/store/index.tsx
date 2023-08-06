import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { coursesApi } from "./api/coursesApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer: {
        [coursesApi.reducerPath]: coursesApi.reducer,
    },
    middleware: () => getDefaultMiddleware().concat(coursesApi.middleware),
});

setupListeners(store.dispatch);

export { useFetchCoursesQuery } from "./api/coursesApi";
