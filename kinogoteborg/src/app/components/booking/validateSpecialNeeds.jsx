import { Button, RedButton } from "./button";

export default function ValidateSpecialNeeds({ setBookingState, nextState, isModalOpen }) {
  return (
    <>
      <h2 className="text-2xl text-slate-50">Verifiera Tillgång</h2>
      <p className="m-3 w-3/4">
        Vänligen logga in för att verifiera att du har rättigheterna att använda platserna avsedda
        för personer med funktionsnedsättning.
      </p>
      <div className="flex flex-row justify-evenly">
        <Button onClick={() => setBookingState("specialkNeedsLogin")}>Confirm Booking</Button>
        <br></br>
        <RedButton
          onClick={() => {
            setBookingState("Login"), isModalOpen(false);
          }}
        >
          Cancel
        </RedButton>
      </div>
      <div className="flex flex-col mt-2 underline">
        <a href="/signup" className="hover:text-red-400">
          Skapa nytt konto
        </a>
        <a href="/Info" className="hover:text-red-400">
          Kontakta oss
        </a>
      </div>
    </>
  );
}
