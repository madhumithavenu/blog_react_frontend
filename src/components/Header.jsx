import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Header() {
  const [value, setValue] = useState();
  return (
    <AppBar position='sticky' sx={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,19,121,1) 0%, rgba(0,212,255,1) 100%)' }}>
      <Toolbar>
        <Typography variant='h4'>Blog App</Typography>
        <Box display={'flex'} marginLeft={'auto'} marginRight={'auto'}>
          <Tabs textColor='inherit' value={value} onChange={(e,val)=>setValue(val)}>
            <Tab LinkComponent={Link} to="/blogs" label="All Blogs"/>
            <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs"/>
          </Tabs>
        </Box>
        <Box display={'flex'} marginLeft={'auto'}>
          <Button LinkComponent={Link} to="/auth" variant='contained' sx={{margin:1, borderRadius:10}} color='warning'>Login</Button>
          <Button LinkComponent={Link} to="/auth" variant='contained' sx={{margin:1, borderRadius:10}} color='warning'>Signup</Button>
          <Button LinkComponent={Link} to="/auth" variant='contained' sx={{margin:1, borderRadius:10}} color='warning'>Logout</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header