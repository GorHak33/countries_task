import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";

const CustomBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#2B2B2B",
  padding: "20px",
});

const CustomContainer = styled(Box)({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingRight: "20px",
});

const CustomListContainer = styled(Box)({
  width: "50%",
  padding: "20px",
  borderRadius: "90px",
  marginTop: "10px",
  overflowY: "auto",
  backgroundColor: "gray",
  alignItems: "center",
  overflow: "hidden",
});

const Content = ({ countries, query }) => {
  const commonNamesCountries = countries.map(country => country.name.common);

  const filteredCountries = query
    ? commonNamesCountries.filter(countryName =>
        countryName.toLowerCase().startsWith(query.toLowerCase())
      )
    : commonNamesCountries;

  const randomStartIndex = Math.floor(Math.random() * filteredCountries.length);

  return (
    <CustomBox>
      <CustomContainer>
        <Typography variant="h2" sx={{ color: "white" }}>
          Discover the World with Beautiful Countries
        </Typography>
        <Typography variant="h3" sx={{ color: "gray", mt: 2 }}>
          Explore the rich cultural diversity and natural beauty of different
          countries around the globe.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#F8D57E",
            color: "white",
            padding: "15px 30px",
            fontSize: "1.2rem",
            marginTop: "20px",
          }}
        >
          Click on me
        </Button>
      </CustomContainer>

      <CustomListContainer>
        <Typography variant="h2" sx={{ color: "white" }}>
          Random Countries
        </Typography>
        <List sx={{ width: "100%" }}>
          {filteredCountries.length > 0 ? (
            filteredCountries
              .slice(randomStartIndex, randomStartIndex + 8)
              .map((country, index) => (
                <ListItem
                  key={index}
                  component={Link}
                  to={`/country/${country}`}
                  sx={{
                    color: "black",
                    borderRadius: "5px",
                    marginBottom: "10px",
                    "&:hover": {
                      backgroundColor: "#f0f0f0",
                      borderRadius: "10px",
                    },
                  }}
                >
                  <ListItemText primary={country} />
                </ListItem>
              ))
          ) : (
            <Typography variant="h2" sx={{ color: "white" }}>
              No matching countries found
            </Typography>
          )}
        </List>
      </CustomListContainer>
    </CustomBox>
  );
};

export default Content;
