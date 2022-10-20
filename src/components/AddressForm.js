import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ProductImage from "../image/product.png"

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Product Info
      </Typography>
      <Grid container spacing={3}>

        <Grid item xs={12} sm={6}>
         <img src={ProductImage} width="100"></img>
        </Grid>

      </Grid>
    </React.Fragment>
  );
}
