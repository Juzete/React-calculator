import React from 'react'

import { PageLayout } from '@/layouts'
import {
  Card,
  Header,
  Heading,
  Navigation,
} from './components'
import Calculator from '@/components/Calculator'

export default () => {
  return (
    <PageLayout>
      <Card>
        <Header>
          <Heading>Calculator App</Heading>
          <div>
            <Navigation>Home</Navigation>
            <Navigation>Settings</Navigation>
          </div>
        </Header>
        <Calculator />
      </Card>
    </PageLayout>
  )
}
