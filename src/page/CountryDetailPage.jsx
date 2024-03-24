import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Typography, Divider, Button } from "@mui/material";

export default function CountryDetailPage({ setQuery }) {
  const { countryName } = useParams();
  const [countryData, setCountryData] = useState(null);
  const [isOpen, setIsOpen] = useState({
    flag: false,
    population: false,
    currency: false,
    capital: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
        );
        const data = await response.json();
        setCountryData(data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [countryName]);

  useEffect(() => {
    return () => {
      setQuery("");
    };
  }, [setQuery]);

  const toggleSection = section => {
    setIsOpen({
      ...isOpen,
      [section]: !isOpen[section],
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minHeight: "calc(100vh - 60px)",
      }}
    >
      {countryData ? (
        <>
          <Typography variant="h2" color="gray" sx={{ mb: 2 }}>
            {countryData.name.common} Info
          </Typography>
          <Box
            sx={{
              backgroundColor: "gray",
              padding: "20px",
              width: "90%",
              maxWidth: "500px",
              borderRadius: "20px",
              marginTop: "10px",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                color="white"
                onClick={() => toggleSection("flag")}
                sx={{ cursor: "pointer" }}
              >
                Flag
              </Typography>
              {isOpen.flag && (
                <Box sx={{ padding: "10px" }}>
                  <img
                    src={countryData.flags.png}
                    alt="Country Flag"
                    style={{
                      width: "100%",
                      maxWidth: "150px",
                      borderRadius: "10px",
                    }}
                  />
                </Box>
              )}
              <Divider sx={{ my: 1 }} />
            </Box>
            <Box>
              <Typography
                variant="h6"
                color="white"
                onClick={() => toggleSection("population")}
                sx={{ cursor: "pointer" }}
              >
                Population
              </Typography>
              {isOpen.population && (
                <Typography>{countryData.population}</Typography>
              )}
              <Divider sx={{ my: 1 }} />
            </Box>
            <Box>
              <Typography
                variant="h6"
                color="white"
                onClick={() => toggleSection("currency")}
                sx={{ cursor: "pointer" }}
              >
                Currency
              </Typography>
              {isOpen.currency && (
                <Typography>
                  {Object.values(countryData.currencies)[0].name}
                </Typography>
              )}
              <Divider sx={{ my: 1 }} />
            </Box>
            <Box>
              <Typography
                variant="h6"
                color="white"
                onClick={() => toggleSection("capital")}
                sx={{ cursor: "pointer" }}
              >
                Capital
              </Typography>
              {isOpen.capital && <Typography>{countryData.capital}</Typography>}
              <Divider sx={{ my: 1 }} />
            </Box>
            <Button
              component={Link}
              to="/"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Back to Homepage
            </Button>
          </Box>
        </>
      ) : (
        <Typography variant="h2">Loading...</Typography>
      )}
    </Box>
  );
}
