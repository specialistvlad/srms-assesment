const url = "http://localhost:5123";
export const rootUrl = url;

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

export async function postResults(reset, clearErrors, data) {
  // Send the data to the server in JSON format.
  const JSONdata = JSON.stringify(data);

  // API endpoint where we send form data.
  const endpoint = `${url}/results`;

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
  } catch (error) {
    console.error(error);
  }
}
