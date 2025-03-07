const stories = {
    'colin-oslyn': {
        title: "Colin Oslyn: A Cold Case",
        img: "promo-material/Cover-Art-Colin-Oslyn.jpg",
        summary: `Colin Oslyn was a famous abstract painter, and had many known and loving fans complimenting and praising his work. Unfortunately, he was found dead in his art room, a stab wound to the chest.<br><br>
Detective Brighton (female) is told to take on the case, with her good friend James in the forensics team, and faces multiple red herrings throughout the case.<br><br>
However, there's one small piece of evidence that the killer forgot to get rid of, but Brighton kept discarding it, since more and more evidence came through pointing other suspects.<br><br>
Will Brighton finally find out who the culprit of this disturbing case really is? Or will she be stuck in a wormhole with no way out?
        `,
        genre: "Murder Mystery",
        teasers: {
            teaser1: {
                teaserTitle: "Teaser 1 - Old Cover Art",
                teaserDate: "18th February 2025",
                teaserText: `The first piece of cover art for this story, before a friend of mine offered to redesign it.
                <img id="oldCover" src="promo-material/Old-Cover-Art-Colin-Oslyn.jpg" width="300">`
            },
            teaser2: {
                teaserTitle: "Teaser 2 - Chapter 1 Preview",
                teaserDate: "24th February 2025",
                teaserText: `"Detective!" Jamie called to Detective Brighton from her office door. Brighton was finishing up her report on a previous case report.<br><br>
Startled, Brighton shot her head up to look at Jamie, with a confused expression. "Yes?"<br><br>
"I need to speak with you in my office, now." Jamie spoke in a stern tone of voice, leaning on the door frame with her arms crossed. Brighton let out a huff in annoyance, and stood up from her seat, tucking her chair in neatly.<br><br>
She made her way towards Jamie's office, as Jamie entered the office and took her seat. Brighton followed shortly after, entering the office with a small smile, and taking a seat right opposite Jamie's office chair. "You called, boss?"<br><br>
"You got a new case." Jamie spoke in slight monotone, handing Brighton a yellow post it note with something written on it. "Here's the address."<br><br>
The woman took the paper and looked at it briefly, then looked back up at Jamie with a confused look.<br><br>
"I thought I had a case report to be completed by tomorrow morning. What do I do about that?"<br><br>
Jamie let out a sigh, leaning back on her chair slightly and crossing her legs. "How much have you written for it currently?"<br><br>
"4 pages. It's almost complete, so I could quickly fini-"<br><br>
"No, just put it on my desk and I'll find someone else who isn't too busy to finish it off. New case means you drop everything and focus on it, regardless."<br><br>
"But boss-"<br><br>
"You heard me, Brighton. Get investigating, now."<br><br>
Brighton let out a sigh. "Alright." She spoke, with a hint of annoyance in her tone of voice. She stood up from the seat, tucking in the chair, nodded at Jamie, before exiting her office and closing the door behind her.<br><br>
She made her way to her desk to grab her jacket. While doing so, she looked over to James' office to see if he was there. No sign of him, so he must have been called earlier about this new case, or working on a different one. Who knows?<br><br>
She confidently walked down the spiral staircase, and straight to the front door. Once outside, she took a moment to breathe in the fresh air, before heading to her car.
                `
            }
        }
    }
}

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

document.querySelector("title").textContent = `${stories[id]['title']} - Jessica Davies`;

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
    teaserText.style.backgroundColor = "rgb(4,88,136)";
    teaserText.style.padding = "20px";

    update.appendChild(teaserTitle);
    update.appendChild(teaserDate);
    update.appendChild(teaserText);
    document.getElementById('updates').appendChild(update);
}