// import React, { useState } from 'react'
// import "./styles/style.css"

// function Table() {



//  const [data, setData] = useState([{
//   id:'id1',
//   description:'description',
//   owner:'owner',
//   status:'status',
//   startDate:'12-12-12',
//   endDate:'12-12-12',
//   priority:'low',
//   comment:'comment'
//  },
//  {
//   id:'id2',
//   description:'description',
//   owner:'owner',
//   status:'status',
//   startDate:'12-12-12',
//   endDate:'12-12-12',
//   priority:'critical',
//   comment:'comment'
//  }]);

 

//    const addRow=()=>{
//       const singlerow= {
//             id:'',
//             description:'',
//             owner:'',
//             status:'',
//             startDate:'',
//             endDate:'',
//             priority:'',
//             comment:''
//       }
//     setData(prevArray => [...prevArray, singlerow])

//    }

//    const handleDelete = (id) =>{
//     const newfields  = data.filter((filter)=> filter.id !== id);
//     setData(newfields)
//    }
//    const accessSelectValue = (e,id)=>{
//     const demo = data.find((find)=>find.id===id)
//     demo.status = e.target.value;
//     setData(data)
//    }
   

//   return (
//     <>
//     <div className="container">
//        <div className="table">
//         <div className="field-row  page-row">
//           <div className="row-option"><i className="lni lni-more-alt"></i></div>
//           <div className='field-name column-field'>id</div>
//           <div className='field-name'>Description</div>
//           <div className='field-name'>Owner</div>
//           <div className='field-name'>Status</div>
//           <div className='field-name'>Start-Date</div>
//           <div className='field-name'>Due-Date</div>
//           <div className='field-name'>Priority</div>
//           <div className='field-name'>Comment</div>
//         </div>
//         {data.map((data)=>
//         <div className="field-row  page-row"key={data.id}>
//           <div className="row-option" onClick={()=>handleDelete(data.id)}><i className="lni lni-more-alt"></i></div>
//           <div className='field-name row-data'>{data.id}</div>
//           <div className='field-name row-data'>{data.description}</div>
//           <div className='field-name row-data'>{data.owner}</div>
//           <div className='field-name row-data'>{data.startDate}</div>
//           <div className='field-name row-data'>{data.endDate}</div>
//           <div className='field-name row-data'>{data.priority}</div>
//           <div className='field-name row-data'>
//             <select name="" id="" onChange={(e)=>accessSelectValue(e, data.id)}>
//               <option value="done">done</option>
//               <option value="todo">todo</option>
//               <option value="move">done</option>
//             </select>
//           </div>
          
//           <div className='field-name row-data'>{data.comment}</div>
          
//         </div>)
//         } 
//        </div>
//        <button onClick={ addRow}>Add Row</button>

//     </div>
      
    
//     </>
//   )
// }

// export default Table
import React, { useState } from 'react';
import "./styles/style.css";

function Table() {
  const [data, setData] = useState([
    {
      id: 1,
      title: 'king1',
      description: 'description',
      owner: 'owner',
      status: 'status',
      startDate: '12-12-12',
      endDate: '12-12-12',
      priority: 'low',
      comment: 'comment'
    },
    {
      id: 2,
      title: 'king2',
      description: 'description2',
      owner: 'owner2',
      status: 'status2',
      startDate: '12-12-122',
      endDate: '12-12-122',
      priority: 'critical',
      comment: 'comment2'
    }
    ,
    {
      id: 3,
      title: 'king',
      description: 'description3',
      owner: 'owner3',
      status: 'status3',
      startDate: '12-12-122',
      endDate: '12-12-122',
      priority: 'critical',
      comment: 'comment3'
    }
  ]);
//To Add a field
  const addRow = (id, title) => {
    const singleRow = {
      id: '',
      title: '',
      description: '',
      owner: '',
      status: '',
      startDate: '',
      endDate: '',
      priority: '',
      comment: ''
    };
    
      const rowID = data.find(row => row.id === id );
      const lastId = data.length > 0 ? data[data.length - 1].id : 0; // Get the last ID in the array
      const nextIDRows = { ...rowID, id: lastId + 1};
    setData(prevArray => [...prevArray, nextIDRows]);
  };
  // The funtcioto check delete is equal to the drop down valu
  const handleDropdownChange = (event, id, title) => {
    if (event.target.value === "delete") {
      handleDelete(id);
    } else if(event.target.value === "duplicate"){
      duplication(id, title);
    }
  };
//To duplicate the selected field
  const duplication = (id, title) => {
    const rowDuplication = data.find(row => row.id === id && row.title === title);
    const lastId = data.length > 0 ? data[data.length - 1].id : 0; // Get the last ID in the array
    const changedRows = { ...rowDuplication, id: lastId + 1, title: title + "copy" };

    setData(prevData => [...prevData, changedRows]);

  };

//To delete the selected field
  const handleDelete = (id) => {
    const newFields = data.filter((filter) => filter.id !== id);
    setData(newFields);
  };


  const accessSelectValue = (e, id) => {
    const updatedData = data.map(row =>
      row.id === id ? { ...row, status: e.target.value } : row
    );
    setData(updatedData);
  };

  return (
    <>
      <div className="container">
        <div className="table">
          <div className="field-row  page-row">
            <div className="row-option"> 
            
            {/* To Be deleted */}
            <select className="Dropdown-menu" id="" onChange={(e) => handleDropdownChange(e, data.id, data.title)}>
                  <option value="drop">Drop</option>
                  <option value="delete">Delete</option>
                  <option value="duplicate">Duplicate</option>
                </select>
                {/* Deleting ends here */}
                </div>
            <div className='field-name column-field'>title</div>
            <div className='field-name'>Description</div>
            <div className='field-name'>Owner</div>
            <div className='field-name'>Start-Date</div>
            <div className='field-name'>Due-Date</div>
            <div className='field-name'>Priority</div>
            <div className='field-name'>Status</div>
            <div className='field-name'>Comment</div>
            <div className='field-name'>id</div>

            
          </div>
          {data.map((data) =>
            <div className="field-row  page-row" key={data.id}>
              <div className="row-option" >
              <select className="Dropdown-menu" id="" onChange={(e) => handleDropdownChange(e, data.id, data.title)}>
                  <option value="drop">Drop</option>
                  <option value="delete">Delete</option>
                  <option value="duplicate">Duplicate</option>
                </select>
              </div>
              <div className='field-name row-data'>{data.title}</div>
              <div className='field-name row-data'>{data.description}</div>
              <div className='field-name row-data'>{data.owner}</div>
              {/* <div className='field-name row-data'>{data.status}</div> */}
              <div className='field-name row-data'>{data.startDate}</div>
              <div className='field-name row-data'>{data.endDate}</div>
              <div className='field-name row-data'>{data.priority}</div>
              <div className='field-name row-data'>
                <select className="Dropdown-for-status" id="" onChange={(e) => accessSelectValue(e, data.id)}>
                  <option value="todo" style={{backgroundColor:'green'}}>todo</option>
                  <option value="doing">doing</option>
                  <option value="done">done</option>
                </select>
              </div>
              <div className='field-name row-data'>{data.comment}</div>
              <div className='field-name row-data'>{data.id}</div>
            </div>
          )}
        </div>
        <button onClick={addRow}>Add Row</button>
        
      </div>
    </>
  );
}

export default Table;
