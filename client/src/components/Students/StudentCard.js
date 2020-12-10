import {Link} from "react-router-dom";

export default function StudentCard (props){
    const {name, id} = props.data;
    console.log(props.data);
    return (
        <li className="student-card" key={id}>
            <Link to={"/student/"+ id}>{name}</Link>
        </li>
    )
}