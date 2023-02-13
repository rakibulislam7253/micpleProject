import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [table, settable] = useState([])
  const [activedata, setActivedata] = useState([])
  const [completed, setCompleted] = useState([])
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  // ******************************* //
  const handleClick = (val) => {
    if (val === "active") {
      const filterData = table.filter(item => item.status.includes('active'))
      setActivedata(filterData)
      // console.log(activedata)
    }


    else if (val === "completed") {
      const filterData = table.filter(item => item.status.includes('completed'))
      setCompleted(filterData)
      console.log(completed)
    }


    setShow(val);
  };

  // ******************************* //
  function handelsubmit(e) {
    e.preventDefault();
    settable([...table, { name, status }]);

    setName('');
    setStatus('');

    console.log(table);

  }



  return (


    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">

          <form onSubmit={handelsubmit} className="row gy-2 gx-3 align-items-center mb-4">

            <div className="col-auto">

              <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder="Name" />
            </div>

            <div className="col-auto">
              <input type="text" value={status} onChange={e => setStatus(e.target.value)} className="form-control" placeholder="Status" />
            </div>

            <div className="col-auto">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>

          </form>


        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>






          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
              {
                table.map(item => (


                  <tr>

                    <td scope="col">{item.name}</td>
                    <td scope="col">{item.status}</td>
                  </tr>

                ))

              }

              {
                activedata.map(item => (


                  <tr>

                    <td scope="col">{item.name}</td>
                    <td scope="col">{item.status}</td>
                  </tr>

                ))
              }
              
              {
                completed.map(item => (


                  <tr>

                    <td scope="col">{item.name}</td>
                    <td scope="col">{item.status}</td>
                  </tr>

                ))
              }



            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
