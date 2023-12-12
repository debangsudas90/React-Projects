import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'

const ExpenseForm = ({ setForceRefresh }) => {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()

        const expense = {title, amount ,description}
        const response = await fetch("http://localhost:4000/api/transac/addExpense", {
            method: 'POST',
            body: JSON.stringify(expense),
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
            console.log("new expense added", json);
            setForceRefresh(true)
        }

    } 

  return (
    <form onSubmit={handleSubmit} style={{marginTop: "15px"}}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <TextField
            label="Expense Title"
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
            label="Expense Amount (in ₹)"
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
            Add expense
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default ExpenseForm