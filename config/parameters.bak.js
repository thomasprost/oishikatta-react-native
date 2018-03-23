// This file is a "template" of what your parameters.js file should look like
// TODO : Find a better way to manage dev and dist 

const SERVER_URL = 'http://192.168.1.60/'; // dev

const PROJECT_URL = 'path/to/project'

const API_URL = 'api/'

const RECIPES_URL = 'path/to/recipes/folder'



export default {
    SERVER_URL,
    PROJECT_URL,
    API_URL,
    RECIPES_IMAGES : SERVER_URL+PROJECT_URL+RECIPES_URL
  };