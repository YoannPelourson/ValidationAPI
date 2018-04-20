$(document).ready(function() {
  
 $('#a').on('click', function(){
   
    $.get('https://api.punkapi.com/v2/beers',function(beerData){
     
      if (document.querySelectorAll('#rip').length > 0) {
        let id = document.getElementById('rip')
        id.remove('div');
      };
      
      let container = document.createElement('div');
      container.setAttribute('id', "rip");
      
      let list = document.createElement('ul');
      list.classList.add('ul-beer');

      for (let i = 0; i < beerData.length; i++) {

      let listElement = document.createElement('li'); 
      listElement.classList.add('beerList');
      listElement.innerHTML = beerData[i].name;
      listElement.dataset.id = beerData[i].id;
      container.appendChild(list);
      list.appendChild(listElement);
      document.querySelector('#resultList').appendChild(container);

       };

    });

 });

  $('body').on('click', '.beerList', function(){
  
    $.get(('https://api.punkapi.com/v2/beers/' + this.dataset.id ), function(beerInfo){
    
      if (document.querySelectorAll('#rip').length > 0) {
        let id = document.getElementById('rip')
        id.remove('div');
      };

     let container = document.createElement('div');
     container.setAttribute('id', "rip");
     container.classList.add('lore');
     for (let i = 0; i < beerInfo.length; i++) {
       let nameH = document.createElement('h2');
       let abvP = document.createElement('p');
       let tipsP = document.createElement('p');
       let yearP = document.createElement('p');
       let descriptionP = document.createElement('p');
       let foodP = document.createElement('p');
 
       nameH.innerHTML = beerInfo[i].name;
       abvP.innerHTML = "Degré d'alcool :" + beerInfo[i].abv + "°";
       tipsP.innerHTML = "Conseils du brasseur :" + beerInfo[i].brewers_tips;
       yearP.innerHTML = "Date de 1er brassage :" + beerInfo[i].first_brewed;
       descriptionP.innerHTML = "Details :" + beerInfo[i].description;
       foodP.innerHTML = "Que manger avec :" + beerInfo[i].food_pairing;

       container.appendChild(nameH);
       container.appendChild(abvP);
       container.appendChild(tipsP);
       container.appendChild(yearP);
       container.appendChild(descriptionP);
       container.appendChild(foodP);
 
       document.querySelector('#resultList').appendChild(container);
       
      };

    });
    
  });

    $('#b').on('click',function(){

      $.get('https://api.punkapi.com/v2/beers/random',function(randoBeer){

        if (document.querySelectorAll('#rip').length > 0) {
          let id = document.getElementById('rip')
          id.remove('div');
        };
        
        for (let i = 0; i < randoBeer.length; i++) {

        let container = document.createElement('div');
        container.setAttribute('id', "rip");
        container.classList.add('lore');
        let nameH = document.createElement('h2');
        let abvP = document.createElement('p');
        let tipsP = document.createElement('p');
        let yearP = document.createElement('p');
        let descriptionP = document.createElement('p');
        let foodP = document.createElement('p');
        let phP/*super blague*/ = document.createElement('p');
        
       nameH.innerHTML =  randoBeer[i].name;
       abvP.innerHTML = "Degré d'alcool :" + randoBeer[i].abv + "°";
       tipsP.innerHTML = "Conseils du brasseur :" + randoBeer[i].brewers_tips;
       yearP.innerHTML = "Date de 1er brassage :" + randoBeer[i].first_brewed;
       descriptionP.innerHTML = "Details :" + randoBeer[i].description;
       foodP.innerHTML = "Que manger avec :" + randoBeer[i].food_pairing;
       phP.innerHTML = "pH : " + randoBeer[i].ph;

       container.appendChild(nameH);
       container.appendChild(abvP);
       container.appendChild(tipsP);
       container.appendChild(yearP);
       container.appendChild(descriptionP);
       container.appendChild(foodP);
       container.appendChild(phP);

       document.querySelector('#resultList').appendChild(container);

      };

      });

    });

    $('#c').on('click', function(){
   
      $.get('https://api.punkapi.com/v2/beers?abv_gt=15',function(hardBeerData){
       
        if (document.querySelectorAll('#rip').length > 0) {
          let id = document.getElementById('rip')
          id.remove('div');
        }
        
        let container = document.createElement('div');
        container.setAttribute('id', "rip");
        
        let list = document.createElement('ul');
        list.classList.add('ul-beer');
  
        for (let i = 0; i < hardBeerData.length; i++) {
    
        let listElement = document.createElement('li');
             
        listElement.classList.add('hardBeerList'); 
        listElement.innerHTML = hardBeerData[i].name;
        listElement.dataset.id = hardBeerData[i].id;
        
        container.appendChild(list);
        list.appendChild(listElement);
        
        document.querySelector('#resultList').appendChild(container);
        
       };

      });

   });

    $('body').on('click', '.hardBeerList', function(){
      
      $.get(('https://api.punkapi.com/v2/beers/' + this.dataset.id),function(hardBeer){

        if (document.querySelectorAll('#rip').length > 0) {
          let id = document.getElementById('rip')
          id.remove('div');
        };
        
        for (let i = 0; i < hardBeer.length; i++) {
          
          let container = document.createElement('div');
          container.setAttribute('id', "rip");
          container.classList.add('lore');
          let nameH = document.createElement('h2');
          let abvP = document.createElement('p');
          let tipsP = document.createElement('p');
          let healTipsP = document.createElement('p');
          let descriptionP = document.createElement('p');

          nameH.innerHTML = hardBeer[i].name;
          abvP.innerHTML = "Motif de la future gueule de bois : " + hardBeer[i].abv + "°";
          tipsP.innerHTML = "Conseils du brasseur : " + hardBeer[i].brewers_tips;
          healTipsP.innerHTML = "Conseils d'ex soignant : prevoyez du paracetamole et une grande bouteille d'eau pour le lendemain."
          descriptionP.innerHTML = "Details : " + hardBeer[i].description;

          container.appendChild(nameH);``
          container.appendChild(abvP);
          container.appendChild(tipsP);
          container.appendChild(healTipsP);
          container.appendChild(descriptionP);

          document.querySelector('#resultList').appendChild(container);
          
        };

      });

    });
 
  
});

