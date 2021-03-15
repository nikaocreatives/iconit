import fs from 'fs';
import path from 'path';
import buildIconsObject from './build-icons-object';

export async function createJson(options) {
    
    // Options passed
    options = {
        ...options,
    }

    // Build JSON
    var dir = './dist';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    
    const IN_DIR = path.resolve(__dirname, process.cwd() + '/svg');
    const OUT_FILE = path.resolve(__dirname, process.cwd() + '/dist/icons.json');
    // console.log(`${OUT_FILE}...`);

    const svgFiles = fs
    .readdirSync(IN_DIR)
    .filter(file => path.extname(file) === '.svg');

    const getSvg = svgFile => fs.readFileSync(path.join(IN_DIR, svgFile));

    const icons = buildIconsObject(svgFiles, getSvg);

    fs.writeFileSync(OUT_FILE, JSON.stringify(icons));

    console.log('JSON - Complete');
} 
