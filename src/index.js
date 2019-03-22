

document.getElementById("personal").addEventListener("click", function () {

    document.getElementById("page3").style.display="none"
    document.getElementById("pantalla1").style.display="block"
    readRecipesFromDatabase();
    document.getElementById('pantalla1').innerHTML = `

    <img id="fotoContacto" src="Ellipse.png">
    <p href="#"id="nombreContacto">Marian Alicia</p>
    <p id="hora">12:30</p>
    <img id="info" src="Ellipse2.png">
    <img id="uno" src="1.png">
    <hr id="linea">
    <img id="fotoContacto" src="fabiola.png">
    <p id="nombreContacto">Fabiola Barra</p>
    <p id="hora">8:30</p>
    <hr id="linea2">
    <img id="fotoContacto" src="cecilia.png">
    <p id="nombreContacto">Cecilia Valenzuela</p>
    <p id="hora">18:11</p>
    <hr id="linea2">
    <img id="fotoContacto" src="gloria.png">
    <p id="nombreContacto">Gloria Naranjo</p>
    <p id="hora">16:30</p>
    <hr id="linea2">
    
    `
})



document.getElementById("agregar").addEventListener("click", function () {
    document.getElementById("pantalla1").style.display="none"
    document.getElementById("page3").style.display="block"
    document.getElementById("root").style.display="none"
   

   alert("hola")


})



// let newBusinessKey = firebase.database().ref('users/boasfdisfbsfahb').child('products').push().key;
// console.log(newBusinessKey);

// firebase.database().ref('users/' + newBusinessKey).set({
//   campo: newBusinessKey
// }) 



// /* let newBusinessKey = ""; */
// const saveBusiness = (/* businessImage, */ businessName, businessDescription, businessCategory, businessPhone, businessCity) => {
//     /* let */ newBusinessKey = firebase.database().ref('business/boasfdisfbsfahb').child('products').push().key;
//     console.log(newBusinessKey);
//     firebase.database().ref('business/' + newBusinessKey).set({
//       image: imgUrl,
//       owner: businessName,
//       description: businessDescription,
//       key: newBusinessKey,
//       category: businessCategory,
//       phone: businessPhone,
//       city: businessCity
//     });
//   };
  
  /* function onLikeClick(e) {
    let key = e.target.id;
    let oriKey = e.target.oid;
    let numberKey = e.target.nid;
    document.getElementById(key).style.background = "lightblue";
    firebase.database().ref(`recipe/${oriKey}`).child(`likes/${firebase.auth().currentUser.uid}`).set({
      user: firebase.auth().currentUser.uid,
    });
    firebase.database().ref(`recipe/${oriKey}`).child("likes").on("value", function (snapshot) {
      firebase.database().ref(`recipe/${oriKey}`).update({
        likesCount: snapshot.numChildren(),
      })
      console.log("There are " + snapshot.numChildren() + " likes");
      document.getElementById(numberKey).innerHTML = "";
      document.getElementById(numberKey).innerHTML = snapshot.numChildren();
    });
  } */
  
  
//   var uploader = document.getElementById('uploader');
//   var fileButton = document.getElementById('fileButton');
//   let imgUrl = "";
  
//   fileButton.addEventListener('change', function (e) {
//     var file = e.target.files[0];
//     var storageRef = firebase.storage().ref('Img/'
//       + file.name);
//     var task = storageRef.put(file);
//     task.on('state_changed',
//       function progress(snapshot) {
//         var percentage = (snapshot.bytesTransferred /
//           snapshot.totalBytes) * 100;
//         uploader.value = percentage;
//       },
//       function error(err) {
//       },
//       function complete() {
//       }
//     );
//     storageRef.getDownloadURL().then(function (url) {
//       console.log(newBusinessKey);
//       console.log(url);
//       imgUrl = url;
//       /* firebase.database().ref(`recipe/${newRecipeKey}`).update({
//           urlImage : url 
//         });*/
//       // Insert url into an <img> tag to "download"
//     }).catch(function (error) {
  
//       // A full list of error codes is available at
//       // https://firebase.google.com/docs/storage/web/handle-errors
//       switch (error.code) {
//         case 'storage/object-not-found':
//           // File doesn't exist
//           break;
  
//         case 'storage/unauthorized':
//           // User doesn't have permission to access the object
//           break;
  
//         case 'storage/canceled':
//           // User canceled the upload
//           break;
  
//         case 'storage/unknown':
//           // Unknown error occurred, inspect the server response
//           break;
//       }
//     });
//   })
  
  
  
//   const saveBusinessIntoDatabase = () => {
//     /* const businessImage = imgURL; */
//     const businessName = document.getElementById("name").value;
//     const businessDescription = document.getElementById("description").value;
//     const businessCategory = document.getElementById("category").value;
//     const businessPhone = document.getElementById("phone").value;
//     const businessCity = document.getElementById("city").value;
    /* const recipeTitle = titleRecipe.value;
    const recipeImage = imgUrl;
    const ownerName = firebase.auth().currentUser.email; */
    // saveBusiness(/* businessImage, */ businessName, businessDescription, businessCategory, businessPhone, businessCity);
//   }
  
//   document.getElementById("sendBusiness").addEventListener('click', saveBusinessIntoDatabase);

//   const containerRoot = document.getElementById('root');

//   const readRecipesFromDatabase = () => {

  
  
    // let businessRef = firebase.database().ref('business');
    // businessRef.on("child_added", function(business){
      // container2=document.getElementById('div');
      // containerRoot.appendChild(container2)

    //   const form = document.createElement('form');
     
    //   form.id='form_'+business.val().key;
    //   containerRoot.appendChild(form);


    //   const p=document.createElement('p');
    //   form.appendChild(p);
    //   p.setAttribute("id","name")
    //   const nameProfile=document.createTextNode(business.val().owner);
    //   p.appendChild(nameProfile);

    //   const h3=document.createElement('h3');
    //   h3.setAttribute('class',"title-class");
    //   form.appendChild(h3);
    //   const titleProfile=document.createTextNode(recipe.val().title);
    //   h3.appendChild(titleProfile);

    //   const img=document.createElement('img')
    //   img.setAttribute('class',"img-class");
    //   img.setAttribute('alt',"Recipe Image");
    //   img.setAttribute('style',"width:100px;height:100px;");
    //   img.setAttribute('src',recipe.val().image);
    //   form.appendChild(img);
    //   img.id = recipe.key;
    //   img.Ingredients=recipe.val().Ingredients;
    //   img.image = recipe.val().image;
    //   img.onclick = onImgClick;
    //   img.recipes=recipe.val().recipes;
      

    //   const i2=document.createElement('i2');
    //   i2.setAttribute('class',"far fa-clock iconoRecipes");
    //   form.appendChild(i2);
    //   const timeProfile=document.createTextNode(recipe.val().time);
    //   i2.appendChild(timeProfile);

    //   const i3=document.createElement('i3');
    //   i3.setAttribute('class',"fas fa-dollar-sign iconoRecipes");
    //   form.appendChild(i3);
    //   const moneyProfile=document.createTextNode(recipe.val().cost);
    //   i3.appendChild(moneyProfile);

    //   const i4=document.createElement('i4');
    //   i4.setAttribute('class',"fas fa-users iconoRecipes");
    //   form.appendChild(i4);
    //   const userProfile=document.createTextNode(recipe.val().serves);
    //   i4.appendChild(userProfile);

    //   const likeButton = document.createElement('i');
    //   likeButton.setAttribute('class',"fas fa-thumbs-up")
    //   likeButton.setAttribute('id', "like"+recipe.key);
    //   form.appendChild(likeButton);
      
    //   likeButton.id = "like"+recipe.key;
    //   likeButton.oid = recipe.key;
    //   likeButton.title = recipe.val().title;
    //   likeButton.likeCount = recipe.likeCount;
    //   likeButton.onclick = onLikeClick;
    //   likeButton.nid='number'+recipe.key;
      
    //   const likeNumberP = document.createElement('p');
    //   likeNumberP.setAttribute('id', 'number'+recipe.key)
    //   likeNumberP.setAttribute('class', 'numberLike')
    //   form.appendChild(likeNumberP);
      
    //   const likeNumber = document.createTextNode(recipe.val().likesCount);
    //   likeNumberP.appendChild(likeNumber);

    //   let list = document.getElementById("root");
    //   list.insertBefore(form, list.childNodes[0]);
});
}