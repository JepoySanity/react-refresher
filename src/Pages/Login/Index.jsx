import {Grid,Container,Typography,TextField,Button} from '@mui/material'

export default function Index(){
    return (
        <>
            <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
                <Grid item xs={3}>
                    <Container>
                        <Typography variant="h5" sx={{ mb:4 }}>Please Login</Typography>
                        <form>
                            <TextField
                                style={{ width: "500px", margin: "5px" }}
                                type="text"
                                label="Username"
                                variant="outlined"
                            />
                            <br />
                            <TextField
                                style={{ width: "500px", margin: "5px" }}
                                type="text"
                                label="Password"
                                variant="outlined"
                            />
                            <br />
                            <Button variant="contained" color="primary" sx={{mt:4}}>
                                Login
                            </Button>
                        </form>
                    </Container>
                </Grid>   
            </Grid> 
        </>
    )
}


