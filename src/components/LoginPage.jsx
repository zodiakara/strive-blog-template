import GoogleButton from "react-google-button";
//import { Col, Container, Row } from "react-bootstrap";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
const BE_URL = process.env.REACT_APP_BE_URL;

const LoginPage = () => {
  return (
    // <Container fluid="sm">
    //   <h1 className="blog-main-title">please, log in:</h1>
    //   <Row>
    //     <Col>
    //       <GoogleButton />
    //     </Col>
    //     <Col>
    //       <div>or:</div>
    //     </Col>
    //   </Row>
    // </Container>
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <MDBCol col="4"></MDBCol>
        <MDBCol col="4">
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="formControlLg"
            type="email"
            size="lg"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="formControlLg"
            type="password"
            size="lg"
          />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100" size="lg">
            Sign in
          </MDBBtn>
          <a href={`${BE_URL}/authors/googleLogin`}>
            {" "}
            <div className="d-flex justify-content-center align-items-center mt-5">
              <p className="text-center fw-bold mx-3 mb-0">OR</p>
              <GoogleButton />
            </div>
          </a>
        </MDBCol>
        <MDBCol col="4"></MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LoginPage;
