import React from "react";
import "./rightbar.css";
import Online from "../Online";
import { Users } from "../../dummyData";

const Rightbar = ({profile}) => {


  const HomeRightBar = () =>{
    return(
      <>
         <div className="BirthdayContainer">
       
       <img  className="giftImg" src="/assets/gift.png" alt=""/>
        <span className="BirthdayText">
         <b> Aman Paryani </b>  and <b>3 others</b> have their Bithday today.
        </span>
        


     </div>
        <img className="AdImage" src="/assets/ad.png"/>

        <div className="OnlineFriendsList">
          <h4>Online Friends</h4>
          <ul className="OnlineFriends">
             {Users.map((u) => (
              <Online key={u.id} user = {u}/>
             ))}
             
          </ul>
        </div>
      </>
    )
  }

  const ProfileRightBar = () =>{
    return(
      <>
        <h4 className="infoTitle">User Information</h4>
        <div className="info">
          <div className="infoItem">
            <span className="infoKey">City: </span>
            <span className="infoValue">Mumbai</span>
          </div>
          <div className="infoItem">
            <span className="infoKey">From: </span>
            <span className="infoValue">Amravati</span>
          </div>
          <div className="infoItem">
            <span className="infoKey">Relationship: </span>
            <span className="infoValue">Single</span>
          </div>
        </div>

        <h4 className="userFriendsTitle">User Friends</h4>
        <div className="userFriends">
          <div className="userFriend">
            <img className="userFriendImg " alt="" src="/assets/person/1.jpeg"/>
            <span className="userFriendName">Aman Paryani</span>
          </div>
          <div className="userFriend">
            <img className="userFriendImg " alt="" src="/assets/person/1.jpeg"/>
            <span className="userFriendName">Aman Paryani</span>
          </div>
          <div className="userFriend">
            <img className="userFriendImg " alt="" src="/assets/person/1.jpeg"/>
            <span className="userFriendName">Aman Paryani</span>
          </div>
          <div className="userFriend">
            <img className="userFriendImg " alt="" src="/assets/person/1.jpeg"/>
            <span className="userFriendName">Aman Paryani</span>
          </div>
          <div className="userFriend">
            <img className="userFriendImg " alt="" src="/assets/person/1.jpeg"/>
            <span className="userFriendName">Aman Paryani</span>
          </div>
          <div className="userFriend">
            <img className="userFriendImg " alt="" src="/assets/person/1.jpeg"/>
            <span className="userFriendName">Aman Paryani</span>
          </div>
        </div>

      </>
    )
  }





  return (
    <div className="rightbar">
      <div className="righbarWrapper">
       {profile? <ProfileRightBar />  : <HomeRightBar />}
      </div>
    </div>
  );
};

export default Rightbar;
