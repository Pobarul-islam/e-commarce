import { Grid, Typography } from '@mui/material';

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{
          bgcolor: 'black',
          color: 'white',
          py: 3,
        }}
      >
        <Grid>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <Typography className="pb-5" variant="h6">
            About
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
