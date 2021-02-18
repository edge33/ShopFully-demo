import Card from '../../components/Card/Card'
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

const flyers = (props) => {
  const { classes } = props
  const cards = props.flyers.map((flyer) => (
    <Grid item xs={6} sm={3} key={flyer.id}>
      <Card className={classes.paper} {...flyer} clicked={() => props.favoriteClicked(flyer.id)} />
    </Grid>
  ))

  return (
    <Container maxWidth="md" className={classes.root}>
      <Grid className={classes.grid} container spacing={3}>
        {cards}
      </Grid>
    </Container>
  )
}

export default withStyles(useStyles)(flyers)
