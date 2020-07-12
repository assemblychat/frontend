import theme from 'styled-theming'

const handleTheme = (light: string, dark: string) => {
  if (!light?.startsWith('#') || !dark?.startsWith('#')) {
    throw new Error('Not a valid hex value.')
  }

  return { light, dark }
}

// * global
export const backgroundColor = theme('mode', handleTheme('#F4F4F4', '#1D1E25'))
export const borderColor = theme('mode', handleTheme('#F4F4F4', '#1D1E25'))
export const fontColor = theme('mode', handleTheme('#1D1E25', '#FFFFFF'))

// * branding
export const primaryColor = theme('mode', handleTheme('#8E3EDE', '#8E3EDE'))
export const secondaryColor = theme('mode', handleTheme('#D7D8DE', '#262830'))

// * sidebar
export const sidebarColor = theme('mode', handleTheme('#FBFAFA', '#262830'))
export const sidebarBorderColor = theme(
  'mode',
  handleTheme('#DEDEDE', '#8E3EDE')
)
