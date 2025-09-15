import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars, faTimes, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/images/logo.png'

/**
 * Header (Navbar) component
 * @param {Array} navLinks - Array of navigation links
 */
const Header = ({ navLinks }) => {
  // State for mobile menu open/close
  const [menuOpen, setMenuOpen] = useState(false)
  // State for theme (light/dark)
  const [theme, setTheme] = useState('light')
  // Get current location for active link
  const location = useLocation()

  // On mount, check localStorage for theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    }
  }, [])

  // Toggle theme and save to localStorage
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 shadow-md transition-colors duration-300">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Eventora Logo" className="h-6 w-auto" />
          <span className="font-bold text-xl text-primary">ventora</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === path
                    ? 'text-primary underline'
                    : 'text-gray-700 dark:text-gray-200 hover:text-primary'
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search Bar (UI only) */}
        <div className="hidden md:flex items-center ml-4">
          <input
            type="text"
            placeholder="Search events..."
            className="px-2 py-1 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Search events"
          />
        </div>

        {/* User Menu & Theme Switcher */}
        <div className="flex items-center gap-3 ml-4">
          {/* User Menu (placeholder) */}
          <button
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition"
            aria-label="User menu"
          >
            <FontAwesomeIcon icon={faUser} />
          </button>
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-secondary hover:text-white transition"
            aria-label="Toggle theme"
          >
            <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
          </button>
          {/* Hamburger Menu (mobile) */}
          <button
            className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg z-50 flex flex-col p-6 md:hidden"
          >
            <button
              className="self-end mb-6 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-secondary hover:text-white transition"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <ul className="flex flex-col gap-6">
              {navLinks.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    to={path}
                    className={`font-medium text-lg transition-colors duration-200 ${
                      location.pathname === path
                        ? 'text-primary underline'
                        : 'text-gray-700 dark:text-gray-200 hover:text-primary'
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Search Bar (UI only) */}
            <div className="mt-8">
              <input
                type="text"
                placeholder="Search events..."
                className="w-full px-2 py-1 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Search events"
              />
            </div>
            {/* User Menu & Theme Switcher */}
            <div className="flex items-center gap-3 mt-8">
              <button
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition"
                aria-label="User menu"
              >
                <FontAwesomeIcon icon={faUser} />
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-secondary hover:text-white transition"
                aria-label="Toggle theme"
              >
                <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header