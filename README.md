# Story Point Estimator

**[Try the Live Web App Here!](https://chxei.github.io/story-point-estimator/)**

A sleek, client-side web application for calculating Agile story points dynamically based on real-world technical and procedural complexity vectors. 

> **🤖 Note:** This entire application was 100% **Vibecoded** by Antigravity—a powerful agentic AI coding assistant designed by Google DeepMind. No manual code was typed; it was built autonomously via guided conversation. 

---

## 🚀 Features

The estimator removes the subjectivity of "gut-feeling" story pointing by evaluating tasks against a strict mathematical matrix:

*   **Dual-Vector Baselines:** Rate both *Technical Difficulty* and *Procedural Difficulty* independently using an intuitive Easy / Medium / Hard scale.
*   **Complexity Multipliers:** Toggle specific variables that exponentially increase the risk or time required to complete a task:
    *   Needs Deployment (Additive)
    *   Dependent on Other Modules (Multiplicative)
    *   Needs Tests (Multiplicative)
    *   Cross-Domain Technical Knowledge (Multiplicative)
    *   Cross-Domain Business Knowledge (Multiplicative)
*   **Fibonacci Mapping:** The final complexity score gracefully maps to standard Agile story point buckets: `1, 2, 3, 5, 8, 13, 21`.
*   **Minimum Threshold Enforcement:** If any difficulty-increasing multiplier is checked, the task mathematically cannot be pointed as a `1`.

## 🎨 Design

The UI is built using a clean, modern corporate theme:
- Minimalist layout featuring Alabaster White (`#FFFFFF`) and Light Grey backgrounds.
- High-visibility interactive states using a vibrant Primary Orange (`#FC671A`).
- Segmented radio controls provide faster, more deliberate input than traditional sliders.
- Fully responsive, compacted vertical layout designed to fit perfectly on a single laptop screen without scrolling.

## 🛠️ Tech Stack

This project is purposely kept lightweight and dependency-free:
- **Vanilla HTML5**
- **Vanilla CSS3** (Custom properties, Flexbox, Grid)
- **Vanilla JavaScript (ES6+)**

*There are no build steps, bundlers, or frameworks required to run this application.*

---

## 🏃‍♀️ Getting Started

Since this is a vanilla client-side application, you can simply open the file in your browser:

1. Clone this repository:
   ```bash
   git clone https://github.com/chxei/story-point-estimator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd story-point-estimator
   ```
3. Open `index.html` in your favorite web browser.

**Alternatively, serve it locally during development:**
If you have Python installed, you can spin up a local server:
```bash
python3 -m http.server 8000
```
Then navigate to `http://localhost:8000`.

## 🤝 Contributing
Since this project was vibecoded, feel free to fork this repository, grab your favorite AI assistant, and prompt it to add whatever new features or multipliers your team uses for estimation!
