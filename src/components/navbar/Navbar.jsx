import "./navbar.scss";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import home from "../../assets/home.png";
import network from "../../assets/networks.jpg";
import jobs from "../../assets/jobs.png";
import message from "../../assets/message.png";
import bell from "../../assets/bell.jpg";
import me from "../../assets/me.png";
import business from "../../assets/business.png";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{textDecoration: 'none'}} ><div className="logo">
                    <img src={logo} alt="logo" />                    
                </div></Link>                
                <Link style={{textDecoration: 'none'}}><div className="search">
                    <img src={search} alt="logo" />
                    <p>Search</p>
                </div></Link>
                <Link to="/" style={{textDecoration: 'none'}}><div className="home">
                    <img src={home} alt="logo" />
                    <p>Home</p>
                </div></Link>
                <Link to="/network" style={{textDecoration: 'none'}}><div className="myNetwork">
                    <img src={network} alt="logo" />
                    <p>My Network</p>
                </div></Link>
                <Link to="/jobs" style={{textDecoration: 'none'}}><div className="jobs">
                    <img src={jobs} alt="logo" />
                    <p>Jobs</p>
                </div></Link>
                <Link to="/message" style={{textDecoration: 'none'}}><div className="messaging">
                    <img src={message} alt="logo" />
                    <p>Messaging</p>
                </div></Link>
                <Link to="/notifications" style={{textDecoration: 'none'}}><div className="notifications">
                    <img src={bell} alt="logo" />
                    <p>Notifications</p>
                </div></Link>
                <Link to="/me" style={{textDecoration: 'none'}}><div className="me">
                    <img src={me} alt="me" />
                    <p>Me</p>
                </div></Link>           
            </div>
            <div className="right">
                <Link to="/me" style={{textDecoration: 'none'}}><div className="business">
                    <img src={business} alt="business" />
                    <p>For Business</p>                
                </div></Link>
                <Link to="/me" style={{textDecoration: 'none'}}><div className="offer">
                    <li>Try Premium for</li>
                    <li>$</li>
                </div></Link>
           
            </div>
           
        </div>
    )    
}

export default Navbar