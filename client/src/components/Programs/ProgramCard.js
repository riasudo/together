import { Link } from "react-router-dom";

export default function ProgramCard(props){
    const {id, name, index, category} = props.data;
    return (
        <li className="program-card" key={id}>
            <Link to="#" className="program-card__heading" id={id} onClick={(e)=>{props.handleToggle(e, id)}}>
                <h3 className="program-card__name">{name}</h3>
                <p className="program-card__level">Current Progress: {index}</p>
                <p className="program-card__category">{category}</p>
            </Link>      
        </li>
    )
}

