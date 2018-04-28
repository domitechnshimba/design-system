import Box from './Box'
import PropTypes from 'prop-types'
import { cx } from './theme'

const Divider = Box.withComponent('hr').extend`
  height: ${props => props.height};
  border: 0;
  border-radius: ${props => props.theme.pill};
  background-color: ${props =>
    cx(props.color || props.borderColor || props.bg)};
`

Divider.displayName = 'Divider'

Divider.defaultProps = {
  height: '3px',
  color: 'smoke',
  mx: 0
}

Divider.propTypes = {
  height: PropTypes.string,
  color: PropTypes.string
}

export default Divider
