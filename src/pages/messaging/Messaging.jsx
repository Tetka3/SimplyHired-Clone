import Feed from "../../components/feed/Feed";
import Navbar from "../../components/navbar/Navbar";
import RightBar from "../../components/rightBar/RightBar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./messaging.scss";

const Messaging = () => {    

    return (
        <div className="messaging">            
            <Navbar />
            <div className="body">
                <Sidebar />
                <Feed />
                <RightBar />
            </div>            
        </div>
    )    
}

export default Messaging