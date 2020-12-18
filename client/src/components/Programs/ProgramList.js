import ProgramCard from "./ProgramCard";

export default function ProgramList(props){
    const compare = (a, b) => {
        if (a.name < b.name){
            return -1;
        } if (a.name > b.name){
            return 1;
        } else {
            return 0
        };
    };
    const programs = props.data
    programs.sort(compare);
    return(
        <ul className="client-programs-list">
            {programs && programs.map((program)=>{
                    return (
                        <ProgramCard data={program} key={program.id} handleToggle={props.handleToggle} />
                    )
                })
            }
        </ul>
    )
}