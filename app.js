$(document).ready(function () {

function toScreen(app) {

	var i = 0
	$.each(app.results, function(index, app){
		i++
	});
	console.log(i);

	var nr = Math.floor((Math.random()*i)+1);
	console.log(nr);

	console.log(app.results);

  	app = '<a href="'+app.results[nr].trackViewUrl+'"><img src="'+app.results[nr].artworkUrl512+'" id="appImg" ></div> <div id="appTitle"> '+app.results[nr].trackName+' </div> </a>';
  	$(".spinner").fadeOut();
  	$('#appWrap').append(app);
  	$(".buttonBox").css("padding-top", "0px");
  	document.getElementById("getApp").innerHTML = "More Magic!"
  	$('#appWrap').fadeIn();
  	$(".buttonBox").fadeIn();
}

function search() {

	var wordUrl = "http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=500&maxCorpusCount=-1&minDictionaryCount=100&maxDictionaryCount=-1&minLength=3&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
	var word = $.getJSON( wordUrl, function() {
	  console.log(word.responseJSON.word);
	  var url = "https://itunes.apple.com/search?media=software&term="+word.responseJSON.word+"&limit=200&entity=software&callback=?";
	  $.getJSON(url, toScreen);
	  $(".spinner").fadeIn();
	})

}

var background = Math.floor((Math.random()*5)+1),
    colorNr = Math.floor((Math.random()*5));

color = (["70f5fc","70fd7a","ff7471","294da5","ffb270"]);
console.log(color);
$("body").css("background-color", "#"+color[colorNr]+"");

$("#screen").css("background", "url(img/"+background+".jpg)");
$("#screen").css("background-size", "cover");

$(".spinner").hide();

$("#getApp").click(function(){

	$('#appWrap').slideUp();
	document.getElementById("appWrap").innerHTML = ""
	$(".buttonBox").fadeOut();
	search();

});

});
