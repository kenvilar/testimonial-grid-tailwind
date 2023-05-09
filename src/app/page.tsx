import Image from "next/image";
import Box1 from "@/app/components/Box1";

export default function Home() {
  return (
    <>
      <div className="container mx-auto max-w-7xl p-2 md:p-10">
        <div className="text-white">
          {/*Box 1*/}
          <Box1 />
        </div>
      </div>
    </>
  );
}
