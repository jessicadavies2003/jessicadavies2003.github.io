const elementsFuncsObj = {
    createDropdown: {
        'desc': "Creates and returns a dropdown element, and adds it to the top of the DOM.",
        'params': {
            dropdownName: "The name of the dropdown element.",
            options: "A list of strings representing dropdown options. Values will be lowercase.",
            label: "The string to label the dropdown menu.",
            parent: "ID of the parent element where the dropdown should be added. Default: 'body'."
        },
        example: "const cars = createDropdown('cars', ['Volkswagen', 'Kia', 'Mercedes-Benz'], 'Select your favourite car brand.');"
    },
    createForm: {
        'desc': "Creates and returns a form element, and adds it to the DOM.",
        'params': {
            title: "The title of the form element, which will be an <h1> tag.",
            actionPage: "An external page where form data should be sent.",
            inputData: "An object containing input data. Keys are labels, values are input types.",
            parent: "ID of the parent element where the form should be added. Default: 'body'."
        },
        example: "const signInForm = createForm('action.php', { 'Username': 'text', 'Password': 'password' });"
    },
    createNavBar: {
        'desc': "Creates and returns a nav element with default styling for a navigation bar.",
        'params': {
            links: "An object where keys are link names and values are file paths.",
            bgColour: "A list of three values (R, G, B) for the background color.",
            textColour: "Text color (default: 'black').",
            resetCSS: "Boolean to determine if cssReset() should be called (default: true)."
        },
        example: "const myNav = createNavBar({'Home': '', 'About': ''}, [66, 106, 190]);"
    },
    createTable: {
        'desc': "Creates and returns a table element, and adds it to the DOM.",
        'params': {
            headers: "A list containing the table headers.",
            rowData: "A list of lists, where each list represents a row of the table.",
            hasBorders: "Boolean determining if the table should have borders (default: true).",
            parent: "ID of the parent element where the table should be added. Default: 'body'."
        },
        example: "const myTable = createTable(['header1', 'header2'], [['item1-header1', 'item1-header2'], ['item2-header1', 'item2-header2']]);"
    },
    createVideoEl: {
        'desc': "Creates and returns a video element with optional controls.",
        'params': {
            filepath: "The filepath of the video.",
            controls: "Boolean to determine if video controls should be enabled (default: true).",
            parentID: "ID of the parent element where the video should be added. Default: 'body'."
        },
        example: "const websiteDesign1 = createVideoEl('media/web_design_1.mp3');"
    }
};

let funcsKeys = Object.keys(elementsFuncsObj);
funcsKeys.forEach((key) => {
    // grab data
    const currFuncName = elementsFuncsObj[key];
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
    document.getElementById("elements").appendChild(funcWrapper);
})