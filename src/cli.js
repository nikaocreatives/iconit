import arg from 'arg';
import fs from 'fs';
import { createJson } from './build-icons-json';

function parseArgumentsIntoOptions(rawArgs) {
    const args = arg(
        {
            '--name': String,
            '--json': Boolean,
            '--sprite': Boolean,
            '--output': String,
            '--input': String,
            '-n': '--name',
            '-o': '--output',
            '-i': '--input'
        },
        {   
            argv: rawArgs.slice(2),
        }
    );
    return {
        name: args['--name'] || 'icons',
        json: args['--json'] || false,
        sprite: args['--sprite'] || false,
        input: args['--input'] || '/svg',
        output: args['--output'] || '/dist'
    }
}

export async function cli(args) {
    let options = parseArgumentsIntoOptions(args);
    // console.log(options);
    // console.log(process.cwd() + '/dist/icons.json');

    // Build JSON on --json
    if (options.json === true && fs.existsSync(process.cwd() + options.input)) {
        createJson(options);
    } else if (options.json === true) {
        console.log('Icons source folder does not exist.');
    }

    // Build Sprite on --spirite
    if (options.sprite === true && fs.existsSync(process.cwd() + options.output + '/' + options.name + '.json')) {
        let { createSprite } = await import('./build-sprite.js');
        createSprite(options);
    } else if (options.sprite === true) {
        console.log('"'+ options.output +'/'+ options.name +'.json" does not exisit.');
    }

    // Build if no tags specified 
    if (options.sprite === false && options.json === false && fs.existsSync(process.cwd() + options.input)) {
        createJson(options);
        let { createSprite } = await import('./build-sprite.js');
        createSprite(options);
    } else {
        console.log('Icons source folder does not exist.');
    }
}

