import { use, useState } from "react";
import { toast } from "react-toastify"; // NEW: import toast

import type { ITechnology } from "../types/Technologies";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface TechnologiesProps {
  technologiesPromise: Promise<ITechnology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  const [stack, setStack] = useState<ITechnology[]>([]);

  const handleAddToStack = (technology: ITechnology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack([...stack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // NEW: remove one technology
  const handleRemoveFromStack = (id: string) => {
    setStack(stack.filter((item) => item.id !== id));

    toast.error("Technology removed from your stack!");
  };

  // NEW: remove all technologies
  const handleRemoveAll = () => {
    setStack([]);

    toast.error("All technologies removed!");
  }; // CHANGED: this closing bracket was missing

  return (
    <section className="container mx-auto px-4 py-10 mb-10">

      <div className="mb-10">
        <div className="flex">
          <h2 className="text-4xl font-extrabold">
            Explore
          </h2>

          <h2 className="text-4xl font-extrabold bg-linear-to-r from-[#D91B7E] to-[#7B2FF7] bg-clip-text text-transparent">
            Technologies
          </h2>
        </div>

        <p className="text-gray-500 mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">

        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">

            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                handleAddToStack={handleAddToStack}
                isAdded={stack.some(
                  (item) => item.id === technology.id
                )}
              />
            ))}

          </div>
        </div>

        <div className="w-full lg:w-80">

          <YourStack
            stack={stack}

            // NEW: pass remove function to YourStack
            handleRemoveFromStack={handleRemoveFromStack}

            // NEW: pass remove all function to YourStack
            handleRemoveAll={handleRemoveAll}
          />

        </div>

      </div>
    </section>
  );
};

export default Technologies;