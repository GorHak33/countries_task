import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#2B2B2B",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },

  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar({ setQuery, query }) {
  const [searchQuery, setSearchQuery] = useState();

  const onQueryChange = e => {
    setSearchQuery(e.target.value);
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    setQuery(searchQuery);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#2B2B2B" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap component="div">
            LOGO
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Search sx={{ marginRight: 1 }}>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={query}
                onChange={e => onQueryChange(e)}
              />
            </Search>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleSearch()}
              sx={{ backgroundColor: "#BFAFF2" }}
            >
              Search
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
