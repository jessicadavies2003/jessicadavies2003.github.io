const displaysFuncsObj = {
    createFlexbox: {
        'desc': "Creates and returns a flexbox container.",
        'params': {
            flexDirection: "The flex direction of the container ('row' or 'column').",
            textCentered: "Boolean to determine if text should be centered (default: true).",
            hideOverflow: "Boolean to determine if overflowing elements should be hidden (default: true).",
            elemCentered: "Boolean to determine if elements should be centered (default: true).",
            parent: "ID of the parent element where the flexbox should be added. Default: 'body'."
        },
        example: "const myFlexbox = createFlexbox('column', true, true, true, 'flexboxWrapper');"
    },
    createGrid: {
        'desc': "Creates and returns a grid container.",
        'params': {
            numBoxes: "Number of boxes to be created inside the grid.",
            boxColour: "A list of three values (R, G, B) for the background color of each box.",
            gridTemplateArea: "A list representing grid-template-area rows. Box IDs follow 'box{i}'.",
            gap: "The gap between grid elements.",
            width: "Width of each box.",
            height: "Height of each box.",
            parent: "ID of the parent element where the grid should be added. Default: 'body'."
        },
        example: "const myGrid = createGrid(3, [0, 128, 0], [['box1', 'box1', 'box1', 'box3'], ['box2', 'box2', 'box2', 'box3']], '10px', '100px', '100px', 'gridWrapper');"
    }
};

funcsKeys = Object.keys(displaysFuncsObj);
funcsKeys.forEach((key) => {
    // grab data
    const currFuncName = displaysFuncsObj[key];
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
    document.getElementById("displays").appendChild(funcWrapper);
})