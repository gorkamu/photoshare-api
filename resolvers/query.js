'use strict'

const { users, photos, tags} = require('../data/data');

module.exports = {
    Query: {
        totalPhotos: () => photos.length,
		allPhotos: (_, { sort }, ctx) => {
            if(sort === undefined) {
                sort = {
                    dir: "ASC",
                    by: "id"
                }
            }

            return photos.sort((a, b) => {
                if(sort.dir === "DESC") return a[sort.by] > b[sort.by] ? -1 : 1
                else return a[sort.by] > b[sort.by] ? 1 : -1
            });
        },
        saluda: (_, {nombre}, ctx) => {
            return `Hola ${nombre}`;
        }

    }
};