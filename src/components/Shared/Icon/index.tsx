import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/pro-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// build library
library.add(fab, faPlus)

import AssemblyIcon from './icon-assembly'

type IconProps = {
  name: string
}

function Icon(props: IconProps) {
  const { name } = props

  switch (name) {
    case 'assembly':
      return <AssemblyIcon />
    default:
      return <FontAwesomeIcon icon={name} />
  }
}

export default Icon
