import ProgramDetailModal from "./ProgramDetailModal";

export default function ProgramDetails (props){
    console.log(props.data);
    const programArray = props.data;
        return( 
            (!props.toggle)
            ? null
            :<ul className="program-details-cardlist"> 
                {programArray && programArray
                    .map(program => {
                        return (
                            <ProgramDetailModal data={program} key={program.id}/>
                        )
                    })}
            
        
            </ul>           
        )
}

/* 

*/