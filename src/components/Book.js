import { Box, Button, TextField, Typography } from '@mui/material'
import useForm from './Read'
import React from 'react'

const Book = () => {
    var [books, setbooks] = useForm({title:"",QUAN:"",price:"DESCR"})
    // const addtitle =(event)=>{
        // setbooks(event.value.target);
        
        // }
  return (
    <div>
      <Box component= 'div' sx={{width: '40%', m: 'auto', p:10, border: '3px solid violet', backgroundColor: 'yellow'}}>
      <Typography variant='h3' textAlign={'center'}>TO-DO-APPLICATION</Typography>
      <TextField name= 'title' onChange={setbooks} variant='outlined' label="TODOTITLE" fullWidth sx={{backgroundColor:'white'}}/>
      <br></br>
      <TextField name= 'QUAN' variant='outlined' onChange={setbooks} label="QUANTITY" fullWidth sx={{backgroundColor:'lightblue'}}/>   
      <TextField name= 'DESCR'variant='outlined' onChange={setbooks} label="DESRIPTION" fullWidth sx={{backgroundColor:'pink'}} />
      <Button variant='contained' color='error' style={{position:'center'}}>submit</Button>
      <Typography variant='h5'>{books.title}</Typography>
      <Typography variant='h5'>{books.DESCR}</Typography>
      <Typography variant='h5'>{books.QUAN}</Typography>
      </Box>
    </div>
  )
}

export default Book
