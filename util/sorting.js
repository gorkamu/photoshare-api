'use strict'

module.exports = (el, sort) => {
    if(sort === undefined) {
        sort = {
            dir: "ASC",
            by: "id"
        }
    }

    return el.sort((a, b) => {
        if(sort.dir === "DESC") return a[sort.by] > b[sort.by] ? -1 : 1
        else return a[sort.by] > b[sort.by] ? 1 : -1
    });
}