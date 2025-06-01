const About: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-extralight">About Page</h1>
      <p className="mt-4">
        This is an Airbnb clone project built with Next.js.
      </p>
      <a href="/" className="mt-4 inline-block text-blue-500 hover:underline">
        Back to Home
      </a>
    </div>
  );
};

export default About;
