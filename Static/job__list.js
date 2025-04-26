// Sample job data
const jobs = [
    {
      title: "Frontend Developer",
      skills: "HTML, CSS, JavaScript, React",
      experience: "Mid-Level",
      matches: 12
    },
    {
      title: "Backend Developer",
      skills: "Node.js, Express, MongoDB",
      experience: "Senior",
      matches: 8
    },
    {
      title: "Data Analyst",
      skills: "Python, SQL, Pandas, PowerBI",
      experience: "Entry-Level",
      matches: 15
    },
    {
      title: "AI Engineer",
      skills: "Python, TensorFlow, NLP, ML",
      experience: "Senior",
      matches: 5
    }
  ];
  
  // Populate the job table
  const tableBody = document.querySelector("#jobTable tbody");
  
  jobs.forEach((job, index) => {
    const row = document.createElement("tr");
  
    row.innerHTML = `
      <td>${job.title}</td>
      <td>${job.skills}</td>
      <td>${job.experience}</td>
      <td>${job.matches}</td>
      <td><button onclick="viewDetails(${index})">View Details</button></td>
    `;
  
    tableBody.appendChild(row);
  });
  
  // Action on View Details button
  function viewDetails(index) {
    const job = jobs[index];
    alert(
      `Job Title: ${job.title}\nSkills: ${job.skills}\nExperience: ${job.experience}\nMatches: ${job.matches}`
    );
  }
  