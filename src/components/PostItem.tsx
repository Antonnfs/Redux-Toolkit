import React, { FC } from 'react'
import { IPost } from '../models/IPost'

interface PostItemProps {
	post: IPost;
	remove: (post: IPost) => void;
	update: (post: IPost) => void;
}

export const PostItem: FC<PostItemProps> = ({post, remove, update}) => {
	const handleRemove = (event: React.MouseEvent) => {
		event.stopPropagation();
		remove(post)
	}
	const handleUpdate = (event: React.MouseEvent) => {
		const title = prompt('Type the updated title', 'It`s an updated default title') || 'Default title';
		update({...post, title})
	}
	return ( 
		<div onClick={handleUpdate} className=' flex justify-between gap-5 m-5 p-2 border'>
			<div>
				<h1 className='my-2 text-black'>{post.id}. {post.title}</h1>
				<p>{post.body}</p>
			</div>
			<button onClick={handleRemove} className='border px-3 py-2 bg-slate-300 self-center '>Delete</button>
		</div>
	)
}
