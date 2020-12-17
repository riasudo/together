import {Link} from "react-router-dom";

export default function ClientCard (props){
    const {first_name, id} = props.data;
    console.log(props.data);
    return (
        <li className="client-card" key={id}>
            <Link className="client-card--item" to={"/clients/"+ id}>{first_name}</Link>
        </li>
    )
}