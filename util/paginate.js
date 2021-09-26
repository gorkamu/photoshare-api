'use strict'

module.exports = (array, pagination) => {
    if(pagination === undefined) {
        pagination = {
            rows: 20,
            page: 1
        }
    }


    return array.slice((pagination.page - 1) * pagination.rows, pagination.page * pagination.rows);
}
