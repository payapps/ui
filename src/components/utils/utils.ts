export const removeKeyFromObject = (obj: {[key: string]: any}, key: string) => {
  const { [key]: _, ...rest } = obj
  return rest
}

export const removeKeysFromObject = (obj: {[key: string]: any}, keys: string[]) => {
  return keys.reduce(removeKeyFromObject, obj)
}
