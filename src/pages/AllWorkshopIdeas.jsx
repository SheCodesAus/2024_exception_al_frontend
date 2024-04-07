import { useState } from "react";
import Button from "../components/Button";
import Hero from "../components/Hero";
import IdeaSnapshot from "../components/IdeaSnapshot";
import RadioButton from "../components/RadioButton";
import useWorkshops from "../hooks/use-workshops";
import { useAuthContext } from "../hooks/use-auth-context";
import Dropdown from "../components/Dropdown";
import { categoryOptions, sortOption } from "../data/options";

export default function AllWorkshopIdeasPage() {
  const { workshops } = useWorkshops();
  const { auth } = useAuthContext();
  const [filters, setFilters] = useState({
    audience: null,
    category: null,
    date: "latest",
  });
  const handleRadioChange = (selectedItem) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      audience: selectedItem,
    }));
  };

  const handleDropdownSelect = (filterName, selectedItem) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: selectedItem,
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
        <div className="flex flex-col gap-4 md:flex-row xl:gap-16">
          <div className="md:flex-6 md:min-w-[60%]">
            <IdeaSnapshot
              listingType="advanced"
              filters={filters}
            />
          </div>
          <div className="h-full flex-1 p-4 order-first w-full flex flex-col gap-8 md:min-w-[260px] md:max-w-[400px] md:order-last">
            {(auth.token || auth.user) && (
              <Button
                buttonStyle="secondary"
                size="sm"
                buttonType="link"
                href="/workshopideas/create"
                classes="w-52 md:w-full block text-center"
              >
                {" "}
                Create workshop idea
              </Button>
            )}

            <div className="flex-1 w-full">
              <div className="flex flex-col gap-2">
                <p>Looking to</p>
                <RadioButton onChange={handleRadioChange} id="audience" />
              </div>
              <div className="flex gap-4 w-full flex-1 md:flex-col pt-8">
                <div className="flex flex-col gap-2 w-full">
                  <p>Category</p>
                  <Dropdown
                    options={categoryOptions}
                    onSelect={(selectedItem) =>
                      handleDropdownSelect("category", selectedItem)
                    }
                    id="category"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <p>Sort by</p>
                  <Dropdown
                    options={sortOption}
                    onSelect={(selectedItem) =>
                      handleDropdownSelect("date", selectedItem)
                    }
                    id="date"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
