import { createContext, useEffect, useState } from "react"

export const Theme = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("theme-default")

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove(
      "theme-red",
      "theme-green",
      "theme-blue",
      "theme-yellow",
    )
    root.classList.add(theme)
  }, [theme])

  return <Theme.Provider value={{ theme, setTheme }}>{children}</Theme.Provider>
}
