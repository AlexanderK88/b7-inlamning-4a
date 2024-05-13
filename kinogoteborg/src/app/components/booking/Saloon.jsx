import { fetchSaloon } from "@/scripts/fetchSaloonLayout";
import { RenderSaloon } from "./RenderSaloon";

export default async function Saloon({ saloonNumber, seats }) {
  console.log("saloon render");
  const data = await fetchSaloon(saloonNumber);

  return <RenderSaloon data={data} saloonNumber={saloonNumber} seats={seats} />;
}
