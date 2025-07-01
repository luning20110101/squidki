"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Navbar onToggleTheme={() => {}} isDarkMode={true} />
      <main className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-2">
        <section className="w-full max-w-2xl bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-700">
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold text-white mb-2 text-center tracking-tight">About Us</h1>
            <div className="h-1 w-16 mx-auto bg-gradient-to-r from-purple-500 to-blue-400 rounded-full mb-4" />
          </div>
          <div className="prose prose-invert max-w-none text-gray-300">
            <p>
              Squidki is dedicated to providing the most fun and innovative gaming experiences. We focus on developing and integrating a variety of casual and creative games for everyone.
            </p>
            <h2 className="mt-8 text-2xl font-bold text-white">Our Mission</h2>
            <p>
              To create a safe, open, and inclusive gaming platform where players worldwide can enjoy and connect.
            </p>
            <h2 className="mt-8 text-2xl font-bold text-white">Our Team</h2>
            <p>
              We are a group of passionate developers with extensive experience in frontend, backend, and product design.
            </p>
            <h2 className="mt-8 text-2xl font-bold text-white">Contact Us</h2>
            <p>
              For suggestions or business inquiries, please email us at: <a href="mailto:HarryC199101@gmail.com" className="text-blue-400 hover:underline">HarryC199101@gmail.com</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 