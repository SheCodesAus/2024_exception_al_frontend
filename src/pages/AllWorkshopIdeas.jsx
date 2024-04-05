import { useState } from "react";
import Button from "../components/Button";
import Hero from "../components/Hero";
import IdeaSnapshot from "../components/IdeaSnapshot";
import RadioButton from "../components/RadioButton";
import useWorkshops from "../hooks/use-workshops";

export default function AllWorkshopIdeasPage() {
  const { workshops } = useWorkshops();
  const [filters, setFilters] = useState({
    audience: null,
    category: null,
    date: null
  })
  const handleRadioChange = (selectedItems, name) => {
    setFilters((prev) => ({
      ...prev,
      [name]: selectedItems,
    }));
  };

  return (
    <>
      <Hero>
        <h1 className="text-3xl md:text-4xl my-8 text-white font-semibold">
          All workshop ideas
        </h1>
      </Hero>
      <div className="mx-auto max-w-[1000px] lg:container pt-12">
        <div className="flex gap-4 xl:gap-16">
          <IdeaSnapshot listingType="advanced" />
          <div className="h-full flex-1 p-4 flex flex-col gap-8">
            <Button
              buttonStyle="secondary"
              size="sm"
              buttonType="link"
              href="/workshopideas/create"
              classes="w-full block text-center"
            >
              {" "}
              Create workshop idea
            </Button>
            <div className="flex-1">
              <div className="flex flex-col gap-2">
                <p>Looking to</p>
                <RadioButton onChange={handleRadioChange} id="audience"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
