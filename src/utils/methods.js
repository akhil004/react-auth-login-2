const getToken = () => JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).body.token;


let users = [{
    id: 1,
    username:"akhilesh",
    password: "akhilesh",
    first_name: "Akhilesh",
    last_name: "Singh",
    address: "#698 Matour"
}]


export {
    getToken,
    users
}