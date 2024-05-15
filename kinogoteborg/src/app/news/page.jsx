export default function Page() {
  return (
    <div className="w-full justify-center text-stone-200 h-3/4 sm:w-3/4 md:w-4/5 lg:w-3/4 max-w-[800px] mx-auto bg-stone-800 flex flex-col text-center gap-12 my-[100px]">
      <h1 className="text-3xl">News</h1>
      <div className="flex flex-col md:flex-row gap-5 text-left">
        <div className="bg-neutral-700 my-4 p-10 shadow-sm rounded-lg">
          <h2 className="text-xl font-bold mb-5">Exclusive Premiere: The Enchanted Forest</h2>
          <p>
            We are thrilled to announce the exclusive premiere of The Enchanted Forest, a magical
            adventure film that is already generating Oscar buzz. Directed by the visionary
            filmmaker Clara Bennett, this enchanting tale follows a young heroine as she navigates a
            mystical forest filled with wonder and peril. Join us for the red carpet event on June
            20th, complete with a Q&A session with the cast and crew. Tickets are on sale now—don’t
            miss your chance to be among the first to experience this cinematic masterpiece!
          </p>
        </div>
        <div className="bg-neutral-700 my-4 p-10 shadow-sm rounded-lg">
          <h2 className="text-xl font-bold mb-5">Special Screening: Classic Films Weekend</h2>
          <p>
            Mark your calendars for our Classic Films Weekend from July 15th to 17th! We’ll be
            showcasing timeless classics such as Casablanca, Gone with the Wind, and The Godfather.
            This special event is a must for all movie enthusiasts, offering a rare opportunity to
            see these iconic films on the big screen once again. Grab your popcorn and settle in for
            a nostalgic journey through cinema history. Tickets are available now—secure your seats
            for a weekend of unforgettable movie magic.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 text-left">
        <div className="bg-neutral-700 my-4 p-10 shadow-sm rounded-lg">
          <h2 className="text-xl font-bold mb-5">Meet the Stars: Actors’ Panel Discussion</h2>
          <p>
            We’re excited to host an exclusive panel discussion featuring some of Hollywood’s
            brightest stars on August 5th. Join us for an evening with acclaimed actors like
            Jonathan Pierce, Sarah Mitchell, and David Lee as they share insights into their craft,
            behind-the-scenes stories, and their upcoming projects. This intimate event is perfect
            for aspiring actors, film students, and fans alike. Limited seats are available, so book
            your tickets early to ensure you don’t miss this unique opportunity to get up close and
            personal with your favorite stars.
          </p>
        </div>
        <div className="bg-neutral-700 my-4 p-10 shadow-sm rounded-lg">
          <h2 className="text-xl font-bold mb-5">Family Fun Day: Animated Movie Marathon</h2>
          <p>
            Bring the whole family to our Animated Movie Marathon on August 12th! We’ll be screening
            beloved animated films from Toy Story to Frozen, providing a fun-filled day for kids and
            adults alike. There will be games, face painting, and special appearances by some of
            your favorite characters. It’s the perfect way to spend a summer day with family and
            friends. Tickets are family-friendly priced and include access to all activities. Join
            us for a day of laughter, adventure, and magical moments at the cinema.
          </p>
        </div>
      </div>
      <h2 className="text-xl font-bold">
        Stay tuned for more updates and exciting events at our cinema. We look forward to seeing you
        soon!
      </h2>
    </div>
  );
}
