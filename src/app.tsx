import { useLayoutEffect, useState } from 'preact/hooks'
import { init } from '@nousantx/tenoxui-styler'
import config from '../tenoxui.config'

export const App = () => {
  const [showNav, setShowNav] = useState(true)

  const toggleNav = () => {
    setShowNav((prev) => !prev)
  }

  useLayoutEffect(() => {
    init({ config })
  }, [])

  return (
    <>
      <header class="flex items-center space-between relative px-2rem py-1rem">
        <span class="fs-1.2rem fw-600">Tnx</span>

        <button class="btn" onClick={toggleNav}>
          show nav
        </button>

        <div
          class={`fixed h-100dvh p-2rem bg-red-500 t-0 l-${
            showNav ? '0' : '-100%'
          } [transition]-1000ms`} // use direct css properties instead of shorthand
        >
          Hello
        </div>
      </header>
      <main class="p-2rem h-mn-100vh">Hello World, its main content.</main>
    </>
  )
}
