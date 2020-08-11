import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('Login success!');
  };

  return (
    <div className="container">
      <div className="row vh-100 d-flex justify-content-center align-items-center">
        <div className="card col-12 col-md-8 col-lg-6 col-xl-4">
          <div className="card-body">
            <h4 className="text-center mb-3">Log in</h4>
            <form className="form" onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-3"
                >
                  Log in
                </button>
              </div>
              <hr className="mt-2 mb-3" />
              <div className="d-inline-flex col-12 justify-content-center">
                <p className="mr-1 font-weight-bold">
                  Don&apos;t have an account?
                </p>
                <Link to="/register" className="font-weight-bold">
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
