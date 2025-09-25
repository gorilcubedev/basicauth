# OAuth2 Login with Google/GitHub

This project implements OAuth2 authentication using Google and GitHub with a Node.js/Express backend and React frontend.

## Setup

1. **Register OAuth Apps:**
   - **Google:** Go to [Google Developer Console](https://console.developers.google.com/), create a project, enable Google+ API, create OAuth 2.0 credentials. Set authorized redirect URI to `http://localhost:5000/auth/google/callback`.
   - **GitHub:** Go to [GitHub Developer Settings](https://github.com/settings/developers), create a new OAuth App. Set Authorization callback URL to `http://localhost:5000/auth/github/callback`.

2. **Update Environment Variables:**
   - Edit `config/.env` and replace placeholders with your actual client IDs and secrets.

3. **Install Dependencies:**
   - Backend: `cd backend && npm install`
   - Frontend: `cd frontend && npm install`

4. **Run the Application:**
   - Backend: `cd backend && npm start` (runs on port 5000)
   - Frontend: `cd frontend && npm start` (runs on port 3000)

5. **Test:**
   - Open `http://localhost:3000` in your browser.
   - Click login buttons and complete OAuth flow.
   - You should be redirected to the dashboard with user info.

## Project Structure

- `backend/`: Express server with Passport OAuth strategies
- `frontend/`: React app with login and dashboard components
- `config/`: Environment variables for OAuth credentials