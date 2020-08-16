import React from 'react';
import PropTypes from 'prop-types';
import { text } from '@fortawesome/fontawesome-svg-core';

const FormInput = ({ id, type = text, placeholder, value, onChange }) => {
  return (
    <>
      <label htmlFor={id} className="form-label">
        {placeholder}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </>
  );
};

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

FormInput.defaultProps = {
  type: 'text',
};

export default FormInput;
