import React from 'react'
import "./topbar.css"
import { Chat, Notifications, Person, Search } from '@mui/icons-material'
const Topbar = () => {
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <span className='logo'>FACE-BOOK</span>
      </div>
      <div className='topbarCenter'>
      <div className='SearchBar'>
        <Search />
        <input placeholder='Search for Friends' className='searchInput' />
        </div>
      </div>
      <div className='topbarRight'>
        <div className='topbarLinks'>
            <span className='topbarLink'>Homepage</span>
            <span className='topbarLink'>Timeline</span>
        </div>
        <div className='topbarIcons'>
            <div className='topbarIconItem'>
                <Person />
                <span className='topbarIconBadge'>1</span>
            </div>
            <div className='topbarIconItem'>
                <Chat/>
                <span className='topbarIconBadge'>5</span>
            </div>
            <div className='topbarIconItem'>
                <Notifications />
                <span className='topbarIconBadge'>3</span>
            </div>
        </div>
        <img src='/public/assets/person/1.jpeg'  className='profileImage'/>
      </div>

    </div>

  )
}

export default Topbar