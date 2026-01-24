const stories = {
    'colin-oslyn': {
        title: "Colin Oslyn: A Shocking Case",
        img: "promo-material/Cover-Art-Colin-Oslyn.png",
        summary: `From the mind of Jessica Davies, comes the cruel and shocking case of the famous abstract painter, Colin Oslyn. Found dead... With little evidence pointing to any leads.<br><br>
Colin was loved by all. He was supported by many people; his family, friends, boss, and his loyal fanbase. What could have happened for him to deserve this?<br><br>
Enter Brighton, the amazing detective, who is told to take on this special case with her two good friends in the crime squad, Jacob Smith (the beloved forensics scientist) and Milton Lee (the incredible researcher).<br><br>
What will they uncover? Who is the true murderer of this case? And why is this case so... shocking?
        `,
        genre: "Murder Mystery",
        bg: "linear-gradient(90deg,rgba(0, 0, 0, 1) 0%, rgba(117, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%)",
        teasers: {
            // recent updates go first, earlier ones go last
            teaser1: {
                teaserTitle: "Book Milestone #1 - 30k Words!",
                teaserDate: "30th November 2025",
                teaserText: `I just hit over 30,000 words on my Colin Oslyn: A Shocking Case book, so I wanted to write a little post here about it!<br><br>
Current number of chapters: 13<br><br>
Prologue, Chapters 1-7 & Chapter 9 are almost fully written. (with the prologue being the closest to being finished)<br><br>
Chapter 8 has just begun work.<br><br>
The last 3 chapters are in their draft state.<br><br>
The beginning and ending have already been written, a bit of the middle bit is also done, but now needs to be connected to the ending.<br><br>
Thank you to everyone who has followed along with this journey so far! I'm excited to share more news about it in the near future.<br><br>
With love, Jessica<br><br>
<img class="imgs" src="promo-material/colin-oslyn-manuscript-cover-30k.png" alt="Manuscript cover for Colin Oslyn: A Shocking case, with the handwritten text '30k words! (so far)'." width="30%">`
            },
            teaser2: {
                teaserTitle: "Teaser #1 - Prologue",
                teaserDate: "28th October 2025",
                teaserText: `The very first page of the entire manuscript. Keep in mind that this can (and will most likely) change.<br><br>
<img class="imgs" src="promo-material/first-page-manuscript.png" alt="The very first page of the entire manuscript" width="40%">
`
            },
            teaser3: {
                teaserTitle: "[WORK IN PROGRESS] Sketches of the Cast!",
                teaserDate: "28th October 2025",
                teaserText: `A handful of the cast from Colin Oslyn: A Shocking Case. Including Detective Brighton, Colin Oslyn, and others!<br><br>
<img class="imgs" src="promo-material/wip-character-sketches-colin-oslyn.jpg" alt="Sketches of the cast" width="50%">`
            },
            teaser4: {
                teaserTitle: "Promotional Illustration #2",
                teaserDate: "26th July 2025",
                teaserText: `An illustration from chapter 1 of Colin Oslyn: A Shocking Case. A mobile phone call from Jamie Donaldson to Detective Brighton.<br><br>
<img class="imgs" src="promo-material/colin-oslyn-illustration-2.png" alt="a mobile phone call from Jamie Donaldson to Detective Brighton" width="60%">`
            },
            teaser5: {
                teaserTitle: "Promotional Illustration #1",
                teaserDate: "2nd June 2025",
                teaserText: `An illustration from chapter 2 of Colin Oslyn: A Shocking Case. Investigation time with Detective Brighton and Jacob Smith.<br><br>
<img class="imgs" src="promo-material/colin-oslyn-illustration-1.png" alt="investigation time with Detective Brighton and Jacob Smith" width="60%">`
            },
            teaser6: {
                teaserTitle: "New Cover Image",
                teaserDate: "17th May 2025",
                teaserText: `All credit for this image (apart from the pic of me) goes to my friend Callum Stook. Thank you mate!<br><br>
<img src="promo-material/Cover-Art-Colin-Oslyn.png" width="40%">`
            }
        }
    }
}

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

document.querySelector("title").textContent = `${stories[id]['title']} - Jessica Davies`;
document.body.style.background = stories[id]['bg'];

document.getElementById('bookTitle').textContent = `${stories[id]['title']} - Promotion`;
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