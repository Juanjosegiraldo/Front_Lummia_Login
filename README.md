# Lummia Auth UI

Simple **Login / Sign Up interface** with a vertical animated transition, designed to match the **dark dashboard style of Lummia Platform**.

## Features

* Dark UI inspired by modern SaaS dashboards
* Vertical animation between **Sign In** and **Sign Up**
* Responsive centered layout
* Clean and simple structure
* Smooth transitions using CSS

## Technologies

* HTML
* CSS
* JavaScript (Vanilla)

## Project Structure

```
auth-ui/
│
├── index.html
├── style.css
└── main.js
```

## How It Works

Both **Login** and **Register** forms exist in the same container.

When the user clicks:

* **Sign Up** → the register form slides up
* **Sign In** → the login form slides down

This is controlled by toggling CSS classes with JavaScript.

## Run the Project

1. Clone or download the repository
2. Open the project folder
3. Run `index.html` in your browser

No build tools or dependencies are required.

## Future Improvements

* Form validation
* Backend authentication integration
* Password visibility toggle
* Responsive mobile layout
* OAuth login (Google, GitHub)