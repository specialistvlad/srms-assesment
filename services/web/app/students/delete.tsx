"use client";

import { deleteStudent } from "../provider";

export const DeleteButton = ({ itemId }) => {
  return <button onClick={() => deleteStudent(itemId)}>❌</button>;
};
