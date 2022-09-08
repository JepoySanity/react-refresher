import * as React from "react";
import {
  Typography,
  TextField,
  Button,
  Container,
  Box
} from "@mui/material";

export default function Index() {
  return (
    <>
        <Box sx={{ mt:4 }}>
        <Container>
        <Typography variant="h5" sx={{ mb:4 }}>New Developer</Typography>
        <form>
            <TextField
            style={{ width: "500px", margin: "5px" }}
            type="text"
            label="Fullname"
            variant="outlined"
            />
            <br />
            <TextField
            style={{ width: "500px", margin: "5px" }}
            type="text"
            label="Email"
            variant="outlined"
            />
            <br />
            <TextField
            style={{ width: "500px", margin: "5px" }}
            type="text"
            label="Department"
            variant="outlined"
            />
            <br />
            <TextField
            style={{ width: "500px", margin: "5px" }}
            type="text"
            label="Location"
            variant="outlined"
            />
            <br />
            <Button variant="contained" color="primary" sx={{mt:4}}>
            save
            </Button>
        </form>
        </Container>
        </Box>
    </>
  );
}
