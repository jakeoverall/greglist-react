import React, { useEffect } from 'react';
import Posts from '../components/Posts.jsx';
import { postsService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';

export default function PostsPage() {

  async function getPosts() {
    try {
      await postsService.getPosts()
    }
    catch (error) {
      Pop.error(error);
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (

    <div className="PostsPage">
      <Posts />
    </div>
  )

}
