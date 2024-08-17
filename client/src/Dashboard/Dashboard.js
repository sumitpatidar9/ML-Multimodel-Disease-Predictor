
import './Dashboard.css';
import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';


import { useState } from 'react';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Icon from './Profile.png';


import { Profile } from './Profile';




const Dashboard = () => {


    
    const [activeComponent, setActiveComponent] = useState('Profile');

    const renderComponent = () => {
        switch (activeComponent) {
          case 'Profile':
            return <Profile/>;
          case 'Tests':
            return <div>Tests</div>;
          case 'Reports':
            return <div>Reports</div>;
          default:
            return <Profile />;
        }
      };


    return (

        <>
            <div className='main-container'>

                <div className='left-bar'>
                    <div className='left-bar-heading'>
                        <h2>Dashboard</h2>
                    </div>


                    <div className='left-bar-button'>
                        <button className='left-bar-button1' onClick={() => {setActiveComponent('Profile')}}>
                            <img src={Icon} className='left-bar-button1-icon'></img>
                            Profile
                        </button>

                        <button className='left-bar-button2' onClick={() => {setActiveComponent('Tests')}}>
                            <img src={Icon} className='left-bar-button1-icon'></img>
                            Tests
                        </button>

                        <button className='left-bar-button3' onClick={() => {setActiveComponent('Reports')}}>
                            <img src={Icon} className='left-bar-button1-icon'></img>
                            Reports
                        </button>
                    </div>
                </div>

                    {renderComponent()}
                </div>
        </>
    )
}

export { Dashboard }