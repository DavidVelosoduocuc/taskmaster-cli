const { readTasks, writeTasks } = require('./tasks');
const [,, cmd] = process.argv;

if (!cmd) {
    console.log('TaskMaster CLI usa: node index.js <comando>');
    process.exit(0); // Terminamos la ejecución si no hay comando
}

if (cmd === 'list') {
    const tasks = readTasks();
    if (tasks.length === 0) {
        console.log('No hay tareas.');
    } else {
        tasks.forEach((t, i) => {
            const icon = t.done ? '✓' : '○';
            console.log(`[${i + 1}] ${icon} ${t.title}`);
        });
    }
}