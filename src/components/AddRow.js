import React from "react";

const AddRow = ({addNewRow}) => {
  const [value, setValue] = React.useState("");
  const [op, setOp] = React.useState("+");

  const handleSubmit = e => {
    e.preventDefault();
    if(value === "" || value === 0 || value == null) return; //quick validation, do not allow to anything else to run TODO show error message
    addNewRow({number: value, opt: op})
    setValue("");
    setOp("+")
  }


  return(
      <>
        <h1>Enter Number</h1>
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-md-4'>
              <select className='form-control' value={op} onChange={e => setOp(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
              </select>
            </div>
            <div className='col-md-8'>
              <input className='form-control' placeholder='Number e.g 10' type="number" value={value} onChange={e => setValue(e.target.value)} />
            </div>
          </div>
          <input type="submit" className="btn btn-success mt-4" />
        
        </form>
      </>
  );
}

export default AddRow;