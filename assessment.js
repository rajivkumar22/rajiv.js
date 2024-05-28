
let nft_data = [];

function mintnft(name,country, role, batting_average, bowling_average, matches_Played, year)
 {
   let nft = {
        name: name,
        country: country,
        role: role,
        battingAverage: batting_average,
        bowlingAverage: bowling_average,
        matchesPlayed: matches_Played,
        year: year
    };

    nft_data.push(nft);
}
function listnfts()
 {
    for (let i = 0; i < nft_data.length; i++) 
        {
            console.log("\nname:"+nft_data[i].name);
            console.log("\ncountry:"+nft_data[i].country);
            console.log("\nrole:"+nft_data[i].role);
            console.log("\nbatting_average:"+nft_data[i].battingAverage);
            console.log("\nbowling_average:"+nft_data[i].bowlingAverage);
            console.log("\nmatches_played:"+nft_data[i].matchesPlayed);
            console.log("\nyear:"+nft_data[i].year);
        }
       
}
function getTotalSupply() {
   
   console.log(nft_data.length);
}

mintnft("Sachin_Tendulkar", "India", "Batsman", 48.83, 46.53, 664, 2013);
mintnft("Shane_Warne", "Australia", "Bowler", 17.32, 25.41, 339, 2007);

listnfts();
getTotalSupply();

