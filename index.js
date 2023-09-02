const functions = require('./functions');

// Example usage:
async function main() {
    try {
        await functions.createAccount('user1', 'password1');
        const user = await functions.loadUser('user1', 'password1');
        console.log(user);

        await functions.removeUser('user1');
        console.log('User removed');
    } catch (err) {
        console.error(err.message);
    }
}

main();