import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/pro-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// build library
library.add(fab, faPlus)

// custom svg icons
import { Assembly as AssemblyIcon } from './js'

type IconProps = {
  name: string
  fill?: string
  height?: number
  width?: number
}

function Icon(props: IconProps) {
  const { name, fill, height, width } = props

  const customProps = { fill, height, width }

  switch (name) {
    case 'assembly':
      return <AssemblyIcon {...customProps} />
    default:
      return <FontAwesomeIcon icon={name} />
  }
}

export default Icon
