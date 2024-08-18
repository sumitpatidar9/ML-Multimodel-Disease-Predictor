
import React from 'react';
import { useLocation } from 'react-router-dom';




const Report = () => {

  const location = useLocation();
  const data = location.state?.data;

    return(<div>
        <h1>Reports</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>)
}


export {Report}