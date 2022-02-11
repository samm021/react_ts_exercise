import React, { Component } from "react";

interface Person {
  name: string;
  age: number;
}

interface UserSearchArguments {
  users: Person[];
}

interface UserSearchState {
  name: string;
  user: Person | undefined;
}

export class UserSearch extends Component<UserSearchArguments> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };

  onFind = () => {
    const search = this.props.users.find((user) => {
      const searchName = user.name.toLowerCase();
      return searchName.includes(this.state.name.toLowerCase());
    });

    this.setState({ name: "", user: search });
  };

  inputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: e.target.value, user: this.state.user });
  };

  render() {
    const { name, user } = this.state;
    return (
      <div>
        User Search
        <br />
        <input value={name} onChange={this.inputName} />
        <button onClick={this.onFind}>Find User</button>
        <br />
        <div>
          <p>user: {user && user.name}</p>
          <p>age: {user && user.age}</p>
        </div>
      </div>
    );
  }
}
