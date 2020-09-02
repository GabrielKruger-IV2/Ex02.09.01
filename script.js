var dias = ["Segunda","Terça","Quarta","Quinta","Sexta"]
var i=0
for (i = 0; i < 5; i++) {

    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(res => res.json())
        .then(json => {
            var nome = json.meals[0].strMeal
            var receita = json.meals[0].strInstructions
            var foto = json.meals[0].strMealThumb
            var ingred ="<p>"
            var qtd = "<p>"
        

          
            for(x=1;x<21;x++){
                var ing = json.meals[0]['strIngredient'+x]
                if(ing ){
                ingred+=`${ing}<br>`
            }
            }
            for(y=1;y<21;y++){
                var qtdd = json.meals[0]['strMeasure'+y]
                if(qtdd){
                qtd+=`${qtdd}<br>`
            }
            }
           
            var div = document.getElementById("section")

            div.innerHTML +=`
            <div id="div${i}">
            <h2>${nome}</h2>
            <img src="${foto}" alt="" width="20%">
            <h3>Receita</h3>
            <p>${receita}</p>
            <h3>Ingredientes</h3>
            ${ingred}
            <h3>Quantidade de ingredientes respectivamente</h3>
            ${qtd}
            </div>
            `
        })
}