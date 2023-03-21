import {
  Bookmarks,
  Chat,
  Event,
  Group,
  Help,
  PlayCircleFilled,
  RssFeed,
  School,
  Work,
} from "@mui/icons-material";
import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilled className="sidebarIcon" />
            <span className="sidebarItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmarks className="sidebarIcon" />
            <span className="sidebarItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <Help className="sidebarIcon" />
            <span className="sidebarItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <Work className="sidebarIcon" />
            <span className="sidebarItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendsList">
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/10.jpeg"
            />
            <span className="sidebarFriendName">Sarvesh Chandnani</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/10.jpeg"
            />
            <span className="sidebarFriendName">Sarvesh Chandnani</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/10.jpeg"
            />
            <span className="sidebarFriendName">Sarvesh Chandnani</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/10.jpeg"
            />
            <span className="sidebarFriendName">Sarvesh Chandnani</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/10.jpeg"
            />
            <span className="sidebarFriendName">Sarvesh Chandnani</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/10.jpeg"
            />
            <span className="sidebarFriendName">Sarvesh Chandnani</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/10.jpeg"
            />
            <span className="sidebarFriendName">Sarvesh Chandnani</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/10.jpeg"
            />
            <span className="sidebarFriendName">Sarvesh Chandnani</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/10.jpeg"
            />
            <span className="sidebarFriendName">Sarvesh Chandnani</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/10.jpeg"
            />
            <span className="sidebarFriendName">Sarvesh Chandnani</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/10.jpeg"
            />
            <span className="sidebarFriendName">Sarvesh Chandnani</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/10.jpeg"
            />
            <span className="sidebarFriendName">Sarvesh Chandnani</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/10.jpeg"
            />
            <span className="sidebarFriendName">Sarvesh Chandnani</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/10.jpeg"
            />
            <span className="sidebarFriendName">Sarvesh Chandnani</span>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
