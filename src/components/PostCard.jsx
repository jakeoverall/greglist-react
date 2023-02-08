/* eslint-disable react/prop-types */
import React from 'react';
import './PostCard.scss';

// eslint-disable-next-line react/prop-types
export default function PostCard({ post }) {

  const hasImage = (post.imgUrl ? <img className="post-image rounded-top" src={post.imgUrl} alt="" /> : null)


  return (

    <div className="PostCard card p-0">
      {hasImage}
      <div className="card-body">
        <p>
          {post.body}
        </p>
      </div>
    </div>
  )

}


/**
 * 
 * {
  "_id": "63d05197c19e5ea56d477b85",
  "body": "Good luck juniors! LT Fall 2022 Rules",
  "imgUrl": "",
  "creatorId": "63925b1dabc8982f6134300f",
  "likeIds": [],
  "createdAt": "2023-01-24T21:45:59.896Z",
  "updatedAt": "2023-01-24T21:45:59.896Z",
  "__v": 0,
  "creator": {
    "_id": "63925b1dabc8982f6134300f",
    "subs": [
      "auth0|63925b1d4934078fe0069b75"
    ],
    "email": "derek@derek.dev",
    "name": "Derek Hearst!",
    "picture": "https://avatars.githubusercontent.com/u/12779264?v=4",
    "bio": "Wassup peeps boys :)\n",
    "coverImg": "https://images.unsplash.com/photo-1670779757037-6de9257f8e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "github": "https://github.com/derekhearst/",
    "linkedin": "https://www.linkedin.com/in/derekhearst/",
    "resume": "https://derekhearst.com",
    "class": "Late Fall 2027",
    "graduated": true,
    "createdAt": "2022-12-08T21:57:48.617Z",
    "updatedAt": "2022-12-12T17:28:32.433Z",
    "__v": 0,
    "id": "63925b1dabc8982f6134300f"
  },
  "likes": [],
  "id": "63d05197c19e5ea56d477b85"
}
 * 
 * 
 */
