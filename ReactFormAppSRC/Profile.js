import React, { useState, Fragment } from "react";
import Form from "./Form";
import Navbar from "./Navbar";

import Table from "./Table";
function Profile() {
  let currentDate = new Date().toJSON().slice(0, 10);
  const [tableData, setTableData] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [i,setIndex]=useState()

  const [isNameValid] = useState(true);
  const [isEmailValid] = useState(true);
 
  const [formObject, setFormObject] = useState({
    id:0,
    name: "",
    email: "",
    profile: "",
  });



  const onValChange = (evnt) => {
    const newInput = (data) => ({ ...data, [evnt.target.name]: evnt.target.value})
    setFormObject(newInput)
    
  }

  const onFormSubmit = (event) => {

    const checkVal = !Object.values(formObject).every((res) => res === "");

    let currentDate = new Date().toJSON().slice(0, 10);
    if (checkVal) {
      const chec = /\S+@\S+\S+/;
      if(formObject.name.length==0){
        }
      else if (!chec.test(formObject.email)) {
       
      } else {
        if(formObject.date==null)
          {
            formObject.date=currentDate;
          }
        const dataObj = (data) => [...data, formObject];
        setTableData(dataObj);
        const isEmpty = { name: "", email: "", profile: "" , date:""};
        setFormObject(isEmpty);
      
      }
    }
  };

  const updateData=(index)=> {
    let { name, email, profile, date } = tableData[index];
    setFormObject({ name, email, profile,date })
    setIsUpdate(true)
    setIndex(index)
   
  }
  const handleDeleteClick = (index) => {
    // if (confirm("Are you Saure you Want to delete") == true) {
    const rows = [...tableData];
    rows.splice(index, 1);
    setTableData(rows);
    } 
  
  
   
    
   


  const updateInfo = () => {

    setTableData(tableData.map((item) => {
     
      if (item.id===i+1) {
      

        return { ...item, name:formObject.name,email:formObject.email,profile:formObject.profile, date:formObject.date}
        
      
       
      }
    return item;
    }))
  setIsUpdate(false)
  const isEmpty = { name: "", email: "", profile: "" , date:""};
  setFormObject(isEmpty);
  
  }
  

  function searchData(props) {
   
    // const filteredData = data.filter((tableData) => {
      
    //     if (props.input === '') {
    //         return el;
    //     }
    
    //     else {
    //         return el.text.toLowerCase().includes(props.input)
    //     }
    // })
  }


  return (
    <Fragment>
      <Form
        onValChange={onValChange}
        formObject={formObject}
        onFormSubmit={onFormSubmit}
        isUpdate={isUpdate}
        updateInfo={updateInfo}
        isNameValid={isNameValid}
        isEmailValid={isEmailValid}
      />
      <Table tableData={tableData}
        handleDeleteClick={handleDeleteClick}
        updateData={updateData}
      />
     
    </Fragment>
  );
}
export default Profile;