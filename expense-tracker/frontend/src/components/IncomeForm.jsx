import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'

const IncomeForm = ({ setForceRefresh }) => {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()

        const income = {title, amount ,description}
        const response = await fetch("http://localhost:4000/api/transac/addIncome", {
            method: 'POST',
            body: JSON.stringify(income),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok) {
            alert(json.message)
        }

        if(response.ok) {
            setTitle('')
            setAmount('')
            setDescription('')
            console.log("new income added", json);
            setForceRefresh(true)
        }

    } 

  return (
    <form onSubmit={handleSubmit} style={{marginTop: "15px"}}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <TextField
            label="Salary Title"
            variant="outlined"
            fullWidth
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={10}>
          <TextField
            type="number"
            label="Salary Amount (in ₹)"
            variant="outlined"
            fullWidth
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Grid>
        <Grid item xs={10}>
          <TextField
            label="Add a reference"
            variant="outlined"
            fullWidth
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline
            maxRows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Add income
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default IncomeForm