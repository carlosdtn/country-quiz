import React from 'react'
import { ReactSVG } from 'react-svg'
import { getIcon } from '../../utilities/functions'
const CustomIcon = React.forwardRef(
  ({ children, className, type, onClick, ...props }, ref) => (
    <ReactSVG
      ref={ref}
      src={getIcon(type)}
      onClick={onClick}
      className={className}
      {...props}
    >
      {children}
    </ReactSVG>
  )
)
export default CustomIcon
