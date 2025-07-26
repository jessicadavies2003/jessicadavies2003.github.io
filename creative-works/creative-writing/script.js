const stories = {
    'colin-oslyn': {
        title: "Colin Oslyn: A Shocking Case",
        img: "promo-material/Cover-Art-Colin-Oslyn.png",
        summary: `From the mind of Jessica Davies, comes the cruel and shocking case of a famous painter, Colin Oslyn, who was found dead with little to no evidence that point to any leads.<br><br>
Detective Brighton (female) is told to take on the case, with her good friend James Smith in the forensics team, and faces multiple red herrings throughout the case.<br><br>
Will Brighton finally find out who the culprit of this disturbing case really is? Or will she be stuck in a wormhole with no way out?
        `,
        genre: "Murder Mystery",
        bg: "linear-gradient(90deg,rgba(0, 0, 0, 1) 0%, rgba(117, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%)",
        teasers: {
            // recent updates go first, earlier ones go last
            teaser1: {
                teaserTitle: "Promotional Illustration #2",
                teaserDate: "26th July 2025",
                teaserText: `An illustration from chapter 1 of Colin Oslyn: A Shocking Case. A mobile phone call from Jamie Donaldson to Detective Brighton.<br><br>
<img class="imgs" src="promo-material/colin-oslyn-illustration-2.png" alt="a mobile phone call from Jamie Donaldson to Detective Brighton" width="60%">`
            },
            teaser2: {
                teaserTitle: "Promotional Illustration #1",
                teaserDate: "2nd June 2025",
                teaserText: `An illustration from chapter 2 of Colin Oslyn: A Shocking Case. Investigation time with Detective Brighton and Jacob Smith.<br><br>
<img class="imgs" src="promo-material/colin-oslyn-illustration-1.png" alt="investigation time with Detective Brighton and Jacob Smith" width="60%">`
            },
            teaser3: {
                teaserTitle: "New Cover Image",
                teaserDate: "17th May 2025",
                teaserText: `All credit for this image goes to my friend Callum Stook. Thank you mate!<br><br>
<img src="promo-material/Cover-Art-Colin-Oslyn.png" width="50%">`
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