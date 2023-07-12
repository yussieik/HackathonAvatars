const content = document.getElementById('content');
const buttonNext = document.getElementById('next')
const buttonSave = document.getElementById('save')
const gallery = document.getElementById('gallery')
const expandedImgFace = document.getElementById("expandedImg-face")
const avaNameInput = document.getElementById("avaname")

const inputUserSearch = document.getElementById("search")


expandedImgFace.src='avaapp/static/img/faces/who-face.svg';

const expandedImgHair = document.getElementById("expandedImg-hair")
const expandedImgEyes = document.getElementById("expandedImg-eyes")
const expandedImgDetails = document.getElementById("expandedImg-details")

inputUserSearch.addEventListener('input', searchAvatar)

buttonNext.addEventListener('click', nextStep)

buttonSave.addEventListener('click', saveAvatar)

let counter = 0;
const allData = {}
let avatars=[];


async function getFacesList() {
    try{
        const response = await fetch('/api/faces/');
        if(response.ok){
            const faces = await response.json();
            allData.faces = faces
            let faceData=[]

            for(let i =0; i<faces.length; i++){
                const oneFace = {
                    id: faces[i]['id'],
                    imgName: faces[i]['imgName'],
                    imgUrl: faces[i]['imgUrl'],
                    category: faces[i]['category'],
                };
                faceData.push(oneFace)
            }


            // for(let i =0; i<faces.length; i++){
            //     createElementChoice(faces[i]['imgUrl'], faces[i]['id'], faces[i]['imgName'], faces[i]['category'],)
            // }     
            return faceData
        }
        else{
            throw new Error('OH NO! ERROR!')
        }
    }
    catch(error){
        console.log(error);
    }  
}
const hairFacePromise = getFacesList();
// getFacesList()
getFacesList().then((faceData) => makeFace(faceData));
// makeFace()

function makeFace(faceData) {

    for (let i = 0; i < faceData.length; i++) {
      const { imgUrl, id, imgName,  category } = faceData[i];
      createElementChoice(imgUrl, id, imgName, category);
    }
  }
  

async function getHairList() {
    try{
        const response = await fetch('/api/hair/');
        if(response.ok){
            const hair = await response.json();
            allData.hair = hair
            let hairData=[]
            
            for(let i =0; i<hair.length; i++){
                const oneHair = {
                    id: hair[i]['id'],
                    imgName: hair[i]['imgName'],
                    imgUrl: hair[i]['imgUrl'],
                    category: hair[i]['category'],
                };
                hairData.push(oneHair)
            }

            // for(let i =0; i<hair.length; i++){
            //     createElementChoice(hair[i]['imgUrl'], hair[i]['id'], hair[i]['imgName'], hair[i]['category'])
            // }
            return hairData
        }
        else{
            throw new Error('OH NO! ERROR!')
        }
    }
    catch(error){
        console.log(error);
    }  
}

const hairDataPromise = getHairList();


function makeHair(hairData) {

  for (let i = 0; i < hairData.length; i++) {
    const { imgUrl, id, imgName,  category } = hairData[i];
    createElementChoice(imgUrl, id, imgName, category);
  }
}


async function getEyesList() {
    try{
        const response = await fetch('/api/eyes/');
        if(response.ok){
            const eyes = await response.json();
            allData.eyes = eyes

            let eyesData=[]
            
            for(let i =0; i<eyes.length; i++){
                const oneEye = {
                    id: eyes[i]['id'],
                    imgName: eyes[i]['imgName'],
                    imgUrl: eyes[i]['imgUrl'],
                    category: eyes[i]['category'],
                };
                eyesData.push(oneEye)
            }

            // for(let i =0; i<eyes.length; i++){
            //     createElementChoice(eyes[i]['imgUrl'], eyes[i]['id'], eyes[i]['imgName'], eyes[i]['category'])
            // } 

            return eyesData
        }
        else{
            throw new Error('OH NO! ERROR!')
        }
    }
    catch(error){
        console.log(error);
    }  
}


const eyesDataPromise = getEyesList();


function makeEyes(eyesData) {

  for (let i = 0; i < eyesData.length; i++) {
    const { imgUrl, id, imgName,  category } = eyesData[i];
    createElementChoice(imgUrl, id, imgName, category);
  }
}


async function getDetailsList() {
    try{
        const response = await fetch('/api/details/');
        if(response.ok){
            const details = await response.json();
            allData.details = details

            let detailsData=[]
            
            for(let i =0; i<details.length; i++){
                const oneDetails = {
                    id: details[i]['id'],
                    imgName: details[i]['imgName'],
                    imgUrl: details[i]['imgUrl'],
                    category: details[i]['category'],
                };
                detailsData.push(oneDetails)
            }

            
            // for(let i =0; i<details.length; i++){
            //     createElementChoice(details[i]['imgUrl'], details[i]['id'], details[i]['imgName'], details[i]['category'])
            // }   
            
            return detailsData
        }
        else{
            throw new Error('OH NO! ERROR!')
        }
    }
    catch(error){
        console.log(error);
    }  
}


async function createAllData () {
    const all = await Promise.all([getFacesList(), getEyesList(),getHairList(), getDetailsList()])
    // console.log("all", all);
}
createAllData()
const detailsDataPromise = getDetailsList();


function makeDetails(detailsData) {

    for (let i = 0; i < detailsData.length; i++) {
      const { imgUrl, id, imgName,  category } = detailsData[i];
      createElementChoice(imgUrl, id, imgName, category);
    }
}



async function getAvatarsList() {
    try{
        const response = await fetch('/api/avatars/');
        if(response.ok){
            avatars = await response.json();
            return avatars           
        }
        else{
            throw new Error('What is wrong now?')
        }
    }
    catch(error){
        console.log(error);
    }  
}

// getAvatarsList().then(() => createGallery())

// getAvatarsList().then(()=>{
//     for(let i=0; i<avatars.length; i++){
//         // console.log("avatars", avatars[i])
//         // console.log("avatars", avatars[i]['avatarName'])      
//     }

// })


async function getUsersList() {
    try{
        const response = await fetch('/api/users/');
        if(response.ok){
            const users = await response.json();
            console.log(users);
            for(let i =0; i<users.length; i++){
                console.log(users[i]['userName']);
            }
                     
        }
        else{
            throw new Error('What is wrong now?')
        }
    }
    catch(error){
        console.log(error);
    }  
}


function createElementChoice(elementUrl, id, imageName, category){
    // console.log("in create element choice");
    // console.log(category);
    const arrDataSet = ["face", "hair", "eyes", "details"]
    const img_address = `avaapp/${elementUrl}`;
    // console.log(img_address);
    const divCard = document.createElement('div');
    const divCardContent = document.createElement('div');
    const elementImg = document.createElement('img');
    elementImg.classList.add('small-img');
    elementImg.src = img_address;
    elementImg.style.width ='100px'
    elementImg.style.backgroundSize = "100px"
    elementImg.style.backgroundImage ="url('" + expandedImgFace.src + "')"
    elementImg.setAttribute(`data-${arrDataSet[category-1]}`, id)
    elementImg.setAttribute('name', imageName)
    divCard.classList.add('card');
    divCardContent.classList.add('element-img');
    divCardContent.appendChild(elementImg);
    divCard.appendChild(divCardContent)
    content.appendChild(divCard)
    divCardContent.addEventListener('click', () => getSelected(elementImg, counter))
}

function getSelected(img, counter){ 
    switch(counter){
        case 0:
            expandedImgFace.src=''
            expandedImgFace.src = img.src
            expandedImgFace.dataset.face = img.dataset.face 
            break;
        case 1:
            // console.log(img);
            expandedImgHair.src = img.src
            expandedImgHair.dataset.hair = img.dataset.hair 
            break;
        case 2:
            expandedImgEyes.src = img.src
            expandedImgEyes.dataset.eyes = img.dataset.eyes 
            break;
        case 3:
            expandedImgDetails.src = img.src
            expandedImgDetails.dataset.details = img.dataset.details 
            break;
        default:
            expandedImgFace.src = img.src
            expandedImgFace.dataset.face = img.dataset.face 
            break;
    }
}

function nextStep(){

    if(expandedImgFace.src.endsWith('/who-face.svg')){
        expandedImgFace.src='avaapp/static/img/faces/green-face.svg';
    }

    content.innerHTML = ''
    counter++;
    
    switch(counter){
        case 1:
            getHairList().then((hairData) => makeHair(hairData));
            // getHairList()
            break;
        case 2:
            getEyesList().then((eyesData) => makeEyes(eyesData));
            // getEyesList()
            break;
        case 3:
            getDetailsList().then((eyesData) => makeDetails(eyesData));
            // getDetailsList()
            break;
        default:
            getFacesList().then((faceData) => makeFace(faceData));
            // getFacesList()
            counter=0
            break;
    }
}

function getAvaName(){
    let avaName = avaNameInput.value;
    if(avaNameInput.value !=''){
        avaName = avaNameInput.value;
    }
    else{
        avaName = "Lolly";
    }
    return avaName
}

function createGallery(avatars){
    // console.log("in create gallery", avatars);
    for(let i = 0; i<avatars.length; i++){

        let indexFace =avatars[i]['face'];
        let indexHair = avatars[i]['hair'];
        let indexEyes = avatars[i]['eyes'];
        let indexDetails = avatars[i]['details'];
        let avatarName = avatars[i]['avatarName'];
        
        // console.log(allData)
    
        let imgUrlElementsSet = [
            allData['faces'][indexFace-1]['imgUrl'], 
            allData['hair'][indexHair-1]['imgUrl'], 
            allData['eyes'][indexEyes-1]['imgUrl'], 
            allData['details'][indexDetails-1]['imgUrl']]

            createAvatarCard(imgUrlElementsSet, avatarName)

            // getAvatarsList().then(() => createAvatarCard(imgUrlElementsSet, avatarName))   

    }
}
// createGallery()
getAvatarsList().then((data) => {
    // console.log("data", data);
    createGallery(data)
})


function saveAvatar(){

    
    let avaName = getAvaName()
    const avatarObj = {
        avatarName: avaName,
        author: 1,
        face: expandedImgFace.dataset.face,
        hair: expandedImgHair.dataset.hair,
        eyes: expandedImgEyes.dataset.eyes,
        details: expandedImgDetails.dataset.details
}
    postJSON(avatarObj)
    console.log(avatarObj);
}

async function postJSON(data) {
    try {
      const response = await fetch(("/api/create/"), {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
}


async function searchAvatar(event){

    event.preventDefault();
    console.log("hello");
    // let avatarList = await getAvatarsList()
    let searchInput= inputUserSearch.value.toLowerCase();
    const searchResults = avatars.filter((avatar) => avatar.avatarName.toLowerCase().includes(searchInput));
    console.log(searchResults);
    gallery.innerHTML = '';
    createGallery(searchResults)
}

function createAvatarCard(imgUrlElementsSet, avatarName){

    // create a card for display avatar
    const divBigCard = document.createElement('div');
    divBigCard.classList.add('big-card');
    // create avatar name
    const paragraphAvatarName = document.createElement('p');
    paragraphAvatarName.classList.add('avatar-name');

    const avatarNameText = document.createTextNode(avatarName);
    // console.log(avatarName);
    paragraphAvatarName.appendChild(avatarNameText);

    for(let imgUrl of imgUrlElementsSet){

        // create an element for images level-1
        const divBigElementImg = document.createElement('div');
        divBigElementImg.classList.add('big-element-img');

        // create an image level-1
        const bigExpandedImg = document.createElement('img');
        bigExpandedImg.classList.add('big-final-img');

        // bigExpandedImg.style.width ='200px'

        const srcUrl = `avaapp/${imgUrl}`;
        bigExpandedImg.setAttribute('src', srcUrl);

        //create matreshka
        divBigElementImg.appendChild(bigExpandedImg);
        divBigCard.appendChild(divBigElementImg);
        
    }
    divBigCard.appendChild(paragraphAvatarName);
    gallery.appendChild(divBigCard);


}
