'use strict'

const { users, photos, tags} = require('../data/data');

module.exports = {
    Query: {
        totalPhotos: () => photos.length,
		allPhotos: () => photos
    }
};