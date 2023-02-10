import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppState } from '../AppState.js';
import Posts from '../components/Posts.jsx';
import ProfileCard from '../components/ProfileCard.jsx';
import { postsService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';

function ProfilePage() {

  const { id } = useParams()

  async function getProfileData() {
    try {
      await postsService.getProfileContent(id)
    }
    catch (error) {
      Pop.error(error);
    }
  }

  useEffect(() => {
    getProfileData()
  }, [id])

  if (!AppState.profile) {
    return (<div>loading...</div>)
  }



  return (

    <div className="ProfilePage">
      <div className="container">
        <div className="row mt-3">
          <div className="col-lg-8 m-auto">
            <ProfileCard />
          </div>
        </div>
      </div>
      <Posts />
    </div>
  )

}
export default observer(ProfilePage)