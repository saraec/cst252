

//create and array the holds all the images
//https://stackoverflow.com/questions/8810927/showing-an-image-from-an-array-of-images-javascript

var starArray = [
  {
    title: "Aquarius",
    url: "../img/aquarius.jpg"
  },
  {
    title: "Pisces",
    url: "../img/pisces.jpg",
    location:"Right Ascension: 0.85 hours, Declination: 11.08 degrees, Best viewed: at 9 p.m. between Nov. 6 and Nov. 9.",
    fact: "'The Hubble Space Telescope imaged a pair of bizarre galaxies, called Pisces A and Pisces B, in 2014. Two years later, researchers announced that data from those observations showed the dwarf galaxies used to be by themselves, but over time they moved to a nearby group of galaxies — a process that accelerated star formation.'",
    myth: "'The fish themselves are apparently the Greek goddess Aphrodite and her son, Eros, who turned into fish and jumped into the Euphrates River to evade the fiery breath of the monster Typhon, 'the most awful monster the world had ever seen,' according to Ridpath.'"
  },
  {
    title: "Aries",
    url: "../img/aries.jpg"
  },
  {
    title: "Taurus",
    url: "../img/taurus.jpg"
  },
  {
    title: "Gemini",
    url: "../img/gemini.jpg",
    location: "By April and May, the constellation can be seen soon after sunset in the west. Right ascension: 7 hours, Declination: 20 degrees.",
    fact: "'Gemini is the radiant point for a meteor shower known as the Geminids, which happen every year around mid-December.'",
    myth: "'The two brightest stars in the constellation, also named after Greek mythology's Castor and Pollux, represent the heads of the twins, while fainter stars outline the pair's bodies.'"
  },
  {
    title: "Cancer",
    url: "../img/cancer.jpg"
  },
  {
    title: "Leo",
    url: "../img/leo.jpg"
  },
  {
    title: "Virgo",
    url: "../img/virgo.jpg",
    location: "Right Ascension: 13 hours, Declination: 0 degrees, Best seen in May at 9 p.m.",
    fact:"The pink planet GJ 504b, which at the time of the announcement in 2013 was the smallest planet ever photographed around a sun-like star. However, the planet itself is still relatively large, at four times the mass of Jupiter.",
    myth:"According to Greek mythology, the earth experienced eternal spring until the god of the underworld abducted the spring maiden Persephone."
  },
  {
    title: "Libra",
    url: "../img/libra.jpg"
  },
  {
    title: "Scorpio",
    url: "../img/scorpio.jpg"
  },
  {
    title: "Sagittarius",
    url: "../img/sagittarius.jpg"
  },
  {
    title: "Capricorn",
    url: "../img/capricorn.jpg"
  }
]



// Sort function from https://www.geeksforgeeks.org/program-display-astrological-sign-zodiac-sign-given-date-birth/
// JavaScript program to display astrological sign
// or Zodiac sign for given date of birth

// Function to calculate sum
// digits of n
function zodiac_sign(day, month)	{
		let astro_sign=["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];

		// checks month and date within the
		// valid range of a specified zodiac
		if (month == "december"){

			if (day < 22)
			astro_sign = [10];
			else
			astro_sign = [11];
		}

		else if (month == "january"){
			if (day < 20)
			astro_sign =  [11];
			else
			astro_sign = [0];
		}

		else if (month == "february"){
			if (day < 19)
			astro_sign = [0];
			else
			astro_sign = [1];
		}

		else if(month == "march"){
			if (day < 21)
			astro_sign =  [1];
			else
			astro_sign =  [2];
		}
		else if (month == "april"){
			if (day < 20)
			astro_sign = [2];
			else
			astro_sign = [3];
		}

		else if (month == "may"){
			if (day < 21)
			astro_sign = [3];
			else
			astro_sign = [4];
		}

		else if( month == "june"){
			if (day < 21)
			astro_sign = [4];
			else
			astro_sign = [5];
		}

		else if (month == "july"){
			if (day < 23)
			astro_sign = [5];
			else
			astro_sign = [6];
		}

		else if( month == "august"){
			if (day < 23)
			astro_sign =  [6];
			else
			astro_sign =  [7];
		}

		else if (month == "september"){
			if (day < 23)
			astro_sign = [7];
			else
			astro_sign = [8];
		}

		else if (month == "october"){
			if (day < 23)
			astro_sign = [8];
			else
			astro_sign = [9];
		}

		else if (month == "november"){
			if (day < 22)
			astro_sign =  [9];
			else
			astro_sign =  [10];
		}

		document.write(astro_sign);
	}

// Three pure javascript functions to manipulate classes
// from https://stackoverflow.com/questions/6787383/how-to-add-remove-a-class-in-javascript
function hasClass(ele,cls) {
  return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
//
function addClass(ele,cls) {
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}
//
function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg,' ');
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  // get value from input field
  var name = document.getElementById("input").value;
  // use name to get house from SortingHat function
  var astro_sign = zodiac_sign(name);
  // output to output div (adding some text and HTML around the results)
  newText = "<h2>" + astro_sign.title + "!</h2>" +
          "<img src=" + astro_sign.url + ">";
  var outputArea = document.getElementById("output");
  outputArea.innerHTML = newText;
  removeClass(outputArea, "hidden");
  removeClass(document.getElementById("hidden"));
})


//Wes's code from Lab 13
  var newText = "<h2>" + starArray.title + "</h2>" +
          "<p>" + starArray.url + "</p>";
  var outputArea = document.getElementById("output");
  outputArea.innerHTML = newText;
  removeClass(outputArea, "hidden");
  removeClass(document.getElementById("hidden"));

  var myInput = document.getElementById("input");
  myInput.addEventListener("focus", function() {
  addClass(document.getElementById("output"), "hidden");
  addClass(document.getElementById("hidden"));
});
