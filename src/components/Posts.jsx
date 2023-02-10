import { observer } from 'mobx-react-lite';
import React from 'react';
import { AppState } from '../AppState.js';
import { postsService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';
import PostCard from './PostCard.jsx';

function Posts() {

  async function go(url) {
    try {
      await postsService.getPosts(url)
    }
    catch (error) {
      Pop.error(error);
    }
  }

  const posts = AppState.posts.map(p => {
    return (
      <div className="col-md-8 my-3 m-auto" key={p.id}>
        <PostCard post={p} />
      </div>
    )
  })

  const olderPostsAvailable = AppState.older ? (
    <button className='btn btn-primary' onClick={go.bind(null, AppState.older)}>
      Older
    </button>
  ) : null


  return (

    <div className="PostsPage container">
      <div className="row">
        {posts}
      </div>
      <div className="row pb-2 sticky-bottom">
        <div className='col-6 text-start'>
          <button className='btn btn-primary' disabled={!AppState.newer} onClick={go.bind(null, AppState.newer)}>
            Newer
          </button>
        </div>
        <div className='col-6 text-end'>
          {olderPostsAvailable}
        </div>
      </div>


    </div>
  )

}

export default observer(Posts)