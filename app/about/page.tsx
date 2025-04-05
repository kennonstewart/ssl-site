import RevealPresentation from '@/components/Pitch';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
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
            Kennon is a engineer and scientist with a passion for data and technology. He's spent
            the past few years building teams and products at companies like Amazon and HP, and is now 
            focused on building a data ecosystem in Detroit.
            <br />
            <br />
            When he's not coding in Midtown, Detroit, you can find him at the nearest coffee shop
            or his mother's front porch.
          </p>
        </div>
      </div>
    </div>
  );
}