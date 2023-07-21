"use client";

import { deleteStudent } from "../providerOld";

export const DeleteButton = ({ itemId }) => {
  return <button onClick={() => deleteStudent(itemId)}>❌</button>;
};
