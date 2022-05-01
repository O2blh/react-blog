import { useReducer } from 'react'

const useForceUpdate = function () {
  const [, forceUpdate] = useReducer((count) => count + 1, 0)
  return forceUpdate
}

export default useForceUpdate
