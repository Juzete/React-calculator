import React from 'react'

import theme from '@/theme'

import { Loader } from './components'

const LOADER_SIZE = 100

export default () => {
  return (
    <Loader
      type="Bars"
      color={theme.colors.secondary}
      height={LOADER_SIZE}
      width={LOADER_SIZE}
    />
  )
}
