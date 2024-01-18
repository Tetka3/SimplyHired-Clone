import "./group.scss";

const Group = () => {
  return (
    <div className="group">
        <div className="first">            
            <li>Groups</li>
        </div>
        <div className="second">
            <li>Events</li>
            <button>+</button>
        </div>
        <div className="third">
            <li>Followed hashtags</li>
        </div>
        <div className="fourth">
            <h3>Discover more</h3>
        </div>
    </div>
  )
}

export default Group