import React, { useState } from "react";
import Header from "../Header/Header";
import "./SearchPage.css";
import map from "../../images/Map.png";
import { useForm } from "react-hook-form";
import SearchResult from "../SearchResult/SearchResult";
import { useParams } from "react-router-dom";
const SearchPage = () => {
  const { transportId } = useParams();
  const [address, setAddress] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setAddress(data);
  };

  return (
    <div>
      <Header> </Header>
      <div className="container search-page mt-5">
        <div className="row mt-3">
          <div className="col-12 col-sm-4 my-4 my-sm-0">
            <div className="card">
              {address.pickForm ? (
                <div className="search-area">
                  <SearchResult data={address} id={transportId}></SearchResult>
                </div>
              ) : (
                <form className="search-area" onSubmit={handleSubmit(onSubmit)}>
                  <h5>Pick Form</h5>
                  <input
                    className="input-from"
                    {...register("pickForm", {
                      required: true,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                    placeholder="Type here.."
                  />
                  {errors.pickForm && (
                    <span className="error">This field is required</span>
                  )}
                  <h5>Pick To</h5>
                  <input
                    className="input-from"
                    {...register("pickTo", {
                      required: true,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                    placeholder="Type here.."
                  />
                  {errors.pickTo && (
                    <span className="error">This field is required</span>
                  )}
                  <input
                    className="input-from submit-btn"
                    type="submit"
                    value="Search"
                  />
                </form>
              )}
            </div>
          </div>
          <div className="col-12 col-sm-8 mt-5 mt-sm-0">
            <img src={map} className="w-100" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
