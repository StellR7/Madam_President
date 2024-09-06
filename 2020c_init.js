e = campaignTrail_temp

campaignTrail_temp.election_json = [
    {
        "model": "campaign_trail.election",
        "pk": 20,
        "fields": {
            "year": 2016,
            "display_year": "Madam President",
            "summary": "<p style= \"font-size: 94%; font-family:helvetica; margin:5px;\">America has entered the 21st century down to the wire. It chose you over Trump, and liberalism over hate. Sadly, that is not the end of it. A radicalized GOP waits for the chance to take a cut of your conquests. Just one state away from winning, Trump gathers his strength, hoping for you to slip, and allow him to take your place.</p><p style= \"font-size: 94%; font-family:helvetica; margin:5px;\">Globally, all illusions of an ‘end of history’ are shattered. Emergent powers threaten to uproot Washington's dominance, and it seems as though violence is the order of the day.</p><b style= \"font-size: 94%; font-family:helvetica; margin:5px;\">For all the uncertainty, the pomp, and hatred, many want nothing more than to blame just one woman.</b>",
            "image_url": "https://raw.githubusercontent.com/StellR7/Hillary/main/clintonElectionSummary.jpg?token=GHSAT0AAAAAACXEU4DHXN4LPBNE64SAYWPQZW3PQAA",
            "winning_electoral_vote_number": 270,
            "advisor_url": "",
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
            "party": "The Grand Old Party",
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
            "description_as_running_mate": "<p style= \"font-size: 94%; font-family:helvetica; margin:5px;\">Timothy M. Kaine is a man so remarkably unremarkable you’d hardly think he’s one bad day away from becoming leader of the free world.</p><p style= \"font-size: 94%; font-family:helvetica; margin:5px;\">You picked Timothy M. Kaine as a so-called ‘Governing Partner’. He is not someone many people think of in their day-to-day life. In any case, it’s clear you will not be able to lose an inch of her support if you want to successfully defend your newly gained position, so perhaps the Vice President-elect will have to either learn to pull his weight on the trail, or take his leave.</p>",
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
            132,
            137,
            138
        ]
    }
]

campaignTrail_temp.opponents_weighted_json = [
    {
        "election": 20,
        "candidates": [
            132,
            137,
            138
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
corrr = `<h2 style = \"font-family: sharp-df5f60e4-5b83-4ccd-96c9-d3dd45a4aa57-minimal, sharp-df5f60e4-5b83-4ccd-96c9-d3dd45a4aa57-full; font-weight: bold;\">MADAM PRESIDENT</h2><p style= \"font-size: 114%; font-family:helvetica; margin:5px; color:white;\"><em>` + selQuote + `</em></p>`;

// Everything past here is all the fancy shit

//  this will be used later maybe for changing the clinton/kaine banner >>> document.getElementsById("campaign_sign").innerHTML += "<img height='200' width='200' alt='testImage' src='https://i.imgur.com/CKxWLJU.gif'>";

nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#020070";

nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#171482";

document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

$("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

$(".container")[0].style.backgroundColor = "#18448f";

document.getElementById("header").src = "https://i.imgur.com/uONHG5h.jpeg";

document.body.background = "https://i.imgur.com/MBIluiE.jpeg";

document.head.innerHTML += "<style>#results_container {color:#000000;} .inner_window_w_desc {background-color:#1c2b54 !important;}</style>";

document.getElementById("inner_window_1").style = `background-color: #0f1f5e; color: #d8dde6;`

document.getElementById("inner_window_1").children[1].innerHTML = `<p>Welcome, Madam President.</p><p>A History mod following Hillary Clinton's election in 2016.</p><p>As the 45th President of the United States, you will determine policy from inauguration, up until November 2020.</p><p>Your decisions will affect the country, both nationally and in individual states.</p><p>Your decisions will ultimately determine the opposing candidate you face in the 2020 election.</p><p>The game contains Choose Your Own Adventure elements, secret endings and achievements.</p><p>Have Fun!</p>`;

document.getElementById('game_start').innerHTML = 'Take Office';

document.styleSheets[0].insertRule("#credits{ color: #d8dde6; }", 0);

document.styleSheets[0].insertRule('#election_year_form h3 { color: #d8dde6; }', 0);

document.styleSheets[0].insertRule('#candidate_form h3 { color: #d8dde6; }', 0);

document.styleSheets[0].insertRule('#running_mate_form h3 { color: #d8dde6; }', 0);

document.styleSheets[0].insertRule('#game_options h3 { color: #d8dde6; }', 0);

document.styleSheets[0].insertRule('#difficulty_level h3 { color: #d8dde6; }', 0);

document.styleSheets[0].insertRule(".inner_window_question{ margin:1em 0 .7em 0.5em !important;padding-top: 0.3em !important;}", 0);

document.styleSheets[0].insertRule("#candidate_description_window { color: #ffffff; background-color: #111d2b }", 0);

document.styleSheets[0].insertRule("#running_mate_description_window { color: #ffffff; background-color: #111d2b }", 0);

document.styleSheets[0].insertRule("#election_description_window { background-color: #0e0e2e }", 0);

document.styleSheets[0].insertRule("#opponent_selection_description_window { color: #ffffff; background-color: #111d2b }", 0);

document.styleSheets[0].insertRule(".inner_inner_window { color: #ffffff; background-color: #111d2b }", 0);

document.styleSheets[0].insertRule('#election_summary { color: #ffffff;}', 0);

document.styleSheets[0].insertRule('.inner_window_question h3 {margin: 0 1em .5em;border: double;border-color: #c9c9c9;background-color: #1e324a}', 0);

document.styleSheets[0].insertRule('.inner_window_question {margin: 0 1em .5em;border: double;border-color: #c9c9c9;background-color: #1e324a}', 0);

document.querySelector('.campaign_trail_start_emphasis').style.backgroundColor = '#111d2b';

document.styleSheets[0].insertRule("#progress_bar { color: #ffffff; background-color: #111d2b }", 0);

document.styleSheets[0].insertRule(`#map_container { background-image: url("https://i.imgur.com/9kGlMsT.jpeg")`, 0);

document.styleSheets[0].insertRule(".inner_window_sign_display { color: #ffffff; background-color: #111d2b }", 0);

//#endcode
