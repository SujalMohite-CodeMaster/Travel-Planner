function generateItinerary() {
    // Get form data
    const destination = document.getElementById('destination').value;
    const startDate = document.getElementById('startDate').value;
    const numDays = document.getElementById('numDays').value;
  
    // Itinerary display element
    const itineraryContent = document.getElementById('itineraryContent');
    itineraryContent.innerHTML = '';  // Clear previous content
  
    // Generate day-wise itinerary
    for (let day = 1; day <= numDays; day++) {
      // Create a div for each day
      const dayDiv = document.createElement('div');
      dayDiv.classList.add('itinerary-day');
      
      const dayTitle = document.createElement('h3');
      dayTitle.textContent = `Day ${day}: Explore ${destination}`;
      dayDiv.appendChild(dayTitle);
  
      const placeVisit = document.createElement('div');
      placeVisit.classList.add('itinerary-details');
      placeVisit.innerHTML = `<span><strong>Places to Visit:</strong> Add your favorite landmarks!</span>`;
      dayDiv.appendChild(placeVisit);
  
      const mealPlan = document.createElement('div');
      mealPlan.classList.add('itinerary-details');
      mealPlan.innerHTML = `
        <span><strong>Breakfast:</strong> Local café or hotel.</span>
        <span><strong>Lunch:</strong> Explore local cuisine.</span>
        <span><strong>Dinner:</strong> Dine at a popular restaurant.</span>
      `;
      dayDiv.appendChild(mealPlan);
  
      const notes = document.createElement('div');
      notes.classList.add('itinerary-details');
      notes.innerHTML = `<span><strong>Notes:</strong> Add any special activities or relaxation time here!</span>`;
      dayDiv.appendChild(notes);
  
      // Append each day itinerary to the display section
      itineraryContent.appendChild(dayDiv);
    }
  }
  
  //code for doenload the itinerary
  function downloadItinerary() {
    const itineraryContent = document.getElementById('itineraryContent');
    const options = {
      margin: 1,
      filename: 'itinerary.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
  
    html2pdf().from(itineraryContent).set(options).save();
  }
    