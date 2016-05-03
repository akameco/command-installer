# command-installer [![Build Status](https://travis-ci.org/akameco/command-installer.svg?branch=master)](https://travis-ci.org/akameco/command-installer)

> create original command for mac


## Install

```
$ npm install --save command-installer
```


## Usage

create command file.

```sh
$ echo 'echo hello world' >> hello.sh
$ chmod +x hello.sh
```

run.

```js
const commandInstaller = require('command-installer');

commandInstaller(`${__dirname}/hello.sh`, 'hello').then(() => {
	console.log('register hello command');
});
```

result.

```sh
$ hello
// => hello world
```


## API

### commandInstaller(commandPath, commandName)

#### commandPath

*Required*<br>
Type: `string`

command path

#### commandName

*Required*<br>
Type: `string`

command name


## License

MIT © [akameco](https://akameco.github.io)
