import { fetchBaseQuery,createApi } from "@reduxjs/toolkit/query";

interface TAuth {
    email: string;
    password: string;
}

interface TRegister{
    name: string;
    email: string;
    password: string;
}





export const authService = createApi({
    reducerPath: 'authapi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://myapiii.azurewebsites.net/api'}),
    endpoints: (builder) =>({

        // register user
        authRegister: builder.mutation<TRegister,Partial<TRegister>>({
            query: (user) => ({
                url: '/user/register',
                method: 'POST',
                body: user
            }),
        }),

        // login user
        authLogin: builder.mutation<TAuth,Partial<TAuth>>({
            query: (newUser) => ({
                url: '/user/login',
                method: 'POST',
                body: newUser
            }),
        }),

    })
})


// custom hooks
export const {
    useAuthRegisterMutation,
    useAuthLoginMutation
 } = authService;
