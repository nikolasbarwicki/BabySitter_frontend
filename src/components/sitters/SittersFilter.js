import React from 'react';

const SittersFilter = () => {
  return (
    <div className="col-4">
      <h4>Filters</h4>
      <div className="row g-3">
        <div className="col-sm-6">
          <label htmlFor="inputEmail4" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="City"
            aria-label="City"
          />
        </div>

        <div className="col-sm-6">
          <label htmlFor="inputEmail4" className="form-label">
            Distance
          </label>
          <select className="form-select" aria-label="Default select example">
            <option defaultValue value="5">
              5 km
            </option>
            <option value="10">10 km</option>
            <option value="20">20 km</option>
            <option value="50">50 km</option>
            <option value="100">100 km</option>
            <option value="200">200 km</option>
          </select>
        </div>
      </div>
      <div className="row g-3">
        <div className="col-sm-6">
          <label htmlFor="inputEmail4" className="form-label">
            Minimum age
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Minimum age"
            aria-label="Minimum age"
          />
        </div>

        <div className="col-sm-6">
          <label htmlFor="inputEmail4" className="form-label">
            Maximum age
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Maximum age"
            aria-label="Maximum age"
          />
        </div>
      </div>
      <div>
        Experience with age(s)
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            baby
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            toddler
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            preschooler
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            gradeschooler
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            teenager
          </label>
        </div>
      </div>

      <label htmlFor="maximumPay" className="form-label">
        Maxium pay per hour
      </label>
      <div className="input-group mb-3">
        <span className="input-group-text">$</span>

        <input
          type="text"
          className="form-control"
          aria-label="Dollar amount (with dot and two decimal places)"
          id="maximumPay"
        />
      </div>
      <div>
        Skills
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            crafting
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            drawing
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            reading
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            music
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            language
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            games
          </label>
        </div>
      </div>
      <div>
        Comfortable with
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            pets
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            cooking
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            chores
          </label>
        </div>
      </div>
      <div>
        <label htmlFor="inputEmail4" className="form-label">
          Sort by
        </label>
        <select className="form-select" aria-label="Default select example">
          <option defaultValue>Sort by</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
  );
};

export default SittersFilter;
