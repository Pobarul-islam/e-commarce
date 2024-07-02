import { Button, Grid, Link, Typography } from '@mui/material';

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
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            {' '}
            <Button className="pb-5" variant="h6" gutterBottom>
              About
            </Button>
          </div>
          <div>
            {' '}
            <Button className="pb-5" variant="h6" gutterBottom>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Press
            </Button>
          </div>
          <div>
            {' '}
            <Button className="pb-5" variant="h6" gutterBottom>
              Jobs
            </Button>
          </div>
          <div>
            {' '}
            <Button className="pb-5" variant="h6" gutterBottom>
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div>
            {' '}
            <Button className="pb-5" variant="h6" gutterBottom>
              Marketing
            </Button>
          </div>
          <div>
            {' '}
            <Button className="pb-5" variant="h6" gutterBottom>
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Commarce
            </Button>
          </div>
          <div>
            {' '}
            <Button className="pb-5" variant="h6" gutterBottom>
              Insights
            </Button>
          </div>
          <div>
            {' '}
            <Button className="pb-5" variant="h6" gutterBottom>
              Support
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
            {' '}
            <Button className="pb-5" variant="h6" gutterBottom>
              Guide
            </Button>
          </div>
          <div>
            {' '}
            <Button className="pb-5" variant="h6" gutterBottom>
              Api Status
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            {' '}
            <Button className="pb-5" variant="h6" gutterBottom>
              Claim
            </Button>
          </div>{' '}
          <div>
            {' '}
            <Button className="pb-5" variant="h6" gutterBottom>
              Privacy
            </Button>
          </div>
          <div>
            {' '}
            <Button className="pb-5" variant="h6" gutterBottom>
              Terms
            </Button>
          </div>
        </Grid>
        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2024 My Company. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made by Formalwala.com
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Icon Made by
            <Link
              href="https://www.freepic.com"
              color="inherit"
              underline="always"
            >
              &nbsp;Formal wala &nbsp;
            </Link>
            <Link
              href="https://www.flaticon.com"
              color="inherit"
              underline="always"
            >
              from wala man
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
