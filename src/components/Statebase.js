import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebase = () => {
    var [pname, setpname]= useState("aliyaaysha");
    const changename=()=>{
        setpname("shagan");
    }
  return (
    <div>
      <Typography variant='h4'>welcome {pname}</Typography>
      <Button color='secondary' variant="contained" onMouseOver={changename}>change'</Button>
    </div>
  )
}

export default Statebase
