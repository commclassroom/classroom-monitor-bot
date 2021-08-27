//Importing important libraries

const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();

//Command inclusion

const presence = require('./Commands/presence.js');
const command = require('./Commands/command.js');
const hey = require('./Commands/hey.js');
const version = require('./Commands/version.js');
const help = require('./Commands/help.js');
const links = require('./Commands/links.js');
const restrict = require('./Commands/restrictedWords.js');
const DSA = require('./Commands/DSA.js');
const Translate = require('./Commands/translate.js');
const Meme = require("./Commands/meme");
const source = require("./Commands/source.js");

// Up commands

client.on('ready', () => {

    console.log(
		`Classroom Monitor is currently running on version v${
			require('./package.json').version
		}`
	);
	
    //Bot Status
    presence(client);

    //Hey Command
    command(client,'hey', message => {
        hey(message);
    });

    //Version Command
    command(client,'version', message => {
        version(message);
    });

    //Help Command
    command(client, 'help', message => {
    	message.channel.send(help);
    });

    //Links Command
    command(client, 'links', message => {
    	message.channel.send(links);
    });

    //DSA Command
    command(client, 'dsa', message => {
    	message.channel.send(DSA);
    });

    //Translate
    command(client, 'translate', message => {
        Translate.execute(message);
    });

    //Meme
    command(client, 'meme', message => {
        Meme.execute(message);
    });

    //github
    command(client, 'source', message => {
    	message.channel.send(source);
    });

    restrict(client, message => {});
});

// Authentications

client.login(process.env.BOT_TOKEN);
