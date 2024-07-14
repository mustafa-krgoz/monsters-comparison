
var charObject = {
    
        cnv1: "Yükseklik: 25 cm\nRenk: Yeşil\nSüper Güç: Öfke Patlaması\nHız: 35 km/s\nDayanıklılık: Orta\n\n" +
            "Soyut Özellikler:\n" +
            "- Zayıflıklar: Ses, Parlak Işık\n" +
            "- Silahlar: Öfke Dalgası, Zehirli Tırnaklar\n" +
            "- Zırh: Deri Zırh (Orta koruma)\n" +
            "- Saldırılar: Öfke Dalgası, Zehirli Tırnaklar\n" +
            "- Yetenekler: Uçuş, Telepati\n" +
            "- Güçler: Hızlı Hareket, Zehirli Saldırılar",
    
        cnv2: "Yükseklik: 28 cm\nRenk: Mavi\nSüper Güç: Elektroşok\nHız: 38 km/s\nDayanıklılık: Düşük\n\n" +
            "Soyut Özellikler:\n" +
            "- Zayıflıklar: Su, Yüksek Sıcaklık\n" +
            "- Silahlar: Elektrik Şokları, Keskin Pençeler\n" +
            "- Zırh: Enerji Kalkanı (Düşük koruma)\n" +
            "- Saldırılar: Elektrik Şokları, Keskin Pençe Saldırısı\n" +
            "- Yetenekler: Elektrik Manipülasyonu, Hızlı Refleksler\n" +
            "- Güçler: Yüksek Hız, Elektrik Yüklemeleri",
    
        cnv3: "Yükseklik: 30 cm\nRenk: Sarı\nSüper Güç: Ateş Fırlatmak\nHız: 40 km/s\nDayanıklılık: Yüksek\n\n" +
            "Soyut Özellikler:\n" +
            "- Zayıflıklar: Soğuk, Su\n" +
            "- Silahlar: Alev Püskürtme, Pençe\n" +
            "- Zırh: Çelik Zırh (Yüksek koruma)\n" +
            "- Saldırılar: Alev Saldırısı, Pençe Saldırısı\n" +
            "- Yetenekler: Görünmezlik, Şekil Değiştirme\n" +
            "- Güçler: Yüksek Dayanıklılık, Güçlü Saldırılar",
    
        cnv4: "Yükseklik: 27 cm\nRenk: Kırmızı\nSüper Güç: Telekinezi\nHız: 36 km/s\nDayanıklılık: Orta\n\n" +
            "Soyut Özellikler:\n" +
            "- Zayıflıklar: Ağır Nesneler, Düşük Enerji\n" +
            "- Silahlar: Zihinsel Saldırılar, Telekinezik Kuvvet\n" +
            "- Zırh: Eterik Kalkan (Orta koruma)\n" +
            "- Saldırılar: Zihinsel Saldırılar, Nesne Manipülasyonu\n" +
            "- Yetenekler: Zihinsel Manipülasyon, Uzaktan Eşya Kontrolü\n" +
            "- Güçler: Telekinezi, Zihinsel Engellemeler"
    };
    
var heroNames = ['Canvar 1', 'Canavar 2'];
var heroIds = ['cnv1', 'cnv2'];
var villainNames = ['Canavar 3', 'Canavar 4'];
var villainIds = ['cnv3', "cnv4"];

//var that is used to indicate which hero is yours or opps 
var second = false;

//display vars
var charboxStats;
var fightBtn = $('<button class="button">Battle</button>');
var doneBtn = $('<button class="button" id="reset">Choose New Characters</button>');
var heroAnimated;


var capCall;
var mKey;
var mHeroInfo;
var heroAtt;


//set variable to be used globally for the battle engine 
//initialize chosen char's stat variables
var yourName;
var yourAtk;
var yourStr;
var yourInt;
var yourSpd;
var yourNrg;
var yourDur;
var yourO;
var yourChnc;
var yourD;
var yourHp;

//initialize opponents stat variables
var oppName;
var oppAtk;
var oppStr;
var oppInt;
var oppSpd;
var yourDur;
var oppNrg;
var oppO;
var oppChnc;
var oppD;
var oppHp;


//win counts
var count;
var yourWins;
var oppWins;

var horizontalBarChartData;


//FUNCTIONS
function battle(o1, h1, d1, chnc1, o2, h2, d2, chnc2) {

    yourWins = 0;
    oppWins = 0;
    //for loop to run fight simulator specified # of times
    for (var i = 1; i <= 100; i++) {
        var yourDmg = h1 - d2;
        var oppDmg = h2 - d1;
        var fight = true;
        //run while loop as long as both chars are above 0 hp
        while (fight == true) {
            var dodge1 = Math.random();
            var dodge2 = Math.random();
            //set if statement to determine if health remains for either char
            if (yourDmg > 0 && oppDmg > 0) {
                //set if statement to determine if there is a miss for your char
                if (chnc2 > dodge2) {
                    //variable to set crit chance
                    var critChance = Math.random();
                    //if statement to determine if a crit was landed for your char
                    if (critChance > .75) {
                        var crit = Math.random();
                        crit += 1;
                        o2 = o2 * crit;
                        yourDmg -= o2;
                    } else {
                        yourDmg -= o2;
                    };
                    //end crit if
                } else {
                    d1 += .01;
                };
                //end opp dodge chance if
                //set if statement to determine if there is a miss for the opp char      
                if (chnc1 > dodge1) {
                    //variable to set crit chance
                    var critChance = Math.random();
                    //if statement to determine if a crit was landed for the opp
                    if (critChance > .75) {
                        var crit = Math.random();
                        crit += 1;
                        o1 = o1 * crit;
                        oppDmg -= o1;
                    } else {
                        oppDmg -= o1;
                    };
                    //end opp crit chance if
                } else {
                    d2 += .01;
                };
                //end opp dodge
                fight = true;
            } else {
                fight = false;
                //if statement to assign wins
                if (yourDmg > 0) {
                    yourWins += 1;
                } else {
                    oppWins += 1;
                };
                //end wins if
            };
            //end health above 0 if statement 
        };
        //end while loop
    };
    //end for loop
};
//end battle function

function panelCreate(arrName, arrId, hv) {
    $('#' + hv + 'List').empty();
    for (i = 0; i < arrName.length; i++) {
        var hero = $('<a>', { class: 'thumbnail char' });
        var heroImage = $('<img>', { id: arrId[i], src: ('assets/images/' + arrId[i] + ".jpg"), alt: arrName[i] });
        heroImage.css("width", "100%");
        heroImage.css("height", "100px");
        hero.append(heroImage);
        hero.append('<h3>' + arrName[i] + '</h3>');
        hero.attr('value', hv)
        $('#' + hv + 'List').append(hero);
    }
};

panelCreate(heroNames, heroIds, 'hero');
panelCreate(villainNames, villainIds, 'villain');


$('.char').mouseenter(function() {

    $('#infoBox').empty();
    var charNameStats = $(this).children('h3').html();
    var charIdStats = $(this).children('img').attr('id');

    // var capCall = "https://gateway.canavar.com:443/v1/public/characters?name=" + charNameStats + "&apikey=a81b78c534562c5384986ee7dad0b0f7a124e249";

    // $.ajax({
    //     url: capCall,
    //     method: 'GET'
    // }).done(function(response) {
    //     console.log(response);
    //     heroAtt = response.attributionHTML;
    //     mHeroInfo = response.data.results.description;

    // });

    
    var heroImage = $('<img>', {src: ('assets/images/' + charIdStats + ".jpg"), alt: charIdStats });
    heroImage.css("width", "100%");
    heroImage.css("height", "200px");
    console.log(charObject.charIdStats)
    var charInfo = $("<h1>")
    charInfo.html(charNameStats);
    charInfo.append("<p class='par'>" + charObject[charIdStats] + "</p>"); // will be mHeroInfo
    charInfo.append(heroImage);
    charboxStats = $("<div>", { id: charIdStats, class: 'text-center panel-body' });
    charboxStats.css("background-color", "black")
    charboxStats.css("color", "white")
    charboxStats.addClass("panel panel-default")
    charboxStats.append(charInfo);
    $('#infoBox').append(charboxStats);

});

//
$('.char').click(function() {

    var charName = $(this).children('h3').html();
    var charId = $(this).children('img').attr('id');
    var hv = $(this).attr('value');
    console.log(hv);
    if (hv === 'villain') {
        hv = 'villainsList';
    } else {
        hv = 'heroesList';
    };

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + charName + "&api_key=dc6zaTOxFJmzC&limit=20";

    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .done(function(response) {
            var results = response.data;

            var animated = results[2].images.fixed_height.url;

            if (charId === 'cnv2') {
                animated = results[0].images.fixed_height.url;
            } else if (charId === 'hulk' || charId === 'loki') {
                animated = results[2].images.fixed_height.url;
            } 

            console.log(animated);

            heroAnimated = $("<img>");
            heroAnimated.attr("src", animated);
            heroAnimated.css("width", "100%");
            heroAnimated.css("height", "200px");
            heroAnimated.addClass("hero-image");
            console.log(heroAnimated);

            var charBox = $("<div>", { id: charName, class: 'text-center panel-body' });
            charBox.css("background-color", "black")
            charBox.css("color", "white")
            charBox.addClass("panel panel-default")
            var charInfo = $("<h1>")
            charInfo.html(charName);
            charBox.append(charInfo);
            charBox.append(heroAnimated);

            if (second === true) {
                $('#infoBox').empty();
                $('#fight').append(fightBtn);
                $('#statBoxTwo').html(charBox);
                $('.villain').hide();
                $('.hero').hide();

                ref.on("value", function(snapshot) {
                    var grab = snapshot.val();
                    //grab opponenet's initial stats from firebase
                    oppAtk = grab[hv][charId].atk;
                    oppStr = grab[hv][charId].str;
                    oppInt = grab[hv][charId].int;
                    oppSpd = grab[hv][charId].spd;
                    oppNrg = grab[hv][charId].nrg;
                    oppDur = grab[hv][charId].dur;

                    //set chosen opponent's offensicve power
                    oppO = oppAtk + oppStr + oppInt;
                    oppO = oppO * oppSpd;
                    oppO = oppO * oppNrg;

                    //set your opponent's chance to hit
                    oppChnc = .3
                    var oppAtkChnc = oppAtk * .1;
                    var oppIntChnc = oppInt * .1;
                    var oppSpdChnc = oppSpd * .1;
                    oppAtkChnc += 1;
                    oppIntChnc += 1;
                    oppSpdChnc += 1;
                    oppChnc = oppChnc * oppAtkChnc;
                    oppChnc = oppChnc * oppIntChnc;
                    oppChnc = oppChnc * oppSpdChnc;

                    //set opponent's defensive power
                    oppD = oppStr + oppInt;
                    oppD = oppD * oppSpd;
                    oppD = oppD * oppNrg;

                    //set opponent's health
                    oppHp = grab[hv][charId].dur * 500;
                    oppName = charName;
                });
            } else {
                $('#statBoxOne').append(charBox);
                second = true;
                ref.on("value", function(snapshot) {

                    var grab = snapshot.val();

                    //grab initial chosen char's stats from firebase
                    yourAtk = grab[hv][charId].atk;
                    yourStr = grab[hv][charId].str;
                    yourInt = grab[hv][charId].int;
                    yourSpd = grab[hv][charId].spd;
                    yourNrg = grab[hv][charId].nrg;
                    yourDur = grab[hv][charId].dur;

                    //set chosen char's offensive power
                    yourO = yourAtk + yourStr + yourInt;
                    yourO = yourO * yourSpd;
                    yourO = yourO * yourNrg;

                    //set your chosen char's chance to hit
                    yourChnc = .3;
                    var atkChnc = yourAtk * .1;
                    var intChnc = yourInt * .1;
                    var spdChnc = yourSpd * .1;
                    atkChnc += 1;
                    intChnc += 1;
                    spdChnc += 1;
                    yourChnc = yourChnc * atkChnc;
                    yourChnc = yourChnc * intChnc;
                    yourChnc = yourChnc * spdChnc;

                    //set chosen char's defensive power
                    yourD = yourStr + yourInt;
                    yourD = yourD * yourSpd;
                    yourD = yourD * yourNrg;

                    //set chosen char's health
                    yourHp = grab[hv][charId].dur * 500;
                    yourName = charName;
                });
            }
        });
});


$('#done').click(function() {
    console.log("something");
    $('.villain').show();
    $('.hero').show();
    $('#infoBox').empty();
    $('#statBoxOne').empty();
    $('#statBoxTwo').empty();
    $('#fight').empty();
    $('#chart').empty();
    $('#done').empty();
});

var color;
'use strict';

window.chartColors = {
    red: 'rgb(255, 99, 132)',
    blue: 'rgb(54, 162, 235)',

};

color = Chart.helpers.color;

$('#fight').click(function() {

// remove <canvas> element to enable new chart creation
$('#chart').remove('#canvas');
$('#chart').append('<canvas id="canvas"><canvas>');

// creates new chart every fight
horizontalBarChartData = {
    labels: ["Durability", "Energy", "Fighting", "Intelligence", "Speed", "Strength"],
    datasets: [{
        label: yourName,
        backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
        borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [
            yourDur,
            yourNrg,
            yourAtk,
            yourInt,
            yourSpd,
            yourStr
        ]
    }, {
        label: oppName,
        backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
        borderColor: window.chartColors.blue,
        data: [
            oppDur,
            oppNrg,
            oppAtk,
            oppInt,
            oppSpd,
            oppStr
        ]
    }]
};

var ctx = document.getElementById("canvas").getContext("2d");
window.myHorizontalBar = new Chart(ctx, {
    type: 'horizontalBar',
    data: horizontalBarChartData,
    options: {
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
            rectangle: {
                borderWidth: 2,
            }
        },
        responsive: true,
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: 'Fighter Data Comparison'
        }
    }
});

//display 
$("#canvas").addClass("panel-body");
$("#canvas").css("background-color", 'black');
$("#canvas").css("background-color", "black")
$("#canvas").css("color", "white")
$("#canvas").addClass("panel panel-default")

battle(yourO, yourHp, yourD, yourChnc, oppO, oppHp, oppD, oppChnc);
var battleInfoP;
if (yourWins > oppWins) {
    battleInfoP = $('<p> ' + yourName + " would win " + yourWins + " out of 100 battles! </p>")
} else {
    battleInfoP = $('<p> ' + oppName + " would win " + oppWins + " out of 100 battles! </p>")
}

$('#infoBox').empty();

var battleInfo = $("<div>", { class: 'text-center panel-body' });
battleInfo.css("background-color", "black")
battleInfoP.css("color", "white")
battleInfo.addClass("panel panel-default")
battleInfo.append(battleInfoP);
$('#infoBox').append(battleInfo);

$('#infoBox').append();
$('#statBoxOne').empty();
$('#statBoxTwo').empty();
$('#fight').empty();
$('#done').append(doneBtn);
second = false;
});

