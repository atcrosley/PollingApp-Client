import React from "react";
import loginImg from "../../login.svg";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <Form action="#">
              <h1>Create Account</h1>
              <span>Use your work email and create unique password</span>
              <Input type="email" placeholder="email" />
              <Input type="password" placeholder="password" />
              <Button>Sign Up</Button>
            </Form>
          </div>
          <div class="form-container sign-in-container">
            <Form action="#">
              <h1>Sign In</h1>
              <span>Sign in with your work email and password</span>
              <Input type="email" placeholder="email" />
              <Input type="password" placeholder="password" />
              <Button>Sign In</Button>
            </Form>
          </div>
          <div class="overlay-conatiner">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  There are polls waiting for your input! Login with your info
                </p>
                <Button className="ghost" id="signUp">
                  Sign In
                </Button>
              </div>
              <div className="overlay-panel overlay-right">
                <p>Haven't signed up yet? click the button below!</p>
                <Button className="ghost" id="SignUp">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
