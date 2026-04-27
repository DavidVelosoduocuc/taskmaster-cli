const { readTasks, writeTasks } = require('./tasks');
const [,, cmd] = process.argv;

if (!cmd) {
    console.log('TaskMaster CLI usa: node index.js <comando>');
    process.exit(0);
}

// Comando LIST
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

// Comando ADD
if (cmd === 'add') {
    const title = process.argv.slice(3).join(' ');
    
    if (!title) {
        console.log('Uso: node index.js add <título>');
        process.exit(1);
    }
    
    const tasks = readTasks();
    tasks.push({ id: Date.now(), title, done: false });
    writeTasks(tasks);
    console.log(`Tarea "${title}" agregada.`);
}