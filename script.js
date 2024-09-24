// Function to search destinations
function searchDestination() {
    const searchValue = document.getElementById("searchInput").value;
    if (searchValue) {
      alert(`Searching for trips to: ${searchValue}`);
      // Here you can integrate API calls to fetch actual data
    } else {
      alert("Please enter a destination.");
    }
  }
  