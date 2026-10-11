import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import Swal from 'sweetalert2';

// Import your service functions
import { 
  loadUniversity, loadMajor, loadDegree, loadFaculty, loadCountry, loadEducation, saveEducation, updateEducation, deleteEducation} from './educationService';

function HR_Employee() {
  const [id, setId] = useState('');
  const [country, setCountryId] = useState('');
  const [degree, setDegreeId] = useState('');
  const [university, setUniversityId] = useState('');
  const [faculty, setFacultyId] = useState('');
  const [major, setMajorId] = useState('');
  const [education_start_date, setStartDate] = useState('');
  const [education_end_date, setEndDate] = useState('');
  const [batch_no, setBatchNo] = useState('');
  const [education_remarks, setRemarks] = useState('');
  const [educations, setEducation] = useState([]);

  const [countrys, setCountry] = useState([]);
  const [universitys, setUniversity] = useState([]);
  const [facultys, setFaculty] = useState([]);
  const [majors, setMajor] = useState([]);
  const [degrees, setDegree] = useState([]);

  useEffect(() => {
    loadCountry(setCountry);
    loadUniversity(setUniversity);
    loadFaculty(setFaculty);
    loadMajor(setMajor);
    loadDegree(setDegree);
    loadEducation(setEducation);
  }, []);

  const save = (event) => {
    event.preventDefault();
    const data = {
      id,
      country,
      degree,
      university,
      faculty,
      major,
      education_start_date,
      education_end_date,
      batch_no,
      education_remarks,
    };
    saveEducation(data, loadEducation.bind(null, setEducation), toastr);
  };

  const update = (event) => {
    event.preventDefault();
    const data = {
      id,
      country,
      degree,
      university,
      faculty,
      major,
      education_start_date,
      education_end_date,
      batch_no,
      education_remarks,
    };
    updateEducation(id, data, loadEducation.bind(null, setEducation), toastr);
  };

  const deleteEdu = (id) => {
    deleteEducation(id, loadEducation.bind(null, setEducation), toast);
  };

  const editEducation = (education) => {
    setId(education.id);
    setCountryId(education.country);
    setDegreeId(education.degree);
    setUniversityId(education.university);
    setFacultyId(education.faculty);
    setMajorId(education.major);
    setStartDate(education.education_start_date);
    setEndDate(education.education_end_date);
    setBatchNo(education.batch_no);
    setRemarks(education.education_remarks);
  };

  return (
    <div className="App">
      {/* Form elements */}
      
    return (
      <div className="App">
        <div className="container">
        <form >
        <div className="form-group">
         
            <input type="Text" className="form-control" id="Education_id" hidden
            value={id}
            onChange={(event)=>{
              setId(event.target.value);
            }}/>           
           
          </div>
            
          <div className="mb-3 row">
            <label className="col-sm-1 col-form-label"> Country </label>
              <div class="col-sm-5">
                <select className="form-select" onChange={(event) => setCountryId(event.target.value)}>
                  <option value={country}> Select a country </option>
                    {countrys.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.name}
                                
                      </option>
                   ))}
                </select>
                {/* <input type="Text" className="form-control" id="country" placeholder = "Seletct Country" */}
                {/* value={country}onChange={(event)=>{setCountry(event.target.value);}}/>  */}
              </div>
              <label className="col-sm-1 col-form-label"> University </label>
              <div class="col-sm-5">
              <select className="form-select" onChange={(event) => setUniversityId(event.target.value)}>
                  <option value={university}> Select a University </option>
                    {universitys.map((university) => (
                    <option key={university.id} value={university.id}>
                      {university.name}
                                
                      </option>
                   ))}
                </select>
                {/* <input type="Text" className="form-control" id="university" placeholder = "Enter Your University" */}
                {/* value={university}onChange={(event)=>{setUniversity(event.target.value);}}/>  */}
              </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-1 col-form-label"> Start Date </label>
              <div class="col-sm-5">
                <input type="Text" className="form-control" id="start_date" placeholder = "Enter Your Start Date"
                value={education_start_date}onChange={(event)=>{setStartDate(event.target.value);}}/> 
              </div>
              <label className="col-sm-1 col-form-label"> Faculty </label>
              <div class="col-sm-5">
              <select className="form-select" onChange={(event) => setFacultyId(event.target.value)}>
                  <option value={faculty}> Select a Faculty </option>
                    {facultys.map((faculty) => (
                    <option key={faculty.id} value={faculty.id}>
                      {faculty.name}
                                
                      </option>
                   ))}
                </select>
                {/* <input type="Text" className="form-control" id="faculty" placeholder = "Enter Your Faculty" */}
                {/* value={faculty}onChange={(event)=>{setFaculty(event.target.value);}}/>  */}
              </div>
          </div>

          <div className="mb-3 row">
          <label className="col-sm-1 col-form-label"> End Date </label>
              <div class="col-sm-5">
                <input type="Text" className="form-control" id="end_date" placeholder = "Enter Your End Date"
                value={education_end_date}onChange={(event)=>{setEndDate(event.target.value);}}/> 
              </div>
              <label className="col-sm-1 col-form-label"> Degree </label>
              <div class="col-sm-5">
              <select className="form-select" onChange={(event) => setDegreeId(event.target.value)}>
                  <option value={faculty}> Select Degree </option>
                    {degrees.map((degree) => (
                    <option key={degree.id} value={degree.id}>
                      {degree.name}
                                
                      </option>
                   ))}
                </select>
                {/* <input type="Text" className="form-control" id="Degree" placeholder = "Enter Your Degree" */}
                {/* value={degree}onChange={(event)=>{setDegreeId(event.target.value);}}/>  */}
              </div>
          </div>

          <div className="mb-3 row">
          <label className="col-sm-1 col-form-label"> Batch No </label>
              <div class="col-sm-5">
                <input type="Text" className="form-control" id="bacth_no" placeholder = "Enter Your Batch No"
                value={batch_no}onChange={(event)=>{setBatchNo(event.target.value);}}/> 
              </div>
            <label className="col-sm-1 col-form-label"> Major </label>
              <div class="col-sm-5">
              <select className="form-select" onChange={(event) => setMajorId(event.target.value)}>
                  <option value={faculty}> Select Major </option>
                    {majors.map((major) => (
                    <option key={major.id} value={major.id}>
                      {major.name}
                                
                      </option>
                   ))}
                </select>
                {/* <input type="Text" className="form-control" id="major" placeholder = "Enter Your Major" */}
                {/* value={major}onChange={(event)=>{setMajor(event.target.value);}}/>  */}
              </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-1 col-form-label"> Remarks </label>
              <div class="col-sm-11">
                <input type="Text" className="form-control" id="remark" placeholder = "Enter Your Remarks"
                value={education_remarks}onChange={(event)=>{setRemarks(event.target.value);}}/> 
              </div>
          </div>
          <button className="btn btn-primary" onClick={save}>Register</button>
          <button className="btn btn-warning" onClick={update}>Update</button>
        </form>

        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4> Education
                                {/* <Link to ="/student/create" style={ {margin: '0px 0px 0px 1000px'} } className = "btn btn-primary">Add Student </Link> */}
                                <Link to ="/course/store" style={ {margin: '0px 0px 0px 1000px'} } className = "btn btn-primary"> New </Link>
                            </h4>
                        </div>
                        <div className='card-body'>
                            <table className="table table-stripped">
                                <thead>
                                    <tr>
                                        <td> ID </td>
                                        <td> Country </td>
                                        <td> Degree </td>
                                        <td> University </td>
                                        <td> Faculty </td>
                                        <td> Major </td>
                                        <td> Start Date </td>
                                        <td> End Date </td>
                                        <td> Batch No </td>
                                        <td> Remarks </td>
                                    </tr>
                                </thead>
                              <tbody>
                                {educations.map((education) => (
                                <tr key={education.id}>
                                  <th scope="row">{education.id}</th>
                                  <td>{education.country}</td>
                                  <td>{education.degree}</td>
                                  <td>{education.faculty}</td>
                                  <td>{education.university}</td>
                                  <td>{education.major}</td>
                                  <td>{education.education_start_date}</td>
                                  <td>{education.education_end_date}</td>
                                  <td>{education.batch_no}</td>
                                  <td>{education.education_remarks}</td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-warning"
                                      onClick={() => editEducation(education)}
                                    >
                                      Edit
                                    </button>
                                    </td>
                                    <td>
                                    <button
                                      type="button"
                                      className="btn btn-danger"
                                      onClick={() => DeleteEducation(education.id)}
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
                </div>
            </div>
        </div>
        </div>
      </div>      
    );
  }
      {/* Table for showing data */}
    </div>
  );
}

export default HR_Employee;
// educationService.js
import axios from 'axios';

export async function loadUniversity(setUniversity) {
  const result = await axios.get("http://127.0.0.1:8000/university/");
  setUniversity(result.data);
}

export async function loadMajor(setMajor) {
  const result = await axios.get("http://127.0.0.1:8000/major/");
  setMajor(result.data);
}

export async function loadDegree(setDegree) {
  const result = await axios.get("http://127.0.0.1:8000/degree/");
  setDegree(result.data);
}

export async function loadFaculty(setFaculty) {
  const result = await axios.get("http://127.0.0.1:8000/faculty/");
  setFaculty(result.data);
}

export async function loadCountry(setCountry) {
  const result = await axios.get("http://127.0.0.1:8000/country/");
  setCountry(result.data);
}

export async function loadEducation(setEducation) {
  const result = await axios.get("http://127.0.0.1:8000/education/");
  setEducation(result.data);
}

export async function saveEducation(data, load, toastr) {
  try {
    await axios.post("http://127.0.0.1:8000/education/", data);
    toastr.success("Data Added Successfully");
    load(); // Reload data after save
  } catch (err) {
    toastr.error("Course Registration Failed");
  }
}

export async function updateEducation(id, data, load, toastr) {
  try {
    await axios.put(`http://127.0.0.1:8000/education/${id}`, data);
    toastr.success("Data Updated Successfully");
    load(); // Reload data after update
  } catch (err) {
    toastr.error("Data Update Failed");
  }
}

export async function deleteEducation(id, load, toast) {
  try {
    await axios.delete(`http://127.0.0.1:8000/education/${id}`);
    toast.error("Course Deleted Successfully");
    load(); // Reload data after delete
  } catch (err) {
    toast.error("Failed to Delete Course");
  }
}
