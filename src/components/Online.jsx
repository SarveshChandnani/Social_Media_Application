import React from 'react'

const Online = ({user}) => {
  return (
    <li className="OnlineFriend">
             <div className="ListContainer">
               <img className="RightBarProfile" src={user.profilePicture}/>
               <span className="Online"></span>
               </div>
               <span className="OnlineFriendName">{user.username}</span>
               
             </li>
  )
}

export default Online