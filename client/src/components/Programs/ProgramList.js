import ProgramCard from "./ProgramCard";

export default function ProgramList(props){
    const programs = props.data
    console.log(programs);
    return(
        <ul className="student-programs-list">
            {programs && programs.map((program)=>{
                    return (
                        <ProgramCard data={program} key={program.id}/>
                    )
                })
            }
        </ul>
    )
}