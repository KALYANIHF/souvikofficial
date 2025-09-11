# My Portfolio – Souvik Mondal

A modern and responsive **personal portfolio website** built with **React.js**, showcasing my skills, projects, experience, and achievements. This portfolio serves as my digital identity where recruiters, collaborators, and peers can explore my work and reach out to me.

## 🚀 Features

- 📖 **About Me** – A short introduction about who I am and what I do.
- 🛠 **Skills & Tools** – My technical expertise in languages, frameworks, and tools.
- 💼 **Projects** – Showcasing my best work with live demo links and GitHub repositories.
- 📈 **GitHub Stats & Contributions** – Interactive stats fetched from GitHub API.
- ✍️ **Blog & Articles (Placeholder)** – Space for future blogs and articles.
- 📬 **Contact Section** – Easy ways to connect with me.
- 🌙 **Dark/Light Mode** – Toggle between light and dark themes.
- 📱 **Responsive Design** – Works seamlessly across desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

- **Frontend:** React.js, HTML5, CSS3, JavaScript (ES6+)
- **Styling:** Tailwind CSS / Custom CSS
- **Icons:** Font Awesome / Lucide / React Icons
- **Database:** MongoDB for some DB storage
- **LocalStroage:** Local Storage for storing user preferences and theme settings for the current use.
- **Version Control:** Git & GitHub
- **Deployment:** Vercel / Netlify / GitHub Pages

## 📂 Folder Structure

```
my-site/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
├── serverside/
│   ├── contactFormHandler.js
│   ├── index.js
│   ├── sendMail.js
│   └── server.js
├── src/
|   ├── _data/
|   ├── context/       # Global state management
│   ├── main.jsx
│   ├── markup/        # HTML templates
│   ├── components/   # Reusable UI components
│   ├── pages/        # Main sections (Home, About, Projects, Contact)
│   ├── App.jsx
│   ├── App.css
│   ├── assets/
│       ├── images/
│       |── ProjectThumbnails/
│       └── ...
├── package.json
├── vite.config.js
├── bun.lock
├── package-lock.json
├── .env
├── eslint.config.js
├── index.html
├── LICENSE
├── .gitignore
├── .env.example
└── README.md
```

## ⚡ Installation & Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/KALYANIHF/souvik-protfolio-new.git
   ```
2. Navigate to project folder:
   ```bash
   cd my-site
   ```
3. Install dependencies:

   - if you are using npm
     ```bash
     npm install
     ```
   - if you are using yarn
     ```bash
     yarn install
     ```
   - if you are using pnpm
     ```bash
     pnpm install
     ```
   - if you are using bun js
     ```bash
     bun install
     ```

4. Start the development server:
   - if you are using npm
     ```bash
     npm run dev
     ```
   - if you are using yarn
     ```bash
     yarn run dev
     ```
   - if you are using pnpm
     ```bash
     pnpm run dev
     ```
   - if you are using bun
     ```bash
     bun run dev
     ```
5. Build for production:
   - if you are using npm
     ```bash
     npm run build
     ```
   - if you are using yarn
     ```bash
     yarn run build
     ```
   - if you are using pnpm
     ```bash
     pnpm run build
     ```
   - if you are using bun
     ```bash
     bun run build
     ```

## 🌐 Live Demo

🔗 [View Portfolio](https://souvikofficial.live)

## 🛠️ Backend

The backend of this portfolio is built with:

- **Node.js** + **Express.js** → REST API handling
- **MongoDB** → Storing user data and contact submissions
- **Amazon SES (Simple Email Service)** → Sending emails securely
- **Vercel** → Hosting backend serverless functions

### ✉️ Contact Form

The backend exposes a `/api/contact` route that:

- Accepts `POST` requests with `name`, `email`, `subject`, and `message`
- Sends emails via Amazon SES
- Saves submissions into MongoDB for future reference

---

## 🔗 Frontend + Backend Together

To make development easier, the project uses [`concurrently`](https://www.npmjs.com/package/concurrently) to run **both frontend (React + Vite)** and **backend (Express)** with a single command.

### Run locally:

```bash
npm run dev
```

## 👨‍💻 About Me

**Name:** Souvik Mondal
**Role:** Web Developer / Senior Software Engineer / DevOps Enthusiast
**Skills:** React.js, JavaScript, HTML, CSS, Node.js, Express, MongoDB, TypeScript
**Interests:** Building web apps, open-source contribution, and Backend Services and DevOps Practices.
**Location:** India

## 📫 Contact

- 📧 Email: [souvikofficial21@gmail.com](mailto:souvikofficial21@gmail.com) OR [marvel.sm.24@gmail.com](mailto:marvel.sm.24@gmail.com)
- 💼 LinkedIn: [https://www.linkedin.com/in/souvikmondal-unix/](https://www.linkedin.com/in/souvikmondal-unix/)
- 🐙 GitHub: [github.com/KALYANIHF](https://github.com/KALYANIHF)
- 🌍 Portfolio: [souvikofficial.live](https://souvikofficial.live)
- My Photo Gallery: [https://www.pexels.com/@souvik-mondal-2955175/](https://www.pexels.com/@souvik-mondal-2955175/)

---

#### ✨ Made with ❤️ by **Souvik Mondal**

---
