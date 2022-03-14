import React from 'react'

import { PageLayout } from '@/layouts'
import {
  Card,
  Header,
  Heading,
  Navigation,
} from './components'
import Calculator from '@/components/Calculator'
import { Link } from 'react-router-dom'
import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'

export default () => {
  return (
    <PageLayout>
      <Card>
        <Header>
          <Heading>Calculator App</Heading>
          <nav>
            <Link
              to={HOME_PAGE_ROUTE}
              style={{ textDecoration: 'none' }}>
              <Navigation>Home</Navigation>
            </Link>
            <Link
              to={SETTINGS_PAGE_ROUTE}
              style={{ textDecoration: 'none' }}>
              <Navigation>Settings</Navigation>
            </Link>
          </nav>
        </Header>
        <Calculator />
      </Card>
    </PageLayout>
  )
}
