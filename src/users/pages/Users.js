import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  //TODO: Replace USERS with fetch to backend.
  const USERS = [
    {
      id: "u1",
      name: "Carlack",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstarwars.fandom.com%2Fwiki%2FJar_Jar_Binks%2FLegends&psig=AOvVaw2TpBAtNhyR3l1y5HW_ru1c&ust=1586647952024000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjfobOC3-gCFQAAAAAdAAAAABAD",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
