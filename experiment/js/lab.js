

//create and array the holds all the images
//https://stackoverflow.com/questions/8810927/showing-an-image-from-an-array-of-images-javascript

var starArray = [
  {
    title: "Aquarius"
    url: "../img/aquarius.jpg"
  },
  {
    title: "Pisces"
    url: "../img/pisces.jpg"
    location:"Right Ascension: 0.85 hours, Declination: 11.08 degrees, Best viewed: at 9 p.m. between Nov. 6 and Nov. 9."
    fact: "'The Hubble Space Telescope imaged a pair of bizarre galaxies, called Pisces A and Pisces B, in 2014. Two years later, researchers announced that data from those observations showed the dwarf galaxies used to be by themselves, but over time they moved to a nearby group of galaxies — a process that accelerated star formation.'"
    myth: "'The fish themselves are apparently the Greek goddess Aphrodite and her son, Eros, who turned into fish and jumped into the Euphrates River to evade the fiery breath of the monster Typhon, 'the most awful monster the world had ever seen,' according to Ridpath.'"
  },
  {
    title: "Aries"
    url: "../img/aries.jpg"
  },
  {
    title: "Taurus"
    url: "../img/taurus.jpg"
  },
  {
    title: "Gemini"
    url: "../img/gemini.jpg"
    location: "By April and May, the constellation can be seen soon after sunset in the west. Right ascension: 7 hours, Declination: 20 degrees."
    fact: "'Gemini is the radiant point for a meteor shower known as the Geminids, which happen every year around mid-December.'"
    myth: "'The two brightest stars in the constellation, also named after Greek mythology's Castor and Pollux, represent the heads of the twins, while fainter stars outline the pair's bodies.'"
  },
  {
    title: "Cancer"
    url: "../img/cancer.jpg"
  },
  {
    title: "Leo"
    url: "../img/leo.jpg"
  },
  {
    title: "Virgo"
    url: "../img/virgo.jpg"
    location: "Right Ascension: 13 hours, Declination: 0 degrees, Best seen in May at 9 p.m."
    fact:"The pink planet GJ 504b, which at the time of the announcement in 2013 was the smallest planet ever photographed around a sun-like star. However, the planet itself is still relatively large, at four times the mass of Jupiter."
    myth:"According to Greek mythology, the earth experienced eternal spring until the god of the underworld abducted the spring maiden Persephone."
  },
  },
  {
    title: "Libra"
    url: "../img/libra.jpg"
  },
  {
    title: "Scorpio"
    url: "../img/scorpio.jpg"
  },
  {
    title: "Sagittarius"
    url: "../img/sagittarius.jpg"
  },
  {
    title: "Capricorn"
    url: "../img/capricorn.jpg"
  }
]



// Sort function from https://www.geeksforgeeks.org/program-display-astrological-sign-zodiac-sign-given-date-birth/
// JavaScript program to display astrological sign
// or Zodiac sign for given date of birth

// Function to calculate sum
// digits of n
function zodiac_sign(day, month)
	{
		let astro_sign="";

		// checks month and date within the
		// valid range of a specified zodiac
		if (month == "december"){

			if (day < 22)
			astro_sign = "Sagittarius";
			else
			astro_sign ="capricorn";
		}

		else if (month == "january"){
			if (day < 20)
			astro_sign = "Capricorn";
			else
			astro_sign = "aquarius";
		}

		else if (month == "february"){
			if (day < 19)
			astro_sign = "Aquarius";
			else
			astro_sign = "pisces";
		}

		else if(month == "march"){
			if (day < 21)
			astro_sign = "Pisces";
			else
			astro_sign = "aries";
		}
		else if (month == "april"){
			if (day < 20)
			astro_sign = "Aries";
			else
			astro_sign = "taurus";
		}

		else if (month == "may"){
			if (day < 21)
			astro_sign = "Taurus";
			else
			astro_sign = "gemini";
		}

		else if( month == "june"){
			if (day < 21)
			astro_sign = "Gemini";
			else
			astro_sign = "cancer";
		}

		else if (month == "july"){
			if (day < 23)
			astro_sign = "Cancer";
			else
			astro_sign = "leo";
		}

		else if( month == "august"){
			if (day < 23)
			astro_sign = "Leo";
			else
			astro_sign = "virgo";
		}

		else if (month == "september"){
			if (day < 23)
			astro_sign = "Virgo";
			else
			astro_sign = "libra";
		}

		else if (month == "october"){
			if (day < 23)
			astro_sign = "Libra";
			else
			astro_sign = "scorpio";
		}

		else if (month == "november"){
			if (day < 22)
			astro_sign = "scorpio";
			else
			astro_sign = "sagittarius";
		}

		document.write(astro_sign);
	}

// Driver Code

		let day = 19;
		let month = "may";
		zodiac_sign(day, month);




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

//   Get input from user
       $("#button").click(function(){
//     put id input in html
       var date = $("#input").val();
       var star = sortStar(date);
       console.log(star)
//     put id output in html
        $("#output").html("<img src=" + starArray.url + ">");
//     append paragraph to output
        var newText = "Your Zodiac constellation is " + starArray.url;
        document.getElementById("output").innerHTML = newText;
})

//Wes's code from Lab 13
  var outputArea = document.getElementById("output");
  outputArea.innerHTML = newText;
  removeClass(outputArea, "hidden");
  removeClass(document.getElementById("hidden"));

var myInput = document.getElementById("input");
myInput.addEventListener("focus", function() {
  addClass(document.getElementById("output"), "hidden");
  addClass(document.getElementById("hidden"));
});