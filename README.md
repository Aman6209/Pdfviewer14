# PDF Co-Viewer

A real-time PDF co-viewer application that allows multiple users to view and sync PDF slides in real-time. The app features an admin user who can control the slide for all connected viewers, making it perfect for remote presentations, classrooms, or collaborative viewing.

## Features

- **Real-time synchronization**: All users see the same page at the same time when the admin changes the slide.
- **Admin control**: The admin can move through slides and all viewers will follow automatically.
- **Seamless user experience**: Viewers can navigate through the PDF and see the same slide as the admin, ensuring a smooth presentation.
- **Next/Previous buttons**: Viewers can also manually navigate to the next or previous slide (but the admin has ultimate control).
- **Toggle Admin Mode**: Admin can be toggled on/off to control the slide.

## Technologies Used

- **Frontend**: React.js, `@react-pdf-viewer/core` for rendering PDF, WebSockets (via `socket.io`) for real-time communication.
- **Backend**: Node.js with Express, `socket.io` for real-time communication.
- **Deployment**: Can be deployed on **Heroku** for backend, **Vercel** or **Heroku** for the frontend.
  
## Prerequisites

- Node.js and npm installed
- A basic understanding of React, Node.js, and WebSocket communication
- A Heroku account (for deployment) or Vercel account (for frontend deployment)

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/pdf-co-viewer.git
cd pdf-co-viewer
 
