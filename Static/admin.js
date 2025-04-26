function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
  }
  
  function uploadResume() {
    const fileInput = document.getElementById("resumeFile");
    const file = fileInput.files[0];
    if (!file) {
      document.getElementById("uploadStatus").innerText = "Please select a file.";
      return;
    }
  
    // Simulated upload
    document.getElementById("uploadStatus").innerText = "Uploading...";
    setTimeout(() => {
      document.getElementById("uploadStatus").innerText = `Uploaded: ${file.name}`;
      let count = parseInt(document.getElementById("resumeCount").innerText);
      document.getElementById("resumeCount").innerText = count + 1;
    }, 1000);
  }
  
  function uploadJob() {
    const title = document.getElementById("jobTitle").value.trim();
    const description = document.getElementById("jobDescription").value.trim();
  
    if (!title || !description) {
      document.getElementById("jobStatus").innerText = "Fill out all fields.";
      return;
    }
  
    document.getElementById("jobStatus").innerText = "Uploading...";
    setTimeout(() => {
      document.getElementById("jobStatus").innerText = `Job "${title}" uploaded.`;
      let count = parseInt(document.getElementById("jobCount").innerText);
      document.getElementById("jobCount").innerText = count + 1;
    }, 1000);
  }
  