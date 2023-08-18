import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './index.css'; 
import Bar from './bar';
import Foot from './footer';

function Account() {
  return (
    <div>
      <Bar />
      <div className='mt-5 p-3'>
        <h3 className='text-center'>Login to your account</h3>
        <div className="d-flex justify-content-center">
          <div className="form-container">
            <Form className='account'>
              <Form.Group className="m-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="m-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className='d-flex justify-content-center'>
                <Button variant="light" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <Foot />
    </div>
  );
}

export default Account;
