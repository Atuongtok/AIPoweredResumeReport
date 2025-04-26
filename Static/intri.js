document.getElementById('interviewForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const candidate = document.getElementById('candidate').value;
    const job = document.getElementById('job').value;
    const datetime = document.getElementById('datetime').value;
  
    if (!candidate || !job || !datetime) {
      alert('Please fill out all fields.');
      return;
    }
  
    // Mock email sending
    alert(`✅ Interview invite sent to ${candidate} for ${job} on ${new Date(datetime).toLocaleString()}`);
  
    // Add to calendar view
    const calendarList = document.getElementById('calendarList');
    const li = document.createElement('li');
    li.textContent = `${job} interview with ${candidate.split('@')[0]} — ${new Date(datetime).toLocaleString()}`;
    calendarList.appendChild(li);
  
    // Reset form
    this.reset();
  });
  