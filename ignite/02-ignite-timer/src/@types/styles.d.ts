import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// criando um novo tipo para o styled componentes e o typescript entender que o tema é do tipo ThemeType
// a importacao desse tema é feita para sobrescrever o tema e não pra criar um novo tema
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeType {}
}
