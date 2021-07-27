import axios from "axios";

export default {getTeams, getLeagues}

function getTeams() {
    return axios
        .get('http://localhost:8080/teams/all')
        .catch(error => console.log(error))
}

function getLeagues() {
    return axios
        .get('http://localhost:8080/divisions/all')
        .catch(error => console.log(error))
}
