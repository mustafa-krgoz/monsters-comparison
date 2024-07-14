// Karakterlerin özelliklerini ve savaş stratejilerini belirlemek için 

// Örnek API endpoint'i, karakter bilgilerini getireceğimiz yer
var apiUrl = "https://gateway.canavar.com:443/v1/public/characters";

// Karakterlerin özelliklerini tutacak değişkenler
var heroes = [];
var villains = [];

// API'den karakter verilerini çeken fonksiyon
function fetchCharacters() {
    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function(response) {
            // API'den gelen verilere göre karakterleri ayırma
            response.data.results.forEach(function(character) {
                if (character.alignment === 'good') {
                    heroes.push(character);
                } else if (character.alignment === 'bad') {
                    villains.push(character);
                }
            });
        },
        error: function(err) {
            console.error("API'den karakter verileri alınamadı:", err);
        }
    });
}

// Savaş stratejisini belirleyen fonksiyon
function determineBattleStrategy(hero, villain) {
    // Örnek bir savaş stratejisi: Her zaman saldır
    var heroAttack = hero.attackPower * 1.5;
    var villainDefense = villain.defensePower * 0.8;

    if (heroAttack > villainDefense) {
        return hero.name + " kazanır!";
    } else {
        return villain.name + " kazanır!";
    }
}

// Örneğin çalıştırılması için ana işlev
$(document).ready(function() {
    // Karakterleri API'den çek
    fetchCharacters();

    // Savaşı simüle et
    $('#simulateBattle').click(function() {
        // Örneğin ilk kahramanı ve kötüyü seçelim
        var hero = heroes[0];
        var villain = villains[0];

        // Savaş stratejisini belirle
        var result = determineBattleStrategy(hero, villain);

        // Sonucu ekrana yazdır
        $('#battleResult').text(result);
    });
});
