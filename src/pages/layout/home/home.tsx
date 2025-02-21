import React from 'react'
import AuthorProfile from '../../../widgets/home/author-profile'
import BookCarousel from '../../../widgets/home/bookcarousel'
import MustBuySection from '../../../widgets/home/mustBuySection'
import NewsletterSection from '../../../widgets/home/newsletterSection'

const HomeWidget = () => {
  return (
    <div>
      <AuthorProfile/>
      <BookCarousel />
      <MustBuySection/>
      <NewsletterSection/>
    </div>
  )
}

export default HomeWidget
