import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-extralight">Landing Page</h1>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card />
        <Card />
        <Card />
      </div>

      <div className="mt-12 space-y-4 rounded-lg">
        {" "}
        {/* Added rounded-lg here */}
        <h2 className="text-lg font-semibold">Button Variants</h2>
        <div className="flex flex-wrap gap-4 items-center rounded-lg">
          {" "}
          {/* And here */}
          <Button title="Small Button" size="small" />
          <Button title="Medium Button" size="medium" />
          <Button title="Large Button" size="large" />
          <Button
            title="Rounded Small"
            size="medium"
            shape="rounded-sm"
            styles="bg-green-500 hover:bg-green-600"
          />
          <Button
            title="Rounded Medium"
            size="medium"
            shape="rounded-md"
            styles="bg-purple-500 hover:bg-purple-600"
          />
          <Button
            title="Full Rounded"
            size="medium"
            shape="rounded-full"
            styles="bg-red-500 hover:bg-red-600 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
