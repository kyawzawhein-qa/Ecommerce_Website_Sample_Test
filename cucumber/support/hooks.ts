import { Before, After, BeforeAll } from '@cucumber/cucumber';
import { PlaywrightWorld, ensureFixtureServer } from './world';

BeforeAll(async () => {
  if (!process.env.CI) {
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