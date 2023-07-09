// const divContent = document.getElementById('content')

// divContent.addEventListener('click', select)

// async function getFacesList() {
//     try{
//         const response = await fetch('/api/faces/');
//         if(response.ok){
//             const faces = await response.json();
//             for(let i =0; i<faces.length; i++){
//                 createElementChoice(faces[i]['imgUrl'])
//             }     
//         }
//         else{
//             throw new Error('OH NO! ERROR!')
//         }
//     }
//     catch(error){
//         console.log(error);
//     }  
// }
// let faces=getFacesList()

// async function getHairList() {
//     try{
//         const response = await fetch('/api/hair/');
//         if(response.ok){
//             const hair = await response.json();
//             for(let i =0; i<hair.length; i++){
//                 createElementChoice(hair[i]['imgUrl'])
//             }     
//         }
//         else{
//             throw new Error('OH NO! ERROR!')
//         }
//     }
//     catch(error){
//         console.log(error);
//     }  
// }
// // let hair=getHairList()

// async function getEyesList() {
//     try{
//         const response = await fetch('/api/eyes/');
//         if(response.ok){
//             const eyes = await response.json();
//             for(let i =0; i<eyes.length; i++){
//                 createElementChoice(eyes[i]['imgUrl'])
//             }     
//         }
//         else{
//             throw new Error('OH NO! ERROR!')
//         }
//     }
//     catch(error){
//         console.log(error);
//     }  
// }
// // let eyes=getEyesList()

// async function getDetailsList() {
//     try{
//         const response = await fetch('/api/eyes/');
//         if(response.ok){
//             const details = await response.json();
//             for(let i =0; i<details.length; i++){
//                 createElementChoice(details[i]['imgUrl'])
//             }     
//         }
//         else{
//             throw new Error('OH NO! ERROR!')
//         }
//     }
//     catch(error){
//         console.log(error);
//     }  
// }
// // let details=getDetailsList()



// async function getAvatarsList() {
//     try{
//         const response = await fetch('/api/avatars/');
//         if(response.ok){
//             const avatars = await response.json();
//             console.log(avatars);
//             console.log(avatars[0]['avatarName']);          
//         }
//         else{
//             throw new Error('What is wrong now?')
//         }
//     }
//     catch(error){
//         console.log(error);
//     }  
// }

// async function getUsersList() {
//     try{
//         const response = await fetch('/api/users/');
//         if(response.ok){
//             const users = await response.json();
//             console.log(users);
//             console.log(users[0]['userName']);          
//         }
//         else{
//             throw new Error('What is wrong now?')
//         }
//     }
//     catch(error){
//         console.log(error);
//     }  
// }

// // getAvatarsList()
// // getUsersList()


// function createElementChoice(faceUrl){
//     const img_address = `avaapp/${faceUrl}`;
//     const content = document.getElementById('content');
//     const divCardContent = document.createElement('div');
//     divCardContent.classList.add('card-content');
//     const elementImg = document.createElement('img');
//     elementImg.src = img_address;
//     elementImg.style.width ='100px'
//     divCardContent.classList.add('.element-img');
//     divCardContent.appendChild(elementImg);
//     content.appendChild(divCardContent)
//     divCardContent.addEventListener('click', getSelected)
// }

// function getSelected(){
    
// }

// function showAvatar(avatar){
//     const creator = avatar.author
//     const name = avatar.avatar_name
//     const face = avatar.face
//     const hair = avatar.hair
//     const eyes = avatar.eyes
//     const details = avatar.face
// }

//     // Add event listener to the image container
// // const imageContainer = document.getElementById('imageContainer');
// //     imageContainer.addEventListener('click', function(event) {
// //       // Clear the selection styles from all images
// //       const images = imageContainer.getElementsByTagName('img');
// //       for (let i = 0; i < images.length; i++) {
// //         images[i].classList.remove('selected');
// //       }

// //       // Apply the selection style to the clicked image
// //       const clickedImage = event.target;
// //       clickedImage.classList.add('selected');
// // });

// // const allElementData = Promise.all([categoryData, facesData, hairData, eyesData, detailsData])

// // allElementData
// //   .then(results => Promise.all(results.map(response => response.json())))
// //   .then(data => {

// //     console.log('Category: ', data[0]);
// //     console.log('Faces: ', data[1]);
// //     console.log('Hair: ', data[2]);
// //     console.log('Eyes: ', data[3]);
// //     console.log('Details: ', data[4]);
// //     // console.log(data[0][0]['category']);
// //     // const urls = data.map(response => response[0]);
// //     // console.log(urls);
// //   })
// //   .catch(error => {
// //     console.error('Error:', error);
// //   });


// // function select(event){
// //     const images = divContent.getElementsByTagName('img');
// //     for (let i = 0; i < images.length; i++) {
// //       images[i].classList.remove('selected');
// //     }

// //     const clickedImage = event.target;
// //     clickedImage.classList.add('selected');
// // }

//     // Add event listener to the image container
//     // const imageContainer = document.getElementById('content');
//     // imageContainer.addEventListener('click', function(event) {
//     //   // Clear the selection styles from all images
//     //   const images = imageContainer.getElementsByTagName('img');
//     //   for (let i = 0; i < images.length; i++) {
//     //     images[i].classList.remove('selected');
//     //   }

//     //   // Apply the selection style to the clicked image
//     //   const clickedImage = event.target;
//     //   clickedImage.classList.add('selected');
//     // });


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