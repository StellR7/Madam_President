e = campaignTrail_temp

campaignTrail_temp.election_json = [
    {
        "model": "campaign_trail.election",
        "pk": 20,
        "fields": {
            "year": 2016,
            "display_year": "Madam President",
            "summary": "<p style= \"font-size: 94%; font-family:helvetica; margin:5px;\">America has entered the 21st century down to the wire. It chose you over Trump, proving the old political establishment is not quite dead. Sadly, that is not the end of it. A radicalized GOP waits for the chance to take a cut of your conquests. Just one state away from winning last time, many in the field can smell blood. After all, if you almost lost to that unelectable joke, evicting you should be a freebie.</p><p style= \"font-size: 94%; font-family:helvetica; margin:5px;\">Globally, all illusions of an ‘end of history’ are shattered. Emergent powers threaten to uproot Washington's dominance, and it seems as though violence is the order of the day.</p><p style= \"font-size: 94%; font-family:helvetica; margin:5px; font-weight: bold;\">For all the uncertainty, the pomp, and hatred, many want nothing more than to blame just one woman.</p>",
            "image_url": "https://i.imgur.com/HXD3M7D.jpeg",
            "winning_electoral_vote_number": 270,
            "advisor_url": "https://i.imgur.com/BI7DnsZ.png",
            "recommended_reading": "<ul>\n<p><a href=https://www.chicagotribune.com/opinion/editorials/ct-edit-chicago-tribune-biden-endorsement-20200925-lnyxsb5qvrftnjjmj3rnzj33jy-story.html>Our Case For Joe Biden</a></p>\n<p><a href=https://nationalinterest.org/feature/case-trump-166808>The Case For Trump</a></p>\n<p><a href=https://www.npr.org/2020/11/18/935730100/how-biden-won-ramping-up-the-base-and-expanding-margins-in-the-suburbs>How Biden Won: Ramping Up The Base And Expanding Margins In The Suburbs</a></p>\n<p><a href=https://www.prospectmagazine.co.uk/politics/donald-trump-joe-biden-us-election-almost-win-votes-concede>Why Did Trump Almost Win?</a></p>\n<p><a href=https://www.hoover.org/research/no-evidence-voter-fraud-guide-statistical-claims-about-2020-election>No Evidence For Voter Fraud: A Guide To Statistical Claims About The 2020 Election</a></p>\n</ul>",
            "has_visits": 1,
            "no_electoral_majority_image": "../static/images/2012-no-majority.jpg"
        }
    }
]

campaignTrail_temp.temp_election_list = [
    {
        "id": 20,
        "year": 2016,
        "is_premium": 0,
        "display_year": "Madam President"
    }
]

campaignTrail_temp.credits = "the Madam President Team"

campaignTrail_temp.global_parameter_json = [
    {
        "model": "campaign_trail.global_parameter",
        "pk": 1,
        "fields": {
            "vote_variable": 1.125,
            "max_swing": 0.12,
            "start_point": 0.94,
            "candidate_issue_weight": 10,
            "running_mate_issue_weight": 3,
            "issue_stance_1_max": -0.71,
            "issue_stance_2_max": -0.3,
            "issue_stance_3_max": -0.125,
            "issue_stance_4_max": 0.125,
            "issue_stance_5_max": 0.3,
            "issue_stance_6_max": 0.71,
            "global_variance": 0.01,
            "state_variance": 0.005,
            "question_count": 35,
            "default_map_color_hex": "#C9C9C9",
            "no_state_map_color_hex": "#999999"
        }
    }
]

campaignTrail_temp.candidate_json = [
    {
        "model": "campaign_trail.candidate",
        "pk": 131,
        "fields": {
            "first_name": "Hillary",
            "last_name": "Clinton",
            "election": 20,
            "party": "The Democracy",
            "state": "New York",
            "priority": 1,
            "description": "<p style= \"font-size: 94%; font-family:helvetica; margin:5px;\">Safe to say, your political career has hardly been stellar.</p><p style= \"font-size: 94%; font-family:helvetica; margin:5px;\">Again and again you failed despite the fact that it <i>should</i> have been easy. Losing what should have been a coronation primary to a freshman Senator in 2008. It was only a matter of time until your inauguration though. A matter of time until he stepped down for you to take his place.</p><p style= \"font-size: 94%; font-family:helvetica; margin:5px;\">You managed to rebound by becoming Secretary of State; just in time to get an ambassador killed in a country most Americans couldn’t point out on a map. Then, you nearly lost the primary to a self-proclaimed <i>socialist</i>. Finally, at the finish line, you had a red mark etched into your legacy, barely scraping by with 2,000 votes against a racist, sexist, tax dodging, reality show host.</p><p style= \"font-size: 94%; font-family:helvetica; margin:5px;\">Seen by the left as a neoliberal shill and by the right as a marxist witch, the task of navigating a world, nation, and party that are each growing out of control seems herculean. But maybe, just this once, you can actually pull off a win without the odds being comically favorable to you.</p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "https://i.imgur.com/LHGLkG9.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 132,
        "fields": {
            "first_name": "Republicans",
            "last_name": "Party",
            "election": 20,
            "party": "The Republic",
            "state": "New York",
            "priority": 1,
            "description": "<p style= \"font-size: 94%; font-family:helvetica; margin:5px;\">Hillary R. Clinton’s political career has hardly been stellar.</p><p style= \"font-size: 94%; font-family:helvetica; margin:5px;\">First rising to prominence by riding her husband’s popularity into the White House, she took her newly found high profile and crashed it into the ground by losing what should have been a coronation primary to a freshman Senator in 2008. She managed to rebound by becoming State Secretary just in time to get an ambassador killed in a country most Americans couldn’t point out on a map, and went on to almost lose again, this time to a self-proclaimed socialist in the primary and an open tax-dodger and sexist known for doing reality TV in the general.</p><p style= \"font-size: 94%; font-family:helvetica; margin:5px;\">Seen by the left as a neoliberal shill and by the right as a marxist witch, the task of navigating a world that is growing out of control, or even keeping her own party in line for the next four years seems, at best, herculean. But maybe, just this once, she can actually pull off a victory without the odds being comically favorable to her?</p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://i.imgur.com/LHGLkG9.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 137,
        "fields": {
            "first_name": "Tim",
            "last_name": "Kaine",
            "election": 20,
            "party": "The Democracy",
            "state": "Virginia",
            "priority": 1,
            "description": "Windows.",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://i.imgur.com/SOnaMyB.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "<p style= \"font-size: 94%; font-family:helvetica; margin:5px;\">Timothy M. Kaine is a man so remarkably unremarkable you’d hardly think he’s one bad day away from becoming leader of the free world.</p><p style= \"font-size: 94%; font-family:helvetica; margin:5px;\">You picked Timothy M. Kaine as a so-called ‘Governing Partner’, not as an electrifying campaigner, and though you didn’t say it out loud, you wanted to keep those uncomfortable with a woman president in line. With nearly all discussion of him revolving around you, it’s cliche to say that Tim Kaine is not someone many people think of in their day-to-day life.</p><p style= \"font-size: 94%; font-family:helvetica; margin:5px;\">It’s clear you will not be able to lose an inch of her support if you want to successfully defend your newly gained position, so perhaps the Vice President-elect will have to either learn to pull his weight on the trail, or take his leave.</p>",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
      "model": "campaign_trail.candidate",
      "pk": 138,
      "fields": {
          "first_name": "Republican",
          "last_name": "Committee",
          "election": 20,
          "party": "The Republic",
          "state": "Virginia",
          "priority": 1,
          "description": "Windows.",
          "color_hex": "#0000FF",
          "secondary_color_hex": null,
          "is_active": 0,
          "image_url": "https://i.imgur.com/SOnaMyB.png",
          "electoral_victory_message": "This guy wins!",
          "electoral_loss_message": "This guy loses!",
          "no_electoral_majority_message": "We all win?",
          "description_as_running_mate": "<p style= \"font-size: 94%; font-family:helvetica; margin:5px;\">Timothy M. Kaine is a man so remarkably unremarkable you’d hardly think he’s one bad day away from becoming leader of the free world.</p><p style= \"font-size: 94%; font-family:helvetica; margin:5px;\">You picked Timothy M. Kaine as a so-called ‘Governing Partner’, not as an electrifying campaigner, and though you didn’t say it out loud, you wanted to keep those uncomfortable with a woman president in line. With nearly all discussion of him revolving around you, it’s cliche to say that Tim Kaine is not someone many people think of in their day-to-day life.</p><p style= \"font-size: 94%; font-family:helvetica; margin:5px;\">It’s clear you will not be able to lose an inch of her support if you want to successfully defend your newly gained position, so perhaps the Vice President-elect will have to either learn to pull his weight on the trail, or take his leave.</p>",
          "candidate_score": 1,
          "running_mate": true
      }
  }
]

campaignTrail_temp.running_mate_json = [
    {
        "model": "campaign_trail.running_mate",
        "pk": 109261,
        "fields": {
            "candidate": 131,
            "running_mate": 137
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 109262,
        "fields": {
            "candidate": 132,
            "running_mate": 138
        }
    }
]

campaignTrail_temp.opponents_default_json = [
    {
        "election": 20,
        "candidates": [
            131,
            132
        ]
    }
]

campaignTrail_temp.opponents_weighted_json = [
    {
        "election": 20,
        "candidates": [
            131,
            132
        ]
    }
]

jet_data = {
    "headerColor": "#020070",
    "windowColor": "#253641",
    "containerColor": "#f57fae",
    "innerWindowColor": "#61878f",
    "bannerImageUrl": "https://jetsimon.com/public/placeholderbanner.png",
    "backgroundImageUrl": "https://i.imgur.com/24KPjVk.jpeg",
    "endingTextColor": "#000000",
    "customQuote": "\"It's impossible to know what happens in the fog of war.\" - Hillary Clinton",
    "gameTitle": "HILLARY"
}

$("#music_player")[0].children[0].style.display="none"
$("#music_player")[0].children[1].style.display="none"

document.getElementById("modLoadReveal").style.display="none"
document.getElementById("modloaddiv").style.display="none"

musicBox = document.getElementById("music_player")
musicBox.style.display=""

var trackSel;
e = campaignTrail_temp
e.selectedSoundtrack = 0

toTime = (seconds) => {
  var date = new Date(null);
  date.setSeconds(seconds);
  return date.toISOString().substr(11, 8);
}

generateTime = () => {
    // Get the audio element
    var audio = document.getElementById("campaigntrailmusic");

    timeTracker = document.createElement("div");
    timeTracker.style = `
      text-align:right;
      border-style:dashed;
      border-width:4px;
      height:130px;
      width:180px;
      background-color:#223b61;
      float:left;
      padding: 10px;
      
    `
    $("#trackSelParent")[0].prepend(timeTracker);
    $("#trackSelParent")[0].prepend(document.createElement("br"));

    // Create a new element to display the current position of the audio
    var positionDisplay = document.createElement("gg");
    positionDisplay.id = "position-display";
    positionDisplay.style.color = "#ffffff";
    positionDisplay.style.backgroundColor = "#223b61";

    // Create a new slider element to change the time
    var timeSlider = document.createElement("input");
    timeSlider.type = "range";
    timeSlider.min = 0;
    timeSlider.max = 1;
    timeSlider.step = 0.001;
    timeSlider.value = 0;
    timeSlider.style.width = "180px";
    timeSlider.id = "time-slider";

    var pausePlay = document.createElement("button");
    pausePlay.id = "position-display";
    pausePlay.innerHTML = "<b>Pause</b>"
    pausePlay.style.width = "100%";
    pausePlay.style.color = "#ffffff";
    pausePlay.style.backgroundColor = "#223b61";

    pausePlay.addEventListener("click", event => {
      event.preventDefault();
      updatePositionDisplay();
      let audio = document.getElementById("campaigntrailmusic");
      if (audio.paused) {
        audio.play();
        event.target.innerHTML = "<b>Pause</b>";
        return;
      }
      audio.pause();
      event.target.innerHTML = "<b>Play</b>";
      return;
    })

    var volumeLabel = document.createElement("gg");
    volumeLabel.id = "volume-label";
    volumeLabel.innerHTML = "<br><b>Volume: </b>"
    volumeLabel.style.color = "#ffffff";
    volumeLabel.style.backgroundColor = "#223b61";


    var volumeSlider = document.createElement("input");
    volumeSlider.type = "range";
    volumeSlider.min = 0;
    volumeSlider.max = 1;
    volumeSlider.step = 0.001;
    volumeSlider.value = 0;
    volumeSlider.style.width = "180px";
    volumeSlider.id = "volume-slider";
    volumeSlider.style.color = "#ffffff";
    volumeSlider.style.backgroundColor = "#223b61";


    volumeSlider.value = audio.volume;

    timeTracker.appendChild(pausePlay);
    timeTracker.appendChild(document.createElement("br"));
    timeTracker.appendChild(document.createElement("br"));
    timeTracker.appendChild(positionDisplay);
    timeTracker.appendChild(timeSlider);
    timeTracker.appendChild(volumeLabel);
    timeTracker.appendChild(volumeSlider);

    updatePositionDisplay();

    function updatePositionDisplay() {
      positionDisplay.innerHTML = "<b>Time:</b> " + toTime(audio.currentTime) + "<br>";
      timeSlider.value = audio.duration ? audio.currentTime / audio.duration : 0;
    }

    // Function to change the time of the audio
    function changeTime() {
      positionDisplay.innerHTML = "<b>Time:</b> " + toTime(audio.currentTime) + "<br>";
      audio.currentTime = timeSlider.value * audio.duration;
      positionDisplay.style.color = "#ffffff";
      positionDisplay.style.backgroundColor = "#223b61";
    }

    updateVolume = event => {
      audio.volume = event.target.value;
    }
    
    // Update the position display and slider every second
    setInterval(updatePositionDisplay, 1000);

    // Listen for changes to the time slider and change the time of the audio
    timeSlider.addEventListener("input", changeTime);
    volumeSlider.addEventListener("input", updateVolume)
}

function newMusicPlayer() {
  trackSel = document.createElement("div");
  trackSel.id = "trackSelParent"

  let z = `<br><br><br><br><br><br><br><br><br><br><div id='trackSel' style="text-align:left; border-color: ;border-style:dashed;border-width:4px;overflow-y: scroll;overflow-x: hidden;height:130px; width:180px;background-color: #223b61 ;float:left;">`
  z += `<b><select id='selectSoundtrack'><option value='`+soundtracks[e.selectedSoundtrack].name+`'>`+soundtracks[e.selectedSoundtrack].name+"</option>"

  
  for (i in soundtracks) {
    if (soundtracks[e.selectedSoundtrack] != soundtracks[i]) {
      z += `<option value='`+soundtracks[i].name+`'>`+soundtracks[i].name+`</option>`
    }
  }
  z += `</select></b><br><br>`
  // <label><input type="radio" name="option" value="option1">Option 1</label><br>
  for (i in soundtracks[e.selectedSoundtrack].tracklist) {
    let a = soundtracks[e.selectedSoundtrack].tracklist[i]
    let b = `<label><input class="trackSelector" type="radio" name="trackSelector" value="`+i+`">`+a.name+`</label><br>`
    z += b
  }
  z += "</div><br><br>"
  trackSel.innerHTML = z

  // select correct song

  musicBox.appendChild(trackSel);
  Array.from(document.getElementById("trackSel").children).filter(f=>{
    return f.tagName == "LABEL"
  }).map(f=>f.children[0])[0].checked = true

  // set soundtrack changer

  soundtrackSelector = document.getElementById("selectSoundtrack")
  soundtrackSelector.onchange = function() {
    for (i in soundtracks) {
      if (soundtracks[i].name == soundtrackSelector.value) {
        e.selectedSoundtrack = i
        break
      }
    }
    document.getElementById("trackSelParent").remove()
    newMusicPlayer()
  }

  var matches = document.querySelectorAll('.trackSelector');

  for (match in matches) {
    matches[match].onchange = function() {
      audio = $("#campaigntrailmusic")[0];
      audio.src = soundtracks[e.selectedSoundtrack].tracklist[this.value].url
      audio.currentTime = 0
    }
  }

  musicBox.children[2].loop = false
  musicBox.children[2].src = soundtracks[e.selectedSoundtrack].tracklist[0].url

  musicBox.children[2].onended = function() {
    console.log("next track")
    let selected = Number(document.querySelector('input[name="trackSelector"]:checked').value);
    let newSel = clamp(selected+1, soundtracks[e.selectedSoundtrack].tracklist.length-1, 0)
    let buttons = Array.from(document.getElementById("trackSel").children).filter(f=>{
      return f.tagName == "LABEL"
    }).map(f=>f.children[0])
    //let selectedIndex = buttons.map(f=>f.children[0]).map(f=>f.checked)
    buttons[newSel].click()
  }

  for (w = 0; w < 7; w++) {
    document.getElementById("trackSelParent").appendChild(document.createElement("br"))
  }
  
  generateTime();
}

clamp = function(a, max, min, overflow=true) {
  if (overflow) {
    return a > max ? min : a < min ? max : a;
  }
  return a > max ? max : a < min ? min : a;
}


// Track list

var soundtracks = {
  0: {
    name: "Liberal Daydream Radio",
    tracklist: [
      {
        "name": "Devil Town",
        "url": "https://files.catbox.moe/461m6a.mp3"
      },
      {
        "name": "Femininomenon",
        "url": "https://files.catbox.moe/5tox89.mp3"
      },
      {
        "name": "Duvet",
        "url": "https://files.catbox.moe/tri4m5.mp3"
      },
      {
        "name": "What Doesnt Kill You",
        "url": "https://files.catbox.moe/l3stmd.mp3"
      },
      {
        "name": "Keepin' the Light On",
        "url": "https://files.catbox.moe/yehqkt.mp3"
      },
      {
        "name": "1950",
        "url": "https://files.catbox.moe/dgbcpt.mp3"
      },
      {
        "name": "Primadonna",
        "url": "https://files.catbox.moe/fkzmsk.mp3"
      }
    ]
  }
}

// Set up new music player

newMusicPlayer()

//#startcode

quotes = [
    `“If I want to knock a story off the front page, I just change my hairstyle.” - Hillary Clinton`,
    `“Probably my worst quality is that I get very passionate about what I think is right. ” - Hillary Clinton`,
    `“Life is too short to dwell on what might have been.” - Hillary Clinton`,
    `“In this world and the world of tomorrow, we must go forward together or not at all.” - Hillary Clinton`,
    `“Joan of Arc said a lot of interesting things before they burned her at the stake.” - Hillary Clinton`,
    `"It is impossible to know what happens in the fog of war." - Hillary Clinton`,
    `“Everything that happens in America happens in New York.” - Hillary Clinton`
    ]
selQuote = quotes[Math.round(Math.random()*(quotes.length - 1))]

corrr = `
  <h2 style="font-style: normal;">
    <img src="https://i.imgur.com/M0jz65q.png" alt="Madam President" style="margin-top: 5px;">
  </h2>
</div>`;












document.styleSheets[0].insertRule(".game_header h2 {font-family: 'SharpUnity'; background-color: '#2354b5'; line-height: normal; font-style: normal}", 0);

nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#2354b5";

nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "rgb(23, 52, 94)";

document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

$("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

$(".container")[0].style.backgroundColor = "#960000";

document.getElementById("header").src = "https://i.imgur.com/uONHG5h.jpeg";

document.body.background = "https://i.imgur.com/rlO9noF.jpeg";

document.styleSheets[0].insertRule(".base { background-repeat: no-repeat; }", 0);

document.head.innerHTML += "<style>#results_container {color:#000000;} .inner_window_w_desc {background-color: #17345e !important}</style>";

document.getElementById("inner_window_1").style = `background-color: #012257; color: #d8dde6; text-align: center;`

document.getElementById("inner_window_1").children[1].innerHTML = `<p>Welcome, Madam President.</p><p>Hillary Clinton, for all of her faults, has been elected President of the United States</p><p>Mrs. 45 will be tasked with dealing with various crises within and without this great country</p><p>Across America, every action she takes will affect the soul of the American people</p><p>The character of the Democratic and Republican party is an extention of the character of America</p><p>With secret endings, secret candidates, and various forms of acheivements and CYOA, Hillary has many paths to take the American story</p><p>It's time to see if America is truly stronger together</p>`;

document.getElementById('game_start').innerHTML = 'Take Office';

$("#inner_window_1 h3").text("Are you ready to bridge the path forward for America?");

document.styleSheets[0].insertRule("#campaign_sign { background-color: #0077c5; }", 0);

document.styleSheets[0].insertRule("#credits { color: #d8dde6; }", 0);

document.styleSheets[0].insertRule('#election_year_form h3 { color: #d8dde6; }', 0);

document.styleSheets[0].insertRule('#candidate_form h3 { color: #d8dde6; }', 0);

document.styleSheets[0].insertRule('#running_mate_form h3 { color: #d8dde6; }', 0);

document.styleSheets[0].insertRule('#game_options h3 { color: #d8dde6; }', 0);

document.styleSheets[0].insertRule('#difficulty_level h3 { color: #d8dde6; }', 0);

document.styleSheets[0].insertRule("#candidate_description_window { color: #ffffff; background-color: #012257; }", 0);

document.styleSheets[0].insertRule("#running_mate_description_window { color: #ffffff; background-color: #012257 }", 0);

document.styleSheets[0].insertRule("#election_description_window { background-color: #012257 }", 0);

document.styleSheets[0].insertRule("#opponent_selection_description_window { color: #ffffff; background-color: #012257 }", 0);

document.styleSheets[0].insertRule(".inner_inner_window { color: #ffffff;}", 0);

document.styleSheets[0].insertRule('#election_summary { color: #ffffff;}', 0);

document.styleSheets[0].insertRule('.inner_window_question h3 {margin: 6px 1em .5em;border: double;border-color: #ffffff;background-color: #0f2c59}', 0);

document.styleSheets[0].insertRule('.inner_window_question {margin: 6px 1em .5em;border: double;border-color: #ffffff;background-color: #012257; height: 300px}', 0);

document.querySelector('.campaign_trail_start_emphasis').style.backgroundColor = '#0f2c59';

document.styleSheets[0].insertRule("#progress_bar { color: #ffffff; background-color: #111d2b }", 0);

document.styleSheets[0].insertRule(`#overall_result { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#overall_result_container { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#overall_result h3 { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#state_info { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#state_info h3 { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#state_info p { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#state_info ul { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#pvswitcher { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#ev_est { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#resume_questions_button { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#margin_switcher { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#AdvisorButton { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#game_start { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#election_id_button { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#election_id { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#candidate_id { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#candidate_id_button { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#candidate_id_back { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#running_mate_id { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#running_mate_id_back { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#running_mate_id_button { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#game_type_id { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#difficulty_level_id { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#opponent_selection_id_button { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#opponent_selection_id_back { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#answer_select_button { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#view_electoral_map { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#visit_window { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#election_night_window { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#map_footer i { color:#ffffff;)`, 0);

document.styleSheets[0].insertRule(`tr {color: white; background-color: #182144; border-color: blue; bgcolor: inherit)`, 0);

document.styleSheets[0].insertRule(`th {color: white; background-color: #182144; border-color: blue; bgcolor: inherit)`, 0);

document.styleSheets[0].insertRule(`#confirm_visit_button { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#no_visit_button { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`.final_menu_button { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#ok_button { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#no_feedback_button { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#visit_content h3 { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#final_result_button { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#overlay_result_button { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#state_result { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#state_result h3 { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#state_result p { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#themePicker { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#trackSel label { color: #ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#trackSel { background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#selectSoundtrack { color:#ffffff ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#map_container { background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#menu_container { background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`.inner_window_sign_display { background-color: #111d2b;}`, 0);

document.styleSheets[0].insertRule(`#game_window { height: 650px;}`, 0);

document.styleSheets[0].insertRule(`#campaign_sign { background-position: center ; width: 270 ;margin-top: -20px; text-indent: -9999px; color: #0077c5; background-repeat: no-repeat; background-image: url("https://i.imgur.com/jF6O8Wj.png"); background-size: 190px; height: 110px; color: #ffffff; border-color: #1c244a; }`, 0);

document.styleSheets[0].insertRule(`.visit_text {font-weight: 700; font-size: 1.1em; text-indent: -9999999px;}`, 0);

//#endcode
