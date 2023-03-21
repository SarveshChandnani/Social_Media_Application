import { EmojiEmotions, Label, LocationOn, PermMedia } from "@mui/icons-material";
import React from "react";
import "./share.css";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareTopImg" src="/assets/person/1.jpeg" />
          <input className="shareTopInput" placeholder="Whats In Your Mind....." />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText"> Photos or Video</span>
                </div>
                <div  className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText"> Tags</span>
                </div>
                <div className="shareOption">
                    <LocationOn htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText"> Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText"> Feelings</span>
                </div>
            </div>
            <button className="shareBottomButton" >Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
