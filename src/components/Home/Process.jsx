import { steps } from "../../MenuData";

const Process = () => {
  return (
    <section id="process" className="w-full bg-[#030712] px-4 py-20 text-white">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
          From Origin to Cup
        </h1>
        <p className="mt-4 text-[#9CA3AF]">
          Our commitment to quality at every step
        </p>
      </div>
      <div className="relative mx-auto mt-16 max-w-4xl">
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/20"></div>
        {steps.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={item.id}
              className={`relative mb-24 w-1/2 ${
                isLeft ? "pr-10 text-right" : "ml-auto pl-10 text-left"
              }`}
            >
              <span
                className={`absolute top-3 h-3 w-3 rounded-full border-2 border-white bg-[#030712] ${
                  isLeft ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
                }`}
              ></span>

              <div
                className={`flex items-center gap-3 ${
                  isLeft ? "justify-end" : "flex-row-reverse justify-end"
                }`}
              >
                <span className="font-serif text-sm text-gray-300">
                  {item.step}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e293b]">
                  {item.icon}
                </span>
              </div>

              <h3 className="mt-3 font-serif text-2xl font-semibold">
                {item.title}
              </h3>
              <p
                className={`mt-2 max-w-xs text-sm text-gray-400 ${
                  isLeft ? "ml-auto" : ""
                }`}
              >
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Process;
