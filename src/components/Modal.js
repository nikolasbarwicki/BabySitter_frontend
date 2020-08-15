import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ role, deleteParentProfile, deleteSitterProfile }) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="deleteProfileModal"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteProfileModal">
              Delete profile
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Are you sure? This can NOT be undone!
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            {role === 'sitter' ? (
              <button
                onClick={deleteSitterProfile}
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Delete profile
              </button>
            ) : (
              <button
                onClick={deleteParentProfile}
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Delete profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  role: PropTypes.string.isRequired,
  deleteParentProfile: PropTypes.func.isRequired,
  deleteSitterProfile: PropTypes.func.isRequired,
};

export default Modal;
