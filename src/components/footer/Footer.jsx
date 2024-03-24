import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#2B2B2B",
  color: "white",
  padding: theme.spacing(2),
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  padding: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "20ch",
  },
}));

const Footer = () => {
  const [value, setValue] = useState("");

  return (
    <FooterContainer>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <Box width={{ xs: "100%", sm: "50%" }} marginBottom={{ xs: 2, sm: 0 }}>
          <Typography variant="h6">LOGO</Typography>
          <List sx={{ display: "flex", gap: 2 }}>
            <ListItem>
              <ListItemText primary="Logo 2022" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Privacy policy" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Cookies policy" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Terms of use" />
            </ListItem>
          </List>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems={{ xs: "flex-start", sm: "center" }}
        >
          <Typography variant="body1" marginBottom="10px">
            Right to your inbox
          </Typography>
          <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          </Search>
        </Box>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#BFAFF2", width: "300px" }}
        >
          Send
        </Button>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
