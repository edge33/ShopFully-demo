import Drawer from '@material-ui/core/Drawer'

const drawer = (props) => {
  return (
    <Drawer open={props.open} onClose={props.closed}>
      {props.children}
    </Drawer>
  )
}

export default drawer
