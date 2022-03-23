import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import SettingsPage from '@/pages/Settings'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'

import Loader from '@/components/Loader'

const HomePage = lazy(() => import('@/pages/Home'))

export default () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route
        exact
        path={HOME_PAGE_ROUTE}
        component={HomePage}
      />
      <Route
        exact
        path={SETTINGS_PAGE_ROUTE}
        component={SettingsPage}
      />
    </Switch>
  </Suspense>
)
