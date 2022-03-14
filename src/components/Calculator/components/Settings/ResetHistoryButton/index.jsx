import { resetHistoryAction } from '@/store/actions'
import { store } from '@/store/store'
import React, { Component } from 'react'
import { ResetButton } from './components'

export default class ResetHistoryButton extends Component {
  handleButton = e => {
    store.dispatch(resetHistoryAction())
  }

  render() {
    return (
      <ResetButton onClick={this.handleButton}>
        Clear All History
      </ResetButton>
    )
  }
}
