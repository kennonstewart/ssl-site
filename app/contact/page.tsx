"use client";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold mb-4 gradient-text">Contact Us</h1>
      <p className="max-w-xl text-lg mb-4">
        Drop us a line. We’d love to hear from you.
      </p>
      <button
        onClick={() => window.location.href = 'mailto:hi@secondstreetlabs.com'}
        className="mt-4 px-6 py-2 bg-blue-300 text-white rounded hover:bg-blue-500 text-transform uppercase tracking-widest transition duration-300 ease-in-out"
      >
        Say Hi
      </button>
    </div>
  );
}
  