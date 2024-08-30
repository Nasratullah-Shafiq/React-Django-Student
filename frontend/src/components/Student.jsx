import axios from 'axios';
import {useEffect, useState } from "react";
function Student() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [last_name, setLastName] = useState('');
  const [father_name, setFatherName] = useState('');
  const [course, setCourse] = useState('');
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
        id: id,
        name: name,
        last_name: last_name,
        father_name: father_name,
        course: course,
        address: address,
        fee: fee
      });
      alert("Student Registration Successful");
      setId("");
      setName("");
      setLastName("");
      setFatherName("");
      setCourse("");
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
    setLastName(students.last_name);
    setFatherName(students.father_name);
    setCourse(students.course);
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
        last_name: last_name,
        father_name: father_name,
        course: course,
        address: address,
        fee: fee
      });
      alert("Record Updated Successfully");
      setId("");
      setName("");
      setLastName("");
      setFatherName("");
      setCourse("");
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
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
          <form >
        <div className="form-group">
            <label className="form-label"><h1>Student Management System in Django React API </h1></label>
            <input type="Text" className="form-control" id="student_id" hidden
            value={id}
            onChange={(event)=>{
              setId(event.target.value);
            }}/>           
           
          </div>
            
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">First Name</label>
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="student_first_name" placeholder = "Enter First Name"
                value={name}onChange={(event)=>{setName(event.target.value);}}/> 
              </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Last Name</label>
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="student_last_name" placeholder = "Enter Last Name"
                value={last_name}onChange={(event)=>{setLastName(event.target.value);}}/> 
              </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Father Name</label>
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="student_father_name" placeholder = "Enter Father Name"
                value={father_name}onChange={(event)=>{setFatherName(event.target.value);}}/> 
              </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Course</label>
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="student_course" placeholder = "Enter Course"
                value={course}onChange={(event)=>{setCourse(event.target.value);}}/> 
              </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Student Name</label>
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="student_fee" placeholder = "Enter Fee"
                value={fee}onChange={(event)=>{setFee(event.target.value);}}/> 
              </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Address</label>
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="student_address" placeholder = "Enter Address"
                value={address}onChange={(event)=>{setAddress(event.target.value);}}/> 
              </div>
          </div>

          <button className="btn btn-primary" onClick={save}>Register</button>
          <button className="btn btn-warning" onClick={update}>Update</button>
        </form>

      <table className="table table-striped" align="center">

  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Father Name</th>
      <th scope="col">Course</th>
      <th scope="col">Address</th>
      <th scope="col">Student Fee</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {students.map((student) => (
      <tr key={student.id}>
        <th scope="row">{student.id}</th>
        <td>{student.name}</td>
        <td>{student.last_name}</td>
        <td>{student.father_name}</td>
        <td>{student.course}</td>
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
  