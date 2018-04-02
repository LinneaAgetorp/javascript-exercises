// ...
// TODO: 
//
// Create and export a function that accepts the type the user searched for (artist or track) and a list of
// of search results. 
//
// The function should process the list of search results and return only the required properties
// for each search result (name, link, images) in a separate list. 
//
// Remember that the images list is located slightly differently in the search result object, depending on 
// whether the user searched for artist or track.
console.log('det här är data.js');
import {IMAGE_NA_URL} from '../constants';
import {API_URL} from "../constants";
import $ from 'jquery';

export const searchResults = {
    result: []

};
let img;
export const processData = (data, type) => {
    if (data.error) {
        const httpError = new Error(data.error.message);
        httpError.status = data.error.status;
        throw httpError;
    }

    if (type.searchType === 'artist') {

        data.artists.items.map((item) => {

                if (item.images.length <= 0) {
                   img = IMAGE_NA_URL;
                } else {
                   img = item.images[0].url;
                }

                searchResults.result.push({artist: item.name, href: item.uri, img: img});

            })
    } else if (type.searchType === 'track'){

        data.tracks.items.map((item) => {

            if (item.album.images.length <= 0) {
                img = IMAGE_NA_URL;
            } else {
                img = item.album.images[0].url;
            }

            searchResults.result.push({artist: item.album.name, href: item.album.uri, img: img});

        })
    }

    return searchResults.result;


};
