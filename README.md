# Neighborhood-Swap

## Overview

Neighborhood Swap is a React + Vite marketplace prototype that enables neighbors to exchange, donate, or request items within their local community. The application demonstrates user authentication, CRUD operations, favorites, and real-time-style buyer–seller messaging using client-side state.

- 🌐 **Live Demo:** [View Website](https://neighborhood-swap.vercel.app/)
- 🎨 **Figma Design:** [View Design](https://www.figma.com/design/Nto0xICqt2tRpOZB7NUUID/Neighborhood%E2%80%91Swap-%E2%80%93-UIUX?node-id=12-340&t=7nFc62Gf3Sf3oU4K-1)
- ▶️ **Figma Prototype:** [View Prototype](https://www.figma.com/proto/Nto0xICqt2tRpOZB7NUUID/Neighborhood%E2%80%91Swap-%E2%80%93-UIUX?node-id=56-2512&p=f&t=QDu66pb24yNQcZ71-1&scaling=contain&content-scaling=fixed&page-id=12%3A342)

## Screenshots

<table>
  <tr>
    <td align="center">
      <img src="docs/screenshots/Login.png" width="350"><br>
      <strong>Login</strong>
    </td>
    <td align="center">
      <img src="docs/screenshots/SignUp.png" width="350"><br>
      <strong>Sign Up</strong>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="docs/screenshots/Home.png" width="350"><br>
      <strong>Home</strong>
    </td>
    <td align="center">
      <img src="docs/screenshots/Item.png" width="350"><br>
      <strong>Item Details</strong>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="docs/screenshots/CreatePost.png" width="350"><br>
      <strong>Create Post</strong>
    </td>
    <td align="center">
      <img src="docs/screenshots/Profile.png" width="350"><br>
      <strong>Profile</strong>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="docs/screenshots/Chat.png" width="350"><br>
      <strong>Chat</strong>
    </td>
    <td align="center">
      <img src="docs/screenshots/MyChats.png" width="350"><br>
      <strong>My Chats</strong>
    </td>
  </tr>
</table>

## Key Features

- Authentication flow
  - Login by username or email
  - Sign up with validation for password strength and duplicate usernames/emails
- User profile management
  - Edit profile name, username, email, and profile image
  - Delete account and remove owned listings
- Item management
  - Create new item posts with image upload, category, and type
  - View item details
  - Edit or delete owned item listings
- Marketplace browsing
  - Home feed showing all available items
  - My Posts page for the current user's listings
  - Favourites page for saved items
- Chat support
  - Buyer-to-seller conversations per item
  - Seller dashboard for viewing buyer conversations for each listed item.
  - Message history with automatic scroll to latest message

## App Pages / Routes

- `/` - Onboard login page
- `/signup` - Registration page
- `/home` - Marketplace feed
- `/post` - Create a new item post
- `/item/:id` - Item detail and conversation launcher
- `/profile` - User profile editor
- `/myposts` - Current user's posted items
- `/favourites` - Favorite items list
- `/chat/:itemId/:buyerId` - One-to-one chat for an item
- `/mychats/:itemId` - Seller view of chats for a listed item

## Architecture

- React 19 with Vite for fast development
- `react-router-dom` for routing
- Context providers:
  - `ItemContext` for item list and CRUD operations
  - `UserContext` for user list, current user, favorites, and profile updates
  - `ChatContext` for chat creation and messaging
- Data is initialized from local seed files in `src/data/`
- Application state is managed entirely with React Context and stored in memory; runtime changes are reset when the page is refreshed.

## Folder Structure

- `src/components/` - reusable UI and layout components
- `src/context/` - React context providers and hooks
- `src/pages/` - route pages and feature screens
- `src/css/` - page-level styling
- `src/data/` - seed items, users, chats, categories, and types

## Getting Started

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd Neighborhood-Swap
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Notes

- Image uploads use browser object URLs and are only available during the current session.
- The app uses in-memory state only; refreshing the browser resets all runtime changes.
- User authentication is implemented locally in the browser and is not secure for production use.

## Tech Stack

### Frontend
- React 19
- Vite
- React Router
- Context API
- CSS

### Development
- ESLint
- Git
- GitHub
- Vercel

## Future Improvements

- Persistent backend database
- Real-time messaging with WebSockets
- Image storage using cloud services
- Notifications
- Advanced search and filtering

---

Created by Jithin Joy Arakkal.