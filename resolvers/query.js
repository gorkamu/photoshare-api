'use strict'

const { photos } = require('../data/data');
const sorting = require('../util/sorting');
const paginate = require('../util/paginate');


module.exports = {
    Query: {
        totalPhotos: () => photos.length,
		allPhotos: (_, { sort, pagination }, ctx) => {
            let sorted = sorting(photos, sort);
            return paginate(sorted, pagination);
        }
    }
};