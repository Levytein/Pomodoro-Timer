# Pomodoro Timer

## Description
A Pomodoro Timer app designed to help you manage your time effectively by breaking work into intervals separated by short breaks. Built with React and Tailwind CSS for a sleek and responsive user interface.

## Languages and Utilities Used

### Languages:
- **JavaScript**: The primary programming language used for developing the application.
- **CSS**: Cascading Style Sheets used for additional styling.
- **HTML**: HyperText Markup Language, the standard markup language for creating web pages.

### Libraries and Frameworks
- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for server-rendered or statically-exported React apps.

### Styling
- **Tailwind CSS**: A utility-first CSS framework used for styling the application.

## Check it out here
https://pomodoro-timer-git-main-geos-projects-21042a94.vercel.app/

## Installation
### Clone the repository:

```
git clone https://github.com/Levytein/Pomodoro-Timer.git
cd Calculator
```

### Install dependencies (Node.js and npm should be installed):
```
npm install
```
### Start the development server:
```
npm run dev
```
## Features

- Customizable session and break lengths.
- Visual and audio notifications when sessions and breaks end.
- Responsive design using Tailwind CSS.
- Smooth animations and transitions for a pleasant user experience.
- Easy-to-use interface for managing your work and break intervals.

## Development Progress
Hi, this is the first official project I plan to put into my portfolio. This project was originally for a certification but I wanted to elevate it where I wanted to take it to the next level. The overall functionality of the project was pretty straightforward, but I started to really struggle to create animations for the display of the timer to stretch out after making the session and break setters disappear.

I'll detail the problems and the solutions I came up with during the project's development.

### Initial Setup for Height Transition:

#### Problem: The main-div in timer.js snapped at the end of its height transition.
- Solution: Implemented keyframe animations for smoother transitions. ( Disclaimer: On the deployed site, the animation I made snaps towards the end when you first start the timer, but does not if you run it locally will fix this when I determine the issue later.)

### Compatibility with Tailwind CSS:

#### Problem: Ensuring the solution worked with Tailwind CSS.
 Solution: Extended the Tailwind configuration to include custom keyframes and animations.
Managing Visibility and Animation State:

### Problem: The BreakLength and SessionLength divs needed to reappear only after the height transition was complete.
- Solution: Used setTimeout and state management (isAnimating, isVisible) to control visibility and delay reappearance.
Ensuring Smooth Transition without Snapping:

#### Problem: The height animation snapped into place at the end.
- Solution: Used keyframe animations (heightExpand, heightCollapse) defined in Tailwind configuration to ensure smooth transitions.
Coordinating Reappearance Delay:

#### Problem: Adding a delay before the BreakLength and SessionLength divs reappeared.
- Solution: Used setTimeout to delay visibility change, ensuring the timer's height animation completed first.

Overall, really happy how it turned out and learned a bunch of new stuff and I'm hoping to revisit this in the future.
