const content = document.getElementById('content');
const buttonNext = document.getElementById('next')
const buttonSave = document.getElementById('save')
const gallery = document.getElementById('gallery')
const expandedImgFace = document.getElementById("expandedImg-face")

expandedImgFace.src='avaapp/static/img/faces/who-face.svg';

const expandedImgHair = document.getElementById("expandedImg-hair")
const expandedImgEyes = document.getElementById("expandedImg-eyes")
const expandedImgDetails = document.getElementById("expandedImg-details")

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

            const faceData = faces.map(face => ({
                id: face['id'],
                imgName: face['imgName'],
                imgUrl: face['imgUrl'],
                category: face['category'],
            }));

            for(let i =0; i<faces.length; i++){
                createElementChoice(faces[i]['imgUrl'], faces[i]['id'], faces[i]['imgName'], faces[i]['category'],)
            }     
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
const faceData = getFacesList()


async function getHairList() {
    try{
        const response = await fetch('/api/hair/');
        if(response.ok){
            const hair = await response.json();
            allData.hair = hair
            const hairData = hair.map(hair => ({
                id: hair['id'],
                imgName: hair['imgName'],
                imgUrl: hair['imgUrl'],
                category: hair['category'],
            }));

            for(let i =0; i<hair.length; i++){
                createElementChoice(hair[i]['imgUrl'], hair[i]['id'], hair[i]['imgName'], hair[i]['category'])
            }
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

async function getEyesList() {
    try{
        const response = await fetch('/api/eyes/');
        if(response.ok){
            const eyes = await response.json();
            allData.eyes = eyes

            const eyesData = eyes.map(face => ({
                id: eyes['id'],
                imgName: eyes['imgName'],
                imgUrl: eyes['imgUrl'],
                category: eyes['category'],
            }));

            for(let i =0; i<eyes.length; i++){
                createElementChoice(eyes[i]['imgUrl'], eyes[i]['id'], eyes[i]['imgName'], eyes[i]['category'])
            } 

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

async function getDetailsList() {
    try{
        const response = await fetch('/api/details/');
        if(response.ok){
            const details = await response.json();
            allData.details = details

            const detailsData = details.map(face => ({
                id: details['id'],
                imgName: details['imgName'],
                imgUrl: details['imgUrl'],
                category: details['category'],
            }));

            for(let i =0; i<details.length; i++){
                createElementChoice(details[i]['imgUrl'], details[i]['id'], details[i]['imgName'], details[i]['category'])
            }   
            
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



async function getAvatarsList() {
    try{
        const response = await fetch('/api/avatars/');
        if(response.ok){
            avatars = await response.json();
            // console.log("avatars", avatars);
        }
        else{
            throw new Error('What is wrong now?')
        }
    }
    catch(error){
        console.log(error);
    }  
}


getAvatarsList().then(()=>{
    for(let i=12; i<14; i++)
    console.log("avatars", avatars[i])

})



async function getUsersList() {
    try{
        const response = await fetch('/api/users/');
        if(response.ok){
            const users = await response.json();
            console.log(users);
            console.log(users[0]['userName']);          
        }
        else{
            throw new Error('What is wrong now?')
        }
    }
    catch(error){
        console.log(error);
    }  
}



// getUsersList()


function createElementChoice(elementUrl, id, imageName, category){
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
            getHairList()
            break;
        case 2:
            getEyesList()
            break;
        case 3:
            getDetailsList()
            break;
        default:
            getFacesList()
            counter=0
            break;
    }
}

console.log('AVARARS CREATED', avatars);

console.log('ALLDATA CREATED', allData);


function saveAvatar(){
    // console.log(allData);
    // // console.log("avatars", avatars);

    // let index = avatars[3]['face']

    // console.log(`PRIMER URL FROM ALL DATA ELEMENTS: ${allData['hair'][index]['imgUrl']}`)
    // // console.log(`PRIMER FACE ELEMENT FROM USER AVATAR: ${avatars[5]['face']}`);

    // console.log(avatars.length);

    // console.log('AVARARS CREATED', avatars);

    // console.log('ALLDATA CREATED', allData);


    for(let i = 0; i<avatars.length; i++){

        let indexFace =avatars[i]['face'];
        let indexHair = avatars[i]['hair'];
        let indexEyes = avatars[i]['eyes'];
        let indexDetails = avatars[i]['details'];
        console.log(avatars[i])
    
        // console.log('FACE INDEX AVATAR 26', indexFace);
        // console.log('HAIR INDEX AVATAR 26', indexHair);
        // console.log('EYES INDEX AVATAR 26', indexEyes);
        // console.log('DETAILS INDEX AVATAR 26', indexDetails);
    
    
    
        let imgUrlElementsSet = [
            allData['faces'][indexFace-1]['imgUrl'], 
            allData['hair'][indexHair-1]['imgUrl'], 
            allData['eyes'][indexEyes-1]['imgUrl'], 
            allData['details'][indexDetails-1]['imgUrl']]
    
            console.log(imgUrlElementsSet);
        
            getAvatarsList().then(() => createAvatarCard(imgUrlElementsSet))
            

    }



    const avatarObj = {
        avatarName: "Sweet lollypop",
        author: 1,
        face: expandedImgFace.dataset.face,
        hair: expandedImgHair.dataset.hair,
        eyes: expandedImgEyes.dataset.eyes,
        details: expandedImgDetails.dataset.details
}
    postJSON(avatarObj)
    console.log(avatarObj);
}

// console.log("avatars", avatars);

async function postJSON(data) {
    try {
      const response = await fetch("/api/create/", {
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


function searchAvatar(event){
    event.preventDefault();
    // row.innerHTML ='';
      if(inputUser.value !=''){
        console.log(inputUser.value);
  
      avatars.forEach(element =>{
        // console.log(element.name);
        let {id, author, avatar_name, ...rest} = element;
          if(avatar_name.toLowerCase().includes(inputUser.value.toLowerCase())){
            
            // createCard(avatar_name, email, image);
        };
  
  
      });
  
    }
    else{
      showCards()
    }
  
};

// inputUser.addEventListener('input', searchAvatar);

// redo for avatars
// function showCards(){
//     robots.forEach(element =>{
//      let {id, name, username, email, image} = element;
//      createCard(name, email, image);
//     })

// }

// // redo for avatars

// getAvatarsList()



function createAvatarCard(imgUrlElementsSet){

    // create avatar name
    const paragraphAvatarName = document.createElement('p');
    paragraphAvatarName.classList.add('avatar-name');

    const avatarNameText = document.createTextNode('lola');
    paragraphAvatarName.appendChild(avatarNameText);

    // create a card for display avatar
    const divBigCard = document.createElement('div');
    divBigCard.classList.add('big-card');

    for(let imgUrl of imgUrlElementsSet){
        // create an element for images level-1
        const divBigElementImg = document.createElement('div');
        divBigElementImg.classList.add('big-element-img');

        // create an image level-1
        const bigExpandedImg = document.createElement('img');
        bigExpandedImg.classList.add('big-final-img');
        const srcUrl = `avaapp/${imgUrl}`;
        bigExpandedImg.setAttribute('src', srcUrl);


        //create matreshka
        divBigElementImg.appendChild(bigExpandedImg);
        divBigCard.appendChild(divBigElementImg);
        gallery.appendChild(divBigCard);
    }

}

// function crateGallery(imgUrlElementsSet, avatarArray){
//     for(let i=0; i<avatarArray; i++){
//         createAvatarCard(imgUrlElementsSet)
//     }
// }





