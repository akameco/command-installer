'use strict';
const fs = require('fs');
const path = require('path');

module.exports = (commandPath, commandName) => {
	return new Promise((resolve, reject) => {
		if (typeof commandPath !== 'string' || typeof commandName !== 'string') {
			reject(new TypeError('Expected a string'));
		}

		if (process.platform !== 'darwin') {
			reject(new Error('Your platform is not supported'));
		}

		const destinationPath = path.join('/usr/local/bin', commandName);

			// not catch Error
		fs.readlink(destinationPath, (_, realPath) => {
			if (realPath === commandPath) {
				resolve();
				return;
			}

			fs.unlink(destinationPath, err => {
				if (err.code && err.code !== 'ENOENT') {
					reject(err);
				}

				fs.symlink(commandPath, destinationPath, err => {
					if (err) {
						reject(err);
					}
					resolve();
				});
			});
		});
	});
};
