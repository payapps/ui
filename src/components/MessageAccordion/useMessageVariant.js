import { useState } from 'react'
import { useTheme } from '@chakra-ui/react'
import { faInfoCircle, faExclamationTriangle, faExclamationCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export const useMessageVariant = messageVariant => {
  const { colors } = useTheme()
  const variantMap = {
    warning: {
      icon: faExclamationCircle,
      borderColor: colors.gold['900'],
      backgroundColor: colors.goldAlpha['100'],
      color: colors.darkBlue,
    },
    error: {
      icon: faExclamationTriangle,
      borderColor: colors.gold['900'],
      backgroundColor: colors.goldAlpha['100'],
      color: colors.darkBlue,
    },
    success: {
      icon: faCheckCircle,
      borderColor: colors.gold['900'],
      backgroundColor: colors.goldAlpha['100'],
      color: colors.darkBlue,
    },
    info: {
      icon: faInfoCircle,
      borderColor: colors.gold['900'],
      backgroundColor: colors.goldAlpha['100'],
      color: colors.darkBlue,
    },
  }
  const [variant, setVariant] = useState(variantMap[messageVariant])
  return [variant, setVariant]
}
