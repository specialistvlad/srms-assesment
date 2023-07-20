"use client";

const handleDelete = (studentId) => {
  fetch(`http://localhost:5123/students/${studentId}`, {
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
};

export const DeleteButton = ({ studentId }) => {
  return <button onClick={() => handleDelete(studentId)}>❌</button>;
};
