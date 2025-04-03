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
            Kennon is an Oakland-County native who spent the past few years building ML at 
            companies like Amazon and HP Inc. He's back in the city of Detroit because there 
            is nowhere better to build the next wave of Artificial Intelligence.
            <br />
            <br />
            When he's not coding in Midtown, Detroit, you can find him at the nearest coffee shop
            or his mother's front porch.
          </p>
        </div>
      </div>

      {/* Pitch Presentation */}
      <div className="mt-16 w-full max-w-5xl">
        <RevealPresentation />
      </div>
    </div>
  );
}