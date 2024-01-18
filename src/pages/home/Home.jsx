import PostCard from "../../components/postCard/PostCard";
import Feed from "../../components/feed/Feed";
import Navbar from "../../components/navbar/Navbar";
import RightBar from "../../components/rightBar/RightBar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import { useState } from "react";


const Home = () => {

    const [post, setPost] = useState(false); 

    return (
        <div className="home">
            {post && <PostCard setPost={setPost} />}
            <Navbar />
            <div className="body">
                <Sidebar />
                <Feed />
                <RightBar />
            </div>            
        </div>
    )    
}

export default Home