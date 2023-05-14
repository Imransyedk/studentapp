import React, { useState } from 'react'
import Base from '../Base/Base'
import details from '../Data/details';
import AddStudents from './AddStudents';
import UpdateStudents from './UpdateStudents';
import { useHistory } from 'react-router-dom';




function Students({ students , setStudents}){
const history = useHistory();

const deleteStudent = async(studId)=>{

    const response = await fetch(`https://645740fc0c15cb148204ab02.mockapi.io/Users/${studId}`,{
        method:"DELETE",
    });

    const data = await response.json()
if(data){
    const remainingStudents=students.filter((stud,idx)=> stud.id !== studId)
 setStudents(remainingStudents)
}
}
    return(
<Base
title={"Students Dashboard"}
description={"the pages contains all students data"}
>


    <div className='card-container'>
   {students.map((stud,idx)=>(
    <div className='card' key={idx}>
        <div className='content'>
    <h3>{stud.name}</h3>
    <p>{stud.batch}</p>
    <p>{stud.gender}</p>
    <p>{stud.qualification}</p>
    </div>
    <div className='control'>
    <button onClick={()=>history.push(`/edit/${stud.id}`)}>edit</button>{" "}
    <button onClick={()=>deleteStudent(stud.id)}>delete</button>
</div>
</div>
   ))}
   

    </div>
</Base>
    )
}

export default Students