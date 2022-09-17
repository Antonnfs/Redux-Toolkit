import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../models/IUser'

export const userAPI = createApi({
	reducerPath: 'userAPI',
	baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
	endpoints: (build) => ({
		fetchAllUsers: build.query({
			query: () => ({
				url: '/users'
			})
		})
	}),
})