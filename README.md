# CrossFit Competition Leaderboard

## Project Overview

This project is aimed at building a web application to manage and display the leaderboard for CrossFit competitions. The application will allow administrators to manage multiple competitions, dynamically update scores from different devices, and maintain athlete profiles.

## Tech Stack

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Next.js](https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Node.js](https://img.shields.io/badge/node.js-%23339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/mongodb-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Jest](https://img.shields.io/badge/jest-%23C21325.svg?style=for-the-badge&logo=jest&logoColor=white)

## Features

1. **User Authentication and Authorization**:
   - Users can log in to submit scores.
   - Admin roles for managing competitions and leaderboards.

2. **Multiple Competitions Management**:
   - Create, update, and delete different competitions.
   - Separate leaderboards for each competition.

3. **Real-time Score Updates**:
   - Display leaderboard on a TV screen.
   - Submit scores from another device (e.g., an iPad).

4. **Athlete Accounts and Tracking**:
   - Athlete profiles to track performance across multiple competitions.
   - Athlete portal for personal stats and scores.

## General Plan

### Phase 1: Setup and Initial Development
1. **Initialize the Project**:
   - Set up a new repository on GitHub.
   - Initialize a Next.js project with React.
   - Configure ESLint and Prettier for code quality and consistency.

2. **Setup Authentication**:
   - Implement user authentication using Passport.js with JWT.
   - Create login, registration, and dashboard pages.

3. **Database Design**:
   - Define schemas for users, competitions, leaderboards, and scores in MongoDB.
   - Set up Mongoose for schema validation and querying.

### Phase 2: Core Features Development
1. **Competition Management**:
   - Build admin dashboards for creating, updating, and deleting competitions.
   - Develop APIs to manage competition data.

2. **Real-time Score Updates**:
   - Implement WebSocket (Socket.io) for real-time communication.
   - Develop a frontend component for live leaderboard updates.

3. **Athlete Profiles**:
   - Create user profiles with fields for personal information, competition history, and scores.
   - Develop a user dashboard for athletes to view their stats.

### Phase 3: Testing and Deployment
1. **Testing**:
   - Write unit tests using Jest for both frontend and backend.
   - Perform integration and end-to-end testing.

2. **Deployment**:
   - Containerize the application using Docker.
   - Set up deployment pipelines using GitHub Actions.

### Future Enhancements
- **Notifications**:
  - Implement real-time notifications for score updates and new competitions.

- **Analytics Dashboard**:
  - Add visualizations for performance trends and competition statistics using Chart.js.

- **Offline Capabilities**:
  - Use service workers to enable offline functionality.

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

---

## Contact

- **GitHub**: [AlexGuyNichols](https://github.com/AlexGuyNichols)

Feel free to reach out if you have any questions or suggestions!
