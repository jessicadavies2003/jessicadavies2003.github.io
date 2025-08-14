let styleFuncsObj = {
    addBorder: {'desc': 'Adds a customised border to a HTML element.', 'params': {'element': 'The element that the border will be applied to.', 'thickness': 'Determines the thickness of the border.', 'borderType': 'One of the following: [`solid`, `dotted`, `double`, `groovy`]', 'colour': 'A list that contains RGB value for the desired colour.', 'borderPadding': 'Hiw much padding to be added to the border.'}, 'example': 'addBorder(element, "2px", "solid", [128, 0, 0], "10px");'},
    'centerEl': {
        'desc': 'Uses flexbox to center a given element.',
        'params': {
            'element': 'The HTML element to be centered.'
        },
        'example': 'centerEl(element);'
    },
    centerText: {'desc': 'Centers the inner text of a given element.', 'params': {'element': 'The element that contains text to be centered.', 'horizontalOrVertical': 'Determines if the text should be centered horizontally or vertically. Accepted values: `horizontal`, `vertical`. Default `horizontal`', 'sizeOfElement': 'The size of the element in pixels. Defaulted to `null`.'}, 'example': 'centerText(element, "vertical", "20px");'},
    'glassmorphism': {
        'desc': 'Adds a glassmorphism effect to a given element.',
        'params': {
            'wrapperEl': 'The HTML DIV element that includes the section element where the effect will be applied.',
            'section': 'The section element within `wrapperEl`. This will include things like a header, text, a CTA button, etc.',
            'bgImgPath': 'The path to the image that will be placed on the background.',
            'width': "The width of `section`. Defaulted to '50%', half of the width of its parent element.",
            'padding': "Determines the padding that'll get applied to all elements in `section`. Defaulted to '20px'.",
            'addShadow': "Determines if the glassmorphism effect should have a shadow effect. Defaulted to 'true'.",
            'blur': "The amount of blur in the backdrop filter. Defaulted to '5px'."
        },
        'example': 'glassmorphism(divEl, mySection, "media/cool-bg.jpg");'
    },
    'gradientBG': {
        'desc': 'Adds a background gradient to an element.',
        'params': {
            'element': 'The HTML element where the gradient will be applied, any type of HTML element will suffice.',
            'direction': 'The direction of the gradient in degrees.',
            'gradientType': 'Determines the gradient type to be used.',
            'colours': 'A list of lists, where each list contains RGB values for each colour, allowing more than 2 colours.',
            'textColour': "Colour of the text inside the element. Defaulted to 'black'."
        },
        'example': 'gradientBG(element, "90deg", "linear", [[128, 0, 0], [0, 128, 0], [0, 0, 128]], "white");'
    },
    'textGradient': {
        'desc': 'Adds a gradient to an element\'s text.',
        'params': {
            'element': 'The HTML element where the gradient will be applied, any type of HTML element will suffice.',
            'direction': 'The direction of the gradient in degrees.',
            'colours': 'A list of lists, where each list contains RGB values for each colour, allowing more than 2 colours.'
        },
        'example': 'textGradient(element, "90deg", [[128, 0, 0], [0, 128, 0], [0, 0, 128]]);'
    },
    setWebpageFont: {'desc': "Set's the font for the webpage.", 'params': {'familyName': 'The family name of the desired font. This must be in lowercase.'}, 'example': 'setWebpageFont("sans-serif");'},
    'shadowEffect': {
        'desc': 'Adds a shadow effect to a given element.',
        'params': {
            'element': 'The HTML element where the shadow effect will be applied, any type of HTML element will suffice.',
            'facing': 'How far the shadow should spread in pixels.',
            'spread': 'The direction that the element will face. Either top-left, bottom-left, top-right, bottom-right, or forward.',
            'colour': 'A list containing RGB values for the chosen colour.'
        },
        'example': 'shadowEffect(element, "top-right", "20px", [128, 0, 0]);'
    }
}

funcsKeys = Object.keys(styleFuncsObj);
funcsKeys.forEach((key) => {
    // grab data
    const currFuncName = styleFuncsObj[key];
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
    document.getElementById("styles").appendChild(funcWrapper);
})