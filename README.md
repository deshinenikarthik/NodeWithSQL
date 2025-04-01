# User Management System

## Overview
This is a **User Management System** built using **Node.js, Express.js, MySQL, and EJS**. The application allows users to perform CRUD operations on a user database, including adding, updating, deleting, and viewing user records.

## Features
- 🏠 **Home Page**: Displays the total number of users in the database.
- 👤 **User List**: View all registered users.
- ➕ **Add User**: Register a new user with a unique ID, username, email, and password.
- ✏️ **Edit User**: Update username by verifying the password.
- ❌ **Delete User**: Remove a user account after confirming the password.
- 🔄 **Method Override**: Enables PUT and DELETE HTTP methods in forms.
- 🎭 **Templating Engine**: Uses **EJS** to render dynamic web pages.
- 🛠 **Faker.js Integration**: Generates dummy user data for testing.

## Technologies Used
- **Node.js** - JavaScript runtime for server-side development.
- **Express.js** - Web framework for Node.js.
- **MySQL** - Relational database for user storage.
- **EJS** - Templating engine for rendering views.
- **Method-Override** - Middleware to support PUT and DELETE methods.
- **UUID** - Generates unique user IDs.
- **Faker.js** - Creates random user data for testing.

## Installation & Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/deshinenikarthik/NodeWithSQL.git
   cd NodeWithSQL
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Set up MySQL Database**
   - Create a MySQL database named `delta_app`
   - Run the following SQL command to create the `user` table:
     ```sql
     CREATE TABLE user (
         id VARCHAR(255) PRIMARY KEY,
         username VARCHAR(100) NOT NULL,
         email VARCHAR(100) NOT NULL UNIQUE,
         password VARCHAR(100) NOT NULL
     );
     ```
4. **Update database credentials** in `server.js`
   ```js
   const connection = mysql.createConnection({
       host: "localhost",
       user: "root",
       database: "delta_app",
       password: "your_password_here"
   });
   ```
5. **Run the application**
   ```sh
   node index.js
   ```
6. **Open in browser**
   - Visit: `http://localhost:3000`

## API Endpoints

| Method  | Route               | Description            |
|---------|--------------------|------------------------|
| GET     | `/`                | Home page with user count |
| GET     | `/user`            | View all users |
| GET     | `/user/add`        | Render add user form |
| POST    | `/user`            | Add new user |
| GET     | `/user/:id/edit`   | Edit user page |
| PATCH   | `/user/:id`        | Update user (verify password) |
| GET     | `/user/:id/delete` | Render delete confirmation |
| DELETE  | `/user/:id`        | Delete user (verify password) |

## Future Enhancements
- ✅ Add password hashing for better security.
- 📩 Implement email verification.
- 📊 User activity logs.
- 📱 Improve UI with better styling.

Contributing
Contributions are welcome! Feel free to fork this repository, create a feature branch, and submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

## Author
👨‍💻 **Karthik Deshineni**  
🔗 [GitHub Profile](https://github.com/deshinenikarthik)

