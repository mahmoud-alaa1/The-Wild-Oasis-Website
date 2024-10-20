import { getBookedDatesByCabinId, getCabin, getSettings } from "../_lib/data-services";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabinId }) {
  const cabin = await getCabin(cabinId); //Request Memoization cache

  const [settings, bookedDates] = await Promise.all([getSettings(), getBookedDatesByCabinId(cabin.id)]);
  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector settings={settings} bookedDates={bookedDates} cabin={cabin} />
      <ReservationForm cabin={cabin} />
    </div>
  );
}

export default Reservation;
