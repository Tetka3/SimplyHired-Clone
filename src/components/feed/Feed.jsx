
import Post from "../post/Post";
import Premium from "../premium/Premium";
import Suggested from "../suggested/Suggested";
import "./feed.scss";
import { useState } from "react";

const Feed = () => {

  const [isOpen, setIsOpen] = useState(true);
  const [isSuggestedOpen, setIsSuggestedOpen] = useState(true);
  

  return (
    <div className="feed">
        {isOpen && <Premium setIsOpen={setIsOpen} />}
        <Post />
        {isSuggestedOpen && <Suggested setIsSuggestedOpen={setIsSuggestedOpen} />}
        

    </div>
  )
}

export default Feed