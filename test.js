import fs from 'fs';
import test from 'ava';
import tempfile from 'tempfile';
import pify from 'pify';
import fn from './';

const cmd = 'cmd-installer';
const outputPath = `/usr/local/bin/${cmd}`;

test('create symlink', async t => {
	const commandPath = tempfile('.sh');
	await fn(commandPath, cmd);
	const f = await pify(fs.readlink)(outputPath);
	t.is(f, commandPath);
	await pify(fs.unlink)(outputPath);
});
