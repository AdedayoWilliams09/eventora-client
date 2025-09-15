import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <section className="container mx-auto px-4 py-16 text-center">
    <h1 className="text-4xl font-bold text-primary mb-4">404</h1>
    <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
      Oops! Page not found.
    </p>
    <Link to="/" className="text-secondary underline">Go Home</Link>
  </section>
)

export default NotFound