import Image from "next/image";
import Box1 from "@/app/components/Box1";
import Box2 from "@/app/components/Box2";
import Box3 from "@/app/components/Box3";
import Box4 from "@/app/components/Box4";
import Box5 from "@/app/components/Box5";
import Box6 from "@/app/components/Box6";

export default function Home() {
  return (
    <>
      <div className="container mx-auto max-w-7xl p-2 md:p-10">
        <div className="grid gap-6 grid-cols-1 text-white md:grid-cols-4 md:grid-rows-2">
          <Box1 />

          <Box2 />

          <Box3 />

          <Box4 />

          <Box5 />

          <Box6 />
        </div>
      </div>
    </>
  );
}
