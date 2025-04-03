export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        {/* Photo Section */}
        <div className="flex items-center justify-center">
          <img
            src="/images/headshot.jpeg"
            alt="Founder, Kennon Stewart"
            className="w-64 h-64 object-cover rounded-full"
          />
        </div>

        {/* Description Section */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            Meet the Founder:
          </h1>
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            Kennon Stewart
          </h1>
          <p className="text-lg">
            Second Street Labs is an AI-first consultancy focused on applying statistical thinking
            and machine learning to drive modern cities. We blend research, engineering, and storytelling
            to deliver impact through data.
          </p>
        </div>
      </div>
    </div>
  );
}