"use client";

import { deleteCourse } from "../provider";

export const DeleteButton = ({ itemId }) => {
  return <button onClick={() => deleteCourse(itemId)}>❌</button>;
};
