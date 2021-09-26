'use strict'

const { users, tags} = require('../data/data');

module.exports = {
    Photo: {
		url: parent => `https://demo.com/img/${parent.id}.jpg`,
		postedBy: parent => {
			let el = users.filter(p => p.githubLogin === parent.githubName)
			return el[0];
		},
		taggedUsers: parent => tags.filter(tag => tag.photoID === parent.id)
								    .map(tag => tag.userID)
									.map(userID => users.find(u => u.githubLogin === userID))
	}
}