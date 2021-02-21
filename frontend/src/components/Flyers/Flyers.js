import React from 'react'
import Card from '../../components/Card/Card'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = (theme) => ({
  grid: {
    'margin-top': '10px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  spinner: {
    textAlign: 'center',
  },
})

const flyers = (props) => {
  const { classes } = props
  let cards = (
    <Grid item xs={12} sm={12} className={classes.spinner}>
      <CircularProgress />
    </Grid>
  )
  if (!props.isLoading) {
    cards = props.flyers.map((flyer) => (
      <Grid item xs={6} sm={3} key={flyer.id}>
        <Card className={classes.paper} {...flyer} clicked={() => props.favoriteClicked(flyer.id)} />
      </Grid>
    ))
  }

  return (
    <Grid className={classes.grid} container spacing={3}>
      {cards}
    </Grid>
  )
}
/**
 * I only want to re-render the list, if there are actual changes
 * i.e prevents re-rendering when clicking the favorite icon
 * @param {*} prevProps 
 * @param {*} newProps 
 */
const areEqual = (prevProps, newProps) => {
  return JSON.stringify(prevProps.flyers) === JSON.stringify(newProps.flyers)
}

export default React.memo(withStyles(useStyles)(flyers), areEqual)
