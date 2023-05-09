import Image from "next/image";
import Box1 from "@/app/components/Box1";
import Box2 from "@/app/components/Box2";
import Box3 from "@/app/components/Box3";
import Box4 from "@/app/components/Box4";

export default function Home() {
  return (
    <>
      <div className="container mx-auto max-w-7xl p-2 md:p-10">
        <div className="text-white">
          <Box1 />

          <Box2 />

          <Box3 />

          <Box4 />
        </div>
      </div>
    </>
  );
}
