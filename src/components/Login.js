import { BottomNavigation, Button, FilledInput, TextField } from '@mui/material'
import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <TextField variant='outlined' label='Email' type="text"></TextField>
      <br></br>
      <br></br>
      <TextField variant='filled' label='password' type="password"></TextField>
      <Button variant='contained'>Login</Button>
      <Header></Header>
  
      
      {/* <input type="text" placeholder="email" />
      <input type="password" placeholder="password" />
   <Button>Login</Button> */}
    </div>
  )
}
export default Login
  