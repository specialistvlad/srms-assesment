"use client";

export function deleteStudent(itemId: string) {
  fetch(`api/students/${itemId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        // Handle the response here (e.g., update the UI if needed)
        console.log("Student deleted successfully");
      } else {
        // Handle the case where the server responds with an error status code
        console.error("Error deleting student:", response.status);
        alert("Unable to submit due server error, see console(requests).");
      }
    })
    .catch((error) => {
      console.error("Error deleting student:", error);
    });
}

export const DeleteButton = ({ itemId }) => {
  return <button onClick={() => deleteStudent(itemId)}>❌</button>;
};
