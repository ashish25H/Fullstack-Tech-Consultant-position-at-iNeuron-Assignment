const searchBtn = document.getElementById('searchBtn');
const name = document.getElementById('name');

const userNameRpo = document.getElementById('userName');
const id = document.getElementById('id');
const repoLink = document.getElementById('repolink');
const userLocation = document.getElementById('userLocation');
const createDate = document.getElementById('createDate');
const updateDate = document.getElementById('updateDate');
const userImage = document.getElementById('userImage')


// getting data from API

const getData = async(event)=>{
    event.preventDefault();
    if(!name.value){
        alert('Enter name : ');
        return;
    }

    const userName = name.value.trim();
    name.value = '';
    const fetchData = await fetch(`https://api.github.com/users/${userName}`);
    const data = await fetchData.json();

    console.log(data);

    
    userImage.src=data.avatar_url;
    id.innerText = data.id;
    userNameRpo.innerText = data.name;
    repoLink.innerText = data.url;
    userLocation.innerText = data.location;
    updateDate.innerText = data.updated_at;
    createDate.innerText = data.created_at;


}





searchBtn.addEventListener('click',getData);