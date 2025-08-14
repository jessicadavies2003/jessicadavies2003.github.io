const elementsFuncsObj = {
    createDropdown: {'desc': 'Creates and returns a dropdown element, and adds it to the DOM.', 'params': {'dropdownName': 'The name of the dropdown.', 'options': 'A list of strings, where each string represents an option for the dropdown menu.', 'label': 'The string to label the dropdown menu.', 'parentID': 'ID of the parent element where the table should be added to. Defaulted to `body`.'}, 'example': 'const cars = createDropdown("cars", ["Volkswagen", "Kia", "Mercedes-Benz"], "Select your favourite car brand.");'},
    createForm: {'desc': 'Creates and returns a form element, and adds it to the DOM.', 'params': {'title': 'The name of the form element.', 'inputData': 'An object containing input data for the form. Keys are the labels, and the values are the type of input.', 'gap': 'A value (in pixels) that determines the gap between all elements.', 'centerVertically': 'Boolean to determine if all input fields should be centered. Defaulted to `true`.', 'actionPage': 'An external page where the data should be sent. Usually a PHP page. Defaulted to `null`.', 'parent': 'ID of the parent element where the form should be added to. Defaulted to `body`.'}, 'example': 'const signInForm = createForm("Sign In", {"Username": "text", "Password": "password"}, "20px", {actionPage="action.php"});'},
    createNavBar: {
        'desc': 'Creates and returns a nav element, with default styling for a navigation bar, and adds it to the top of the DOM.',
        'params': {
            'links': 'An object containing data about each link of the nav bar, keys being the name and values being the filepaths for said name.',
            'bgColour': 'A list containing three values: red, green, blue. For the background colour of the navigation bar.',
            'paddingSize': 'Determines how much padding will be added to the nav bar. Defaulted to `15px`.',
            'textColour': 'A list containing three values: red, green, blue for the text colour. Defaulted to `[0, 0, 0]` for black.',
            'opacity': 'A number to determine how transparent the navigation bar should be. Defaulted to `1` for no transparency.',
            'resetCSS': 'Indicates whether or not the `cssReset()` function should be called. See the docs for more info. Defaulted to `true`.'
        },
        'example': "const myNav = createNavBar({'Home': '', 'About': 'about.html'}, [66, 106, 190], {resetCSS: false});"
    },
    createTable: {
        'desc': 'Creates and returns a table element, and adds it to the DOM.',
        'params': {
            'headers': 'A list containing the table headers.',
            'rowData': 'A list of lists, where each list represents a row of the table.',
            'hasBorders': 'Determines if the table should have borders. Defaulted to `true`.',
            'parentID': 'ID of the parent element where the table should be added to. Defaulted to `body`.'
        },
        'example': 'const myTable = createTable(["header1", "header2"], [["item1-header1", "item1-header2"], ["item2-header1", "item2-header2"]], {parentID: "body"});'
    },
    createVideoEl: {'desc': 'Creates and returns a video element, and adds it to the DOM.', 'params': {'filepath': 'The filepath of the video.', 'controls': 'Determines whether or not the user can control the video by playing, pausing, etc. Defaulted to `true`.', 'parent': 'ID of the parent element where the video should be added to. Defaulted to `body`.'}, 'example': 'const myVideo = createVideoEl("mediawebsite-design.mp3", {parentID: "myDiv"});'},
    createToggle: {
        'desc': 'Creates and returns a DIV element for a light and dark mode toggle switch, and adds it to the DOM.',
        'params': {
            'width': 'The width of the element. Height will be calculated using this value.',
            'toggleColour': 'A list containing three values: red, green, blue. For the background colour of the toggle.',
            'switchColour': 'A list containing three values: red, green, blue. For the colour of the toggle switch.',
            'themes': 'An object, where keys are `light` and `dark`, and values',
            parentID: 'ID of the parent element where the form should be added to. Defaulted to `body`.'
        },
        'example': 'const toggleWrapper = createToggle("100px", [128, 128, 128], [255, 255, 255], {\'light\': [[0, 0, 0], [255, 255, 255]], \'dark\': [[255, 255, 255], [37, 37, 38]]});'
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