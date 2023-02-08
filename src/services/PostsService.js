import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";

class PostsService {
  async getPosts(url = 'api/posts') {
    const res = await api.get(url)
    const posts = res.data.posts
    const newer = res.data.newer
    const older = res.data.older
    AppState.posts = posts
    AppState.newer = newer
    AppState.older = older

  }
}

export const postsService = new PostsService()