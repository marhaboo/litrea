"use client"
export default function NewsletterSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-8">Did you know us?</h2>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Newsletter Form */}
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">
            We are about books and our purpose is to show you the book which can change your life or entertain you from
            the real world to a better one. 300,000 books are waiting for you.
          </p>
          <p className="text-gray-600">If you are about books, you must to subscribe to our newsletter.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="First name"
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#db6956] focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#db6956] focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#db6956] text-white px-6 py-2 rounded-md hover:bg-[#db6956]/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="relative aspect-square bg-[#F5F3FF] rounded-lg overflow-hidden">
          {/* <Map /> */}
        </div>
      </div>
    </div>
  )
}

