import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'mdbreact/dist/css/mdb.css';


import './Home.css';
import HomeLeft from './images/HomeLeft.jpg';
import HomeRight from './images/HomeRight.jpg';
import Banner from './images/Banner.png';




import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';











const Home = () => {

  const navigate = useNavigate();
  const auth = useAuth();



  const tumorCall = () => {
    if (auth.isLoggedIn && auth.user) {
      return navigate("/tumor");
    }

    else{
      alert('Please login or Signup');
    }
  }




  return (



    <>

      <div className='main-container1'>
        <div className='main-container1-heading1'>
          Making Change
          <br />
          Through Medical Neuroimaging
        </div>

        <div className='main-container1-heading2'>
          ~Imaging & Detection
        </div>

      </div>






      <div className='main-container2'>
        <div className='main-container2-overlay'>

        </div>
      </div>

      <div className='space-after-2'>

      </div>






      <div className='main-container3'>

        <div className='main-container3-left'>
          <img src={HomeLeft} width={'60%'} className='main-container3-left-image' />
        </div>






        <div className='main-container3-right'>

          <div className='main-container3-right-heading'>
            Lorem 34
          </div>

          <div className='main-container3-right-text'>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>

            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            </p>
          </div>

        </div>

      </div>


      <hr></hr>







      <div className='main-container4'>

        <div className='main-container4-right'>

          <div className='main-container4-right-heading'>
            Lorem 34
          </div>

          <div className='main-container4-right-text'>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>

            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            </p>
          </div>

        </div>



        <div className='main-container4-left'>
          <img src={HomeRight} width={'60%'} className='main-container4-left-image' />
        </div>

      </div>



      <div className='space-after-4'>

      </div>






      <div className='main-container5'>
        <div className='main-container5-text'>
          "A diverse staff makes every single aspect of our organization better. At Mayo Clinic, we work to create the right environment for our staff to thrive, feel valued, enjoy their work, and provide an unparalleled patient experience."
        </div>
      </div>


      <hr></hr>







      <div className='main-container6'>
        <div className='main-container6-text'>
          <p className='main-container6-text-p1'>Resources</p>
          <p className='main-container6-text-p2'>Discover more about Mayo Clinic</p>
        </div>
      </div>








      <div className='main-container7'>
        <div className='card-container1'>
          <MDBCard>
            <MDBCardImage src={Banner} position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>Tumor</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <MDBBtn onClick={tumorCall}>Button</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>



        <div className='card-container2'>
          <MDBCard>
            <MDBCardImage src={Banner} position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <MDBBtn href='#'>Button</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>



        <div className='card-container3'>
          <MDBCard>
            <MDBCardImage src={Banner} position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <MDBBtn href='#'>Button</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>




        <div className='card-container1'>
          <MDBCard>
            <MDBCardImage src={Banner} position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <MDBBtn href='#'>Button</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>



        <div className='card-container2'>
          <MDBCard>
            <MDBCardImage src={Banner} position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <MDBBtn href='#'>Button</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>



        <div className='card-container3'>
          <MDBCard>
            <MDBCardImage src={Banner} position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <MDBBtn href='#'>Button</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>



      <div className='main-container8'>
        dwds
      </div>
    </>
  )
}


export { Home }