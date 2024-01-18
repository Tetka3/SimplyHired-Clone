import "./profile.scss";
import me from "../../assets/me.png";
import network from "../../assets/networks.jpg";
import jobs from "../../assets/jobs.png";

const Profile = () => {
  return (
    <div className="profile">
        <div className="first">
            <div className="top">
                <img src={me} alt="profile"/>
            </div>
            <div className="bottom">
                <p>Welcome, Titus!</p>
                <li>Add a photo</li>
            </div>
        </div>
        <div className="second">
            <p>Connections <br/><b>Grow your network</b></p>
            <img src={network} alt="profile"/>
        </div>
        <div className="third">
            <p>Strenthen your profile with an AI writing assistant</p>
            <li>Try Premium for $0</li>
        </div>
        <div className="fourth">
        <img src={jobs} alt="profile"/>
        <p>My items</p>
        </div>
    </div>
  )
}

export default Profile