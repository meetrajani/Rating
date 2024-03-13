import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_PRODUCET_PROGRESS,
  GET_PRODUCET_PROGRESS,
  POST_PRODUCET_PROGRESS,
} from "../redux-saga/Producet/Action/Action";

const Data = () => {
  const dispatch = useDispatch();

  // RATING

  function handleStarRatingChange(rating) {
    setUdata({ ...Udata, rating: rating });
  }

  function renderStars(maxRating) {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleStarRatingChange(i)}
          style={{
            cursor: "pointer",
            color: i <= Udata.rating ? "gold" : "gray",
          }}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  }

  const data = useSelector((state) => state.getProducerReducer);

  // GET DATA

  useEffect(() => {
    dispatch({ type: GET_PRODUCET_PROGRESS });
  }, []);

  // SUBMIT DATA

  const [Udata, setUdata] = useState([]);

  const handlchang = (e) => {
    setUdata({ ...Udata, [e.target.name]: e.target.value });
  };

  const Submitdata = () => {
    console.log(Udata);
    dispatch({ type: POST_PRODUCET_PROGRESS, paylod: Udata });
  };

  // DELETE DATA 

  const Deletedata = (id) => {
    dispatch({ type: DELETE_PRODUCET_PROGRESS, paylod: id });
  };



  return (
    <>
      {/* INPUT DATA */}

      <div className="container">
        <form>
          <div className="form-floating">
            <input
              type="text"
              name="title"
              className="form-control ps-2 m-2"
              onChange={handlchang}
              placeholder="Title"
              received
            />
            <label htmlFor="floatingInput">Title</label>
          </div>
          <div>
            <textarea
              className="form-control m-2"
              rows="6"
              name="Description"
              onChange={handlchang}
              received
            ></textarea>
          </div>

          <div style={{ textAlign: "center" }}>{renderStars(5)}</div>

          <button
            className="btn btn-primary w-100 py-2 m-2"
            onClick={Submitdata}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      {/* SOW DATA */}

      <table className="table" style={{ textAlign: "center" }}>
        <thead className="">
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Rating</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.producet.map((e, index) => {
            return (
              <>
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{e.title}</td>
                  <td>{e.Description}</td>
                  <td>{e.rating}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => Deletedata(e.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Data;
