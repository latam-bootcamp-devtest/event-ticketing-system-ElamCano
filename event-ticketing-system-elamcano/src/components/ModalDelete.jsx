import React from "react";

const ModalDelete = ({ name }) => {
  return (
    <div className="flex flex-col gap-4 p-20 bg-slate-50 text-black rounded-xl">
      <h1>Delete Event</h1>
      <p> Are you sure you want to delete the event "{name}"?</p>
      <div className="flex gap-12">
        <button className="p-4 rounded-xl bg-green-400">Confirm</button>
        <button className="p-4 rounded-xl bg-red-400">Cancel</button>
      </div>
    </div>
  );
};

export default ModalDelete;
