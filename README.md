# Marketing Association NZ - Mission 0

## Overview
Welcome to **Marketing Association NZ**, a dynamic **React-based web app** designed for seamless navigation and an engaging user experience. Built with **Vite**, this project is structured to be fast, efficient, and easy to maintain. 


##  Built With
-  **React 19.1.0** – Component-based UI framework  
-  **Vite** – Lightning-fast development & build tool  
-  **React Router** – Smooth page navigation  
-  **CSS Modules** – Scoped styling for cleaner UI  
-  **ESLint** – Code quality & linting  
-  **Azure Static Web Apps** – Hosting & CI/CD  


## Folder Structure
 level5-mission0
├── public/                # Static assets (favicon, images)
├── src/
│   ├── components/        # UI components (Navbar, Body, Vision, Strategy, Growth)
│   ├── styles/            # CSS Modules for styling
│   ├── App.jsx            # Root component
│   ├── main.jsx           # Entry point
│   ├── routes/            # React Router configuration
├── .github/workflows/     # GitHub Actions deployment
├── package.json           # Dependencies & scripts
├── README.md              # Project documentation

## Installation & Setup
1. Clone the repo:
   ```sh
   git clone https://github.com/muddyducky/level5-mission0.git
   cd level5-mission0
2. Avoid Accidental Pushes to Base Repository If you forked this repository, update your Git remote URL to push changes to your own repo:
git remote set-url origin https://github.com/your_username/repo_name.git
git remote -v  # Confirm the changes
  
Replace your_username with your GitHub username.
Replace repo_name with the name of your forked repository.
  
3. Install Dependencies
npm install

4. Run Development Server
npm run dev

5. Access app at
http://localhost:5173

## Deployment to Azure Static Web Apps
This app is hosted on Azure, using GitHub Actions for CI/CD. Every push to the repository triggers an automatic deployment.

Troubleshooting Deployments
 If changes aren’t appearing on your live site:

Check GitHub Actions logs for errors

Verify Azure Static Web Apps settings

Clear browser cache and test in Incognito Mode

##  Features
✅ Responsive navigation bar with dynamic menu toggle

✅ Active link styling using NavLink

✅ Hero section with interactive search bar

✅ Three structured info sections: Vision, Strategy, Growth

## Contribution Guidelines
Want to contribute? Follow these steps:

Fork the repository

Create a branch (git checkout -b feature-branch)

Commit changes (git commit -m "Added new feature")

Push your branch (git push origin feature-branch)

Open a Pull Request 

License
This project is for educational purposes only. Feel free to modify, expand, and experiment! 


