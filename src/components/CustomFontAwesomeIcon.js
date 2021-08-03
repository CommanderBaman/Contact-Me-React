import {
  faFacebook,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const iconMap = {
  cross: faTimes,
  facebook: faFacebook,
  github: faGithub,
  linkedin: faLinkedin
}

const CustomFontAwesomeIcon = (props) => {
  const { iconName, customStyle, ...otherProps } = props
  if (Object.keys(iconMap).includes(iconName)) {
    return (
      <FontAwesomeIcon
        icon={iconMap[iconName]}
        {...otherProps}
        className={customStyle}
      />
    )
  }
  return (
    <div className={customStyle} {...otherProps}>
      {iconName}
    </div>
  )
}

export default CustomFontAwesomeIcon
