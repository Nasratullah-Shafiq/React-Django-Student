import axios from 'axios';
import {useEffect, useState } from "react";
function Student() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [fee, setFee] = useState('');
  const [students, setUsers] = useState([]);
  useEffect(() =>{
    (async()=>await Load())();
  }, []);

  async function Load(){
    const result = await axios.get(
      "http://127.0.0.1:8000/student/");
      setUsers(result.data);
      console.log(result.data);
  }

  async function save(event){
    event.preventDefault();
    try{
      await axios.post("http://127.0.0.1:8000/student/",{
        name: name, 
        address: address,
        fee: fee
      });
      alert("Student Registration Successful");
      setId("");
      setName("");
      setAddress("");
      setFee("");
      Load();
    }
    catch(err){
      alert("Student Registration Failed");
    }
  }

  async function editStudent(students){
    setName(students.name);
    setAddress(students.address);
    setFee(students.fee);
    setId(students.id);
  }

  async function DeleteStudent(id){
    await axios.delete("http://127.0.0.1:8000/student/"+id);
    alert("Student Deleted Successfully");
    console.log("Data Deleted Failed");
    Load();
  }

  async function update(event){
    event.preventDefault();
    try{
      await axios.put("http://127.0.0.1:8000/student/" + students.find(u => u.id === id).id || id,{
        id: id,
        name: name,
        address: address,
        fee: fee
      });
      alert("Record Updated Successfully");
      setId("");
      setName("");
      setAddress("");
      setFee("");
      Load();
    }
    catch(err){
      alert("User Registration Failed");
    }
  }

  if(students.length <= 0) return null;

    return (
      <div className="App">
        <div className="container">
          <form >
        <div className="form-group">
            <label className="form-label"><h1>Student Management System in Django React API </h1></label>
            <input type="Text" className="form-control" id="student_id" hidden
            value={id}
            onChange={(event)=>{
              setId(event.target.value);
            }}/>           
           
          </div>

          <div className="mb-3">
            <label className="form-label">Student Name</label>
            <input type="Text" className="form-control" id="studentName" placeholder = "Enter Student Name"
            value={name}
            onChange={(event)=>{
              setName(event.target.value);
            }}/>           
           
          </div>

          <div className="mb-3">
            <label className="form-label">Student Address</label>
            <input type="Text" className="form-control" id="studentAddress" placeholder = "Enter Student Address"
            value={address}
            onChange={(event)=>{
              setAddress(event.target.value);
            }}/>           
           
          </div> 

          <div className="mb-3">
            <label className="form-label">Student fee</label>
            <input type="Text" className="form-control" id="employeeFee" placeholder = "Enter Student Phone"
            value={fee}
            onChange={(event)=>{
              setFee(event.target.value);
            }}/>           
           
          </div>
          <button className="btn btn-primary" onClick={save}>Register</button>
          <button className="btn btn-warning" onClick={update}>Update</button>
        </form>

      <table className="table table-dark" align="center">
  <thead>
    <tr>
      <th scope="col">Student ID</th>
      <th scope="col">Student Name</th>
      <th scope="col">Student Address</th>
      <th scope="col">Student Fee</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {students.map((student) => (
      <tr key={student.id}>
        <th scope="row">{student.id}</th>
        <td>{student.name}</td>
        <td>{student.address}</td>
        <td>{student.fee}</td>
        <td>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => editStudent(student)}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => DeleteStudent(student.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
        </div>
      </div>

      
    );
  }
  
  export default Student;
  