import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';

const Register = ({ isAuthenticated, ...props }) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    role: 'sitter',
    password: '',
    password2: '',
  });

  const { name, surname, email, role, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      props.setAlert('Passwords do not match', 'danger');
    } else {
      props.register({ name, surname, email, role, password });
    }
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-5" />
      <div className="row d-flex justify-content-center ">
        <div className="card col-12 col-md-8 col-lg-6 col-xl-4">
          <div className="card-body">
            <h4 className="text-center mb-3">Sign up</h4>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="First name"
                    value={name}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="col">
                  <label htmlFor="firstName" className="form-label">
                    Surname
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="surname"
                    placeholder="Surname"
                    value={surname}
                    onChange={(e) => onChange(e)}
                  />
                </div>
              </div>

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
                <label htmlFor="role" className="form-label">
                  Role
                </label>
                <select
                  id="role"
                  className="form-select"
                  value={role}
                  onChange={(e) => onChange(e)}
                >
                  <option value="sitter">Babysitter</option>
                  <option value="parent">Parent</option>
                </select>
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
              <div className="mb-3">
                <label htmlFor="password2" className="form-label">
                  Repeat password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password2"
                  placeholder="Repeat password"
                  value={password2}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-3"
                >
                  Sign Up
                </button>
              </div>
              <hr className="mt-2 mb-3" />
              <div className="d-inline-flex col-12 justify-content-center">
                <p className="mr-1 font-weight-bold">
                  Already have an account?
                </p>
                <Link to="/login" className="font-weight-bold">
                  Log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
