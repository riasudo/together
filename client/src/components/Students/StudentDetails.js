import React, {Component} from "react";
import ProgramList from "../Programs/ProgramList";


export default class Students extends Component {
    state= {
        student: {
            id: "1",
            name: "Charlie",
            dob: "2009/01/25",
            address: "123 example St",
            city: "Example City",
            country: "Example Country",
            phone: "123-456-7890"
        },
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
        const {id, name, dob, address, city, country, phone} = this.state.student;
        return (
            <div className="student">
                <div className="student-details">
                    <h2 className="student-details__header">Client Details</h2>

                    <div className="student-details__container">
                        <h3 className="student-details__label">Name: </h3>
                        <p className="student-details__name">{name}</p>
                    </div>
                    <div className="student-details__container">
                        <h3 className="student-details__label">Address: </h3>
                        <p className="student-details__address">{address + ", " + city + ", "}</p>
                        <p className="student-details__address">{country}</p>
                    </div>
                    <div className="student-details__container">
                        <h3 className="student-details__label">Phone:</h3>
                        <p className="student-details__contact">{phone}</p>
                    </div>
                </div>
                <div className="student-programs">
                    <h3 className="student-programs__header">Programs</h3>
                    <ProgramList data={this.state.programs}/>
                </div>
            </div>
        )
    }
}