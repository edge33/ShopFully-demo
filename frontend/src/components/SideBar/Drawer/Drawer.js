import Drawer from '@material-ui/core/Drawer'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'

const drawer = (props) => {
  return (
    <Auxiliary>
      <Drawer open={props.open} onClose={props.closed}>
        {props.children}
      </Drawer>
    </Auxiliary>
  )
}

export default drawer
