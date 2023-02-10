import { observer } from 'mobx-react-lite';
import React from 'react';
import { AppState } from '../AppState.js';

function ProfileCard() {

  const profile = AppState.profile

  const socialIcons = (
    <div className='d-flex align-items-center gap-3 my-2 justify-content-center'>
      <a className={!profile.linkedin ? 'd-none' : 'btn btn-outline-dark'} href={profile.linkedIn} rel="noreferrer">
        <i className="mdi mdi-linkedin"></i>
      </a>
      <a className={!profile.github ? 'd-none' : 'btn btn-outline-dark'} href={profile.github} rel="noreferrer">
        <i className="mdi mdi-github"></i>
      </a>
      <a className={!profile.resume ? 'd-none' : 'btn btn-outline-dark'} href={profile.resume} rel="noreferrer">
        <i className="mdi mdi-card-account-details"></i>
      </a>
    </div>
  )

  return !profile ? (<div>loading...</div>) : (
    <div className='ProfileCard'>
      <div className='card'>
        <div className="card-body p-lg-5 text-center">
          <img src={profile.picture}
            alt={profile.name}
            className='rounded-circle profile-img'
            height="200" width={200} />
          <p className="display-6 my-2">{profile.name}</p>
          {socialIcons}
          <kbd>
            {profile.class} - {profile.graduated ? '🦧' : ''}
          </kbd>
        </div>
      </div>
    </div>
  )

}
export default observer(ProfileCard)