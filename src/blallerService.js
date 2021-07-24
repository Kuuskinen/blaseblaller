import axios from "axios";

export default {getTeams}

function getTeams() {
    return axios
        .get('http://localhost:8080/teams/all')
        .catch(error => console.log(error))
}
