import Kira from "@/app/images/image-kira.jpg";

const Box6 = () => {
  return (
    <>
      <div className="p-10 rounded-xl text-gray-900 bg-white">
        {/*box header*/}
        <div className="flex space-x-4">
          <img
            src={Kira.src}
            alt="box1-img"
            className="w-10 h-10 rounded-full ring-2 ring-purple-300"
          />
          <div className="text-sm">
            <h4 className="opacity-90">Kira Whittle</h4>
            <p className="opacity-50">Verified Graduate</p>
          </div>
        </div>

        {/*large text*/}
        <p className="mt-6 text-xl">
          Such a life-changing experience. Highly recommended!
        </p>

        {/*small text*/}
        <p className="mt-6 opacity-50">
          {`"Before joining the bootcamp, I've never written a line of code. I
          needed some structure from professionals who can help me learn
          programming step by step. I was encouraged to enroll by a former
          student of theirs who can only say wonderful things about the program.
          The entire curriculum and staff did not disappoint. They were very
          hands-on and I never had to wait long for assistance. The agile team
          project, in particular, was outstanding. It took my learning to the
          next level in a way that no tutorial could ever have. In fact, I've
          often referred to it during interviews as an example of my development
          experience. It certainly helped me land a job as a full-stack
          developer after receiving multiple offers. 100% recommend!"`}
        </p>
      </div>
    </>
  );
};

export default Box6;
