import React, { useState } from "react";
import Base from "../Base/Base";
import { useHistory } from "react-router-dom";

function AddStudents({students, setStudents}){
    const history= useHistory()
   const [name, setName]=useState("")
   const [batch, setBatch]=useState("")
   const [gender, setGender]=useState("")
   const [qualification, setQualification]=useState("")

const createStudent = async()=>{
    const newStudents={
        name:name,
        batch:batch,
        qualification:qualification,
        gender:gender,
    }

    const response =await fetch("https://645740fc0c15cb148204ab02.mockapi.io/Users",{
        method:"POST",
        body:JSON.stringify(newStudents),
        headers :{
            "Content-Type":"application/json"
        },
    })
   
    const data = await response.json
 
setStudents([...students,data])
 history.push("/students")
}

    return(
      
        <Base
        title={"Add New Student"}
        description={"We can able to add new students data here"}
        
        >
        <div>
            <input
            placeholder='Enter Name'
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            
            />
            <input
            placeholder='Enter Batch'
            type="text"
            value={batch}
            onChange={(e)=>setBatch(e.target.value)}
            />
            <input
             placeholder='Enter Gender'
             type="text"
             value={gender}
             onChange={(e)=>setGender(e.target.value)}
            />
            <input
             placeholder='Enter Qualification'
             type="text"
             value={qualification}
             onChange={(e)=>setQualification(e.target.value)}
            />
            <button
            onClick={createStudent}
            >Add Students</button>
        </div>
        </Base>
    )
}

export default AddStudents