import { Link } from "react-router-dom";

export default function ProgramCard(props){
    const {id, clientId, name, index, category} = props.data;
    console.log(id)
    return (
        <li className="program-card" key={id}>
            <Link to={"/programs/" + id} className="program-card__heading--large" id={id} onClick={(id)=>{props.onClick(props.data.id)}}>
                <h3 className="program-card__name">{name}</h3>
                <p className="program-card__level">Current Progress: {index}</p>
                <p className="program-card__category">{category}</p>
            </Link>      
        </li>
    )
}