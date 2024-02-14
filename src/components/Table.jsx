// import React, { useState } from 'react'
// import "./styles/style.css"

// function Table() {



//  const [data, setData] = useState([{
//   title:'title1',
//   description:'description',
//   owner:'owner',
//   status:'status',
//   startDate:'12-12-12',
//   endDate:'12-12-12',
//   priority:'low',
//   comment:'comment'
//  },
//  {
//   title:'title2',
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
//             title:'',
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

//    const handleDelete = (title) =>{
//     const newfields  = data.filter((filter)=> filter.title !== title);
//     setData(newfields)
//    }
//    const accessSelectValue = (e,title)=>{
//     const demo = data.find((find)=>find.title===title)
//     demo.status = e.target.value;
//     setData(data)
//    }
   

//   return (
//     <>
//     <div className="container">
//        <div className="table">
//         <div className="field-row  page-row">
//           <div className="row-option"><i className="lni lni-more-alt"></i></div>
//           <div className='field-name column-field'>Title</div>
//           <div className='field-name'>Description</div>
//           <div className='field-name'>Owner</div>
//           <div className='field-name'>Status</div>
//           <div className='field-name'>Start-Date</div>
//           <div className='field-name'>Due-Date</div>
//           <div className='field-name'>Priority</div>
//           <div className='field-name'>Comment</div>
//         </div>
//         {data.map((data)=>
//         <div className="field-row  page-row"key={data.title}>
//           <div className="row-option" onClick={()=>handleDelete(data.title)}><i className="lni lni-more-alt"></i></div>
//           <div className='field-name row-data'>{data.title}</div>
//           <div className='field-name row-data'>{data.description}</div>
//           <div className='field-name row-data'>{data.owner}</div>
//           <div className='field-name row-data'>{data.startDate}</div>
//           <div className='field-name row-data'>{data.endDate}</div>
//           <div className='field-name row-data'>{data.priority}</div>
//           <div className='field-name row-data'>
//             <select name="" id="" onChange={(e)=>accessSelectValue(e, data.title)}>
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
      title: 'title1',
      description: 'description',
      owner: 'owner',
      status: 'status',
      startDate: '12-12-12',
      endDate: '12-12-12',
      priority: 'low',
      comment: 'comment'
    },
    {
      title: 'title2',
      description: 'description2',
      owner: 'owner2',
      status: 'status2',
      startDate: '12-12-122',
      endDate: '12-12-122',
      priority: 'critical2',
      comment: 'comment2'
    }
    ,
    {
      title: 'title3',
      description: 'description3',
      owner: 'owner3',
      status: 'status3',
      startDate: '12-12-122',
      endDate: '12-12-122',
      priority: 'critical2',
      comment: 'comment3'
    }
  ]);

  const addRow = () => {
    const singleRow = {
      title: '',
      description: '',
      owner: '',
      status: '',
      startDate: '',
      endDate: '',
      priority: '',
      comment: ''
    };
    setData(prevArray => [...prevArray, singleRow]);
  };
  // The funtcioto check delete is equal to the drop down valu
  const handleDropdownChange = (event, title) => {
    if (event.target.value === "delete") {
      handleDelete(title);
    } else if(event.target.value === "duplicate"){
      duplication(title);
    }
  };

  const duplication = (title) => {
    const rowDuplication = data.find(row => row.title === title);
    const changedRows = { ...rowDuplication, title:  title + " copy"};
    setData(prevData => [...prevData, changedRows]);
  };


  const handleDelete = (title) => {
    const newFields = data.filter((filter) => filter.title !== title);
    setData(newFields);
  };


  const accessSelectValue = (e, title) => {
    const updatedData = data.map(row =>
      row.title === title ? { ...row, status: e.target.value } : row
    );
    setData(updatedData);
  };

  return (
    <>
      <div className="container">
        <div className="table">
          <div className="field-row  page-row">
            <div className="row-option"></div>
            <div className='field-name column-field'>Title</div>
            <div className='field-name'>Description</div>
            <div className='field-name'>Owner</div>
            {/* <div className='field-name'>Status</div> */}
            <div className='field-name'>Start-Date</div>
            <div className='field-name'>Due-Date</div>
            <div className='field-name'>Priority</div>
            <div className='field-name'>Status</div>
            <div className='field-name'>Comment</div>
          </div>
          {data.map((data) =>
            <div className="field-row  page-row" key={data.title}>
              <div className="row-option" >
                <select className="Dropdown-menu" id="" onChange={(e) => handleDropdownChange(e, data.title)}>
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
                <select className="Dropdown-for-status" id="" onChange={(e) => accessSelectValue(e, data.title)}>
                  <option value="todo" style={{backgroundColor:'green'}}>todo</option>
                  <option value="doing">doing</option>
                  <option value="done">done</option>
                </select>
              </div>
              <div className='field-name row-data'>{data.comment}</div>
            </div>
          )}
        </div>
        <button onClick={addRow}>Add Row</button>
      </div>
    </>
  );
}

export default Table;
