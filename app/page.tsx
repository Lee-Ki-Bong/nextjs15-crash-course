import Image from "next/image";
import Hello from "./components/hello";

export default function Home() {
  console.log("from Server");
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl">Welcome to Next.js</h1>
      <Hello />
    </div>
  );
}
