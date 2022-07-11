import React from "react";

const ShowList = ({ item,index,deleteRow }) => {
    return (
      <div className="row mt-4">
            <div className="col-md-1 bg-secondary ">
              {item.Opt}
            </div>
            <div className="col-md-3 bg-info ms-3 me-3">
              {item.Number}
            </div>
            <input value="delete"  className='btn btn-danger col-md-2' onClick={() => deleteRow(index)} />
      </div>
    )
}

export default ShowList