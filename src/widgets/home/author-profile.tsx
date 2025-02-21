"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store/store";
import { getAuthors } from "../../entities/admin-side/author-of-the-month/api/api";
import { motion } from "framer-motion";
import Skeleton from "../../shared/skeleton/skeleton";
import { authorsType } from "../../entities/admin-side/author-of-the-month/models/types";

export default function AuthorProfile() {
  const dispatch: AppDispatch = useDispatch();
  const authors = useSelector((state: RootState) => state.authorMonth.authors);
  const [currentAuthor, setCurrentAuthor] = useState<authorsType | null>(null);

  useEffect(() => {
    dispatch(getAuthors());
  }, [dispatch]);

  useEffect(() => {
    const authorOfTheMonth = authors.find(
      (author) => author.isAuthorOfTheMonth
    );
    if (authorOfTheMonth) {
      setCurrentAuthor(authorOfTheMonth);
    }
  }, [authors]);

  if (!currentAuthor) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-64 w-52 mx-auto" />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Author Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-6"
        >
          <div className="inline-block">
            <span className="px-3 py-1 text-sm border border-[#db6956] text-[#db6956] rounded-full">
              Author of the Month
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800">{currentAuthor.name}</h1>
          <p className="text-gray-600 leading-relaxed">{currentAuthor.bio}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#db6956] text-white px-6 py-2 rounded-md hover:bg-[#db6956]/90 transition-colors"
          >
            View His Books
          </motion.button>
        </motion.div>

        {/* Author Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="relative"
        >
          <div className="absolute top-0 right-0 bg-white py-1 px-3 text-sm font-medium rounded-md shadow-sm text-[#db6956]">
            AUTOGRAPHED BOOKS + 30% DISCOUNT
          </div>
          <div className="flex justify-center space-x-4">
            <Image
              src={`data:image/png;base64,${currentAuthor.image}`}
              alt={currentAuthor.name}
              width={400}
              height={300}
              className="rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#ffe7e1] rounded-full">
            <svg
              className="w-6 h-6 text-[#db6956]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="font-medium text-gray-800">
            Free shipping over $50
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#ffe7e1] rounded-full">
            <svg
              className="w-6 h-6 text-[#db6956]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <span className="font-medium text-gray-800">
            Save with loyalty points
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#ffe7e1] rounded-full">
            <svg
              className="w-6 h-6 text-[#db6956]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <span className="font-medium text-gray-800">Read a few pages</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
