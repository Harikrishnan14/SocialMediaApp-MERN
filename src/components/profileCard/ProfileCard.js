import React from 'react'
import './ProfileCard.css'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'

const ProfileCard = () => {
    return (
        <div className='ProfileCard'>
            <div className="profile-images">
                <img src={Cover} alt="" />
                <img src={Profile} alt="" />
            </div>
            <div className="profile-name">
                <span>John Doe</span>
                <span>Fullstack Developer</span>
            </div>
            <div className="follower-status">
                <hr />
                <div>
                    <div className="follow">
                        <span>6500</span>
                        <span>Followers</span>
                    </div>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>150</span>
                        <span>Following</span>
                    </div>
                </div>
                <hr />
            </div>
            <span>My Profile</span>
        </div>
    )
}

export default ProfileCard
