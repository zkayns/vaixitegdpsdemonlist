function Level(name, id, creators, verifier, publisher, videoId, points, difficulty, videoIsYoutube) {
    this.name = name;
    this.id = id;
    this.creators = creators;
    this.verifier = verifier;
    this.publisher = publisher;
    this.videoId = videoId;
    this.points = points;
    this.difficulty = difficulty;
    this.videoIsYoutube = videoIsYoutube;
}
function Record(user, levelName, percentage, videoUrl) {
    this.user = user;
    this.levelName = levelName;
    this.percentage = percentage;
    this.videoUrl = videoUrl;
}
var levelNames = new Array();
var list = [
    new Level("Alderamin", 343347519, "AmberGameZ", "Wither", "Wither", "-39jeFc4iP8", 70, "Extreme Demon", 1),
    new Level("Daniel Hack Acu28 L", 3433437306, "Wither", "Wither", "Wither", "NMufYXMvahU", 65, "Extreme Demon", 1),
    new Level("Sigma Circles", 343347469, "Wither", "Wither", "Wither", "tVDQ8OBvMNE", 63, "Extreme Demon", 1),
    new Level("O P P R E S S I O N", 343347520, "C1GAMER", "C1GAMER", "C1GAMER", "jKx9Os_b4Go", 60, "Extreme Demon", 1),
    new Level("Avernus Noclip Copya", 237, "Aspect", "Aspect", "Aspect", "7a2E6gAeMMc", 55, "Insane Demon", 1),
    new Level("I Made A Circle", 343347474, "Aspect", "Aspect", "Aspect", "i_mWr-94wD4", 50, "Insane Demon", 1),
    new Level("Wither Challenge XII", 343347311, "Aspect", "Aspect", "Aspect", "Jzb34H-Ucbw", 45, "Insane Demon", 1),
    new Level("INCIDENT ERROR", 343347320, "Vaixite", "C1GAMER", "Vaixite", "F0YNP1qWHjY", 42, "Insane Demon", 1),
    new Level("Flare", 213, "Wither", "Wither", "Wither", "2ITQ0nTyUA8", 40, "Insane Demon", 1),
    new Level("Komarovo", 182, "Kawazaki", "Wither", "Kawazaki", "txA0uz6B9bU", 35, "Insane Demon", 1),
    new Level("DELTA COLLISION", 307, "Superduperboy29", "Aspect", "Superduperboy29", "xBbY0T-h6ps", 30, "Insane Demon", 1),
    new Level("Slaughter Creep", 186, "Vaixite", "Aspect", "Aspect", "PWqYKbm5ieY", 29, "Hard Demon", 1),
    new Level("Everywhere i see you", 129, "Vaixite", "Superduperboy29", "Vaixite", "v-HTZX-lOLo", 27, "Hard Demon", 1),
    new Level("N E M E S I S", 343347410, "C1GAMER", "Aspect", "C1GAMER", "esjddTq55dA", 26, "Hard Demon", 1),
    new Level("Espelatic Remake", 309, "Vaixite", "Vaixite", "Vaixite", "RibPBGQtIsc", 25, "Hard Demon", 1),
    new Level("Everywhere You Go", 72, "Superduperboy29", "Superduperboy29", "Superduperboy29", "ECKmrYBYLOQ", 24, "Hard Demon", 1),
    new Level("1077", 3433437307, "Wither", "Wither", "Wither", "DE5u8bSma5o", 23, "Hard Demon", 1),
    new Level("Ultimate Challenge", 343347310, "Vaixite", "Vaixite", "Vaixite", "iU3_xMFsXrE", 22, "Hard Demon", 1),
    new Level("Angry Jukebox", 343347309, "Wither", "Wither", "Wither", "5V0vYJfPh5Q", 21, "Medium Demon", 1),
    new Level("Fatal Circles", 326, "Nova", "Nova", "Nova", "7THDZdKdNdc", 20, "Medium Demon", 1),
    new Level("Impossible level", 143, "Vaixite", "Superduperboy29", "Vaixite", "UH6kOghQ5EM", 19, "Medium Demon", 1),
    new Level("Shiny Object Syndrome", 36, "DannielYT", "DannielYT", "DannielYT", "uaZ4EgBY7hk", 18, "Medium Demon", 1),
    new Level("The Virtuoso", 171, "AmberGameZ", "Vyxn", "AmberGameZ", "LyLw2AxMgfk", 17, "Medium Demon", 1),
    new Level("Hardclub Buff", 370, "Westley", "Westley", "Vaixite", "4aPJmzBN_2o", 16, "Medium Demon", 1),
    new Level("Uprise", 132, "DannielYT", "DannielYT", "DannielYT", "u_vxR5-FlWg", 15, "Medium Demon", 1),
    new Level("Vax", 355, "Aspect", "Aspect", "Aspect", "pEv7Jc_8q3E", 14, "Medium Demon", 1),
    new Level("Quakex", 292, "Vaixite", "Vaixite", "Vaixite", "c6YVM3pLJIs", 13, "Easy Demon", 1),
    new Level("Theory Of Spikes", 211, "Vaixite", "Vaixite", "Vaixite", "XFzPTt51c10", 12, "Easy Demon", 1),
    new Level("Milkshake", 124, "DannielYT", "DannielYT", "DannielYT", "LkfU6PRKrLs", 11, "Easy Demon", 1),
    new Level("stuffed cabbage roll", 150, "DannielYT", "DannielYT", "DannielYT", "7rAxkqPpvyQ", 10, "Easy Demon", 1)
]
function statsViewer() {
    $("#levels").hide();
    $("#statsviewer").show();
}
function demonlist() {
    $("#levels").show();
    $("#statsviewer").hide();
}
function getUserPoints(user) {
    var points = 0;
    for (let p in records) {
        if (records[p].user == user) {
            points+=list[levelNames.indexOf(records[p].levelName)].points;
        }
    }
    for (let g in list) {
        if (list[g].verifier == user) {
            points+=list[g].points;
        }
    }
    return points;
}
function getStats() {
    var stats = new Array();
    for (let s in users) {
        stats.push({ username: users[s], points: getUserPoints(users[s]) });
    }
    return stats;
}
for (let i in list) {
    levelNames.push(list[i].name)
}
// remember that when adding a level to the list, if videoIsYoutube is 1 you MUST set videoId to the youtube video id, not the video link!
var records = [
    new Record("Wither", "Avernus Noclip Copya", 100, "https://www.youtube.com/watch?v=HzUQPJjUAz8"),
    new Record("Wither", "Wither Challenge XII", 100, "https://www.youtube.com/watch?v=HzUQPJjUAz8"),
    new Record("C1GAMER", "1077", 100, "https://medal.tv/games/requested/clips/ig5oSDhzzyFM3Guiy/d1337KIWyYOS?invite=cr-MSxyd0YsMjE5MjA0MjEwLA"),
    new Record("Whirlybirdie", "Everywhere You Go", 100, "https://www.youtube.com/watch?v=r7eBVSZMdi4"),
    new Record("C1GAMER", "N E M E S I S", 100, "https://youtu.be/yGGsOuo4A3Q?si=YULNYlclway9o3M4"),
    new Record("Aspect", "Everywhere i see you", 100, "https://www.youtube.com/watch?v=bfRwNCxe3BE"),
    new Record("Wither", "Slaughter Creep", 100, "https://www.youtube.com/watch?v=CktfwCfv-1w"),
    new Record("C1GAMER", "DELTA COLLISION", 100, "https://youtu.be/2fWaoc8Ahow"),
    new Record("Wither", "DELTA COLLISION", 100, "https://youtu.be/1ezsNEojDVA"),
    new Record("C1GAMER", "Komarovo", 100, "https://youtu.be/2hignFPXOyE?si=vzMHGsAA8Kjws-i4"),
    new Record("Aspect", "Flare", 100, "https://www.youtube.com/watch?v=WCovPJ08cJE"),
    new Record("C1GAMER", "Flare", 100, "https://www.youtube.com/watch?v=Cbmews0BZ3g"),
    new Record("Wither", "Vax", 100, "https://www.youtube.com/watch?v=1ezsNEojDVA"),
    new Record("Wither", "Fatal Circles", 100, "https://www.youtube.com/watch?v=1ezsNEojDVA"),
    new Record("Wither", "Hardclub Buff", 100, "https://www.youtube.com/watch?v=1ezsNEojDVA"),
    new Record("C1GAMER", "Vax", 100, "https://youtu.be/_0Axbx066ms?si=phCNfA7jt4LvZb97"),
    new Record("Whirlybirdie", "Uprise", 100, "https://www.youtube.com/watch?v=HzeOvAgDpHY"),
    new Record("Temperestious", "Uprise", 100, "https://www.youtube.com/watch?v=jhAzmi_ivJc"),
    new Record("C1GAMER", "The Virtuoso", 100, "https://cdn.medal.tv/ugcc/content-social/DvhhhtBmawets4IJiKuxtg.mp4?auth=exp=1720920600~data=MjE5MjA0MjEwLGlnaHJGeVVqSXllQmVBMmJXLDVSSHdDemhfTCwyNTEyNjAyNTE~hmac=9a8eb80cd4388ab09ee5df4093b06d7f3e89514fc250862efe794a52f07c0eac"),
    new Record("Vaixite", "The Virtuoso", 100, "https://www.youtube.com/watch?v=ux4fMlOMItM"),
    new Record("Superduperboy29", "The Virtuoso", 100, "https://www.youtube.com/watch?v=tkQjbKXwT-o&ab_channel=Superduperboy29"),
    new Record("Whirlybirdie", "Shiny Object Syndrome", 100, "https://www.youtube.com/watch?v=xaDuiBE101s"),
    new Record("Vaixite", "Shiny Object Syndrome", 100, "https://www.youtube.com/watch?v=4i-3WP2_-dY"),
    new Record("Temperestious", "Shiny Object Syndrome", 100, "https://www.youtube.com/watch?v=f3b2oj-ncis"),
    new Record("Superduperboy29", "Shiny Object Syndrome", 100, "https://www.youtube.com/watch?v=p5B3qT2_lTk"),
    new Record("Vaixite", "Impossible level", 100, "https://www.youtube.com/watch?v=_IVHC6gLeDk"),
    new Record("C1GAMER", "Fatal Circles", 100, "https://www.youtube.com/watch?v=El1T_KKvb3g"),
    new Record("Wither", "O P P R E S S I O N", 100, "https://youtu.be/ST8h_teymdc")
]
var users = new Array();
for (let i in records) {
    if (!users.includes(records[i].user)) users.push(records[i].user);
}
for (let i in list) {
    if (!users.includes(list[i].verifier)) users.push(list[i].verifier);
}
var alreadyFilled = new Array();
for (let i in list) {
    var currentLevel = list[i];
    var realId = parseInt(i)+1;
    var level = document.createElement("button");
    level.id = "level"+String(realId);  
    level.innerHTML = "#"+String(realId)+" - "+currentLevel.name;
    switch (currentLevel.difficulty) {
        case "Easy Demon":
            level.innerHTML+=" <img src='https://gdbrowser.com/assets/difficulties/demon-easy.png' width='16' height='16'>"
            break;
        case "Medium Demon":
            level.innerHTML+=" <img src='https://gdbrowser.com/assets/difficulties/demon-medium.png' width='16' height='16'>"
            break;
        case "Hard Demon":
            level.innerHTML+=" <img src='https://gdbrowser.com/assets/difficulties/demon-hard.png' width='16' height='16'>"
            break;
        case "Insane Demon":
            level.innerHTML+=" <img src='https://gdbrowser.com/assets/difficulties/demon-insane.png' width='16' height='16'>"
            break;
        case "Extreme Demon":
            level.innerHTML+=" <img src='https://gdbrowser.com/assets/difficulties/demon-extreme.png' width='16' height='16'>"
            break;
    }
    document.getElementById("levels").appendChild(level);
    $("#level"+String(realId)).attr("class", "btn btn-dark wide");
    $("#level"+String(realId)).on("click", function(e){
        if ($("#info"+e.target.id.substring(5)).css("display") == "none") {
            $("#info"+e.target.id.substring(5)).css("display", "flex");
            if (!alreadyFilled.includes(e.target.id.substring(5))) {
            if (list[parseInt(e.target.id.substring(5))-1].videoIsYoutube == true) {
                document.getElementById("info"+e.target.id.substring(5)).innerHTML+=`<iframe width="560" height="315" src="https://www.youtube.com/embed/`+list[parseInt(e.target.id.substring(5))-1].videoId+`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
            } else {
                document.getElementById("info"+e.target.id.substring(5)).innerHTML+=`<iframe width="560" height="315" src='`+list[parseInt(e.target.id.substring(5))-1].videoId+"'></iframe>"
            }
            document.getElementById("info"+e.target.id.substring(5)).innerHTML+="<br><h2>Records</h2><hr>";
            for (let o in records) {
                if (records[o].levelName == list[parseInt(e.target.id.substring(5))-1].name) {
                    document.getElementById("info"+e.target.id.substring(5)).innerHTML+="<a href='"+records[o].videoUrl+"'>"+records[o].user+" - "+records[o].percentage+"%</a>";
                }
            }
            alreadyFilled.push(e.target.id.substring(5));
        }
        } else {
            $("#info"+e.target.id.substring(5)).css("display", "none");
        }
    })
    var info = document.createElement("div");
    info.id = "info"+String(realId);
    info.innerHTML = [
        "<h2>#"+realId+" - "+currentLevel.name+"</h2><hr>",
        "<p><strong>Creator(s): </strong>"+currentLevel.creators+"</p>",
        "<p><strong>Verifier: </strong>"+currentLevel.verifier+"</p>",
        "<p><strong>Publisher: </strong>"+currentLevel.publisher+"</p>",
        "<p><strong>Difficulty: </strong>"+currentLevel.difficulty+"</p>",
        "<p><strong>Level ID: </strong>"+currentLevel.id+"</p>",
        "<p><strong>List points: </strong>"+currentLevel.points+"</p>"
    ].join("");
    document.getElementById("levels").appendChild(info);
    $("#info"+realId).css("display", "none");
    $("#info"+realId).attr("class", "card card-body");
}
var stats = getStats();
function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}
stats.sort(dynamicSort("points"));
stats.reverse();
for (let i in stats) {
    var playerStats = stats[i];
    var playerId = parseInt(i)+1;
    var player = document.createElement("button");
    player.id = "player"+playerStats.username;
    player.innerHTML = "#"+playerId+" - "+playerStats.username+" ("+playerStats.points+")";
    document.getElementById("statsviewer").appendChild(player);
    $("#player"+playerStats.username).attr("class", "btn btn-dark wide");
}
$("#statsviewer").hide();
