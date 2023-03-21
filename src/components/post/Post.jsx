 import { MoreVert } from '@mui/icons-material'
import React from 'react'
import "./post.css"
import { Users } from '../../dummyData'
import { useState } from 'react'

const Post = ({post}) => {

  const [like , setLike] = new useState(post.like);
  const [isLiked , setIsLiked] = new useState(false);
    
const likeHandler = ()=>{
  setLike(isLiked? like-1 : like+1)
  setIsLiked(!isLiked)
}
  
  return (
    <div className='post'>
      <div className='postWrapper'>
       <div className='postTop'>
       <div className='postTopLeft'>
        <img className='postProfile' src={Users.filter((u) => u.id === post.userId)[0].profilePicture} />
        <span className='postName'>
         {Users.filter((u) => u.id === post.userId)[0].username}

        </span>
        <span className='extraInf'>Posted {post.date}</span>
        </div>
        <div className='postTopRight'>
           <MoreVert/> 
        </div>
       </div>
       <div className='postCenter'>
        <span className='caption'>{post?.desc} </span>
        <img alt='image' className='postImg' src={post.photo}/>
       </div>
       <div className='postBottom'>
        <div className='postBottomLeft'>
           <img alt='image' className='postLike' src='/assets/like.png' onClick={  likeHandler  }/>
            <img alt='image' className='postLike' src='/assets/heart.png' onClick={  likeHandler  }/>
            <span>{like} people like the photo</span>
        </div>
        <div className='postBottemRight'>
          <span className='postComment'>{post.comment} comments</span>
        </div>
       </div>

      </div>

    </div>
  )
}

export default Post