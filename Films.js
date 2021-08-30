const btns = document .querySelectorAll(".btn"); //selecting all the btn class in dom

btns.forEach((btn) => { 
    btn.addEventListener("click", (e) => { 
        const btnTerm = e.target.textContent; //for each btn class I added an event listener so when clicked it grabs the text content (the name of the movie) from the btn that was clicked and saved it to the btnTerm variable

        
        fetch(`https://swapi.dev/api/films/?search=${btnTerm}`) //using endpoint search because it looks for the field with the btnTerm that is holding the movie title
            .then((res) =>res.json())//when promise successful parse data through json
            .then((data)=> { 
                const movie = data.results[0]; 
                
                document.getElementById('film-placeholder').innerHTML = //adding in the data values from the api to connect with the film place-holder div in the dom
                `<h1>Title:  ${movie.title}</h1>
                <p>Episode Number:  ${movie.episode_id}</p>
                <p>Director:  ${movie.director}</p>
                <p>Producer:  ${movie.producer}</p>
                <p>Movie Relase Date:  ${movie.release_date}</p>
                <p>Characters:  ${movie.characters}</p>`// Used back ticks not quotation mark! Same as writing movie title + movie.name

                "Characters:" + movie.characters.map(getvalue)//going through the characters array and calling getValue function 
                
                function getValue(characterNames){
                    return fetch(`https://swapi.dev/api/people/?search=${characterNames}`)//fetching the character data
                 
                        .then((res) =>res.json())//when promise successful parse data through json
                        .then((data)=> { 
                            const person = data.results[0]; 
                            
                        document.getElementById('film-title').innerHTML=person.join('');//writing in the name of the person into the html
                        

                        })
                         .catch(error=>{console.log(error)}); 

                }

    })
    .catch(error=>{console.log(error)}); 
    if(character = undefined){ 
        alert("Character not found!") //If character not found alert message deployed
    }

});

});
