export const debounce = (fn, delay) => {
  let timer = null
  return function (...args) {
    clearTimeout(timer)
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const ctx = this
    timer = setTimeout(() => {
      fn.apply(ctx, args)
    }, delay)
  }
}

export const throttle = (fn, delay) => {
  let timer = null
  return function (...args) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const ctx = this
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        fn.apply(ctx, args)
      }, delay)
    }
  }
}

export const getReferrer = () => {
  let referrer = ''
  try {
    referrer = window.top.document.referrer
  } catch (e) {
    if (window.parent) {
      try {
        referrer = window.parent.document.referrer
      } catch (e2) {
        referrer = ''
      }
    }
  }
  if (referrer === '') {
    referrer = document.referrer
  }
  return referrer
}
