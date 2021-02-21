import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { indigo } from '@material-ui/core/colors'

const useStyles = (theme) => ({
  grid: {
    'margin-top': '10px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})

const theme = createMuiTheme({
  palette: {
    primary: { main: '#6200ee' },
    secondary: indigo,
  },
})

const layout = (props) => {
  const { classes } = props
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={props.openDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">ShopFully</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" className={classes.root}>
        {props.children}
      </Container>
    </ThemeProvider>
  )
}
export default withStyles(useStyles)(layout)
