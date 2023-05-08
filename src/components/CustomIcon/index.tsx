import React from 'react'
import { ReactSVG } from 'react-svg'
import { getIcon } from '../../utilities/functions'

interface CustomIconProps {
  children?: React.ReactNode
  type: string
  className?: string
  onClick?: () => void
}

const CustomIcon = React.forwardRef(
  (
    { children, className, type, onClick, ...props }: CustomIconProps,
    ref: React.ForwardedRef<null>
  ) => (
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
