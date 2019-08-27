import React, { useState } from "react";
import { graphql } from "react-apollo";
import { withRouter } from "react-router-dom";
import { getCountriesQuery } from "../../queries/queries";
import Select from "../../shared/Select";
import Button from "../../shared/Button";
import Card from "../../shared/Card";

const CountryList = props => {
  const [code, setCode] = useState(null);
  let { data } = props;

  const viewDetails = (value) => {
    const { match, history } = props;
    history.push(`${match.url}/${code  ? code : value }`);
  };

  const displayCountries = () => {
    if (data.loading) {
      return <p>Loading Countries...</p>;
    }
    return (
      <div className="cards">
        {data.countries
          ? data.countries.map(country => (
              <Card onClick={() =>viewDetails(country.code)}>
                <p className="text">{country.name}</p>
                <p>Continent: {country.continent.name}</p>
                <p>Native: {country.native}</p>
                <p>
                  Languages:{" "}
                  {country.languages.map(language => (
                    <li key={language.code}>{language.name}</li>
                  ))}
                </p>
              </Card>
            ))
          : null}
      </div>
    );
  };

  const setValue = value => {
    const country = data.countries.find(country => country.name === value);
    country && setCode(country.code);
  };
  return (
    <div>
      <i className="fa fa-arrow-left previous"  onClick={() => props.history.push('/')} />
      <div className="content country">
        {displayCountries()}
        <div className="details">
          <p>View details</p>
          <Select
            options={
              data.countries
                ? data.countries.map(country => ({
                    value: country.name,
                    key: country.code
                  }))
                : [{ value: "Loading...", key: "loading" }]
            }
            text={"--Select--"}
            action={setValue}
          />
          <Button
            text={"View"}
            onClick={() => viewDetails()}
            disabled={!code ? true : false}
          />
        </div>
      </div>
    </div>
  );
};

export default graphql(getCountriesQuery)(withRouter(CountryList));
