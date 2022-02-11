import React, { useState } from "react";

interface Person {
  name: string;
  age: number;
}

const users: Person[] = [
  { name: "Mail", age: 29 },
  { name: "Cindy", age: 29 },
  { name: "Prinka", age: 30 },
];

export const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [searchResult, setSearchResult] = useState<Person | undefined>();

  const inputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onFind = () => {
    const search = [...users].find((user) => {
      const searchName = user.name.toLowerCase();
      return searchName.includes(name.toLowerCase());
    });

    setSearchResult(search);
    setName("");
  };

  return (
    <div>
      User Search
      <br />
      <input value={name} onChange={inputName} />
      <button onClick={onFind}>Find User</button>
      <br />
      <div>
        <p>user: {searchResult && searchResult.name}</p>
        <p>age: {searchResult && searchResult.age}</p>
      </div>
    </div>
  );
};
