# Portfolio Update Guide

This guide explains how to update your personal information and links in your refined portfolio.

## 1. Personal Information (Contact Modal)
To update your mobile number and email shown in the contact dialog:
- **File**: `site/public/index.html`
- **Mobile**: Search for `<!-- UPDATE MOBILE HERE -->` (around line 64).
- **Email**: Search for `<!-- UPDATE EMAIL HERE -->` (around line 71).
- **Mailto Link**: Search for `href="mailto:rithwikracharla@gmail.com"` (around line 76) and update the email.

## 2. Social Links
To update your LinkedIn and GitHub links in the navigation and social dock:
- **File**: `site/public/index.html`
- **GitHub**: Search for `<!-- UPDATE GITHUB HERE -->` (marker in header/dock).
- **LinkedIn**: Search for `<!-- UPDATE LINKEDIN HERE -->` (marker in social dock, around line 140).

## 3. Project Repositories
To update the repository links for your projects:
- **File**: `site/public/index.html`
- **Quiz Game Repo**: Search for `/* UPDATE PROJECT 1 REPO HERE */` (around line 246). Update the `window.open('#')` with your GitHub URL.
- **Music Player Repo**: Search for `/* UPDATE PROJECT 2 REPO HERE */` (around line 262). Update the `window.open('#')` with your GitHub URL.

## 4. Resume Link
To update your resume:
- **File**: `site/public/index.html`
- Search for `<!-- UPDATE RESUME LINK -->` (around line 98).
- Replace the `<button>` inner comment or wrap it in an `<a>` tag with your `href`.

## 5. Starting the Server
Whenever you make changes, ensure the server is running to see them:
```bash
npm start
```
The site will be available at `http://localhost:3000`.
