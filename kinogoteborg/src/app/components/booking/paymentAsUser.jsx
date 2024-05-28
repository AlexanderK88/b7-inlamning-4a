import { Button, RedButton } from "./button";
import { useState } from "react";
import { ModalHeader } from "./bookingModal";
import EditPaymentAsuser from "./editPaymentAsUser";

export default function PaymentAsUser({ setBookingState, isModalOpen }) {
  const [newPayment, setNewPayment] = useState(false);
  const [savedPayment, setSavedPayment] = useState(true);
  const [updatePayment, setUpdatePayment] = useState(false);

  function Buttons({ name }) {
    return (
      <div className="flex flex-row mt-8 justify-evenly">
        <Button onClick={() => setBookingState("ControlOfBooking")}>{name}</Button>

        <RedButton
          onClick={() => {
            setBookingState("intro"), isModalOpen(false);
          }}
        >
          Cancel
        </RedButton>
      </div>
    );
  }

  const InputRadioButton = ({ inputId }) => {
    return (
      <label htmlFor={inputId}>
        Swish:
        <input type="radio" name={inputId} />
      </label>
    );
  };

  const NewPaymentForm = () => {
    return (
      <>
        <p>new payment</p>
        <form>
          <InputRadioButton inputId={"test"} />
        </form>
        {/* <Button onClick={() => setBookingState("ControlOfBooking")} className={"mt-4"}>
          Confirm Booking
        </Button> */}
        <Buttons name={"Confirm booking"} />
      </>
    );
  };

  const SavedPaymentForm = () => {
    return (
      <>
        <p>saved payment</p>
        <Buttons name={"Confirm booking"} />
      </>
    );
  };

  const UpdatePaymentForm = () => {
    return (
      <>
        <p>update payment</p>
        <Buttons name={"Update payment"} />
      </>
    );
  };

  return (
    <>
      <ModalHeader input="Välj betalningsätt" />

      <form className="mt-14 flex flex-col m-auto my-4 w-auto">
        <div
          className="flex flex-row w-full justify-between my-1 m-auto  border-b-2"
          onClick={() => {
            setNewPayment(true), setSavedPayment(false), setUpdatePayment(false);
          }}
        >
          <label className="mr-5">Ny betalningsmetod</label>
          <input type="radio" className="w-[1em] h-[1em] rounded-lg" defaultChecked={newPayment} />
        </div>
        <div
          className="flex flex-row w-full justify-between my-1 m-auto border-b-2"
          onClick={() => {
            setNewPayment(false), setSavedPayment(true), setUpdatePayment(false);
          }}
        >
          <label className="mr-5">Betala med sparade uppgifter</label>
          <input
            type="radio"
            className="w-[1em] h-[1em] rounded-lg active:bg-white"
            defaultChecked={savedPayment}
          />
        </div>
        <div className="flex flex-row w-full justify-between my-1 m-auto ">
          <label
            className="mr-5 border-b-2 hover:cursor-pointer hover:text-red-500 "
            onClick={() => {
              setBookingState("EditPaymentAsUser");
            }}
          >
            Redigera sparade uppgifter
          </label>
        </div>
      </form>

      {/* {newPayment && <NewPaymentForm />} */}
      {savedPayment && <SavedPaymentForm />}
      {/* {updatePayment && <UpdatePaymentForm />} */}
    </>
  );
}
