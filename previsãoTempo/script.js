async function buscarClima(){
        var cidade = document.getElementById("cidade").value
        var chave = '9ec3ebd27c18bfae46f6c8b88c0a3118'
        var url = 'https://api.openweathermap.org/data/2.5/weather?q='+cidade+'&appid='+chave+'&units=metric';
        try {
                var resposta = await fetch(url);
                var dado = await resposta.json();

                var resultado = document.getElementById("res");
                res.innerHTML = 
                '<h2> Previsão de Tempo Para: '+dado.name +' </h2> </p>'
                +'<p> <strong>Temperatura:</strong> '+dado.main.temp + 'C° </p>'
                +'<p> <strong>Temperatura min: </strong>' +dado.main.temp_min + 'C° </p>'
                +'<p> <strong>Temperatura max: </strong>' +dado.main.temp_max + 'C° </p>'
                +'<p> <strong>Temperatura Ambiente:</strong> ' +dado.main.feels_like + 'C° </p>'
                +'<p> <strong> Humidade: </strong>' +dado.main.humidity + '% </p>'
                +'<p> <strong>Velocidade do vento:</strong> ' +dado.wind.speed + 'Km/h </p>'
                +'<p> <strong>Nuvens:</strong> ' +dado.clouds.all+ '% </p>'
                +'<p> <strong>Condição:</strong> ' + dado.weather[0].description+ '</p>'
                +'<img class="img-temp" src="https://openweathermap.org/img/wn/'+dado.weather[0].icon+'@4x.png">'
        } catch (error) {
                var resultado = document.getElementById("res");
                resultado.innerHTML = "<p>Erro ao buscar o clima: "+error ;
        }
}
