/* eslint-disable react/prop-types */
import React from 'react';
import { AppState } from '../AppState.js';
import { postsService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';
import './PostCard.scss';

// eslint-disable-next-line react/prop-types
export default function PostCard({ post }) {

  async function likePost() {
    try {
      await postsService.likePost(post)
    }
    catch (error) {
      Pop.error(error);
    }
  }


  const hasImage = (post.imgUrl ? <img className="post-image" src={post.imgUrl} alt="" /> : null)

  const hasLiked = post.likeIds.includes(AppState.account?.id)


  return (

    <div className="PostCard card p-0">
      <div className="d-flex px-2 align-items-center justify-content-between">
        <div className='p-2 d-flex gap-3 align-items-center'>
          <img src={post.creator.picture} alt="" height={42} width={42} className="rounded-circle" />
          <p className="mb-0">{post.creator.name}</p>
        </div>
        <div>

          <small>{new Date(post.createdAt).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}</small>

        </div>
      </div>
      {hasImage}
      <div className="card-body">
        <p>
          {post.body}
        </p>
        <div className='text-end'>
          <span className='selectable rounded'>
            {
              hasLiked
              ? <span onClick={likePost}>💖</span>
              : <span onClick={likePost}>💟</span>
            }
          </span>
          <span>{post.likeIds.length}</span>

        </div>
      </div>
    </div>
  )

}


