import React, { useEffect, useState } from 'react'
import { postAPI } from '../services/PostService'
import { PostItem } from './PostItem'

export default function PostContainer() {
	const [limit, setLimit] = useState(10)
	const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit, {
		// pollingInterval: 1000
	})
	
	
	return (
		<>
			<div className=' '>
				{!posts && isLoading && <h1 className='grid place-items-center h-screen text-center'>Loading...</h1>}
				{error && <h1 className='grid place-items-center h-screen text-center  text-red-400' >Error 404</h1>}
				{posts && posts.map(post => 
					<PostItem key={post.id} post={post}/>
				)}
			</div>
		</>
	)
}
