import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { withStyles } from '@material-ui/core/styles'

import img from '../../assets/imgs/1.png'
import img2 from '../../assets/imgs/2.png'

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    'margin-top': '10px',
  },
  uppercase: {
    'text-transform': 'uppercase',
    'letter-spacing': '2px',
  },
  textOverflow: {
    'white-space': 'nowrap',
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
  },
})
const card = (props) => {
  const { classes } = props
  return (
    <Card
    // className={classes.root}
    >
      <CardMedia
        style={{
          height: 0,
          paddingTop: '56.25%', // 16:9
        }}
        // className={classes.media}
        image={props.id % 2 === 0 ? img : img2}
        title="Paella dish"
      />
      <CardContent>
        <Typography className={classes.uppercase} variant="subtitle2">
          {props.retailer}
        </Typography>
        <Typography className={classes.textOverflow} variant="h6">
          {props.title}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          {props.category}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={props.clicked}>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default withStyles(useStyles)(card)
