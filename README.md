# HabitTracker

HabitTracker is a web application designed to help users create, update, delete, and track their habits on a daily basis. It is a user-specific app, allowing individuals to monitor their habits and mark them as done or not done. The project is built using a tech stack that includes Node.js for server-side scripting, Express for handling HTTP requests and routing, MongoDB for data storage and management, and EJS for rendering views and templates.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

## Installation

To run this application on your local machine, follow these steps:

1. Clone this repository using the following command:
   git clone https://github.com/agentgrey/TodoList.git](https://github.com/raza-altaf/habitTracker.git)
   
2. Install the required dependencies:
   npm install
   
3. Start the application:
   npm start
   
4. Open the application in your web browser by visiting:
   http://localhost:8000

## Usage

Once the application is running, follow these steps to make the most of it:

- Sign-up/Sign-in to your account.
- Click on the "Add Habit" button to create a new habit.
- Enter the name of the habit you want to track.
- Click on the "Save" button to save the habit.
- To mark a habit as complete/incomplete for the day, click on the corresponding icon.
- To delete a habit, click on the "Delete" icon next to it.
- To view today's habits, click on the "Show Daily" button.
- To edit a habit, click on the "Edit" icon next to it.

## Folder Structure

```
Habit Tracker
    |
    |               |--->css
    |--->assets---->|--->img
    |               |---> js
    |
    |               |--->flashMiddleware.js
    |--->config---->|--->mongoose.js
    |               |--->passport_local.js
    |
    |                  |-->habit_controller.js
    |--->controllers-->|-->home_controller.js
    |                  |-->user_controller.js
    |
    |               |-->habit.js
    |--->models---->|
    |               |-->user.js
    |
    |
    |               |-->habit.js
    |--->routes---->|-->index.js
    |               |-->user.js
    |
    |
    |              |--->_header.ejs
    |              |--->404.ejs
    |              |--->daily_view.ejs
    |              |--->forget_password.ejs
    |--->views---->|--->home.ejs
    |              |--->layout.ejs
    |              |--->user_sign_in.ejs
    |              |--->user_sign_up.ejs
    |              |--->weekly_view.ejs
    |
    |-->node_modules
    |-->.gitignore
    |--> index.js
    |--> package-lock.json
    |-->package.json
```

## Screenshots

### Home Page

![Home Page](Home page.png)

### Sign-up Page

![Sign-up Page](Sign-up page.png)

### Sign-in Page

![Sign-in Page](Sign-in page.png)

### Weekly View Page

![Weekly View Page](Weekly View Page.png)

## Contributing

Contributions are always welcome! If you have any suggestions for improving this application, please feel free to create a pull request or open an issue.
#   h a b i t T r a c k e r 
