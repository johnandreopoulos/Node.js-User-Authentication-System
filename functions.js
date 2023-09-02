const bcrypt = require('bcrypt');
const fs = require('fs/promises');

const USERS_FILE_PATH = './users.json';

async function hashPassword(password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}

async function createAccount(username, password) {
    const users = await getUsers();

    if (users.some(user => user.username === username)) {
        throw new Error('Username already exists');
    }

    const hashedPassword = await hashPassword(password);

    const user = { username, password: hashedPassword };
    users.push(user);

    await fs.writeFile(USERS_FILE_PATH, JSON.stringify(users, null, 2));
}

async function getUsers() {
    try {
        const data = await fs.readFile(USERS_FILE_PATH);
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

async function verifyPassword(providedPassword, hashedPassword) {
    return await bcrypt.compare(providedPassword, hashedPassword);
}

async function loadUser(username, providedPassword) {
    const users = await getUsers();

    const user = users.find(user => user.username === username);

    if (!user) {
        throw new Error('User not found');
    }

    const passwordMatch = await verifyPassword(providedPassword, user.password);

    if (!passwordMatch) {
        throw new Error('Incorrect password');
    }

    return {
        username: user.username,
        originalPassword: providedPassword,
        encryptedPassword: user.password
    };
}

async function clearAllUsers() {
    await fs.unlink(USERS_FILE_PATH);
}

async function removeUser(username) {
    const users = await getUsers();
    const index = users.findIndex(user => user.username === username);

    if (index === -1) {
        throw new Error('User not found');
    }

    users.splice(index, 1);
    await fs.writeFile(USERS_FILE_PATH, JSON.stringify(users, null, 2));
}

module.exports = {
    createAccount,
    loadUser,
    clearAllUsers,
    removeUser,
};