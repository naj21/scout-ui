import React, { useState } from "react";
import { graphql } from "react-apollo";
import { getCountryQuery } from "../../queries/queries";

const CountryDetails = props => {
  const displayCountry = () => {
    const { data } = props;
    const [display, setDisplay] = useState(false);
    if (!data.country || data.loading) {
      return <p className="text">Loading...</p>;
    } else {
      return (
        <div>
          <p className="text">{data.country.name} DETAILS</p>
          <p>Currency: {data.country.currency}</p>
          <p>Area code: {data.country.phone}</p>
          {!display ? (
            <button onClick={() => setDisplay(true)} className="link">
              more
            </button>
          ) : (
            <div>
              <p>Native: {data.country.native}</p>
              <p>Continent: {data.country.continent.name}</p>
            </div>
          )}
        </div>
      );
    }
  };
  return (
    <div className="content country">
      <i
        className="fa fa-arrow-left previous"
        onClick={() => props.history.goBack()}
      />

      {displayCountry()}
    </div>
  );
};

export default graphql(getCountryQuery, {
  options: props => {
    const code = props.location.pathname.split("/")[2];
    return {
      variables: {
        code
      }
    };
  }
})(CountryDetails);
