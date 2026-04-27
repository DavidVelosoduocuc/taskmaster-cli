const { readTasks, writeTasks } = require('./tasks');
const [,, cmd] = process.argv;

if (!cmd) {
    console.log('TaskMaster CLI usa: node index.js <comando>');
}