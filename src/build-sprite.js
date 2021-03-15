import fs from 'fs';
import path from 'path';
import buildSpriteString from './build-sprite-string';

export async function createSprite(options) {

    // Get icons.json path from current directory
    let icons = await import(process.cwd() + '/dist/icons.json');

    // Create dist of it doesn't already exist
    var dir = './dist';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    const OUT_FILE = path.resolve(__dirname, process.cwd() + '/dist/' + options.name + '.svg');

    // console.log(`Building ${OUT_FILE}...`);

    fs.writeFileSync(OUT_FILE, buildSpriteString(icons));

    console.log('SPRITE - Complete');
} 