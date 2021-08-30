
const btns = document .querySelectorAll(".btn"); //selecting all the btn class in dom

btns.forEach((btn) => { 
    btn.addEventListener("click", (e) => { 
        const btnTerm = e.target.textContent; //for each btn class I added an event listener so when clicked it grabs the text content (the name of the character) from the btn that was clicked and saved it to the btnTerm variable

        
        fetch(`https://swapi.dev/api/people/?search=${btnTerm}`) //using endpoint search because it looks for the field with the btnTerm that is holding the character name
            .then((res) =>res.json())//when promise successful parse data through json
            .then((data)=> { 
                const character = data.results[0]; 
                
                document.getElementById('character-placeholder').innerHTML = //adding in the data values from the api to connect with the character-placeholder div in the dom
               

                `<h1>Character Name:  ${character.name}</h1>
                <p>Character Height:  ${character.height}</p>
                <p>Character Mass:  ${character.mass}</p>
                <p>Character Hair Color:  ${character.hair_color}</p>
                <p>Character Skin Color:  ${character.skin_color}</p>
                <p>Character Eye Color:  ${character.eye_color}</p>
                <p>Character Birth Year:  ${character.birth_year}</p>  
                <p>Character Gender:  ${character.gender}</p>
                <p>Character Film: ${character.films}</p>`// Used back ticks not quotation mark! Same as writing character Name + character-info.name

                "Character Films:" + character.films.map(getvalue)//going through the film array and calling getValue function 
                
                function getValue(movieTitle){
                    return fetch(`https://swapi.dev/api/films/?search=${movieTitle}`)//fetching the movie title data
                 
                        .then((res) =>res.json())//when promise successful parse data through json
                        .then((data)=> { 
                            const movie = data.results[0]; 
                            
                        document.getElementById('film-title').innerHTML=movie.join('');//writing in the name of the movie into the html
                        

                        })
                         .catch(error=>{console.log(error)}); 

                }
                   
               
    })
    .catch(error=>{console.log(error)}); //error handling
    if(character = undefined){ 
        alert("Character not found!") //If character not found alert message deployed
    }

});

});





/*var luke = document.getElementById('luke');


function getCharacter(){ 
        document.getElementById('character').textContent = "Character Name: " + characterInfo.name;
        document.getElementById('height').textContent= "Height: " + characterInfo.height;
        document.getElementById('mass').textContent= " Mass: " + characterInfo.mass;
        document.getElementById('hairColor').textContent= "Hair Color: " + characterInfo.hair_color;
        document.getElementById('skinColor').textContent= "Skin Color: " + characterInfo.skin_color;
        document.getElementById('eyeColor').textContent= "Eye Color: " + characterInfo.eye_color;
        document.getElementById('birthYear').textContent= "Birth Year: " + characterInfo.birth_year;
        document.getElementById('gender').textContent= "Gender: " + characterInfo.gender;
        document.getElementById('films').textContent= "Films: " + characterInfo.films;

}

function getLuke(){ 
    fetch("https://swapi.dev/api/people/1/")
    .then(res => res.json())
    .then(characterInfo=> {
       getCharacter()
    })
}
*/





//the old way where I fetch the whole page

//fetch('https://swapi.dev/api/people/') //fetching people page url endpoint from api. No parameters so using GET
//.then(res => res.json())
//.then(people=> showPeople(people.results)) //calls the showPeople function 
//.catch(error=> {console.log(error)}) //error message if the promise is not successful



//showPeople = people => { 
    //const peopleDiv = document.querySelector('#character-list'); //peopleDiv is the variable which holds the id character-list from the DOM (html)

   // people.forEach(person => { 
        //var peopleElement = document.createElement('p'); //peopleElement variable creates a <p> element for each name in the people api
        
        //peopleElement.innerText = "Character Name: " + person.name; //creates string character name and I am only pulling the names from the api
        

        //peopleDiv.append(peopleElement); //attaches the #character-list from the DOM to p element created

        
       // peopleElement.addEventListener("click",function characterLink(){ 
          //  location.href='./CharacterHighlight.html';  //when you click each character it takes you to their page onclick
            //don't forget to change the link!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
       // })

    //});
//}