import { Before, After, BeforeAll } from '@cucumber/cucumber';
import { PlaywrightWorld, ensureFixtureServer } from './world';
import { spawn, ChildProcess } from 'child_process';

let ciServer: ChildProcess | undefined;

BeforeAll(async () => {
  if (process.env.CI) {
    ciServer = spawn('node', ['fixture-storefront/server.js'], { stdio: 'ignore' });
    await new Promise((resolve) => setTimeout(resolve, 800));
  } else {
    await ensureFixtureServer();
  }
});

Before(async function (this: PlaywrightWorld) {
  await this.init();
});

After(async function (this: PlaywrightWorld) {
  await this.cleanup();
});

process.on('exit', () => {
  ciServer?.kill();
});