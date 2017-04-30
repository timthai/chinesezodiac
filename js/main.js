var chineseZodiacs = [

  {
    zodiac: 'monkey',
  }

]

function getZodiac() {

   var zodiac = document.getElementById('zodiac').value;
   zodiac = Number(zodiac);

   for(var i = 1900; i <= 2017; i++) {
//The twelve chinese zodiacs

     if(zodiac % i === 0) {

       alert('You are a rat!');
       document.getElementById('insertZodiac').innerHTML = "<img src='img/rat.jpeg'><img>" + "<h2>Strengths: Adaptable, smart, cautious, acute, alert, positive, flexible, outgoing, cheerful<br>Weaknesses: Timid, unstable, stubborn, picky, lack of persistence, querulous</h2>"
       return

       } else if(zodiac % i === 1) {

       alert('You are an ox!');
       document.getElementById('insertZodiac').innerHTML = "<img src='img/ox.jpeg'> </img>" + "<h2>Strengths: honest, industrious, patient, cautious, level-headed, strong-willed, persistent<br>Weaknesses: obstinate, inarticulate, prudish, distant</h2>"
       return

     } else if(zodiac % i === 2) {

       alert('You are a tiger!');
       
       document.getElementById('insertZodiac').innerHTML = "<img src='img/tiger.jpeg'></img>" + "<h2>Strengths: Tolerant, loyal, valiant, courageous, trustworthy, intelligent, virtuous<br>Weaknesses: Arrogant, short-tempered, hasty, traitorous"
       return

     } else if(zodiac % i === 3) {

       alert('You are a rabbit!');
       document.getElementById('insertZodiac').innerHTML = "<img src='img/rabbit.jpeg'></img>" + "<h2>Strengths: Gentle, sensitive, compassionate, amiable, modest, and merciful<br> Weaknesses: Amorous, hesitant, stubborn, timid, conservative </h2>"
       return

     } else if(zodiac % i === 4) {

       alert('You are a dragon!');
       document.getElementById('insertZodiac').innerHTML = "<img src='img/dragon.jpeg'></img>" + "<h2>Strengths: Decisive, inspiring, magnanimous, sensitive, ambitious, romantic<br> Weaknesses: Eccentric, tactless, fiery, intolerant, unrealistic</h2>"
       return

     } else if(zodiac % i === 5) {

       alert('You are an snake!');
       document.getElementById('insertZodiac').innerHTML = "<img src='img/snake.jpeg'></img>" + "<h2>Strengths: Soft-spoken, humorous, sympathetic, determined, passionate, smart<br>Weaknesses: Jealous, suspicious, sly, fickle, nonchalant</h2>"
       return

     } else if(zodiac % i === 6) {

       alert('You are a horse!');
       document.getElementById('insertZodiac').innerHTML = "<img src='img/horse.png'></img>" + "<h2>Strengths: warm-hearted, upright, easy-going, enduring, and powerful <br> Weaknesses: lack of money-management, frank, non-persistent</h2>"
       return

     } else if(zodiac % i === 7) {

       alert('You are a goat!');
       document.getElementById('insertZodiac').innerHTML = "<img src='img/goat.jpeg'></img>" + "<h2>Strengths: gentle, softhearted, considerate, attractive, hardworking, persistent, thrift<br> Weaknesses: indecisive, timid, vain, pessimistic, moody, weak-willed</h2>"
       return

     } else if(zodiac % i === 8) {

       alert('You are a monkey!');
       document.getElementById('insertZodiac').innerHTML = "<img src='img/monkey.jpeg'></img>" + "<h2>Strengths: enthusiastic, self-assured, sociable, innovative<br>Weaknesses: jealous, suspicious, cunning, selfish, arrogant</h2>"
       return

     } else if(zodiac % i === 9) {

       alert('You are a rooster!');
       document.getElementById('insertZodiac').innerHTML = "<img src='img/rooster.jpeg'></img>" + "<h2>Strengths: Independent, capable, warm-hearted, self-respect, quick minded<br>Weaknesses: Impatient, critical, eccentric, narrow-minded, selfish</h2>"
       return

     } else if(zodiac % i === 10) {

       alert('You are a dog!');
       document.getElementById('insertZodiac').innerHTML = "<img src='img/dog.jpeg'></img>" + "<h2>Strengths: Valiant, loyal, responsible, clever, courageous, lively<br>Weaknesses: Sensitive, conservative, stubborn, emotional</h2>"
       return

     } else if(zodiac % i === 11) {

       alert('You are a pig!');
       document.getElementById('insertZodiac').innerHTML = "<img src='img/pig.jpeg'></img>" + "<h2>Strengths: Warm-hearted, good-tempered, loyal, honest, gentle<br>Weaknesses: Naive, gullible, sluggish, short-tempered</h2>"
       return

     } 
       
   }

console.log('Invalid year')


}