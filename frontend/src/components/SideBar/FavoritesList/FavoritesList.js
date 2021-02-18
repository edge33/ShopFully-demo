import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import HomeIcon from '@material-ui/icons/Home'
import FavoriteIcon from '@material-ui/icons/Favorite'

const ListItemLink = (props) => {
  return <ListItem button component="a" {...props} />
}

const favoritesList = (props) => {
  const items = ['one', 'two', 'three'].map((item, i) => (
    <ListItem button key={i}>
      <ListItemIcon>
        <FavoriteIcon />
      </ListItemIcon>
      <ListItemText primary={item} />
    </ListItem>
  ))

  return (
    <div>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem>
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

export default favoritesList
