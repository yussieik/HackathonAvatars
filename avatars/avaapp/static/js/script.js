const content = document.getElementById('content');
const errorNote = document.getElementById("error")
const buttonNext = document.getElementById('next')
const buttonSave = document.getElementById('save')
const expandedImgFace = document.getElementById("expandedImg-face")

expandedImgFace.src='avaapp/static/img/faces/who-face.svg';

const expandedImgHair = document.getElementById("expandedImg-hair")
const expandedImgEyes = document.getElementById("expandedImg-eyes")
const expandedImgDetails = document.getElementById("expandedImg-details")

buttonNext.addEventListener('click', nextStep)

let counter = 0;


async function getFacesList() {
    try{
        const response = await fetch('/api/faces/');
        if(response.ok){
            const faces = await response.json();
            for(let i =0; i<faces.length; i++){
                createElementChoice(faces[i]['imgUrl'])
            }     
        }
        else{
            throw new Error('OH NO! ERROR!')
        }
    }
    catch(error){
        console.log(error);
    }  
}
let faces=getFacesList()

async function getHairList() {
    try{
        const response = await fetch('/api/hair/');
        if(response.ok){
            const hair = await response.json();
            for(let i =0; i<hair.length; i++){
                createElementChoice(hair[i]['imgUrl'])
            }     
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
            for(let i =0; i<eyes.length; i++){
                createElementChoice(eyes[i]['imgUrl'])
            }     
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
            for(let i =0; i<details.length; i++){
                createElementChoice(details[i]['imgUrl'])
            }     
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
            const avatars = await response.json();
            console.log(avatars);
            console.log(avatars[0]['avatarName']);          
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


function createElementChoice(elementUrl){
    const img_address = `avaapp/${elementUrl}`;
    const divCard = document.createElement('div');
    const divCardContent = document.createElement('div');
    console.log(expandedImgFace.src);
    const elementImg = document.createElement('img');
    elementImg.src = img_address;
    elementImg.style.width ='100px'
    divCard.classList.add('.card');
    divCardContent.classList.add('.element-img');
    divCardContent.appendChild(elementImg);
    divCard.appendChild(divCardContent)
    content.appendChild(divCard)
    divCardContent.addEventListener('click', () => getSelected(elementImg, counter))
}


function getSelected(img, counter){
    expandedImgFace.src=''
    switch(counter){
        case 1:
            expandedImgFace.src = img.src
            break;
        case 2:
            // expandedImgHair.style.backgroundColor=rgba(34, 255, 237, 0);
            expandedImgHair.src = img.src

            break;
        case 3:
            expandedImgEyes.src = img.src
            break;
        default:
            expandedImgDetails.src = img.src
            break;
    }
}

function nextStep(){
    // if(counter==0){
    //     if(expandedImgFace.src=='avaapp/static/img/faces/who-face.svg'){
    //         errorNote.textContent = 'Choose a face'
    //     }
    // }
    // else{
        content.innerHTML = ''
        errorNote.textContent = ''
        counter++;
        let miniImgs = document.querySelector('.element-img')
        console.log(miniImgs)
        // for(let i = 0; i < miniImgs.length; i++){
        //     miniImg[i].src = expandedImg.src
        // }
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
// }


async function postJSON(data) {
    try {
      const response = await fetch("/api/avatars/", {
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



function showAvatar(avatar){
    const creator = avatar.author
    const name = avatar.avatar_name
    const face = avatar.face
    const hair = avatar.hair
    const eyes = avatar.eyes
    const details = avatar.face
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




// const allElementData = Promise.all([categoryData, facesData, hairData, eyesData, detailsData])

// allElementData
//   .then(results => Promise.all(results.map(response => response.json())))
//   .then(data => {

//     console.log('Category: ', data[0]);
//     console.log('Faces: ', data[1]);
//     console.log('Hair: ', data[2]);
//     console.log('Eyes: ', data[3]);
//     console.log('Details: ', data[4]);
//     // console.log(data[0][0]['category']);
//     // const urls = data.map(response => response[0]);
//     // console.log(urls);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


// function select(event){
//     const images = divContent.getElementsByTagName('img');
//     for (let i = 0; i < images.length; i++) {
//       images[i].classList.remove('selected');
//     }

//     const clickedImage = event.target;
//     clickedImage.classList.add('selected');
// }


//     // Get data from api
// const categoryData = fetch('/api/category/');
// const facesData = fetch('/api/faces/');
// const hairData = fetch('/api/hair/');
// const eyesData = fetch('/api/eyes/');
// const detailsData = fetch('/api/details/');

// // const colorsData = fetch('/api/colors/');
// // const stylesData = fetch('/api/styles/');

// function getElementsApi(){
//     const allElementData = Promise.all([categoryData, facesData, hairData, eyesData, detailsData])
//     allElementData
//       .then(results => Promise.all(results.map(response => response.json())))
//       .then(data => {return data})   
//       .catch(error =>{console.error('Error:', error);
//     });
// }
// async function getElementsArray(){
// const elementsArrays = await getElementsApi()
// const a = await console.log(elementsArrays)
// }
// // getElementsArray()

// function displayInfo(){
//     console.log('Category: ', allElementData[0]);
//     console.log('Faces: ', allElementData[1]);
//     console.log('Hair: ', allElementData[2]);
//     console.log('Eyes: ', allElementData[3]);
//     console.log('Details: ', allElementData[4]);
// }
// //   displayInfo(allElementData)