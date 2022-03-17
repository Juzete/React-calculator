import { switchThemeAction } from '@/store/actions'
import { store } from '@/store/store'
import React, { Component } from 'react'
import { Select, SelectWrapper } from './components'

export default class ThemeSelect extends Component {
  constructor(props) {
    super(props)
    this.state = { value: 'light' }
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
    store.dispatch(switchThemeAction(e.target.value))
  }

  render() {
    return (
      <SelectWrapper>
        <span style={{ fontSize: '12px' }}>
          Switch Theme
        </span>
        <Select
          value={this.state.value}
          onChange={this.handleChange}>
          <option value="light">Light Theme</option>
          <option value="dark">Dark Theme</option>
        </Select>
      </SelectWrapper>
    )
  }
}
