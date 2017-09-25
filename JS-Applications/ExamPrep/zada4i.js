function hungry(portions, commands) {
    let count = 0;
    for (let command of commands) {
        if (command === 'Serve' && command !== undefined) {
            let lastPortion = portions.pop();
            console.log(`${lastPortion} served!`);
        } else if (command === 'Eat') {
            let firstPortion = portions.shift();
            console.log(`${firstPortion} eaten`);
            count++;
        } else if (command.substr(0, 3) === 'Add' && command.substr(0, 3) === 'Add' !== undefined) {
            let addPortion = command.split(' ');
            let portion = addPortion[1];
            portions.unshift(portion);
        } else if (command.substr(0, 7) === 'Consume') {
            let splitedCommands = command.split(' ');
            let commandA = Number(splitedCommands[1]);
            let commandB = Number(splitedCommands[2]);
            console.log('Burp!');
            if (commandA !== 0) {
                for (let i = commandA; i <= commandB; i++) {
                    portions.splice(i, 2);
                    count++;
                }
            } else if (commandA === 0) {
                for (let i = commandA; i <= commandB; i++) {
                    portions.splice(i);
                    count++;
                }
            }

        } else if (command.substr(0, 5) === 'Shift') {
            let splitedCommands = command.split(' ');
            let portionA = portions[splitedCommands[1]];
            portions[splitedCommands[1]] = portions[splitedCommands[2]];
            portions[splitedCommands[2]] = portionA;
        } else if (command === 'End') {
            if (portions.length === 0) {
                console.log('The food is gone');
            } else {
                console.log(`Meals left: ${portions.join(', ')}`);
            }
            console.log(`Meals eaten: ${count}`);
            break;
        }
    }
}

hungry(['chicken', 'steak', 'eggs'],
    ['Serve',
        'Eat',
        'End',
        'Consume 0 1']);