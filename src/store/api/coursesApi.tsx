import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const coursesApi = createApi({
    reducerPath: "courses",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
    endpoints: (builder: any) => ({
        //Define endpoint here to which I'm gonna make get request to fetch courses
        fetchCourses: builder.query({
            query: () => ({
                url: "/courses",
                method: "GET",
            }),
        }),
    }),
});

export const { useFetchCoursesQuery } = coursesApi;
export { coursesApi };
