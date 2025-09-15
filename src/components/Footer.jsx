import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

/**
 * Footer component
 * @param {Array} navLinks - Array of navigation links
 */
const Footer = ({ navLinks }) => {
  // Quick links: Only show main pages
  const quickLinks = navLinks.filter(link => link.name !== "Home")

  // Social icons
  const socials = [
    { icon: faFacebook, url: "https://facebook.com", label: "Facebook" },
    { icon: faTwitter, url: "https://twitter.com", label: "Twitter" },
    { icon: faInstagram, url: "https://instagram.com", label: "Instagram" },
  ]

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 py-8 mt-8 transition-colors duration-300">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-2 text-primary">Quick Links</h3>
          <ul>
            {quickLinks.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className="hover:text-secondary transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Newsletter (UI only) */}
        <div>
          <h3 className="font-bold mb-2 text-primary">Newsletter</h3>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-2 py-1 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm focus:outline-none"
              aria-label="Newsletter email"
              required
            />
            <button
              type="submit"
              className="bg-primary text-white px-3 py-1 rounded hover:bg-secondary transition-colors"
              disabled
              title="Coming soon"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </button>
          </form>
          <p className="text-xs mt-1 text-gray-500">* Coming soon</p>
        </div>
        {/* Social Icons */}
        <div>
          <h3 className="font-bold mb-2 text-primary">Follow Us</h3>
          <div className="flex gap-4">
            {socials.map(({ icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-secondary transition-colors"
                aria-label={label}
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="font-bold mb-2 text-primary">Contact</h3>
          <p>Email: <a href="mailto:support@eventora.com" className="hover:text-secondary">support@eventora.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="hover:text-secondary">+1 234 567 890</a></p>
        </div>
      </div>
      {/* Legal & Copyright */}
      <div className="mt-8 text-center text-xs text-gray-500">
        <span>&copy; {new Date().getFullYear()} Eventora. All rights reserved. | </span>
        <Link to="/about" className="hover:text-secondary">About</Link>
        <span> | </span>
        <Link to="/contact" className="hover:text-secondary">Contact</Link>
        <span> | </span>
        <Link to="/privacy" className="hover:text-secondary">Privacy Policy</Link>
      </div>
    </footer>
  )
}

export default Footer