const animationFuncsObj = {
    rotateAnimation: {
        'desc': 'Adds a rotation animation to a given HTML element.',
        'params': {
            'elementID': 'ID of the HTML element where the effect will be applied, any type of HTML element will suffice.',
            'animationName': 'The name of the animation. Defaulted to `rotateAnimation`.',
            'duration': 'How long the element will rotate for',
            'degrees': 'How much the element will rotate in degrees.',
            'iterationCount': 'How many times the animation should be repeated. `Infinity` counts as a number.',
            'timingFunction': 'the time an animation uses to change from one set of CSS styles to another.'
        },
        'example': 'rotateAnimation("mySquare", "5s", 360, Infinity, "linear");'
    },
    slideInText: {
        'desc': 'Adds a slide-in animation to the inner text of a given HTML element.',
        'params': {
            'elementID': 'ID of the HTML element where the effect will be applied, any type of HTML element will suffice.',
            'direction': 'The direction that the element will slide from.',
            'duration': 'How long the element will slide for.',
            'timingFunction': 'the time an animation uses to change from one set of CSS styles to another.',
            'animationName': 'The name of the animation. Defaulted to `slidein`.'
        },
        'example': 'slideInText("myText", "left", "2s", "linear");'
    },
    typingAnimation: {
        'desc': 'Adds a typing animation to the inner text of a given HTML element.',
        'params': {
            'elementID': 'ID of the HTML element where the effect will be applied, any type of HTML element will suffice.',
            'fontSize': "The size of the text's font.",
            'bgColour': 'The background colour of either the parent element, or website `body`.',
            'isLooped': 'Determines if the typing animation will loop continuously.',
            'typingMiliseconds': 'Time (in miliseconds) between each character being "typed".'
        }, 
        'example': 'typingAnimation("myText", "50px", [255, 255, 255], true, 250);'
    }
};

funcsKeys = Object.keys(animationFuncsObj);
funcsKeys.forEach((key) => {
    // grab data
    const currFuncName = animationFuncsObj[key];
    const desc = currFuncName['desc']; // str
    const params = currFuncName['params']; // obj
    const paramKeys = Object.keys(params);
    const example = currFuncName['example']; // str

    // create elements
    const breakEl = document.createElement("br");
    const funcWrapper = document.createElement("div");
    funcWrapper.className = "func-wrapper";
    const code = document.createElement("code");
    code.innerHTML += `<b>${key}</b>(${Array.from([...paramKeys])})`;

    const funcDesc = document.createElement("div");
    funcDesc.className = "funcDesc";
    const paragraphDesc = document.createElement("p");
    paragraphDesc.textContent = desc;
    funcDesc.appendChild(paragraphDesc);

    paramKeys.forEach((param) => {
        const paramDiv = document.createElement("div");
        const paramP = document.createElement("p");
        const paramCode = document.createElement("code");
        paramDiv.className = "param";
        paramCode.innerText = param;
        paramP.innerText = params[param];

        paramDiv.appendChild(paramCode);
        paramDiv.appendChild(paramP);
        paramDiv.appendChild(breakEl);

        funcDesc.appendChild(paramDiv);
    })

    const funcExample = document.createElement("div");
    const header = document.createElement("h3");
    header.textContent = "Example";
    const codeP = document.createElement("p");
    codeP.id = "code";
    codeP.textContent = example;

    funcExample.appendChild(header);
    funcExample.appendChild(codeP);

    // add everything to `funcWrapper`
    funcWrapper.appendChild(code);
    funcWrapper.appendChild(funcDesc);
    funcWrapper.appendChild(funcExample);

    // add to DOM
    document.getElementById("animations").appendChild(funcWrapper);
})