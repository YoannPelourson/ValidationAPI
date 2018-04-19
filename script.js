$(document).ready(function() {
  
 $('#a').on('click', function(){
   
    $.get('https://api.punkapi.com/v2/beers',function(beerData){
      
      
      
      let container = document.createElement('div');
      let list = document.createElement('ul');

      for (let i = 0; i < beerData.length; i++) {

      
      
      
      let listElement = document.createElement('li');
     
      
      listElement.classList.add('beerList');
      

      //let nameB = beerData[i].name;
      
      listElement.innerHTML = beerData[i].name;
      
      container.appendChild(list);
      list.appendChild(listElement);
      
      document.querySelector('#resultList').appendChild(container);
      


      
      
    };
    });
 });

 function describeBeer(beerData){
   let beerID = beerData[i].id;
  $('body').on('click', '.beerList', function(){
    debugger;
    $.get(('https://api.punkapi.com/v2/beers/ ' + beerID), function(beerData){
     let container = document.createElement('div');
     for (let i = 0; i < beerData.length; i++) {
       let abvP = document.createElement('p');
       let tipsP = document.createElement('p');
       let yearP = document.createElement('p');
       let descriptionP = document.createElement('p');
       let foodP = document.createElement('p');
 
        abvP.innerHTML = "Degré d'alcool :" + beerData[i].abv;
       let tips = "Conseils du brasseur :" + beerData[i].brewers_tips;
       let year = "Date de 1er brassage :" + beerData[i].first_brewed;
       let description = "Details :" + beerData[i].description;
       let food = "Que manger avec :" + beerData[i].food_pairing;
 
       document.querySelector('#resultList').appendChild(abvP);
       
       
     }
    })
    
  });
 }
 
  
});

