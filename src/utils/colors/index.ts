export function getColors(theme: string) {
  switch (theme) {
    case 'light':
      return {
        background: '#D7D8DE',
        sidebar: '#FFFFFF',
      }
    case 'dark':
      return {
        background: '#1D1E25',
        sidebar: '#262830',
      }
  }
}
