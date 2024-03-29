import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useStyles } from './utils';

function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState();

  function handleLogout() {
    localStorage.clear();
    props.setIsLoggedIn(false);
  }
  console.log(props.isLoggedIn);
  return (
   
    <AppBar position="sticky" sx={{ background: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,19,121,1) 0%, rgba(0,212,255,1) 100%)` }}>
      <Toolbar>
        <Typography className={classes.font} variant="h4">Blog App</Typography>
        {props.isLoggedIn && <Box display='flex' marginLeft={'auto'} marginRight={'auto'}>
          <Tabs textColor="inherite" value={value} onChange={(e, val) => setValue(val)}>
            <Tab className={classes.font} LinkComponent={Link} to="/blogs" label="All Blogs" />
            <Tab className={classes.font} LinkComponent={Link} to="/myBlogs" label="My Blogs" />
            <Tab className={classes.font} LinkComponent={Link} to="/blogs/add" label="Add Blogs" />
          </Tabs>
        </Box>}
        <Box display="flex" marginLeft={"auto"}>
          {!props.isLoggedIn && <>
            <Button LinkComponent={Link} to="/auth" variant="contained" sx={{ margin: 1, borderRadius: 10 }} color="warning">Login</Button>
            <Button LinkComponent={Link} to="/auth" variant="contained" sx={{ margin: 1, borderRadius: 10 }} color="warning">Signup</Button></>}
          {props.isLoggedIn && < Button onClick={handleLogout} LinkComponent={Link} to="/auth" variant="contained" sx={{ margin: 1, borderRadius: 10 }} color="warning">Logout</Button>}
        </Box>
      </Toolbar>
    </AppBar >
  )
}

export default Header