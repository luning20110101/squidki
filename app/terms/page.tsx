"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <>
      <Navbar onToggleTheme={() => {}} isDarkMode={true} />
      <main className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-2">
        <section className="w-full max-w-2xl bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-700">
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold text-white mb-2 text-center tracking-tight">Terms of Service</h1>
            <div className="h-1 w-16 mx-auto bg-gradient-to-r from-purple-500 to-blue-400 rounded-full mb-4" />
          </div>
          <div className="prose prose-invert max-w-none text-gray-300">
            <p>
              Welcome to Squidki. Please read these Terms of Service carefully before using our website.
            </p>
            <h2 className="mt-8 text-2xl font-bold text-white">Usage Rules</h2>
            <p>
              You agree to use this website in compliance with all applicable laws and not for any unlawful purpose.
            </p>
            <h2 className="mt-8 text-2xl font-bold text-white">Intellectual Property</h2>
            <p>
              All content on this website is the property of Squidki. You may not use any content without permission.
            </p>
            <h2 className="mt-8 text-2xl font-bold text-white">Disclaimer</h2>
            <p>
              Squidki is not liable for any direct or indirect damages resulting from the use of this website.
            </p>
            <h2 className="mt-8 text-2xl font-bold text-white">Changes to Terms</h2>
            <p>
              We reserve the right to update these terms at any time. Changes will be posted on this page.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 