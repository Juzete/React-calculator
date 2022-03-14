import React from 'react'
import { PageLayout } from '@/layouts'
import {
  Card,
  Header,
  Heading,
  Navigation,
} from '@/pages/Home/components'
import { Link } from 'react-router-dom'
import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'
import ThemeSelect from '@/components/Calculator/components/Settings/ThemeSelect'
import {
  SettingsTittle,
  SettingsWrapper,
} from './components'
import ResetHistoryButton from '@/components/Calculator/components/Settings/ResetHistoryButton'

export default class Settings extends React.Component {
  render() {
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
          <SettingsWrapper>
            <SettingsTittle>Settings</SettingsTittle>
            <ThemeSelect />
            <ResetHistoryButton />
          </SettingsWrapper>
        </Card>
      </PageLayout>
    )
  }
}
