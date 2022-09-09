import * as React from 'react';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { 
  Grid,
  Button,
  Container,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper 
} from '@mui/material';
import UserForm from '../../Components/UserForm'
import Header from '../../Layouts/Header/Index'
import Footer from '../../Layouts/Footer/Index'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, email, department, location, id) {
  return { name, email, department, location, id };
}

//dummy data
const rows = [
  createData('Jepoy Factoran', 'john.factoran@awsys-i.com', 'Dev F', 'Alabang'),
  createData('Christian Gil Aquino', 'christian.aquino@awsys-i.com', 'Dev F', 'Makati'),
];

export default function Index() {
  const [userFormState, setUserFormState] = React.useState(false);
  const [tableState, setTableState] = React.useState(true);
  const [createButtonState, setCreateButtonState] = React.useState(true);

  const handleClick = (e) => {
    setUserFormState(current => !current);
    setTableState(current => !current);
    setCreateButtonState(current => !current);
  };

  return (
    <>
      <Header/>
        <Container sx={{ mt:4 }}>
          <Button variant="contained" sx={{ mb:4 }} onClick={handleClick}>
            {
              createButtonState ? 'Create' : 'Cancel'
            }
          </Button>
        </Container>
        {
          tableState &&
          <Container>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell align="center">Email</StyledTableCell>
                    <StyledTableCell align="center">Department</StyledTableCell>
                    <StyledTableCell align="center">Location</StyledTableCell>
                    <StyledTableCell align="center">Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="center">{row.email}</StyledTableCell>
                      <StyledTableCell align="center">{row.department}</StyledTableCell>
                      <StyledTableCell align="center">{row.location}</StyledTableCell>
                      <StyledTableCell align="center">
                        <Button variant="outlined">
                          edit
                        </Button>
                        &ensp;
                        <Button variant="outlined" color="error">
                          delete
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container> 
        }
        <Grid container spacing={0} direction="column" alignItems="center">
          <Grid item xs={3}>
            {
              userFormState && 
              <UserForm></UserForm>
            }
          </Grid>   
        </Grid> 
      <Footer/>
    </>
  );
}
