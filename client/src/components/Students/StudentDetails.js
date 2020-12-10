import React, {Component} from "react";
import ProgramList from "../Programs/ProgramList";


export default class Students extends Component {
    state= {
        programs: [
            {
                id: "1",
                student_id: "1",
                name: "Sort Laundry",
                index: "A",
                description: "Learn how to sort light and dark colors when doing laundry.",
                category: "Self Management",
                task: "To be able to respond whether an article of clothing is light or dark colored at a frequency of 5/5 correct responses per LU.",
                mastery: {
                    frequency: "5",
                    current: "5",
                    required: "5"
                },
                notes: [
                    {
                        instructor_id: "2",
                        content: "Reached mastery criteria for the program, good job!",
                        timestamp: "2020/06/29"
                    },
                    {
                        instructor_id: "1",
                        content: "Good progress in sitting, was compliant and able to sort between colors.",
                        timestamp: "2020/06/12"
                    },
                    {
                        instructor_id: "1",
                        content: "Just started implementing program, some expected errors.",
                        timestamp: "2020/05/25"
                    }
                ]
            },
            {   id: "2",
                student_id: "1",
                name: "Sort Laundry",
                index: "B",
                description: "Learn how to sort light and dark colors when doing laundry.",
                category: "Self Management",
                task: "To be able to place an article of clothing that is light or dark colored in their respective baskets at a frequency of 5/5 correct responses per LU.",
                mastery: {
                    frequency: "5",
                    current: "3",
                    required: "5"
                },
                notes: [
                    {
                        instructor_id: "2",
                        content: "Good progress in sitting, was compliant and able to sort between colors.",
                        timestamp: "2020/06/12"
                    },
                    {
                        instructor_id: "1",
                        content: "Just started implementing program, some expected errors.",
                        timestamp: "2020/05/25"
                    }
                ]
            },
        ]
    }
    render(){
        const programs = this.state.programs;
        console.log(programs);
        return (
            <div className="student">
                <h2>Student Details</h2>
                <div className="student-programs">
                    <h3>Programs</h3>
                    <ProgramList data={this.state.programs}/>
                </div>
            </div>
        )
    }
}