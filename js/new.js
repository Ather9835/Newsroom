console.log('hello')

let country = ['in','us','sa','gb']
var countryId = document.getElementById('co');

html='';
country.forEach(function(element,index){
     html = html+`<div class="accordion" id="accordionExample${index}">  
     </div>`
})
countryId.innerHTML = html;

let source = "bbc-news"
let apikey = "0a07bfd37f4e466faf3720998d25d6e7"

country.forEach(function(element1,index1){

var key = document.getElementById(`accordionExample${index1}`);

let xhr = new XMLHttpRequest();

xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=${element1}&apiKey=0a07bfd37f4e466faf3720998d25d6e7`,true);

xhr.onload = function(){
       if(this.status==200)
       {
           let obJ = JSON.parse(this.responseText);
           let articles = obJ.articles;
           let html= `<h1><i class="fas fa-newspaper mx-3"></i>Today's News <span class="badge badge-secondary">By NewsRoom ${element1}</span></h1>`;
           articles.forEach(function(element,index){

             html = html + `<div class="card">
             <div class="card-header" id="heading${index}">
               <h2 class="mb-0">
                 <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                 ${element['title']}
                 </button>
               </h2>
             </div>
             <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#accordionExample${index1}">
               <div class="card-body">
                   ${element['content']}<a href="${element['url']}">Read More </a>
               </div>
             </div>
           </div>`
               
           });
           html=html + `<hr>`
           key.innerHTML = html;
           
       }    
       else
       {
           console.log("Can't able to get")
       }
}

xhr.send();

})