import React, { useEffect, useState } from "react";
import axios from 'axios';
import AddEmployee from "./AddEmployeeForm";

const Employee = () => {
    const [employee, setEmployee] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [show, setShow] = useState(false);
    const [newEmpLoyee, setNewEmployee]=useState("")

    

    useEffect(() => {
        fetch()
    },[])

    const fetch = () => {
        axios.get(`http://localhost:3000/employees`)
            .then(res => {
                console.log(res.data);
                setEmployee(res.data)
            })
            .catch(err => {
                console.log(err)
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const deleteBtn = (id) => {
        
    }

    const handleForm = (newEmpLoyee) => {
        setEmployee({...employee, newEmpLoyee})
    }
    const showForm = () => {
        setShow(!show);
    }

    if (isLoading) {
        return<p>Loding...</p>
    }
    if (error) {
        return <p>data is not found</p>
    }

    return (
            <div>
            <h2>Employee Management Dashboard</h2>
            
            <div><button style={{ background: "royalblue" }} onClick={showForm}>Add Employee</button>
                {show && <AddEmployee onAdd={handleForm} />}
            </div>
            <table>
                <thaed>
                <tr>
                                <th>Name</th>
                                <th>Designamtion</th>
                                <th>Department</th>
                                <th>Action</th>
                            </tr>
                </thaed>
                <tbody>
                {
                        employee.map((ele) => {
                            <tr key={ele.id}>
                                <td>{ele.name}</td>
                                <td>{ele.designation}</td>
                                <td>{ele.department}</td>
                                <td ><button style={{background:"Red"}} onClick={deleteBtn(ele.id)}>Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
                   
                </table>
            </div>
    )
}

export default Employee;