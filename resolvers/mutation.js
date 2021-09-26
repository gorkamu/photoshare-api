'use strict'

const fs = require('fs');
const path = require('path');
const { GraphQLUpload } = require('graphql-upload');
const { photos } = require('../data/data');


let _id = 0;

module.exports = {
	Upload: GraphQLUpload,
    Mutation: {
		async postPhoto(_, args, ctx) {			
			let newPhoto = {
				id: _id++,
				...args.input
			};

			let toPath = path.join(
				__dirname, "..","assets","photos",`${newPhoto.id}.jpg`
			);

			photos.push(newPhoto);

			return newPhoto;
		},
		singleUpload: async (parent, { file }) => {
			const { createReadStream, filename, mimetype, encoding } = await file.file;
			const stream = createReadStream();			
			const toPath = path.join(
				__dirname, "..","assets","photos",`${filename}`
			);

			const out = require('fs').createWriteStream(toPath);
			stream.pipe(out);		
			
			return { filename, mimetype, encoding };
		  }
	}
}