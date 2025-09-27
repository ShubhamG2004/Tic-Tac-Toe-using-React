# 🎮 Modern Tic Tac Toe Game

A beautifully designed, modern Tic Tac Toe game built with React and Vite, featuring stunning visual effects, smooth animations, and responsive design.

![Tic Tac Toe Game](https://img.shields.io/badge/React-18+-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5+-green.svg)
![CSS3](https://img.shields.io/badge/CSS3-Modern-orange.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## ✨ Features

### 🎨 **Modern UI/UX**
- **Glass Morphism Design**: Beautiful translucent containers with backdrop blur effects
- **Gradient Backgrounds**: Stunning purple gradient background
- **Smooth Animations**: Hover effects, button animations, and game piece transitions
- **Responsive Design**: Perfectly optimized for desktop, tablet, and mobile devices
- **Professional Typography**: Custom Google Fonts (Poppins) integration

### 🎮 **Game Features**
- **Interactive Gameplay**: Click to place X's and O's
- **Current Player Indicator**: Visual indication of whose turn it is
- **Win Detection**: Automatic detection of winning combinations
- **Tie Game Handling**: Detects and announces tie games
- **Win Celebrations**: Animated win announcements with emojis
- **Reset Functionality**: One-click game reset button
- **Smart Validation**: Prevents invalid moves on occupied squares

### 🔧 **Technical Features**
- **React Hooks**: Modern React with useState and useRef
- **State Management**: Proper game state handling
- **Component Structure**: Clean, modular component architecture
- **CSS Grid Layout**: Modern CSS Grid for the game board
- **Mobile First**: Responsive design principles
- **Performance Optimized**: Fast rendering with Vite

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShubhamG2004/Tic-Tac-Toe-using-React.git
   cd tic-toe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to play the game!

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 How to Play

1. **Start the Game**: The game begins with Player X (Cross)
2. **Make Moves**: Click on any empty square to place your symbol
3. **Take Turns**: Players alternate between X (Cross) and O (Circle)
4. **Win Conditions**: Get three of your symbols in a row (horizontal, vertical, or diagonal)
5. **Reset**: Click the "Reset Game" button to start a new game

## 🏗️ Project Structure

```
tic-toe/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── react.svg
│   │   ├── circle.png
│   │   └── close.png
│   ├── Components/
│   │   └── TicTacToe/
│   │       ├── TicTacToe.jsx
│   │       └── TicTacToe.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```


## 🛠️ Technologies Used

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: CSS3 with modern features
- **Fonts**: Google Fonts (Poppins)
- **Icons**: Custom PNG assets
- **Development**: ESLint for code quality

## 🎮 Game Logic

The game implements classic Tic Tac Toe rules with the following logic:

- **Win Patterns**: 8 possible winning combinations (3 rows, 3 columns, 2 diagonals)
- **Turn Management**: Alternating player turns with visual feedback
- **State Validation**: Prevents moves on occupied squares
- **Game End Detection**: Automatic win/tie detection
- **Reset Functionality**: Complete game state reset


## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🔗 Demo

[Live Demo](https://your-demo-link.com) *(Replace with actual deployment link)*

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ and React
