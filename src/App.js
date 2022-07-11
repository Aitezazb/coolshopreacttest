import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import ShowList from "./components/ShowList"
import AddRow from "./components/AddRow"



const App = () => {
  //use reduce or maybe context API
  const [list, setlist] = React.useState([{
    Number: 10,
    Opt: "+"
  }]);
  const [total,setTotal] = React.useState(10) //default value just to set things up and show off UI

  const addNewRow = newRowObj => {
    const temList = [...list,
      {Number: parseInt(newRowObj.number), Opt: newRowObj.opt}]
    
      setlist(temList);
      
      //no need to re-calculate just add the same 
      calculateTotal(newRowObj);
  }

  const calculateTotal = newRowObj => {
    
    //Create enum for opt
    switch(newRowObj.opt){
      case "+":
        setTotal(total + parseInt(newRowObj.number));
        break;
      case "-":
        setTotal(total - parseInt(newRowObj.number));
        break;
      default:
        break;
    }
  }

  const ReCalculateAll = tempList => {
    
    //start with new total
    let newTotal = 0;

    for (var value of tempList) {

      //reuse the calculate total
      switch(value.Opt){
        case "+":
          newTotal = newTotal + parseInt(value.Number);
          break;
        case "-":
          newTotal =newTotal - parseInt(value.Opt);
          break;
        default:
          break;

      }
    }

    setTotal(newTotal)
  }

  const deleteRow = index => {
    const tempList = [...list];
    tempList.splice(index, 1);
    setlist(tempList);
    
    //the setstate is async so don't use the same state right away
    ReCalculateAll(tempList);
  }

  return (
    <div className="mt-3">
      <div className="container">
        <AddRow addNewRow={addNewRow} />
        <div className='mt-5'>
            {list.map((item,index) => (
              <ShowList
              key={index}
              index={index}
              item={item}
              deleteRow={deleteRow}
              />        
            ))}
        </div>
        <div className="lead mt-5">
            TOTAL: {total}
        </div>
      </div>
    </div>
  );
}

export default App;
