// Get form data from Local Storage and display it
function displayFormData() {
    const formData = JSON.parse(localStorage.getItem("formData"));
    const formDataList = document.getElementById("formDataList");
    const listItems = Object.entries(formData).map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`).join("");
    formDataList.innerHTML = listItems;
  }
  
  // Authenticate user and display form data
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (username === storedUsername && password === storedPassword) {
      alert("Login successful.");
      displayFormData();
    } else {
      alert("Invalid username or password.");
    }
    form.reset();
  });
  
  // Set username and password in Local Storage
  localStorage.setItem("username", "myusername");
  localStorage.setItem("password", "mypassword");
  
 
 
