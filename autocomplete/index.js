let tags = [
    "Delhi",
    "Ahmedabad",
    "Punjab",
    "Uttar Pradesh",
    "Himachal Pradesh",
    "Karnataka",
    "Kerala",
    "Maharashtra",
    "Gujrat",
    "Rajasthan",
    "Bihar",
    "Tamil Nadu",
    "Haryana"
];

/* list of available options */
let n = tags.length; // length of datalist tags

function ac(value) {

    // Setting datalist empty at the start 
    // of function. If we skip this step, 
    // same name will be repeated
    document.getElementById('datalist').innerHTML = '';
    
    // Input query length
    l = value.length;
    
    for (let i = 0; i < n; i++) {

        // Comparing if input string is existing
        // in tags[i] string
        if (((tags[i].toLowerCase()).indexOf(
        value.toLowerCase())) > -1) {
            let node = document.createElement("option");
            let val = document.createTextNode(tags[i]);
            node.appendChild(val);

            // Creating and appending new elements
            // in data list
            document.getElementById("datalist")
                .appendChild(node);
        }
    }
}