// ...
// TODO:
//
// Create and export a class called SearchEngine that supports the usage as shown in the application's main module.

// this module's dependencies have already been imported and should provide hints on how to export them from their 
// respective modules.

console.log('det här är search-index.js');

import $ from 'jquery';
import {API_URL} from '../constants';
import {processData} from './data';


export class SearchEngine {
    constructor({authToken}) {
        this.token = authToken;
    }

    execute(type) {


        return fetch(`${API_URL}${type.searchText}&type=${type.searchType}`,
            {
                headers: {
                    authorization: this.token,
                    accept: 'application/json',
                },
            }
        )
            .then(response => response.json())
            .then(data => processData(data, type));
    }
}

