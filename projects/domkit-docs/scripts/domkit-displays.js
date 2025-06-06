const displaysFuncsObj = {
    createFlexbox: {
        'desc': "Creates and returns a flexbox container.",
        'params': {
            flexDirection: "The flex direction of the container ('row' or 'column').",
            textCentered: "Boolean to determine if text should be centered (default: true).",
            hideOverflow: "Boolean to determine if overflowing elements should be hidden (default: true).",
            elemCentered: "Boolean to determine if elements should be centered (default: true).",
            parentID: "ID of the parent element where the flexbox should be added. Default: 'body'."
        },
        example: "const myFlexbox = createFlexbox('column', true, true, true, 'flexboxWrapper');"
    },
    createGrid: {
        'desc': 'Creates and returns a grid container.',
        'params': {
            'boxColour': 'A list containing three values: red, green, blue. For the background colour of each box element.',
            'gridTemplateArea': 'A list, where each list inside the main list represents a row for the grid-template-area value. An `i`th box will have an ID of `box{i}`.',
            'gap': 'Sets the distance between all box elements in the grid.',
            'width': 'Width of each box that will be created and stored in the main DIV.',
            'height': 'Height of each box that will be created and stored in the main DIV.',
            'boxRadius': 'Specifies the radius for each box in the grid. Defaulted to `0%`.',
            'centered': 'Determines whether or not the grid should be centered. Defaulted to `true`',
            'parentID': 'ID of the parent element where the element should be added to. Defaulted to `body`.'
        },
        'example': `const myGrid = createGrid([0, 128, 0], [ ["box1", "box1", "box1"], ["box2", "box3", "box3"], ["box2", "box3", "box3"] ], "10px", "100px", "100px", "20%");`
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