import React, { useState } from "react";

const titleText: string = "Guest List";
const buttonText: string = "Add Guest";

export const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const addName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const submitGuest = () => {
    setName("");
    setGuests([...guests, name]);
  };

  return (
    <div>
      <h3>{titleText}</h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>
            <p>{guest}</p>
          </li>
        ))}
      </ul>
      <input value={name} onChange={addName} />
      <button onClick={submitGuest}>{buttonText}</button>
    </div>
  );
};
