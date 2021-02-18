import { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { withStyles } from '@material-ui/core/styles'

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    'margin-top': '10px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})

class FlyersContainer extends Component {
  render() {
    const { classes } = this.props
    return (
      <Container maxWidth="m" className={classes.root}>
        <Grid className={classes.grid} container spacing={3}>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default withStyles(useStyles)(FlyersContainer)
