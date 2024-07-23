import React from "react";

export default function Modal({ people = [] }) {
  if (!people.length) {
    return;
  }
  return <h1>There are {people.length} people</h1>;
}
