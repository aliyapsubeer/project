import { Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'

const Useeffect = () => {
    var [mypage, setmypage] = useEffect("homepage");
const sethomepage = () => 
{
    setmypage("homepage");
}
const setgallerypage = () => 
{
    setmypage("gallery");
}
const setcontactpage = () => 
{
    setmypage("contactpage");
}
  return (
    <div>
      <Button variant='contained' color='primary' onClick={sethomepage}></Button>
      <Button variant='contained' color='secondary' onClick={setgallerypage}></Button> 
      <Button variant='contained' color='success' onClick={setcontactpage}></Button>
      <Typography variant='h3'>welcome to {mypage}</Typography>
    
    </div>
  )
}
export default Useeffect
