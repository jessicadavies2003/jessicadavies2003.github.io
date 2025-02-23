const stories = {
    'colin-oslyn': {
        title: "Colin Oslyn: A Cold Case",
        img: "promo-material/Cover-Art-Colin-Oslyn.jpg",
        summary: `
        Colin Oslyn, 35, was a famous abstract painter, who unfortunately died due to a stab wound to the chest. He died in his art room after getting into a fight with the killer.<br><br>
        Detective Brighton (female) is told to take on the case, with her good friend James in the forensics team, and faces multiple red herrings throughout the case.
        <br><br>However, there's one small piece of evidence that the killer forgot to get rid of, but Brighton kept discarding it, since more and more evidence came through pointing to person A being the culprit.<br><br>
        Eventually, after facing many dead ends fitting the pieces together, she finally goes back to that small piece of evidence, asks James to run it through some tests, and finally figures out the real culprit.
        `,
        genre: "Murder Mystery",
        teasers: {
            teaser1: {
                teaserTitle: "Teaser 1",
                teaserText: `hello world this is a test`
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
    console.log(currentID);
    const current = teasers[currentID];
    let update = document.createElement("div");

    let teaserTitle = document.createElement("h2");
    teaserTitle.textContent = current['teaserTitle'];
    let teaserText = document.createElement("p");
    teaserText.textContent = current['teaserText'];

    update.appendChild(teaserTitle);
    update.appendChild(teaserText);
    document.getElementById('updates').appendChild(update);
}