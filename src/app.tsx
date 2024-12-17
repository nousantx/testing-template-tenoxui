import { useLayoutEffect, useState } from 'preact/hooks'
import { init, createConfig } from '@nousantx/tenoxui-styler'
import config from '../tenoxui.config'

export const App = () => {
  const [showNav, setShowNav] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('darkMode')
    if (storedTheme !== null) return storedTheme === 'true'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const toggleNav = () => setShowNav((prev) => !prev)

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev
      localStorage.setItem('darkMode', newMode)
      return newMode
    })
  }

  useLayoutEffect(() => {
    const tenoxuiConfig = createConfig({ ...config, isDark: darkMode })
    init({ config: tenoxuiConfig })
  }, [darkMode])

  return (
    <div>
      <header class="flex items-center space-between px-2rem py-1rem fixed [r,t,l]-0 darkmode-wrapper">
        <span class="fs-1.2rem fw-600">Tnx</span>

        <div class="flex gap-8px">
          <button class="btn" onClick={toggleNav}>
            Show Nav
          </button>
          <button class="btn" onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div
          class={`bg-neutral-50 fixed h-100dvh p-2rem shadow-xl shadow-neutral-950 t-0 l-${
            showNav ? '0' : '-100%'
          } [transition]-300ms`}
        >
          Hello
        </div>
      </header>

      <main
        class="darkmode-wrapper p-2rem pt-6rem h-mn-100vh"
        data-child="(p:not(:first-child)): mt-1.5rem;"
      >
        <header>
          <h1 class="text-xl">Test</h1>
        </header>
        <section class="mt-2rem">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sapiente velit
            maiores. In, porro.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sapiente velit
            maiores. In, porro.
          </p>
          <p>Hello, it's just a test page.</p>
        </section>
      </main>
    </div>
  )
}
