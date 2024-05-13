import { fetchSaloon } from "@/scripts/fetchSaloonLayout";
import { RenderSaloon } from "./RenderSaloon";

export default async function Saloon({ saloonNumber, seats }) {
  const data = await fetchSaloon(saloonNumber);

  console.log("saloon render");

  return <RenderSaloon data={data} saloonNumber={saloonNumber} seats={seats} />;
}
