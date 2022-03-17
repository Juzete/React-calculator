import { store } from '@/store/store'
import darkTheme from '@/themes/darkTheme'
import lightTheme from '@/themes/lightTheme'

export default () => {
  const { theme } = store.getState().calculator
  console.log(theme)

  switch (theme) {
    case 'light':
      return lightTheme

    case 'dark':
      return darkTheme

    default:
      break
  }
}
