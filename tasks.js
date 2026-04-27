const fs = require('fs');
const PATH = './data/tasks.json';

function readTasks() {
    if (!fs.existsSync(PATH)) {
        fs.writeFileSync(PATH, '[]');
        return [];
    }
    
    const content = fs.readFileSync(PATH, 'utf8');
    return content.trim() ? JSON.parse(content) : [];
}

function writeTasks(tasks) {
    fs.writeFileSync(PATH, JSON.stringify(tasks, null, 2));
}

module.exports = { readTasks, writeTasks };