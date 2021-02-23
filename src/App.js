/*
 * Now it would be great to have our title
 * and subtitle in a header component.
 *
 * This should be a styled-component!
 *
 * Don't forget to import 'styled-components/macro'!
 */
import Header from './Header'

export default function App() {
  return (
    <div>
      <Header
      title={'Hello Hacker!'}
      subtitle={'Let\'s learn styled-components together!'} />

    </div>
  )
}
