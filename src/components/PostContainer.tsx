import React, { useEffect, useState } from 'react'
import { IPost } from '../models/IPost'
import { postAPI } from '../services/PostService'
import { PostItem } from './PostItem'

export default function PostContainer() {
	const [limit, setLimit] = useState(100)
	const [createPost, {error: createError, isLoading: isCreateLoading}] = postAPI.useCreatePostMutation()
	const [updatePost, {error: updateError, isLoading: isUpdateLoading}] = postAPI.useUpdatePostMutation()
	const [deletePost, {error: deleteError, isLoading: isDeleteLoading}] = postAPI.useDeletePostMutation()
	const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit, {
		// pollingInterval: 1000
	})

	const handleCreate = async () => {
		const title = prompt('Type title of post', 'It`s a default title');
		const body = prompt('Type body of post', 'It`s a default body');
		await createPost({title, body} as IPost)
	}
	const handleUpdate = (post: IPost) => {
		updatePost(post)
	}
	const handleRemove = (post: IPost) => {
		deletePost(post)
	}
	return (
		<div className=' '>
				<div className='flex justify-between'>
					<button onClick={refetch}>Refetch posts</button>
					<button onClick={() => handleCreate()}>Add new post</button>
				</div>
				{!posts && isLoading && <h1 className='grid place-items-center h-screen text-center'>Loading...</h1>}
				{error && <h1 className='grid place-items-center h-screen text-center  text-red-400' >Error 404</h1>}
				{posts && posts.map(post => 
					<PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>
				)}
			</div>
	)
}
