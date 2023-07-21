"use client";

import { deleteCourse } from "../providerOld";

export const DeleteButton = ({ itemId }) => {
  return <button onClick={() => deleteCourse(itemId)}>❌</button>;
};
