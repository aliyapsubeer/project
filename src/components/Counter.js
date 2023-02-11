import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
  var [inc,setinc] = useState(0);
  const incounter=()=>{
    setinc(inc+1);
    
  }
  const decounter=()=>{
    setinc(inc-1);
  }
  return (
    <div>
      <Typography variant='h4'>{inc}</Typography>
      <Button variant='contained' color='primary' onClick={incounter}>+</Button>
      <Button variant='contained' color='error' onClick={decounter}>-</Button>
    </div>
  )
}

export default Counter
