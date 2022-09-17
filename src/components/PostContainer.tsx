import React, { useEffect, useState } from 'react'
import { IPost } from '../models/IPost'
import { postAPI } from '../services/PostService'
import { PostItem } from './PostItem'

export default function PostContainer() {
	const [limit, setLimit] = useState(100)
	const [createPost, {}] = postAPI.useCreatePostMutation()
	const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit, {
		// pollingInterval: 1000
	})
	const handleCreate = async () => {
		const title = prompt('Type title of post', 'It`s a default title');
		const body = prompt('Type body of post', 'It`s a default body');
		await createPost({title, body} as IPost)
	}
	
	return (
		<>
			<div className=' '>
				<button onClick={() => handleCreate()}>Add new post</button>
				{!posts && isLoading && <h1 className='grid place-items-center h-screen text-center'>Loading...</h1>}
				{error && <h1 className='grid place-items-center h-screen text-center  text-red-400' >Error 404</h1>}
				{posts && posts.map(post => 
					<PostItem key={post.id} post={post}/>
				)}
			</div>
		</>
	)
}
