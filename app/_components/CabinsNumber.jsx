import { getNumberOfCabins } from "../_lib/data-services";
export const revalidate = 86400; // 24 hours
async function CabinsNumber() {
  const number = await getNumberOfCabins();
  return <span>{number}</span>;
}

export default CabinsNumber;
