import renderSaloon from "@/scripts/renderSaloonLayout";

export default function Page() {
  const RenderBox = () => {
    let boxes = [];
    for (let i = 0; i < 390; i++) {
      boxes.push(<div key={i} className="mx-2 bg-red-400 w-[2vw] h-[2vw] border"></div>);
    }
    return boxes;
  };

  return (
    <div className="flex flex-row flex-wrap justify-center w-3/4 h-screen border">
      {/* <RenderBox /> */}
    </div>
  );
}
