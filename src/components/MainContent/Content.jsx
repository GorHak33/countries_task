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
import pic from "../../assets/pic.png";

const CustomBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#2B2B2B",
  padding: "20px",
  "@media (max-width: 768px)": {
    flexDirection: "column",
  },
});

const CustomContainer = styled(Box)({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingRight: "20px",
  "@media (max-width: 768px)": {
    width: "100%",
    paddingRight: 0,
    marginBottom: "20px",
  },
});

const CustomListContainer = styled(Box)({
  width: "50%",
  padding: "20px",
  borderRadius: "20px",
  marginTop: "10px",
  overflowY: "auto",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  "@media (max-width: 768px)": {
    width: "100%",
  },
});

const ResponsiveImage = styled("img")({
  width: "75%",
  maxWidth: "100%",
  height: "auto",
});

const StyledListItem = styled(ListItem)({
  borderRadius: "10px",
  marginBottom: "10px",
  "&:hover": {
    backgroundColor: "#f0f0f0",
    borderRadius: "10px",
  },
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
        <ResponsiveImage src={pic} alt="Sample" />
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
        <Typography
          variant="h2"
          sx={{ color: "#2B2B2B", marginBottom: "15px" }}
        >
          Random Countries
        </Typography>
        <List sx={{ width: "100%" }}>
          {filteredCountries.length > 0 ? (
            filteredCountries
              .slice(randomStartIndex, randomStartIndex + 8)
              .map((country, index) => (
                <StyledListItem
                  key={index}
                  component={Link}
                  to={`/country/${country}`}
                >
                  <ListItemText primary={country} />
                </StyledListItem>
              ))
          ) : (
            <Typography variant="h2" sx={{ color: "#2B2B2B" }}>
              No matching countries found
            </Typography>
          )}
        </List>
      </CustomListContainer>
    </CustomBox>
  );
};

export default Content;
