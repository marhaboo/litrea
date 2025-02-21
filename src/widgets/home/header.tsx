'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Heart, User, ShoppingCart, Search } from 'lucide-react'
import logo from "../../../public/logo.svg"
import Link from 'next/link'

const Header = () => {
  const navItems = ['Home', 'Contact', 'About', 'Sign up']
  const icons = [Heart, User, ShoppingCart]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
  }

  return (
    <motion.header
      className="border-b"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-evenly">
        <motion.div
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image src={logo || "/placeholder.svg"} alt="bookIQ-logo" width={130} height={130} />
        </motion.div>

        <motion.nav
          className="hidden md:flex items-center space-x-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
              className="text-sm hover:text-primary"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </motion.nav>

        <motion.div
          className="flex items-center space-x-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="hidden md:flex items-center bg-gray-100 rounded-md px-3 py-1.5"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <input
              type="search"
              placeholder="What are you looking for?"
              className="bg-transparent border-none focus:outline-none text-sm w-64"
            />
            <Search className="h-4 w-4 text-gray-400" />
          </motion.div>
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.2, color: "#3B82F6" }}
            >
              {Icon === ShoppingCart ? (
                <Link href="/cart">
                  <Icon className="h-5 w-5 text-gray-600" />
                </Link>
              ) : (
                <Icon className="h-5 w-5 text-gray-600" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header
