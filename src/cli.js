import arg from 'arg';
import fs from 'fs';
import { createJson } from './build-icons-json';

function parseArgumentsIntoOptions(rawArgs) {
    const args = arg(
        {
            '--name': String,
            '--json': Boolean,
            '--sprite': Boolean,
            '-n': '--name'
        },
        {   
            argv: rawArgs.slice(2),
        }
    );
    return {
        name: args['--name'] || 'icons',
        json: args['--json'] || false,
        sprite: args['--sprite'] || false,
        output: args._[0]
    }
}

export async function cli(args) {
    let options = parseArgumentsIntoOptions(args);
    // console.log(options);
    // console.log(process.cwd() + '/dist/icons.json');

    // Build JSON on --json
    if (options.json === true && fs.existsSync(process.cwd() + '/svg')) {
        createJson(options);
    } else if (options.json === true) {
        console.log('SVG folder of icons does not exist.');
    }

    // Build Sprite on --spirite
    if (options.sprite === true && fs.existsSync(process.cwd() + '/dist/icons.json')) {
        let { createSprite } = await import('./build-sprite.js');
        createSprite(options);
    } else if (options.sprite === true) {
        console.log('"dist/icons.json" does not exisit.');
    }

    // Build if no tags specified 
    if (options.sprite === false && options.json === false && fs.existsSync(process.cwd() + '/svg')) {
        createJson(options);
        let { createSprite } = await import('./build-sprite.js');
        createSprite(options);
    } else {
        console.log('SVG folder of icons does not exist.');
    }
}

