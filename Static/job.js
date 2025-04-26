function parseResume() {
    alert('Resume uploaded and parsed!');
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger-menu');

    navLinks.classList.toggle('active'); // Toggle the menu visibility
    hamburger.classList.toggle('active'); // Toggle the hamburger icon to X
}

// Close the menu when any link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger-menu');

        navLinks.classList.remove('active'); // Hide the menu
        hamburger.classList.remove('active'); // Reset the hamburger icon
    });
});
function parseResume() {
    const resumeUpload = document.getElementById('resumeUpload');
    const resumeData = document.getElementById('resumeData');

    if (resumeUpload.files.length === 0) {
        alert('Please upload a resume first!');
        return;
    }

    // Display a message while the CV is uploading
    resumeData.innerHTML = '<p>Uploading CV...</p>';

    // Simulate a delay for uploading and extracting information
    setTimeout(() => {
        // Display the extracted information
        resumeData.innerHTML = extractedInfo;
    }, 2000); // Simulate a 2-second delay
}

document.getElementById('resumeForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('resumeUpload');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    const response = await fetch('/upload', {
        method: 'POST',
        body: formData
    });

    const result = await response.json();
    const messageDiv = document.getElementById('message');
    if (result.error) {
        messageDiv.textContent = result.error;
        messageDiv.className = 'error-message';
    } else {
        messageDiv.textContent = result.message;
        messageDiv.className = 'success-message';
        document.getElementById('extractedText').textContent = result.resume_text;
        document.getElementById('specialization').textContent = result.specialization;
    }
});