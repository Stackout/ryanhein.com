import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer
      className="footer text-white py-12"
      style={{
        backgroundColor: '#1a202c',
      }}
    >
      <div className="container mx-auto grid grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
          <p>Email: me@ryanhein.com</p>
          <p>Phone: 303-656-6491</p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/consulting">Consulting</a>
            </li>
            {/* Add more quick links as needed */}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
          {/* Add social media icons/links or any other follow options here */}
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8">
        &copy; {new Date().getFullYear()} RyanHein.com. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
