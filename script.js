// Function to search destinations
function searchDestination() {
    const searchValue = document.getElementById("searchInput").value;
    if (searchValue) {
      alert(`Searching for trips to: ${searchValue}`);
      
    } else {
      alert("Please enter a destination.");
    }
  }
  