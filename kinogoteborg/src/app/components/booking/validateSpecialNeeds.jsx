import { Button } from "./button";

export default function ValidateSpecialNeeds({ setBookingState, nextState, isComplete }) {
  return (
    <>
      <h2 className="text-2xl text-slate-50">Verifiera Tillgång</h2>
      <p className="m-3 w-3/4">
        Vänligen logga in för att verifiera att du har rättigheterna att använda platserna avsedda
        för personer med funktionsnedsättning.
      </p>

      <Button onClick={() => setBookingState(nextState)}>Confirm Booking</Button>
      <br></br>
      <Button
        onClick={() => {
          setBookingState("Login"), isComplete(false);
        }}
      >
        Cancel
      </Button>
    </>
  );
}
