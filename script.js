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

 //function describeBeer(beerData){
   //let beerID = beerData[i].id;
   
  $('body').on('click', '.beerList', function(){
   
    $.get(('https://api.punkapi.com/v2/beers/ ' ), function(beerInfo){
     let container = document.createElement('div');
     for (let i = 0; i < beerInfo.length; i++) {
       let abvP = document.createElement('p');
       let tipsP = document.createElement('p');
       let yearP = document.createElement('p');
       let descriptionP = document.createElement('p');
       let foodP = document.createElement('p');
 
        abvP.innerHTML = "Degré d'alcool :" + beerInfo[i].abv;
       let tips = "Conseils du brasseur :" + beerInfo[i].brewers_tips;
       let year = "Date de 1er brassage :" + beerInfo[i].first_brewed;
       let description = "Details :" + beerInfo[i].description;
       let food = "Que manger avec :" + beerInfo[i].food_pairing;
 
       document.querySelector('#resultList').appendChild(abvP);
       
       
     }
    })
    
  });
 //}
 
  
});

