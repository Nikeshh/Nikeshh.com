'use client'

import { AppProgressBar } from 'next-nprogress-bar'

export const NProgressBarProvider = () => {
  return (
    <AppProgressBar
      height="4px"
      shallowRouting
      color="#800080"
      options={{ showSpinner: false }}
    />
  )
}
