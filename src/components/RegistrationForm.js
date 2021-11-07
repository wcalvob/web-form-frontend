import React, { useState, useEffect } from "react";

const RegistrationForm = ({ getUsers }) => {
  const [countries, setCountries] = useState([]);
  const [inputs, setInputs] = useState({
    name: "",
    country: "",
  });
  const urlBase = "https://www.universal-tutorial.com/api/";

  const getCountries = async () => {
    const configAcces = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "api-token":
          "byDLoDgW0w2OjmQNJZSWPfHbu7ToUjnpYuHAmyB2O-g50lfuyFesN4fAkT2mRI7HPvM",
        "user-email": "wilton1121@gmail.com",
      },
    };
    const respAcces = await fetch(`${urlBase}getaccesstoken`, configAcces);
    const dataAcces = await respAcces.json();

    const configCountries = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${dataAcces.auth_token}`,
        Accept: "application/json",
      },
    };
    const respCountries = await fetch(`${urlBase}countries`, configCountries);
    const dataCountries = await respCountries.json();
    setCountries(dataCountries);
  };

  useEffect(() => {
    getCountries();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputs.name === "" || inputs.country === "") {
      alert("Deber diligenciar todos los campos");
    } else {
      const config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      };
      const url = "http://localhost:8080/users";
      await fetch(url, config);
      setInputs({
        name: "",
        country: "",
      });
      getUsers();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div className="text-center col-auto">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Nombre completo"
            onChange={handleChange}
            value={inputs.name}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            name="country"
            onChange={handleChange}
            value={inputs.country}
          >
            <option value="" defaultValue>
              Seleccione el país
            </option>
            {countries.map((country) => (
              <option key={country.country_name}>{country.country_name}</option>
            ))}
          </select>
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
