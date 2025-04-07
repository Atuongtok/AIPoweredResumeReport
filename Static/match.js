document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
});


    document.getElementById('matchButton').addEventListener('click', function() {
      const requiredSkills = document.getElementById('requiredSkills').value.toLowerCase().split(',').map(skill => skill.trim());
      const preferredSkills = document.getElementById('preferredSkills').value.toLowerCase().split(',').map(skill => skill.trim());
      const experienceLevel = document.getElementById('experienceLevel').value.toLowerCase();
      const educationLevel = document.getElementById('educationLevel').value.toLowerCase();

      const candidateSkills = document.getElementById('candidateSkills').value.toLowerCase().split(',').map(skill => skill.trim());
      const industryExperience = document.getElementById('industryExperience').value.toLowerCase();
      const jobTitle = document.getElementById('jobTitle').value.toLowerCase();
      const yearsExperienceRequired = parseInt(document.getElementById('yearsExperienceRequired').value);
      const yearsExperienceAvailable = parseInt(document.getElementById('yearsExperienceAvailable').value);

      // Simple matching logic (expand with AI/NLP for better accuracy)
      const directSkillMatches = candidateSkills.filter(skill => requiredSkills.includes(skill));
      const directSkillMatchPercentage = (directSkillMatches.length / requiredSkills.length) * 100;

      // Placeholder for related skills (add synonym/similarity logic)
      const relatedSkills = []; // Implement logic to find synonyms and related skills

      // Placeholder for keyword frequency (advanced NLP needed)
      const keywordFrequencyScore = "N/A";

      const industryExperienceMatch = industryExperience.includes(experienceLevel) ? "Yes" : "No";

      const jobTitleMatch = jobTitle.includes(experienceLevel) ? 100 : 0; // Basic job title match

      const yearsExperienceMatch = yearsExperienceAvailable >= yearsExperienceRequired ? "Meets Requirements" : "Does Not Meet Requirements";

      // Simple overall score calculation (refine with weighting)
      const overallMatchScore = (directSkillMatchPercentage + jobTitleMatch) / 2;

      // Placeholder for ranking (implement sorting and ranking logic)
      const candidateRanking = "N/A";

      // Display results
      document.getElementById('directSkillMatch').textContent = directSkillMatchPercentage.toFixed(2);
      document.getElementById('relatedSkills').textContent = relatedSkills.join(', ');
      document.getElementById('keywordFrequencyScore').textContent = keywordFrequencyScore;
      document.getElementById('industryExperienceMatch').textContent = industryExperienceMatch;
      document.getElementById('jobTitleMatch').textContent = jobTitleMatch.toFixed(2);
      document.getElementById('yearsExperienceMatch').textContent = yearsExperienceMatch;
      document.getElementById('overallMatchScore').textContent = overallMatchScore.toFixed(2);
      document.getElementById('candidateRanking').textContent = candidateRanking;

      document.getElementById('matchResult').style.display = 'block';
    });