// Initialize and add the map
function initMap() {
    // The location of the place
    const place = { lat: 40.712776, lng: -74.005974 };
    // The map, centered at the place
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: place,
    });
    // The marker, positioned at the place
    const marker = new google.maps.Marker({
      position: place,
      map: map,
    });
  }
  
  // Store form data in Local Storage
  function storeFormData() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const comments = document.getElementById("comments").value;
    const data = {
      name: name,
      address: address,
      email: email,
      comments: comments,
    };
    localStorage.setItem("formData", JSON.stringify(data));
  }
  
  // Add event listener to the form
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    storeFormData();
    alert("Form data has been saved to Local Storage.");
    form.reset();
  });
  