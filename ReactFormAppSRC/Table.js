import React from "react";

function Table(props) {

  return (
    <div>
    <table className="table table-striped table-dark pr-3">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email ID</th>
          <th>Profile</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      
        {
        props.tableData.map((data, index) => {
       
          return (
            <tr key={index}>
             
              <td>{data.id=index+1}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.profile}</td>
              <td>{data.date}</td>

              <td>
              <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-secondary" onClick={() => props.updateData(index)}>Edit</button>
                  <button type="button" className="btn btn-secondary" onClick={() => props.handleDeleteClick(index)}>Delete</button>
              </div>

              </td>
            </tr>


          );
        })
      }
           </tbody>
           
    </table>
    </div>


  
  );
}
export default Table;