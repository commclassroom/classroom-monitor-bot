const Discord = require('discord.js');
const linkEmbed = new Discord.MessageEmbed()
	.setColor('#2e97c2')
	.setTitle('Community Classroom Discord bot')
	.setURL('https://github.com/kaiwalyakoparkar/classroom-monitor-bot')
	.setAuthor(
		'Classroon monitor',
		'https://i.imgur.com/yMCOBLH.png',
		'https://discord.js.org'
	)
	.setDescription(
		'Open source discord bot made for ✨Community Classroom✨'
	)
	.addFields(
		{
			name: 'Github',
			value: 'https://github.com/kaiwalyakoparkar/classroom-monitor-bot',
        }
	)
	.setTimestamp()
	.setFooter(
		'Want help? Classroom monitor is just `cm!help` far',
		'https://i.imgur.com/yMCOBLH.png'
	);

module.exports = linkEmbed;
