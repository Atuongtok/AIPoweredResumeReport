-- Create the database
CREATE DATABASE AIPowered;

-- Use the database
USE AIPowered;

-- Create Users table
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('candidate', 'recruiter') DEFAULT 'candidate',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Resumes table
CREATE TABLE Resumes (
    resume_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    file_path VARCHAR(255) NOT NULL,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    extracted_text TEXT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Create Jobs table
CREATE TABLE Jobs (
    job_id INT AUTO_INCREMENT PRIMARY KEY,
    recruiter_id INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    requirements TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (recruiter_id) REFERENCES Users(user_id)
);

-- Create Applications table
CREATE TABLE Applications (
    application_id INT AUTO_INCREMENT PRIMARY KEY,
    job_id INT NOT NULL,
    candidate_id INT NOT NULL,
    resume_id INT NOT NULL,
    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (job_id) REFERENCES Jobs(job_id),
    FOREIGN KEY (candidate_id) REFERENCES Users(user_id),
    FOREIGN KEY (resume_id) REFERENCES Resumes(resume_id)
);

-- Create ScreeningResults table
CREATE TABLE ScreeningResults (
    screening_id INT AUTO_INCREMENT PRIMARY KEY,
    application_id INT NOT NULL,
    job_id INT NOT NULL,
    resume_id INT NOT NULL,
    score DECIMAL(5, 2),
    screened_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (application_id) REFERENCES Applications(application_id),
    FOREIGN KEY (job_id) REFERENCES Jobs(job_id),
    FOREIGN KEY (resume_id) REFERENCES Resumes(resume_id)
);

-- Create JobRecommendations table
CREATE TABLE JobRecommendations (
    recommendation_id INT AUTO_INCREMENT PRIMARY KEY,
    candidate_id INT NOT NULL,
    job_id INT NOT NULL,
    recommended_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (candidate_id) REFERENCES Users(user_id),
    FOREIGN KEY (job_id) REFERENCES Jobs(job_id)
);

-- Create AdminSettings table (optional)
CREATE TABLE AdminSettings (
    setting_id INT AUTO_INCREMENT PRIMARY KEY,
    key VARCHAR(100) UNIQUE NOT NULL,
    value TEXT NOT NULL
);