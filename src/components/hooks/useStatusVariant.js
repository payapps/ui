import { useState } from 'react'
import { useTheme } from '@chakra-ui/react'
import { faInfoCircle, faExclamationTriangle, faExclamationCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export const useStatusVariant = initialVariant => {
  const { colors } = useTheme()
  const [variant, setVariant] = useState(initialVariant)
  const variantMap = {
    warning: {
      icon: faExclamationCircle,
      borderColor: colors.gold['900'],
      backgroundColor: colors.goldAlpha['100'],
      color: colors.darkBlue
    },
    error: {
      icon: faExclamationTriangle,
      borderColor: colors.errorRed['900'],
      backgroundColor: colors.errorRed['100'],
      color: colors.darkBlue
    },
    success: {
      icon: faCheckCircle,
      borderColor: colors.green['900'],
      backgroundColor: colors.green['100'],
      color: colors.darkBlue
    },
    info: {
      icon: faInfoCircle,
      borderColor: colors.gold['900'],
      backgroundColor: colors.goldAlpha['100'],
      color: colors.darkBlue
    }
  }
  return [variantMap[variant], setVariant]
}
