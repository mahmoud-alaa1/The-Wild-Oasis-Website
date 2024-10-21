import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-services";

export async function GET(Request, { params }) {
  const { cabinId } = params;
  try {
    const [cabin, bookedDates] = await Promise.all([getCabin(cabinId), getBookedDatesByCabinId(cabinId)]);
    return Response.json({ cabin, bookedDates });
  } catch (err) {
    return Response.json({ message: "Cabin couldn't be found!" });
  }
}

// async function POST() {}
