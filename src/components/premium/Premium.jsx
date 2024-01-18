import "./premium.scss";
import offer from "../../assets/premium.jpg";


const Premium = ({ setIsOpen }) => {

  

  return (
    <div className="premium">
        <div className="top">
          <h3>Get ahead with Premium</h3>
          <button onClick={() => setIsOpen(false)} >X</button>
        </div>
        <div className="inner">
            <img src={offer} alt="offer" />
            <h4>Looking for your next <br/> role?</h4>
            <p>Premium members are 2.6x</p>
            <p>more likely to get hired on</p>
            <p>average.</p>
            <button>Get Premium Now</button>
        </div>

    </div>
  )
}

export default Premium