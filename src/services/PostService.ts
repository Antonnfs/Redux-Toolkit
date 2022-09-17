import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost } from '../models/IPost'

export const postAPI = createApi({
	reducerPath: 'postAPI',
	baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
	endpoints: (build) => ({
		fetchAllPosts: build.query<IPost[], number>({
			query: (limit: number = 10) => ({
				url: '/posts',
				params: {
					_limit: limit,
				}
			})
		}),
		createPost: build.mutation<IPost, IPost>({
			query: (post) => ({
				url: '/posts',
				method: 'POST',
				body: post
			})
		})
	})
})