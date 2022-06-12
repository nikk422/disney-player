import { Link } from "react-router-dom";
import "./notfound.css";

const NotFound=()=>{
    return (
        <div className="notfound-container flex-column align-center gap-18p">
        <div>
            <h1 className="heading-center text-align">Look's like  you are lost in space 🚀</h1>
            <h1 className="notfound text-align">404 </h1>
            <h1 className="heading-center">OOPS !</h1>
            <h2 className="heading-center">Page is Not Found...</h2>
            </div>
            <div>       
            <Link to="/">    
            <button className="backBtn padding-8p font-18p"> Back To Home </button>
            </Link>
            </div>
        </div>
    )
}

export default NotFound;