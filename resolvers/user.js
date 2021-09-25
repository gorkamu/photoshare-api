'use strict'

const { users, photos, tags} = require('../data/data');

let _id = 0;

module.exports = {
    User: {
		postedPhotos: parent => {
			return photos.filter(p => p.githubUser === parent.githubLogin)
		},
		inPhotos: parent => tags
								.filter(tag => tag.userID === parent.id)
								.map(tag => tag.photoID)
								.map(photoID => photos.find(p => p.id === photoID))
	}
}