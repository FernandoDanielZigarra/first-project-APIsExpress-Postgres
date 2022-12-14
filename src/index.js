import app from './app.js';
import { sequelize } from './database/database.js';

import './models/Project.js'
import './models/Task.js'

async function main() {
    try {
        await sequelize.sync({ force: false })
        app.listen(3000)
        console.log('Server is listening in port', 3000)
    } catch (error) {
        console.error('db no conected', error)
    }
}

main();