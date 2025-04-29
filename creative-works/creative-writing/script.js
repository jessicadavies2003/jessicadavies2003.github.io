const stories = {
    'colin-oslyn': {
        title: "Colin Oslyn: A Cold Case",
        img: "promo-material/Cover-Art-Colin-Oslyn.jpg",
        summary: `From the mind of Jessica Davies, comes the cruel and disturbing case of a famous painter, Colin Oslyn, who was found dead by this mysterious woman, Stephanie. Join Detective Brighton and her good friend James Smith in figuring out this confusing mystery.<br><br>
Colin Oslyn was a famous abstract painter, and had many known and loving fans complimenting and praising his work. Unfortunately, he was found dead in his art room, a stab wound to the chest.<br><br>
Detective Brighton (female) is told to take on the case, with her good friend James in the forensics team, and faces multiple red herrings throughout the case.<br><br>
Will Brighton finally find out who the culprit of this disturbing case really is? Or will she be stuck in a wormhole with no way out?
        `,
        genre: "Murder Mystery",
        bg: "linear-gradient(90deg,rgba(0, 0, 0, 1) 0%, rgba(117, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%)",
        teasers: {
            teaser1: {
                teaserTitle: "Teaser 1 - Chapter 1 Preview",
                teaserDate: "29th April 2025",
                teaserText: `<i>Finally, it's been too long of a day at work today, and I can finally head home for the weekend. Had about 10 calls in the office, and was constantly either working on reports, or investigating cases ranging from thievery to murder. Don't forget the number of times I've been called to my boss' office for late night calls. It's a pain for detectives like me to be working late, just because most crimes are committed late at night, then someone just so happens to be around that area at the time to immediately dial 999.</i><br><br>
<i>Don't get me wrong, solving crimes can be satisfying once the true killer is revealed, and I do love my job occasionally. My boss can get really strict sometimes.</i><br><br>
<i>However, it's strange to admit, but having James and Milton at work today was quite nice, having them keep the mood light and joyful. They keep me sane throughout the chaos, and it's nice to have that.</i><br><br>
<i>Wait a moment... Usually my boss calls me around this time. No matter what time in the night a body is discovered, I still have to be awake and ready to discover it. Says the reason for this is so they can handle as many calls as possible. Yes it makes sense, so the person who was killed gets the justice they deserve, but all it does is strain us o-</i><br><br>
<b>*Ring ring*</b><br><br>
<b>*Ring ring*</b><br><br>
<i>Yep, there it is.</i><br><br>
Brighton looked down at her car's screen for a small moment, and let out a huff in annoyance seeing who it was, moving her eyes back onto the road ahead.<br><br>
<b>Jamie (Boss) is calling</b><br><br>
On the steering wheel were multiple buttons that performed various actions. One of which, on the left-hand side, was a phone icon, indicating the answer button. She tapped it, started off with a simple "Hello?", and immediately heard her boss from the other size, sounding rather irritated.<br><br>
"Detective!" Jamie shot the word down the phone.<br><br>
Trying not to sound too annoyed by her boss, she replied with a simple "Yes?"<br><br>
"You got a new case." Jamie spoke in slight monotone.<br><br>
"Already?" Brighton asked, startled. "Didn't I already have a case report to be finished by tomorrow?"<br><br>
"You did." Jamie nodded from her side. "However, new case means you drop everything and focus on it, regardless. Especially this new case. It's a special one."<br><br>
"Special?" Brighton tilted her head.<br><br>
"You'll see when you know about the victim. Now drop that previous report."<br><br>
"Boss-"<br><br>
Jamie stood up and slammed her hands on the desk, eyeing the phone.<br><br>
"You heard me, Brighton. Get to that address and start investigating. Now."<br><br>
Brighton let out a sigh. "Alright." She spoke, with a hint of annoyance in her tone of voice. She stood up from the seat, tucking in the chair, nodded at Jamie, before hanging up the phone and letting out a sigh.<br><br>
<i>Now you can understand the kind of boss I have to deal with.</i><br><br>
She typed it into her smart car's maps application, got the directions ready and tapped "Start". She started the vehicle's engine, and immediately heard the female navigation's text to speech voice:<br><br>
"In 300 yards, turn left onto the main road, then continue straight for 2 miles."<br><br>
Brighton smiled, and made her way to the address.`
            },
            teaser2: {
                teaserTitle: "Promotional Material #1",
                teaserDate: "23th March 2025",
                teaserText: `<img src="promo-material/colin-oslyn-promo-1.png" class="imgs">`
            }
        }
    }
}

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

document.querySelector("title").textContent = `${stories[id]['title']} - Jessica Davies`;
document.body.style.background = stories[id]['bg'];

document.getElementById('bookTitle').textContent = stories[id]['title'];
document.getElementById('coverImg').src = stories[id]['img'];
document.getElementById('summary').innerHTML = stories[id]['summary'];
document.getElementById('genre').textContent = `Genre: ${stories[id]['genre']}`;

const teasers = stories[id]['teasers'];
const len = Object.keys(teasers).length;
for (let i = 0; i < len; i++) {
    const currentID = `teaser${i+1}`;
    const current = teasers[currentID];
    let update = document.createElement("div");

    let teaserTitle = document.createElement("h2");
    teaserTitle.textContent = current['teaserTitle'];
    let teaserDate = document.createElement("i");
    teaserDate.textContent = current['teaserDate'];
    let teaserText = document.createElement("p");
    teaserText.innerHTML = current['teaserText'];
    teaserText.style.backgroundColor = "rgba(4,88,136,0.5)";
    teaserText.style.padding = "20px";

    update.appendChild(teaserTitle);
    update.appendChild(teaserDate);
    update.appendChild(teaserText);
    document.getElementById('updates').appendChild(update);
}