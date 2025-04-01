# Express.js MySQL User Management App

This is a user management application built using Express.js and MySQL, allowing users to be added, edited, and deleted. The app also includes authentication logic and utilizes EJS for templating.

## Features
- View all users (`/user`)
- Add new users (`/user/add`)
- Edit user details (`/user/:id/edit`)
- Delete users (`/user/:id/delete`)
- Uses MySQL as the database
- Supports method override for PUT and DELETE requests

## Technologies Used
- Node.js
- Express.js
- MySQL2 (for database interactions)
- EJS (Embedded JavaScript for templating)
- Faker.js (for generating test data)
- UUID (for unique user IDs)
- Method-Override (for supporting PUT and DELETE requests via forms)

## Getting Started
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- MySQL Server
- npm (comes with Node.js)

### Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/express-mysql-user-app.git
   cd express-mysql-user-app
