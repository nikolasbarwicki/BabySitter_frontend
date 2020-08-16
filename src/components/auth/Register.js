import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import FormInput from '../FormInput';

const Register = ({ isAuthenticated, setAlert, register }) => {
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
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, surname, email, role, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: '90vh' }}
    >
      <div className="row d-flex justify-content-center align-items-center">
        <div className="card col-12 col-md-8 col-lg-6 col-xl-4">
          <div className="card-body">
            <h4 className="text-center mb-3">Sign up</h4>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="row mb-3">
                <div className="col">
                  <FormInput
                    id="name"
                    placeholder="First name"
                    value={name}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="col">
                  <FormInput
                    id="surname"
                    placeholder="Surname"
                    value={surname}
                    onChange={(e) => onChange(e)}
                  />
                </div>
              </div>

              <div className="mb-3">
                <FormInput
                  id="email"
                  type="email"
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
                <FormInput
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="mb-5">
                <FormInput
                  id="password2"
                  type="password"
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
