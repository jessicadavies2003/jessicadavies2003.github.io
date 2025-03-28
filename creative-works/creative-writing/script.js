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
        teasers: {
            teaser1: {
                teaserTitle: "Update 2",
                teaserDate: "26th March 2025",
                teaserText: `Chapter 1 and the prologue are now officially completed! The old chapter 1 had to be rewritten to fit the new narrative.<br><br>
The draft for chapter 2 is complete! Just needs some tweaking, and it will be finished!<br><br>
Chapter 3 onwards still needs their drafts completed, but overall, the story is fitting really well!<br><br>
Thank you all for your patience!<br><br>
13 pages, 5700+ words, 6 Chapters`
            },
            teaser2: {
                teaserTitle: "Teaser 2 - Project Reveal Video",
                teaserDate: "13th March 2025",
                teaserText: `The first video that reveals the project by providing a small teaser from the prologue.<br><br>
<video id="projectReveal" controls>
    <source src="promo-material/colin-oslyn-project-reveal.mp4">
</video><br><br>
View the YT channel for updates & trailers <a href="https://www.youtube.com/@JessicaDavies-2003">here</a>.<br><br>
Updates will continue here as well, until the full story is avaliable on Wattpad.`
            },
            teaser3: {
                teaserTitle: "Update 1",
                teaserDate: "10th March 2025",
                teaserText: `Chapter 1 is now fully completed, after the teaser was reworked and finalised!<br><br>
Prologue draft is now complete, a bit of tweaking and it should be complete.<br><br>
Chapter 2 onwards still needs their drafts completed, but overall, looking good so far! Very excited when the story is complete!<br><br>
It has been confirmed that there will be a YouTube audiobook released after the story is completed and uploaded to Wattpad. VAs may be needed, this will be decided after the completion of the story.<br><br>
12 pages, 5000+ words`
            },
            teaser4: {
                teaserTitle: "Teaser 1 - Chapter 1 Draft Preview",
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
            },
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