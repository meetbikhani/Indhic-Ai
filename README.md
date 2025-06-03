# Poem Translation and Analysis App

This application helps users understand poems in different languages by providing:

- Romanized English version
- English translation with detailed meaning
- Line-by-line analysis

## Tech Stack

- Frontend: React (Vite)
- Backend: Node.js, Express
- Database: MongoDB
- AI: Google Gemini API

## Project Structure

```
poem-translator/
├── frontend/          # React (Vite) frontend
└── backend/           # Node.js/Express backend
```

## Setup Instructions

### Backend Setup

1. Navigate to backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file with the following variables:

```
GEMINI_API_KEY=your_gemini_api_key
```

4. Start the server:

```bash
npm run dev
```

### Frontend Setup

1. Navigate to frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file:

```
VITE_API_URL=http://localhost:5000
```

4. Start the development server:

```bash
npm run dev
```

## Features

- Image upload for poem screenshots
- AI-powered translation and analysis
- Romanized text generation
- Detailed meaning explanation
- Clean and intuitive UI


