import React from 'react'

const Home = () => (
  <section className="container mx-auto px-4 py-16 text-center">
    <h1 className="text-4xl font-bold text-primary mb-4">Welcome to Eventora</h1>
    <p className="text-lg text-gray-700 dark:text-gray-200 mb-8">
      The next-gen event booking & management platform.
    </p>
    <img
      src="/src/assets/images/logo.png"
      alt="Eventora Logo"
      className="mx-auto w-auto h-20"
    />
  </section>
)

export default Home