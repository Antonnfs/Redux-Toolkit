import React, { FC } from 'react'
import { IPost } from '../models/IPost'

interface PostItemProps {
	post: IPost;
}

export const PostItem: FC<PostItemProps> = ({post}) => {
	return (
		<div className=' flex gap-5 m-5 p-2 border'>
			<div>
				<h1 className='my-2 text-black'>{post.id}. {post.title}</h1>
				<p>{post.body}</p>
			</div>
			<button  className='border px-3 py-2 bg-slate-300 self-center '>Delete</button>
		</div>
	)
}
