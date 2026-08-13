# 🤖 Smart FAQ Chatbot System

A lightweight, intelligent, and responsive **FAQ Chatbot** built using pure web technologies (**HTML5, CSS3, and JavaScript**). This chatbot uses **Text Preprocessing** and the **Cosine Similarity Algorithm** to understand user intent and match user queries with the most relevant FAQ answers in real time—entirely on the client side!

---

## 🌟 Key Features

- ⚡ **Zero-Backend / Client-Side Processing:** Runs 100% in the browser with zero server latency or dependency.
- 🧹 **Smart Text Preprocessing:** Tokenizes input, removes punctuation, and filters out non-essential stop words to extract core keywords.
- 📐 **Cosine Similarity Matching:** Matches natural, varied, or short user queries (e.g., *"when i get that?"*) to the correct stored FAQ.
- 🛡️ **Fallback Handling:** Gracefully handles out-of-scope or unrelated questions with a default support response.
- 📱 **Sleek & Responsive UI:** Clean, modern, and user-friendly chat interface with auto-scrolling messaging features.

---

## 🛠️ Tech Stack & Concepts

- **Frontend:** HTML5, CSS3
- **Scripting & Logic:** JavaScript (ES6+)
- **Algorithms / Concepts:**
  - Natural Language Processing (NLP) Preprocessing (Tokenization, Cleaning, Stop-word Filtering)
  - Vectorization (Word Frequency Vector)
  - Cosine Similarity Algorithm (Intent / Pattern Matching)

---

## 📁 Project Structure

```text
├── index.html     # HTML structure of the Chatbot UI
├── style.css      # CSS styling for chat window and messages
├── script.js     # FAQ dataset, text preprocessing, and Cosine Similarity logic
└── README.md      # Project documentation
