const url = 'http://localhost:5123';

export async function getCourses() {
  const res = await fetch(`${url}/courses`, {
    cache: "no-store",
  });
  return await res.json();
}

export async function getStudents() {
  const res = await fetch(`${url}/students`, {
    cache: "no-store",
  });
  return await res.json();
}

export async function getResults() {
  const res = await fetch(`${url}/results`, {
    cache: "no-store",
  });
  return await res.json();
}

export function deleteStudent(itemId) {
  fetch(`${url}/students/${itemId}`, {
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

export function deleteCourse(itemId) {
    fetch(`${url}/courses/${itemId}`, {
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

export async function postCourse(reset, clearErrors, data) {
  // Send the data to the server in JSON format.
  const JSONdata = JSON.stringify(data);

  // API endpoint where we send form data.
  const endpoint = `${url}/courses`;

  // Form the request for sending data to the server.
  const options = {
    // The method is POST because we are sending data.
    method: "POST",
    // Tell the server we're sending JSON.
    headers: {
      "Content-Type": "application/json",
    },
    // Body of the request is the JSON data we created above.
    body: JSONdata,
  };

  // Send the form data to our forms API on Vercel and get a response.
  try {
    const response = await fetch(endpoint, options);
    if (response.status !== 201) {
      alert("Unable to submit due server error, see console(requests).");
      return;
    }
    alert("User has been added!");
    reset();
    clearErrors({});
  } catch (error) {
    console.error(error);
  }
}

export async function postStudent(reset, clearErrors, data) {
  // Send the data to the server in JSON format.
  const JSONdata = JSON.stringify(data);

  // API endpoint where we send form data.
  const endpoint = `${url}/students`;

  // Form the request for sending data to the server.
  const options = {
    // The method is POST because we are sending data.
    method: "POST",
    // Tell the server we're sending JSON.
    headers: {
      "Content-Type": "application/json",
    },
    // Body of the request is the JSON data we created above.
    body: JSONdata,
  };

  // Send the form data to our forms API on Vercel and get a response.
  try {
    const response = await fetch(endpoint, options);
    console.log("bbb", response.status);
    if (response.status !== 201) {
      alert("Unable to submit due server error, see console(requests).");
      return;
    }
    alert("User has been added!");
    reset();
    clearErrors({});
  } catch (error) {
    console.error(error);
  }
}
