import { Button } from "./button";
import { useState } from "react";
import { ModalHeader } from "./bookingModal";

export default function PaymentAsUser({ setBookingState, nextState, isComplete }) {
  const [newPayment, setNewPayment] = useState(false);
  const [savedPayment, setSavedPayment] = useState(true);
  const [updatePayment, setUpdatePayment] = useState(false);

  const NewPaymentForm = () => {
    return (
      <>
        <p>new payment</p>
        <Button onClick={() => setBookingState("controlOfBooking")} className={"mt-4"}>
          Confirm Booking
        </Button>
      </>
    );
  };

  const SavedPaymentForm = () => {
    return (
      <>
        <p>saved payment</p>
        <Button onClick={() => setBookingState("controlOfBooking")} className={"mt-4"}>
          Confirm Booking
        </Button>
      </>
    );
  };

  const UpdatePaymentForm = () => {
    return (
      <>
        <p>update payment</p>
        <Button onClick={() => setBookingState("controlOfBooking")} className={"mt-4"}>
          Confirm Booking
        </Button>
      </>
    );
  };

  return (
    <>
      <ModalHeader input="Välj betalningsätt" />

      <form className="mt-14 flex flex-col m-auto my-4 w-auto">
        <div className="flex flex-row w-full justify-between my-1 m-auto  border-b-2">
          <label className="mr-5">Ny betalningsmetod</label>
          <input
            type="radio"
            className="w-[1em] h-[1em] rounded-lg"
            checked={newPayment}
            onChange={() => {
              setNewPayment(true), setSavedPayment(false), setUpdatePayment(false);
            }}
          />
        </div>
        <div className="flex flex-row w-full justify-between my-1 m-auto border-b-2">
          <label className="mr-5">Betala med sparade uppgifter</label>
          <input
            type="radio"
            className="w-[1em] h-[1em] rounded-lg active:bg-white"
            checked={savedPayment}
            onChange={() => {
              setNewPayment(false), setSavedPayment(true), setUpdatePayment(false);
            }}
          />
        </div>
        <div className="flex flex-row w-full justify-between my-1 m-auto ">
          <label
            className="mr-5 border-b-2 hover:cursor-pointer hover:text-red-500 "
            onClick={() => {
              setNewPayment(false), setSavedPayment(false), setUpdatePayment(true);
            }}
          >
            Redigera sparade uppgifter
          </label>

          {/* <input
            type="radio"
            className="w-[1em] h-[1em] rounded-lg"
            checked={updatePayment}
            onChange={() => {
              setNewPayment(false), setSavedPayment(false), setUpdatePayment(true);
            }}
          /> */}
        </div>
      </form>
      {newPayment && <NewPaymentForm />}
      {savedPayment && <SavedPaymentForm />}
      {updatePayment && <UpdatePaymentForm />}
    </>
  );
}
