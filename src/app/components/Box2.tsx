import Image from "next/image";
import Jonathan from "@/app/images/image-jonathan.jpg";

const Box2 = () => {
  return (
    <>
      <div className="p-10 rounded-xl bg-gray-600">
        {/*box header*/}
        <div className="flex space-x-4">
          <img
            src={Jonathan.src}
            alt="box1-img"
            className="w-10 h-10 rounded-full ring-2 ring-purple-300"
          />
          <div className="text-sm">
            <h4 className="opacity-90">Jonathan Walters</h4>
            <p className="opacity-50">Verified Graduate</p>
          </div>
        </div>

        {/*large text*/}
        <p className="mt-6 text-xl">
          The team was very supportive and kept me motivated
        </p>

        {/*small text*/}
        <p className="mt-6 opacity-50">
          {`"I started as a total newbie with virtually no coding skills. I now
          work as a mobile engineer for a big company. This was one of the best
          investments I've made in myself. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Atque ipsam veritatis natus illum ullam
          ab, nesciunt rerum nobis, quibusdam ad voluptatum rem necessitatibus
          facere nihil deleniti assumenda vel velit neque quia, nisi ipsum
          laudantium impedit eveniet iste. Pariatur, exercitationem consequuntur
          praesentium a est eum velit quos maiores ipsum facere tempora! "`}
        </p>
      </div>
    </>
  );
};

export default Box2;
