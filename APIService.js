URL = "http://localhost:8080";

const APIService = {

    GetProfile(name){
        return fetch(URL + name)
        .then(res => res.json())
        .then(res => {
            //do something with this
        });
    },

    postTagsForTags(input) {
    },

    postTagsForItems(input) {
        const postOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([input])
        }
        /* Body Example
            {
                tags: ['sports', 'volleyball', 'balls]
            }
        */
        return fetch(URL + '/tagitems', postOptions)
            .then(res => res.json())
            .then(res => {
                if (res.length !== 0) {
                    tokenservice.saveItems(res);  
                    return res;                  
                }
            });
    }

}

export default APIService;