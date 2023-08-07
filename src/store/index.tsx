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

/* configureStore is a function provided by Redux Toolkit that simplifies the process of creating a Redux store. */

/* By using getDefaultMiddleware, I'm instructing Redux Toolkit to include the default middleware in your store configuration. This is a recommended approach because the default middleware
includes important functionality while abstracting away some of the complexity of configuring middleware manually. These middleware handle common tasks like dispatching actions, handling promises,
and providing a more ergonomic API for working with Redux. */
