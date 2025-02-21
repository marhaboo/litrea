import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#1D1D1D] text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Psychology</li>
            <li>Self-help</li>
            <li>Romance</li>
            <li>Mystery</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">For Kids</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Comics</li>
            <li>Fantasy</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">E-Books</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Historical</li>
            <li>Horror</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Help & Contacts</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>+48 555 87 999 000</li>
            <li>Mon to Fri, 9:30 AM to 7:00 PM</li>
            <li>example@books.ru</li>
            <li>
              <button className="mt-2 px-4 py-1 border border-white rounded-md text-sm hover:bg-white hover:text-black transition-colors">
                Request a call
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400">
          © All copyrights are reserved. © World 2023
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <div className="w-10 h-6 bg-white rounded"></div>
          <div className="w-10 h-6 bg-white rounded"></div>
          <div className="w-10 h-6 bg-white rounded"></div>
          <div className="w-10 h-6 bg-white rounded"></div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
