import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
if (!existsSync('node_modules')) {
  console.log('Installing project dependencies...');
  execSync('npm install', { stdio: 'inherit' });
}
console.log('\\nCareCloud demo starting. Open the local URL shown below.\\n');
const child = spawn('npm', ['run', 'dev'], { stdio: 'inherit', shell: process.platform === 'win32' });
child.on('exit', code => process.exit(code ?? 0));