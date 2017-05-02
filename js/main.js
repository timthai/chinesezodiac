var chineseZodiacs = [

  {
    animal: 'rat',
    years: [1900, 1912, 1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008],
    info: "<img src='img/rat.jpeg'><h2>Strengths: Adaptable, smart, cautious, acute, alert, positive, flexible, outgoing, cheerful<br>Weaknesses: Timid, unstable, stubborn, picky, lack of persistence, querulous</h2>"
  },

  {
    animal: 'ox',
    years: [1901, 1913, 1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009],
    info: "<img src='img/ox.jpeg'> </img>" + "<h2>Strengths: honest, industrious, patient, cautious, level-headed, strong-willed, persistent<br>Weaknesses: obstinate, inarticulate, prudish, distant</h2>"
  },

  {
    animal: 'tiger',
    years: [1902, 1914, 1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010],
    info: "<img src='img/tiger.jpeg'></img>" + "<h2>Strengths: Tolerant, loyal, valiant, courageous, trustworthy, intelligent, virtuous<br>Weaknesses: Arrogant, short-tempered, hasty, traitorous"
  },

  {
    animal: 'rabbit',
    years: [1903, 1915, 1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011],
    info: "<img src='img/rabbit.jpeg'></img>" + "<h2>Strengths: Gentle, sensitive, compassionate, amiable, modest, and merciful<br> Weaknesses: Amorous, hesitant, stubborn, timid, conservative </h2>"
  },

  {
    animal: 'dragon',
    years: [1904, 1916, 1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012],
    info: "<img src='img/dragon.jpeg'></img>" + "<h2>Strengths: Decisive, inspiring, magnanimous, sensitive, ambitious, romantic<br> Weaknesses: Eccentric, tactless, fiery, intolerant, unrealistic</h2>"
  },

  {
    animal: 'snake',
    years: [1905, 1917, 1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013],
    info: "<img src='img/snake.jpeg'></img>" + "<h2>Strengths: Soft-spoken, humorous, sympathetic, determined, passionate, smart<br>Weaknesses: Jealous, suspicious, sly, fickle, nonchalant</h2>"
  },

  {
    animal: 'horse',
    years: [1906, 1918, 1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014],
    info: "<img src='img/horse.png'></img>" + "<h2>Strengths: warm-hearted, upright, easy-going, enduring, and powerful <br> Weaknesses: money-management, frank, non-persistent</h2>"
  },

  {
    animal: 'goat',
    years: [1907, 1919, 1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015],
    info: "<img src='img/goat.jpeg'></img>" + "<h2>Strengths: gentle, softhearted, considerate, attractive, hardworking, persistent, thrift<br> Weaknesses: indecisive, timid, vain, pessimistic, moody, weak-willed</h2>"
  },

  {
    animal: 'monkey',
    years: [1908, 1920, 1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016],
    info: "<img src='img/monkey.jpeg'></img>" + "<h2>Strengths: enthusiastic, self-assured, sociable, innovative<br>Weaknesses: jealous, suspicious, cunning, selfish, arrogant</h2>"
  },

  {
    animal: 'rooster',
    years: [1909, 1921, 1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017],
    info: "<img src='img/rooster.jpeg'></img>" + "<h2>Strengths: Independent, capable, warm-hearted, self-respect, quick minded<br>Weaknesses: Impatient, critical, eccentric, narrow-minded, selfish</h2>"
  },

  {
    animal: 'dog',
    years: [1910, 1922, 1934, 1946, 1958, 1970, 1982, 1994, 2006],
    info: "<img src='img/dog.jpeg'></img>" + "<h2>Strengths: Valiant, loyal, responsible, clever, courageous, lively<br>Weaknesses: Sensitive, conservative, stubborn, emotional</h2>"
  },

  {
    animal: 'pig',
    years: [1911, 1923, 1935, 1947, 1959, 1971, 1983, 1995, 2007],
    info: "<img src='img/pig.jpeg'></img>" + "<h2>Strengths: Warm-hearted, good-tempered, loyal, honest, gentle<br>Weaknesses: Naive, gullible, sluggish, short-tempered</h2>"
  }

]


function getZodiac() {

   var zodiac = Number(document.getElementById('zodiac').value)

   for(var i = 0; i < chineseZodiacs[i].length; i++) {

     for(var j = 0; j < chineseZodiacs[i].years[j].length; j++) {

       if(zodiac === chineseZodiacs[i].years[j]) {

         console.log("You're a " + chineseZodiacs[i].animal + '!')
         document.getElementById('insertZodiac').innerHTML = chineseZodiacs[i].info
         return

       }

     }

   }

   console.log('Invalid year, or not a number')

}








