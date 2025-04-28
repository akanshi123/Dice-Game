# Dicee Game

A simple web-based dice game where two players roll a dice and the winner is determined by the higher number. If both players roll the same value, the game results in a draw.


## Overview

Dicee is a fun project that uses HTML, CSS, and JavaScript to simulate a dice roll game. The game randomly updates dice images to represent each player’s dice roll every time the page is refreshed. The game then displays a message at the top declaring "Player 1 Wins", "Player 2 Wins", or "Draw" based on the outcome.

## Project Structure

/images/ ├── dice1.png ├── dice2.png ├── dice3.png ├── dice4.png ├── dice5.png └── dice6.png index.html styles.css index.js README.md

markdown
Copy
Edit

- **index.html**: Contains the basic structure of the webpage.
- **styles.css**: Provides styling for the page, including fonts from Google Fonts.
- **index.js**: Contains JavaScript for handling the random dice rolls and updating both the dice images and the winner announcement.
- **images/**: Directory that includes all six dice image files.
- **README.md**: This file.

## How It Works

1. **HTML Structure:**  
   The HTML file sets up the main layout of the page. In the `<body>`, a container div holds:
   - An `<h1>` element (initially showing "Refresh Me") which will later display the game result.
   - Two dice sections, each showing a player’s label (Player 1 and Player 2) along with an `<img>` element that displays the dice face.
   - A footer that provides credit (in this case, "Akanshi Khandelwal").

2. **CSS Styling:**  
   The `styles.css` file (referenced in the `<head>`) styles the layout, fonts (using Google Fonts like *Indie Flower* and *Lobster*), and positions elements for an appealing UI.

3. **JavaScript Functionality:**  
   The JavaScript file (`index.js`) uses the following logic:
   - Generates two random numbers between 1 and 6.
   - Dynamically updates the source attributes of the dice images to reflect the random numbers.
   - Compares the two random values to determine the winner:
     - If Player 1’s roll is greater, the `<h1>` element displays "Player 1 Wins".
     - If Player 2’s roll is greater, it displays "Player 2 Wins".
     - In case of a tie, "Draw" is shown.
   - Every time the page is refreshed, the random roll is executed again, and a new winner (or draw) is displayed.

## Usage

1. **Download or Clone the Repository:**  
   Clone this repository to your local machine using:
   ```bash
   git clone https://github.com/yourusername/dicee-game.git
Ensure Assets are in Place:
Make sure the images/ folder is in the same directory as your index.html file and includes all the dice images (dice1.png through dice6.png).

Run the Game:
Open index.html in your web browser. Refresh the page to generate new dice values and see the result update in real time.

Technologies Used
HTML5: Structure of the webpage.

CSS3: Styling and layout of the game interface.

JavaScript: Random number generation and DOM manipulation.

Google Fonts: Custom fonts for styling text elements.

Credits
Dice images are included in the images/ folder.

Developed by Akanshi Khandelwal.

Fonts provided by Google Fonts.
