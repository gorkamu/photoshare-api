'use strict'

const { users, photos, tags} = require('../data/data');

let _id = 0;

module.exports = {
    Mutation: {
		postPhoto(parent, args) {
			let newPhoto = {
				id: _id++,
				...args.input
			};

			photos.push(newPhoto);

			return newPhoto;
		}		
	}
}