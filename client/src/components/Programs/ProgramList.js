import ProgramCard from "./ProgramCard";

export default function ProgramList(props){
    const programs = props.data
    return(
        <ul className="client-programs-list">
            {programs && programs.map((program)=>{
                    return (
                        <ProgramCard data={program} key={program.id} onClick={props.onClick}/>
                    )
                })
            }
        </ul>
    )
}