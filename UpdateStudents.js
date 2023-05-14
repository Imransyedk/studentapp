import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import Base from '../Base/Base';

function UpdateStudents({students,setStudents,editIdx}){
  const history=useHistory()
   const {id}= useParams();
   const editStudent =students[id]
    const [name, setName]=useState("")
   const [batch, setBatch]=useState("")
   const [gender, setGender]=useState("")
   const [qualification, setQualification]=useState("")
  
   useEffect(()=>{

    setName(editStudent.name)
   setBatch(editStudent.batch)
  setGender(editStudent.gender)
    setQualification(editStudent.qualification)

 },[editStudent])

   async function UpdateStudent (){
    
    const updatedObject ={
        name : name,
        batch : batch,
        gender : gender,
        qualification : qualification
    }

    const response = await fetch(`https://645740fc0c15cb148204ab02.mockapi.io/Users/${editStudent.id}`,{
        method:"PUT",
        body:JSON.stringify(updatedObject),
        headers:{
            "Content-Type":"application/json"
        }
    })

    const data = await response.json()
    if(data){
    console.log(updatedObject)
    students[id]=updatedObject
    setStudents ([...students])
    history.push("/students")

    }
   }
  
   
    return(

        <Base 
        title={"Edit a Students"}
        description={"Edit Students data here"}
        
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
        onClick={UpdateStudent}
        >Update Students</button>
    </div>

</Base>
    )
}

export default UpdateStudents