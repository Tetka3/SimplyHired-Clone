import "./postCard.scss";
import Post from "../../components/post/Post";

const PostCard = ({ setPost }) => {
  return (
    <div className="postcard">
        <Post setPost={setPost} />
        <form>
            <label>Post</label>
            <input type="text" />
            <label>Body</label>
            <input type="text" />
        </form>
    </div>
  )
}

export default PostCard