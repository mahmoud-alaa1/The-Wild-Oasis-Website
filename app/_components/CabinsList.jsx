import { unstable_noStore as noStore } from "next/cache";
import CabinCard from "./CabinCard";
import { getCabins } from "@/app/_lib/data-services";
async function CabinsList({ filter }) {
  // noStore();

  const cabins = await getCabins();

  if (cabins.length <= 0) return null;

  const displayedCabins =
    {
      all: cabins,
      small: cabins.filter((cabin) => cabin.maxCapacity <= 3),
      medium: cabins.filter((cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7),
      large: cabins.filter((cabin) => cabin.maxCapacity >= 8),
    }[filter] || cabins; // Default to showing all cabins if the filter is invalid

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinsList;
