"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar onToggleTheme={() => {}} isDarkMode={true} />
      <main className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-2">
        <section className="w-full max-w-2xl bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-700">
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold text-white mb-2 text-center tracking-tight">Contact Us</h1>
            <div className="h-1 w-16 mx-auto bg-gradient-to-r from-purple-500 to-blue-400 rounded-full mb-4" />
          </div>
          <div className="prose prose-invert max-w-none text-gray-300">
            <p>
              If you have any questions, suggestions, or business inquiries, please contact us using the information below.
            </p>
            <h2 className="mt-8 text-2xl font-bold text-white">Email</h2>
            <p>
              <a href="mailto:HarryC199101@gmail.com" className="text-blue-400 hover:underline">HarryC199101@gmail.com</a>
            </p>
            <h2 className="mt-8 text-2xl font-bold text-white">Feedback Form</h2>
            <p>
              You can also send your feedback directly using the form below.
            </p>
            <form className="space-y-4 mt-4">
              <div>
                <label htmlFor="email" className="block mb-1 text-white">Email</label>
                <input type="email" id="email" className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 text-white">Message</label>
                <textarea id="message" className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none" rows={4} required></textarea>
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold shadow transition">Send</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 