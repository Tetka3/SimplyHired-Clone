import "./post.scss";
import me from "../../assets/me.png";
import bell from "../../assets/bell.jpg";
import message from "../../assets/message.png";
import business from "../../assets/business.png";
import { Link } from "react-router-dom";



const Post = ({ setPost }) => {

    
      

  return (
    <div className="post">
        <div className="top">
            <img src={me} alt="me" />
            <input type="text" placeholder="Start a post" onClick={() => setPost(true)} />
        </div>
        <div className="bottom">
            <Link to="/notifications" style={{textDecoration: 'none'}}><div className="media">
                <img src={bell} alt="logo" />
                <p>Media</p>
            </div></Link>
            <Link to="/notifications" style={{textDecoration: 'none'}}><div className="event">
                <img src={message} alt="logo" />
                <p>Event</p>
            </div></Link>
            <Link to="/notifications" style={{textDecoration: 'none'}}><div className="article">
                <img src={business} alt="logo" />
                <p>Write article</p>
            </div></Link>
        </div>        
    </div>
  )
}

export default Post