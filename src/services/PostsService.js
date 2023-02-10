import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";

class PostsService {
  async likePost(post) {
    if (!AppState.account) {
      throw new Error('Na bro, you gotta login first')
    }
    const res = await api.post('api/posts/' + post.id + '/like')
    const i = AppState.posts.findIndex(p => p.id == post.id)
    AppState.posts.splice(i, 1, res.data)
  }

  async getPosts(url = 'api/posts') {
    const res = await api.get(url)
    const posts = res.data.posts
    const newer = res.data.newer
    const older = res.data.older
    AppState.posts = posts
    AppState.newer = newer
    AppState.older = older
  }

  async getProfile(id) {
    AppState.profile = null
    const res = await api.get('api/profiles/' + id)
    AppState.profile = res.data
  }


  async getProfileContent(id) {
    // eslint-disable-next-line no-undef
    await Promise.allSettled([
      this.getProfile(id),
      this.getPosts('api/posts?creatorId=' + id)
    ])
  }


}

export const postsService = new PostsService()