# DevStack Builder

A modern and responsive web application where developers can explore different technologies and build their own personalized development stack.

The project loads technology data from a local JSON file and allows users to add, remove, and manage their selected technologies.

## Technologies Used

* React
* TypeScript
* Vite
* Tailwind CSS
* DaisyUI
* React Toastify
* Font Awesome

## Features

### Explore Technologies

Users can view different technologies with their icon, category, description, difficulty, rating, and badge.

### Build Your Stack

Users can add technologies to their stack, remove individual technologies, or remove all technologies at once.

### Toast Notifications

React Toastify shows notifications when a technology is added, removed, or when a duplicate technology is selected.

### Responsive Design

The website is responsive and works on mobile, tablet, and desktop devices.

## React Questions & Answers

### 1. What is JSX?

JSX allows us to write HTMLlike code inside JavaScript or TypeScript. It makes building React UI easier and more readable.

### 2. Props vs State

Props are used to pass data from a parent component to a child component. State stores data that can change inside a component.

### 3. What does `useState` do?

useState manages changing data. In this project, I used it to store the selected technologies in the user's stack.

### 4. What does `useEffect` do?

useEffect is commonly used for side effects such as fetching data. In this project, I used React's use() hook and Suspense to load the JSON data and show a loading state.

### 5. Why does `.map()` need a unique `key`?

A unique key helps React identify each item in a list and update the UI efficiently.

### 6. What is conditional rendering?

Conditional rendering means showing different UI based on a condition. For example, the "Your stack is empty" message is shown only when no technology is selected.

### 7. How does parent-child communication work?

A parent sends data or functions to a child through props. A child can call a function received through props to send information back to the parent.


