import Jeanette from "@/app/images/image-jeanette.jpg";

const Box4 = () => {
  return (
    <>
      <div className="p-10 rounded-xl text-gray-900 bg-white">
        {/*box header*/}
        <div className="flex space-x-4">
          <img
            src={Jeanette.src}
            alt="box1-img"
            className="w-10 h-10 rounded-full ring-2 ring-purple-300"
          />
          <div className="text-sm">
            <h4 className="opacity-90">Jeanette Harmon</h4>
            <p className="opacity-50">Verified Graduate</p>
          </div>
        </div>

        {/*large text*/}
        <p className="mt-6 text-xl">
          An overall wonderful and rewarding experience
        </p>

        {/*small text*/}
        <p className="mt-6 opacity-50">
          {`"Thank you for the wonderful experience! I now have a job I really
          enjoy, and make a good living while doing something I love."`}
        </p>
      </div>
    </>
  );
};

export default Box4;
