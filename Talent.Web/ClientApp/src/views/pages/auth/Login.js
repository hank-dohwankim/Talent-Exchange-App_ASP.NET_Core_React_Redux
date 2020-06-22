import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const { username, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('SUCCESS');
  };

  return (
    <Fragment>
      <Container>
        <div id="container">
          <form className="form-wrap" onSubmit={(e) => onSubmit(e)}>
            {/* <h1 className="large text-primary">Sign In</h1> */}
            <p className="lead">
              <i className="fas fa-user"></i> Sign Into Your Account
            </p>
            <div className="form-group">
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                minLength="6"
              />
            </div>
            <button type="submit" className="btn-submit" value="Login">
              Login
            </button>
          </form>
          <footer>
            <p className="my-1">
              Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
          </footer>
        </div>
      </Container>
    </Fragment>
  );
};

const Container = styled.div`
  #container {
    background: #fff;
    margin: 30px auto;
    max-width: 400px;
    padding: 20px;
  }

  .form-wrap {
    background: #fff;
    padding: 15px 25px;
    color: #333;
  }

  .form-wrap h1,
  p {
    text-align: center;
    margin: 10px;
  }

  .form-wrap .form-group {
    display: inline-block;
    width: 100%;
    margin-top: 15px;
  }

  .form-wrap .form-group input {
    border: #ddd 1px solid;
    border-radius: 5px;
    width: 100%;
    height: 2em;
  }

  .form-wrap .form-group input:focus {
    outline-color: #28a745;
  }

  .form-wrap .btn-submit {
    cursor: pointer;
    display: inline-block;
    padding: 10px 30px;
    color: #fff;
    background-color: #28a745;
    border: none;
    border-radius: 5px;
    color: #fff;
    width: 100%;
    margin-top: 20px;
  }
  .btn-submit:hover {
    opacity: 0.9;
    transition-duration: 0.2s;
  }

  footer {
    text-align: center;
    margin-top: 10px;
  }
`;

export default Login;
