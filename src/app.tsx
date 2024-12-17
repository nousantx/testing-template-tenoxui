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
      localStorage.setItem('darkMode', newMode.toString())
      return newMode
    })
  }
  const colors = ['primary', 'slate']
  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

  useLayoutEffect(() => {
    const tenoxuiConfig = createConfig({ ...config, isDark: darkMode })
    init({ config: tenoxuiConfig })
  }, [darkMode])

  return (
    <div class="wrapper">
      <header
        class="flex items-center space-between px-2rem py-1rem fixed [r,t,l]-0 z-999 bg-opacity-0.3 [backdrop-filter]-[blur(4px)]"
        data-child="(.btn): bg-opacity-1;"
      >
        <span class="fs-1.2rem fw-600">Tnx</span>

        <div class="flex gap-8px">
          <button class="btn" onClick={toggleNav}>
            Show Nav
          </button>
          <button class="btn" onClick={toggleDarkMode}>
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>

        <div
          class={`bg-slate-50 bg-opacity-1 fixed h-100dvh p-2rem shadow-xl shadow-slate-950 t-0 l-${
            showNav ? '0' : '-100%'
          } [transition]-300ms`}
        >
          Hello
        </div>
      </header>

      <main
        class="w-mx-1024px mx-auto p-2rem pt-6rem h-mn-100vh over-x-hidden [isolation]-isolate"
        data-child="(p:not(:first-child)): mt-1.5rem;"
      >
        <header>
          <h1 class="text-xl lh-1 ls--0.025em">Not great, but works</h1>
        </header>
        <section class="mt-2rem">
          <p>Hello, it's just a test page.</p>
          <p>Just use HTML & CSS. In the end, we just use them, nothing more.</p>
        </section>
        {colors.map((color) => (
          <section
            class="pl-1rem flex flex-wrap mt-2rem"
            data-child="(div): box-50px br-8px [transition]-300ms ml--1rem shadow-md shadow-fc-slate-950 shadow-opacity-0.2;"
          >
            {shades.map((shade) => (
              <div class={`bg-${color}-${shade}`}></div>
            ))}
          </section>
        ))}
      </main>
      <footer class="p-2rem ta-center fs-0.875rem text-slate-400 lh-1.5">
        Built with TenoxUI ✨
        <br />
        Copyright &copy; 2024-present NOuSantx
      </footer>
    </div>
  )
}
