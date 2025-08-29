import { writeFile } from 'fs/promises';
import { readFile } from 'fs/promises';

await writeFile('hello.txt','Hi, How are you?')
console.log(process.cwd());
console.log("File created");

const data = await readFile('hello.txt', 'utf-8');
console.log(data);