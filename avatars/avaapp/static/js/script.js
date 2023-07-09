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

async function getFacesList() {
    try{
        const response = await fetch('/api/faces/');
        if(response.ok){
            const faces = await response.json();

            const faceData = faces.map(face => ({
                id: face['id'],
                imgName: face['imgName'],
                imgUrl: face['imgUrl'],
                category: face['category'],
            }));

            for(let i =0; i<faces.length; i++){
                createElementChoice(faces[i]['imgUrl'], faces[i]['id'], faces[i]['imgName'])
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

//a s etim chto? rabotaet, no kuda?

// faceData.then((result) =>{
//     console.log(result[0])
// })


async function getHairList() {
    try{
        const response = await fetch('/api/hair/');
        if(response.ok){
            const hair = await response.json();

            const hairData = hair.map(hair => ({
                id: hair['id'],
                imgName: hair['imgName'],
                imgUrl: hair['imgUrl'],
                category: hair['category'],
            }));

            for(let i =0; i<hair.length; i++){
                createElementChoice(hair[i]['imgUrl'], hair[i]['id'], hair[i]['imgName'])
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

            const eyesData = eyes.map(face => ({
                id: eyes['id'],
                imgName: eyes['imgName'],
                imgUrl: eyes['imgUrl'],
                category: eyes['category'],
            }));

            for(let i =0; i<eyes.length; i++){
                createElementChoice(eyes[i]['imgUrl'], eyes[i]['id'], eyes[i]['imgName'])
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

            const detailsData = details.map(face => ({
                id: details['id'],
                imgName: details['imgName'],
                imgUrl: details['imgUrl'],
                category: details['category'],
            }));

            for(let i =0; i<details.length; i++){
                createElementChoice(details[i]['imgUrl'], details[i]['id'], details[i]['imgName'])
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
            const arrayData =[]
            const avatars = await response.json();
            for(let i = 0; i<avatars.length; i++){
                const avatarData = {
                    avatarName: avatars[i]['avatarName'],
                    author: avatars[i]['author'],
                    id: avatars[i]['id'],
                    face: avatars[i]['face'],
                    hair: avatars[i]['hair'],
                    eyes: avatars[i]['eyes'],
                    details: avatars[i]['details'],
                  };
                  console.log(avatarData);
                //   arrayData.push(avatarData)
                //   return arrayData; 
            }
            // console.log(avatars);
            // console.log(avatars[0]['avatarName']);
            // console.log(avatars[0]['author']);
            // console.log(avatars[0]['id']);
            // console.log(avatars[0]['face']);
            // console.log(avatars[0]['hair']);
            // console.log(avatars[0]['eyes']);
            // console.log(avatars[0]['details']);
            
        }
        else{
            throw new Error('What is wrong now?')
        }
    }
    catch(error){
        console.log(error);
    }  
}

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

// getAvatarsList()
// getUsersList()


function createElementChoice(elementUrl, id, imageName){
    const img_address = `avaapp/${elementUrl}`;
    const divCard = document.createElement('div');
    const divCardContent = document.createElement('div');
    const elementImg = document.createElement('img');
    elementImg.classList.add('small-img');
    elementImg.src = img_address;
    elementImg.style.width ='100px'
    elementImg.style.backgroundSize = "100px"
    elementImg.style.backgroundImage ="url('" + expandedImgFace.src + "')"
    elementImg.setAttribute('imageId', id)
    elementImg.setAttribute('name', imageName)
    divCard.classList.add('.card');
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
            break;
        case 1:
            expandedImgHair.src = img.src
            break;
        case 2:
            expandedImgEyes.src = img.src
            break;
        case 3:
            expandedImgDetails.src = img.src
            break;
        default:
            expandedImgFace.src = img.src
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
            
            // const hairData = getHairList()

            // hairData.then((result) =>{
            //     console.log(result)
            // })


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


function saveAvatar(){
    const avatarObj = {
        author:'Sara',

        face: expandedImgFace.imageId,
        hair: expandedImgHair.imageId,
        eyes: expandedImgEyes.imageId,
        details: expandedImgDetails.imageId
}
postJSON(avatarObj)
    console.log(avatarObj);
}

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



// function showAvatar(avatar){
//     const creator = avatar.author
//     const name = avatar.avatar_name
//     const face = avatar.face
//     const hair = avatar.hair
//     const eyes = avatar.eyes
//     const details = avatar.face
// }



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


function createAvatarCard(){

    // create avatar name
    const paragraphAvatarName = document.createElement('p');
    paragraphAvatarName.classList.add('avatar-name');

    const avatarNameText = document.createTextNode('lola');
    paragraphAvatarName.appendChild(avatarNameText);

    // create a card for display avatar
    const divBigCard = document.createElement('div');
    divBigCard.classList.add('big-card');

    let arrayTest=['avaapp/static/img/faces/pink-face.svg', 'avaapp/static/img/hair/blond-hair.svg', 'avaapp/static/img/eyes/blue-eyes.svg', 'avaapp/static/img/details/moustache.svg',]

    for(let imgUrl of arrayTest){
    // create an element for images level-1
    const divBigElementImg = document.createElement('div');
    divBigElementImg.classList.add('big-element-img');

    // create an image level-1
    const bigExpandedImg = document.createElement('img');
    bigExpandedImg.classList.add('big-final-img');
    const srcUrl = imgUrl;
    bigExpandedImg.setAttribute('src', srcUrl);


    //create matreshka
    divBigElementImg.appendChild(bigExpandedImg);
    divBigCard.appendChild(divBigElementImg);
    gallery.appendChild(divBigCard);
    }

}

createAvatarCard()
createAvatarCard()
createAvatarCard()
createAvatarCard()
createAvatarCard()
