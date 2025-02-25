export default function Home() {
  return (
    <div className="flex-1">
      {Array.from({ length: 30 }).map((_, index) => (
        <h1 key={index} className="text-4xl font-bold">
          Hello, Jedlik!
        </h1>
      ))}
    </div>
  );
}
