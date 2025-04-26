# resume_analyzer.py

import re
import numpy as np
import pandas as pd
import spacy
import torch
import torch.nn as nn
import torch.nn.functional as F
from sklearn.preprocessing import LabelEncoder
from sentence_transformers import SentenceTransformer, util

# Load spaCy model
nlp = spacy.load("en_core_web_sm")
bert_model = SentenceTransformer('all-MiniLM-L6-v2')

# -------------------------
# Resume Parser
# -------------------------
class ResumeParser:
    def __init__(self):
        pass

    def extract_entities(self, text):
        doc = nlp(text)
        entities = {'PERSON': [], 'ORG': [], 'GPE': [], 'DATE': []}
        for ent in doc.ents:
            if ent.label_ in entities:
                entities[ent.label_].append(ent.text)
        return entities

    def extract_skills(self, text, skill_keywords=None):
        if not skill_keywords:
            skill_keywords = ['python', 'java', 'c++', 'machine learning', 'sql', 'flask', 'django', 'tensorflow']
        text = text.lower()
        found_skills = [skill for skill in skill_keywords if skill in text]
        return list(set(found_skills))


# -------------------------
# CNN Job Classifier (Dummy)
# -------------------------
class CNNJobClassifier(nn.Module):
    def __init__(self, num_classes):
        super(CNNJobClassifier, self).__init__()
        self.embedding = nn.Embedding(5000, 100)
        self.conv1 = nn.Conv1d(100, 128, kernel_size=5)
        self.pool = nn.MaxPool1d(2)
        self.fc1 = nn.Linear(128 * 48, num_classes)  # adjust input size accordingly

    def forward(self, x):
        x = self.embedding(x).permute(0, 2, 1)
        x = F.relu(self.conv1(x))
        x = self.pool(x)
        x = x.view(x.size(0), -1)
        x = self.fc1(x)
        return F.log_softmax(x, dim=1)

    def predict(self, sample_tensor):
        self.eval()
        with torch.no_grad():
            output = self.forward(sample_tensor)
        return torch.argmax(output, dim=1)


# -------------------------
# Semantic Skill Matching
# -------------------------
def semantic_match(resume_text, job_desc):
    emb_resume = bert_model.encode(resume_text, convert_to_tensor=True)
    emb_job = bert_model.encode(job_desc, convert_to_tensor=True)
    similarity = util.pytorch_cos_sim(emb_resume, emb_job).item()
    return round(similarity, 3)


# -------------------------
# Candidate Scoring
# -------------------------
def score_candidate(skill_match, exp_match=1.0, edu_match=1.0):
    return round((skill_match * 0.5) + (exp_match * 0.3) + (edu_match * 0.2), 3)


# -------------------------
# Example Usage (in Colab)
# -------------------------
if __name__ == "__main__":
    resume_text = """
    John Doe is a software engineer skilled in Python, Flask, SQL and Machine Learning.
    He has 5 years of experience working at Google and holds a Master's in Computer Science.
    """

    job_desc = """
    Looking for a software engineer experienced in Flask, Python, and SQL.
    Should have knowledge in ML and good backend development experience.
    """

    parser = ResumeParser()
    entities = parser.extract_entities(resume_text)
    skills = parser.extract_skills(resume_text)

    print("Entities:", entities)
    print("Extracted Skills:", skills)

    sim_score = semantic_match(resume_text, job_desc)
    final_score = score_candidate(sim_score, exp_match=0.9, edu_match=0.8)

    print("Semantic Similarity:", sim_score)
    print("Candidate Score:", final_score)
