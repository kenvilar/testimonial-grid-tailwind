import Image from "next/image";
import Quotation from "@/app/images/bg-pattern-quotation.svg";
import Ken from "@/app/images/image-ken.jpg";

const Box1 = () => {
  return (
    <>
      <div className="relative p-10 rounded-xl bg-purple-700">
        <Image
          src={Quotation}
          alt="logo"
          className="absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150"
        />

        {/*box header*/}
        <div className="flex z-10 space-x-4">
          <img
            src={Ken.src}
            alt="box1-img"
            className="w-10 h-10 rounded-full ring-2 ring-purple-300"
          />
          <div className="text-sm">
            <h4 className="opacity-90">Ken Vilar</h4>
            <p className="opacity-50">Senior Software Engineer</p>
          </div>
        </div>

        {/*large text*/}
        <p className="relative z-10 mt-6 text-xl">
          {`I received a job offer mid-course, and the subjects I learned were
          current, if not more so, in the company I joined. I honestly feel I
          got every penny's worth.`}
        </p>

        {/*small text*/}
        <p className="mt-6 opacity-50">
          {`"I was an EMT for many years before I joined the bootcamp. I've been
          looking to make a transition and have heard some people who had an
          amazing experience here. I signed up for the free intro course and
          found it incredibly fun! I enrolled shortly thereafter. The next 12
          weeks was the best - and most grueling - time of my life. Since
          completing the course, I've successfully switched careers, working as
          a Software Engineer at a VR startup. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ratione vero repudiandae, quasi atque
          officiis eum consectetur odio amet dolorem deleniti repellat expedita
          aut sunt laudantium cum itaque nam voluptatum quod! Quo totam sequi
          omnis deserunt? Sit nam molestiae excepturi, perspiciatis labore
          deleniti eum, eligendi quisquam quod sed nobis exercitationem tempora!
          "`}
        </p>
      </div>
    </>
  );
};

export default Box1;
