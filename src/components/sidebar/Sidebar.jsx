import "./sidebar.scss";
import Profile from "../../components/profile/Profile";
import Group from "../../components/group/Group";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Profile />
            <Group />           
            
        </div>
    )    
}

export default Sidebar