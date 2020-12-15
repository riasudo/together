import ProgramCard from "./ProgramCard";

export default function ProgramList(props){
    const programs = props.data
    const idArr = programs && programs
        .map((program) => {
            return program.id;
            
        });
    console.log(programs);
    console.log(idArr);
    return(
        <ul className="client-programs-list">
            {programs && programs.map((program)=>{
                    return (
                        <ProgramCard data={program} key={program.id} handleToggle={props.handleToggle} onClick={e => props.handleToggle(e, idArr)} />
                    )
                })
            }
        </ul>
    )
}