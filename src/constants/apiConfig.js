const baseHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}

export const apiConfig = {
    todo: {
        getList: {
            url: 'todos',
            method: 'GET',
            headers: baseHeaders
        },
        getById: {
            url: 'todos',
            method: 'GET',
            headers: baseHeaders
        },
        create: {
            url: 'todos',
            method: 'POST',
            headers: baseHeaders
        },
        update: {
            url: 'todos',
            method: 'PUT',
            headers: baseHeaders
        },
        delete: {
            url: 'todos',
            method: 'DELETE',
            headers: baseHeaders
        }
    }
}
