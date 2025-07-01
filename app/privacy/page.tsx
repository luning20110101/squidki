"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <>
      <Navbar onToggleTheme={() => {}} isDarkMode={true} />
      <main className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-2">
        <section className="w-full max-w-2xl bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-700">
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold text-white mb-2 text-center tracking-tight">Privacy Policy</h1>
            <div className="h-1 w-16 mx-auto bg-gradient-to-r from-purple-500 to-blue-400 rounded-full mb-4" />
          </div>
          <div className="prose prose-invert max-w-none text-gray-300">
            <p>
              This Privacy Policy explains how we collect, use, and protect your personal information when you use Squidki.
            </p>
            <h2 className="mt-8 text-2xl font-bold text-white">Information We Collect</h2>
            <p>
              We may collect information about your device, browser, IP address, and usage patterns to improve our services.
            </p>
            <h2 className="mt-8 text-2xl font-bold text-white">How We Use Information</h2>
            <p>
              Your information is used to provide, maintain, and improve our services, and to communicate with you.
            </p>
            <h2 className="mt-8 text-2xl font-bold text-white">Sharing Information</h2>
            <p>
              We do not sell your personal information. We may share it with trusted partners to operate our services.
            </p>
            <h2 className="mt-8 text-2xl font-bold text-white">Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information. Contact us for any requests.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

