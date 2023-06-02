import { observer } from 'mobx-react-lite';
import React from 'react';
import { AppState } from '../AppState.js';
import { postsService } from '../services/PostsService.js';
import { BindEditable } from '../utils/FormHandler.js';
import Pop from '../utils/Pop.js';
function PostForm() {

  const editable = { body: '', imgUrl: '' }
  const bindEditable = BindEditable(editable)
  async function handleSubmit() {
    try {
      window.event.preventDefault()
      await postsService.createPost(editable)
    }
    catch (error) {
      Pop.error(error);
    }
  }

  if (!AppState.account) {
    return
  }

  return (
    <form className='card mt-3' onSubmit={handleSubmit} key={editable.id}>
      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="imgUrl" className="form-label">Image Url</label>
          <input type="url" defaultValue={editable.imgUrl} className="form-control" id="imgUrl" placeholder="imgUrl..." name="imgUrl" onChange={bindEditable} />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">body</label>
          <textarea name="body" defaultValue={editable.body} className="form-control" id="body" rows={3} onChange={bindEditable}></textarea>
        </div>
        <button type="submit" className="mt-2 btn btn-primary">Submit</button>
      </div>
    </form>
  )

}



export default observer(PostForm)