# User Authentication System

A secure user authentication system built with Node.js and bcrypt for password hashing. This system allows you to create user accounts, load user information, clear all users, and remove specific users.

## Table of Contents

- [User Authentication System](#user-authentication-system)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Additional Functions](#additional-functions)
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
   git clone https://github.com/yourusername/my-authentication-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd my-authentication-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   node main.js
   ```

## Usage

To use this authentication system, you can import the provided functions in your own application:

```javascript
const functions = require('./functions');

// Example usage:
async function main() {
    try {
        // Create a new user account
        await functions.createAccount('user1', 'password1');
        
        // Load user information
        const user = await functions.loadUser('user1', 'password1');
        console.log(user);

        // Remove the user
        await functions.removeUser('user1');
        console.log('User removed');
    } catch (err) {
        console.error(err.message);
    }
}

main();
```

### Additional Functions

- **Clear All Users**: Use `functions.clearAllUsers()` to delete all registered users from the system.

- **Remove User**: Use `functions.removeUser(username)` to delete a specific user by their username.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.

2. Create a new branch for your feature or bug fix.

3. Make your changes and test thoroughly.

4. Commit your changes with descriptive commit messages.

5. Push your branch to your forked repository.

6. Create a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
```

This updated README includes descriptions for the additional functions `clearAllUsers` and `removeUser`. Please replace "yourusername" and customize the content as needed for your specific project.
