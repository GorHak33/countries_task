import React from "react";
import { Box, Divider } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/MainContent/Content";
import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CountryDetailPage from "./page/CountryDetailPage";
import Footer from "./components/footer/Footer";

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/all?fields=name`
        );
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    setQuery("");

    fetchData();
  }, []);

  return (
    <Box sx={{ backgroundColor: "#2B2B2B", overflowY: "auto" }}>
      <Navbar setQuery={setQuery} query={query} />
      <Routes>
        <Route
          path="/"
          element={<Content countries={countries} query={query} />}
        />
        <Route
          path="country/:countryName"
          element={<CountryDetailPage setQuery={setQuery} />}
        />
      </Routes>
      <Divider
        sx={{ backgroundColor: "black", color: "white", height: "20px" }}
      />
      <Footer />
    </Box>
  );
}

export default App;
