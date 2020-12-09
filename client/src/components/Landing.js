import {Link} from "react-router-dom";

export default function Landing () {
    return(
        <div className="landing-page">
            <h2>Who are we working with today?</h2>
            <Link to="/">Charlie</Link>
            <Link to="/">Jane</Link>
        </div>   
    )
}