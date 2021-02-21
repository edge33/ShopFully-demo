import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import HomeIcon from '@material-ui/icons/Home'
import FavoriteIcon from '@material-ui/icons/Favorite'

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#36313d',
    font:
      "100%/1.5 -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'",
    fontKerning: 'normal',
    fontFeatureSettings: '"kern", "liga", "clig", "calt"',
    fontSize: 14,
    minHeight: 45,
    lineHeight: '21px',
    margin: 0,
    padding: '12px 48px 12px 1.5rem',
    '&:after': {
      left: 0,
      top: '1.3em',
      height: 8,
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
      transform: 'translateX(-100%)',
    },
    '&:hover, &:focus': {
      background: 'rgba(241,222,250,0.275)',
      color: '#663399',
      fontSize: 28,
      '&:before': {
        background: '#8a4baf',
        transform: 'scale(1)',
      },
    },
  },
  selected: {
    '&.Mui-selected': {
      color: 'rgb(138, 75, 175)',
      background: 'initial',
      '&:hover, &:focus': {
        background: 'rgba(241,222,250,0.275)',
        color: '#663399',
        '&:before': {
          background: '#8a4baf',
          transform: 'scale(1)',
        },
      },
      '&:after': {
        width: 'calc(0.5rem + 8px)',
        background: 'rgb(138, 75, 175)',
        transform: 'translateX(0)',
      },
    },
  },
}))

const FavoritesList = (props) => {
  const classes = useStyles()
  const items = props.favoriteFlyers.map((item, i) => (
    <ListItem key={i} classes={classes}>
      <ListItemIcon>
        <FavoriteIcon />
      </ListItemIcon>
      <ListItemText primary={item.name} />
    </ListItem>
  ))

  return (
    <div>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem classes={classes}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemText variant="h1" primary="Favourites" secondary="The list of your preferred flyers" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        {items}
      </List>
    </div>
  )
}

export default FavoritesList
