export default async function Movie() {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 my-12">
      <div className=" w-5/6 sm:w-4/6 lg:w-2/6 border-solid border-4 rounded-md border-red-900 hover:border-red-800">
        <img src="" alt="" />
      </div>
      <div className="text-stone-200 flex flex-col w-5/6 sm:w-4/6 lg:w-2/6 gap-8">
        <div>
          <h1 className="text-3xl">Inception</h1>
          <span>(2012)</span>
        </div>

        <ul className="flex flex-col gap-4">
          <li>Genre: Science fiction, Thriller, Action</li>
          <li>Spellängd: 2 timmar och 28 minuter</li>
          <li>Åldersgräns: 16år</li>
        </ul>
        <p>
          Inception" är en film regisserad av Christopher Nolan och släppt år 2010. Handlingen
          kretsar kring en professionell stöldman, som är skicklig på att stjäla information genom
          att infiltrera människors drömmar. Han får i uppdrag att utföra omvänd uppgift - att
          implantera en idé i en persons sinne genom drömmanipulation, vilket visar sig vara en
          farlig och komplicerad uppgift. Filmen utforskar teman som verklighet och perception, och
          är känd för sina visuella effekter och komplexa berättande struktur.
        </p>
        <button className="p-2 bg-red-900 w-3/4 rounded-md shadow-sm hover:bg-red-800 hover:shadow-md self-center">
          Book Now
        </button>
      </div>
    </div>
  );
}
