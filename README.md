# Keerthiga Chelladurai – Professional Developer Portfolio

> **Building Practical Solutions Through Code & Innovation**  
> Aspiring Software Engineer | B.E. CSE (Artificial Intelligence & Machine Learning)  
> KPR Institute of Engineering and Technology, Coimbatore (Class of 2028, CGPA: 9.32)

---

## 🌟 Overview

A world-class, premium, recruiter-focused personal developer portfolio engineered with modern web technologies, sophisticated typography, subtle ambient glows, dark/light theme switching, and authentic project showcases.

### Key Sections:
1. **Hero Section**: High-impact editorial introduction, availability indicator, profile photograph frame with ambient glow, primary CTA to explore work, resume download, and direct links to GitHub & LinkedIn.
2. **About Me**: Narrative on engineering philosophy, core domains (Software Engineering, Full-Stack Web Development, Backend Development, Machine Learning, Problem Solving), and an academic spotlight card featuring degree, institution, and 9.32 CGPA.
3. **Technical Skills**: Categorized skills matrix (Languages, Web Development, Databases, Machine Learning, Tools) with clean badges, responsive filter tabs, and honest representation without fake percentages.
4. **Featured Projects**: Custom interactive mockups and architecture breakdowns for:
   - **Kuberix – Expense Tracker**: Offline-first JavaScript app with Local Storage and Chart.js visualization.
   - **Stress Level Prediction**: Machine learning mobile app built with Flutter and Scikit-learn/Pandas/NumPy.
   - **Smart EventSphere**: Full-stack campus event platform built during Infosys Springboard Virtual Internship 7.0.
   - **Student Management System**: Flask & MySQL CRUD platform developed during KICE Infosystems Backend Internship.
5. **Internship Experience**: Professional timeline detailing roles, contributions, and technologies used at **KICE Infosystems**, **Infosys Springboard**, and **WebGapp, Madurai**.
6. **Honors & Achievements**: Spotlight showcase for the **KONE ELEVATE '26 Hackathon Winner** (Top 36 of 1100+ teams, 5 winners, ₹50,000 cash prize, 30-hour elevator drive fault detection prototype), alongside **CodeChef 1000+ problems solved (Problem Solver Diamond)** and **GenAI XCELERATE 2nd Prize for Enterprise RAG System**.
7. **Certifications & Learning**: Verified credential cards for **AWS Fundamentals** (EC2, Route 53, Load Balancer), **IIT Bombay Advanced C++**, **Samsung Innovation Campus**, and **Infosys Springboard 7.0**.
8. **Coding Profiles**: Quick-access cards with verified links to **GitHub**, **LeetCode**, **HackerRank**, **CodeChef**, and **LinkedIn**.
9. **Contact & Collaboration**: Interactive form with validation, functional mailto fallback, one-click email copying, and direct email (`keerthigachelladurai@gmail.com`) / phone (`+91 9597127292`).
10. **Footer & Navigation**: Sticky glassmorphic navbar with scrollspy indicator, mobile drawer, light/dark theme switch, dynamic year copyright, and back-to-top button.

---

## 🛠️ Technology Stack

- **Framework**: React 18
- **Bundler & Tooling**: Vite 5
- **Styling**: Tailwind CSS 3 with custom dark charcoal aesthetic, glassmorphic filters, and keyframe animations
- **Icons**: Lucide React
- **Micro-Interactions**: Canvas Confetti

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── Keerthiga_Resume.pdf    # Embedded resume PDF (ready for download)
│   ├── profile.jpg             # High-resolution professional photograph
│   └── profile2.png            # Fallback avatar
├── src/
│   ├── config/
│   │   └── portfolioData.js    # ⚡ Centralized configuration for all links & content
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky glass navigation bar & theme toggle
│   │   ├── Hero.jsx            # Hero section with framed photo & metrics
│   │   ├── About.jsx           # About me & education details
│   │   ├── Skills.jsx          # Categorized technical skills matrix
│   │   ├── Projects.jsx        # Project showcases & visual mockups
│   │   ├── Experience.jsx      # Interactive internship timeline
│   │   ├── Achievements.jsx    # Hackathon winner & competitive coding honors
│   │   ├── Certifications.jsx  # Cloud & academic certifications
│   │   ├── CodingProfiles.jsx  # GitHub, LeetCode, HackerRank, etc.
│   │   ├── Contact.jsx         # Contact form & copy-to-clipboard actions
│   │   ├── Footer.jsx          # Footer with dynamic year & back-to-top
│   │   └── BackgroundGlow.jsx  # Ambient aurora gradients & grid pattern
│   ├── App.jsx                 # Main layout & theme management
│   ├── main.jsx                # React DOM entrypoint
│   └── index.css               # Tailwind directives & glassmorphic utilities
├── index.html                  # SEO metadata & Google Fonts
├── package.json                # Project dependencies & scripts
├── tailwind.config.js          # Extended theme colors & animations
└── vite.config.js              # Vite server configuration
```

---

## 🚀 Running the Project Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

---

## ⚙️ Updating Personal Data & Links

All external links, project repositories, certifications, and contact details are stored in:
`src/config/portfolioData.js`

To update any repository or demo link, open `src/config/portfolioData.js` and modify the respective fields.
