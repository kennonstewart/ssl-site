export default function ContactPage() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold mb-4 gradient-text">Contact Us</h1>
        <p className="max-w-xl text-lg mb-4">
          Drop us a line. We’d love to hear from you.
        </p>
        <a
          href="mailto:hi@secondstreetlabs.com"
          className="text-blue-600 hover:underline text-lg"
        >
          hello@secondstreetlabs.com
        </a>
      </div>
    );
  }
  