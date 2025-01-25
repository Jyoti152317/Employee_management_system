import React, { useState } from "react";
import axios from 'axios';

const AddEmployee = ({onAdd}) => {
    const [name, setName] = useState("");
    const [designation, setDesignamtion] = useState("");
    const [department, setDapartment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEmpLoyee = { name, designation, department };
        axios.post(`http://localhost:3000/employees`,newEmpLoyee)
            .then((res) => {
                onAdd(res.data);
                setName("");
                setDesignamtion("");
                setDapartment("");
            })
        .catch(err=>console.log(err))
       
    }

    
    return (
        <>
            <form >
            Name:<input type="text" placeholder="Enter your name" name="name"  onChange={(e)=>setName(e.target.value)}/>
            Designation:<input type="text" placeholder="Enter the Designamtion" name="designamtion" value={designation} onChange={(e)=>setDesignamtion(e.target.value)}/>
            Department:<input type="text" placeholder="Enter department" name="department" value={department} onChange={(e)=>setDapartment(e.target.value)}/>
            <input type="submit" value="Save" onClick={handleSubmit}/>
            </form>
            
        </>
    )
}
export default AddEmployee;