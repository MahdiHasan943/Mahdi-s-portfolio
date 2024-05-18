import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/PinContainer";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of {""}
        <span className="text-purple">recent project</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16  mt-10">
        {projects.map(({ title, des, id, img, iconLists, link }) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] items-center justify-center sm:w-96 w-[80vw]"
            key={id}
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex justify-center items-center sm:w-96 w-[80vw]">
                <div className="">
                  <img src="./bg.png" alt="bg" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
