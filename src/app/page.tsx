import Image from "next/image";
import Box1 from "@/app/components/Box1";
import Box2 from "@/app/components/Box2";

export default function Home() {
  return (
    <>
      <div className="container mx-auto max-w-7xl p-2 md:p-10">
        <div className="text-white">
          <Box1 />

          <Box2 />
        </div>
      </div>
    </>
  );
}
