# User Authentication System

A secure user authentication system built with Node.js and bcrypt for password hashing. This system allows you to create user accounts, load user information, clear all users, and remove specific users.

## Table of Contents

- [User Authentication System](#user-authentication-system)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- **Create Account**: Register a new user with a username and password. Passwords are securely hashed before storing.

- **Load User**: Authenticate a user by username and password. Returns user information upon successful authentication.

- **Clear All Users**: Delete all registered users from the system.

- **Remove User**: Delete a specific user by their username.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your machine.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/johnandreopoulos/Node.js-User-Authentication-System.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Node.js-User-Authentication-System
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   node index.js
   ```

## Usage

To use this authentication system, you can import the provided functions in your own application:

`Certainly, providing examples of code usage and what functions return can be very helpful for users and potential contributors. Below, I've added code examples and descriptions for each function:

```javascript
// Create a new user account
async function main() {
    try {
        await functions.createAccount('user1', 'password1');
        console.log('User account created successfully.');
        
        // Load user information
        const user = await functions.loadUser('user1', 'password1');
        console.log('User loaded:', user);

        // Remove the user
        await functions.removeUser('user1');
        console.log('User removed successfully.');
    } catch (err) {
        console.error(err.message);
    }
}

main();
```

- `createAccount(username, password)`: This function registers a new user with the provided username and password. If successful, it returns a confirmation message.

- `loadUser(username, password)`: This function authenticates a user by username and password. If the authentication is successful, it returns the user information, including the username, original password (for reference), and encrypted password.

- `removeUser(username)`: This function deletes a specific user by their username. If successful, it returns a confirmation message.

Here, I've added comments to describe what each function does and what it returns when used in your application. Users and contributors can follow these examples to understand how to use your authentication system functions effectively.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.

2. Create a new branch for your feature or bug fix.

3. Make your changes and test thoroughly.

4. Commit your changes with descriptive commit messages.

5. Push your branch to your forked repository.

6. Create a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.
