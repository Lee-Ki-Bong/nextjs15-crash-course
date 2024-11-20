import Image from "next/image";

export default function Home() {
  console.log('from Server');
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-3xl">Welcome to Next.js</h1>
    </div>
  );
}
