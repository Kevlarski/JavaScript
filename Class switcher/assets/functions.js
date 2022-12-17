function change() {
    //variables for operation
    var classOption = document.getElementById("classes");
    var name = classOption.options[classOption.selectedIndex].text;
    var caption = document.getElementById("caption");
    var spiel = document.getElementById("spiel");

    //check for previous entries, clears if present
    if (caption.textContent.length > 0) {
        caption.textContent = "";
        spiel.textContent = "";
    }

    //ensure the holder option isn't chosen before making request to API
    if (name != "Choose a class to learn more!") {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7e6527911dmsh252b5a628dd7a53p1a7193jsn81f9154e7cca',
                'X-RapidAPI-Host': 'dungeons-and-dragon-5e.p.rapidapi.com'
            }
        };
        var url = 'https://dungeons-and-dragon-5e.p.rapidapi.com/class/' + name; //append DND class name to url

        fetch(url, options)
            .then(response => response.json())
            .then(response => {
                response = response['data']; //Change focus inside holder object
                var descriptionData = response['description'];
                const className = document.createTextNode(response['name']);
                const spielText = document.createTextNode(descriptionData['text']);

                switchPic(className.data); //See following function

                spiel.appendChild(spielText);
                caption.appendChild(className);
                console.log(response);
            })
            .catch(err => console.error(err));
    }
    else { return null; }
}

//Changes the placeholder image with the class appropriate pic
function switchPic(className) {
    switch (className) {
        case "Barbarian":
            var pic = document.getElementById('pic');
            pic.setAttribute("src",
                "assets/barbarian_smol.jpg");
            break;

        case "Bard":
            var pic = document.getElementById('pic');
            pic.setAttribute("src",
                "assets/bard_smol.png");
            break;

        case "Cleric":
            var pic = document.getElementById('pic');
            pic.setAttribute("src",
                "assets/cleric_smol.jpg");
            break;

        case "Druid":
            var pic = document.getElementById('pic');
            pic.setAttribute("src",
                "assets/druid_smol.png");
            break;

        case "Fighter":
            var pic = document.getElementById('pic');
            pic.setAttribute("src",
                "assets/fighter_smol.png");
            break;

        case "Monk":
            var pic = document.getElementById('pic');
            pic.setAttribute("src",
                "assets/monk_smol.png");
            break;

        case "Paladin":
            var pic = document.getElementById('pic');
            pic.setAttribute("src",
                "assets/paladin_smol.png");
            break;

        case "Ranger":
            var pic = document.getElementById('pic');
            pic.setAttribute("src",
                "assets/ranger_smol.png");
            break;

        case "Rogue":
            var pic = document.getElementById('pic');
            pic.setAttribute("src",
                "assets/rogue_smol.jpg");
            break;

        case "Sorcerer":
            var pic = document.getElementById('pic');
            pic.setAttribute("src",
                "assets/sorcerer_smol.png");
            break;

        case "Warlock":
            var pic = document.getElementById('pic');
            pic.setAttribute("src",
                "assets/warlock_smol.png");
            break;

        case "Wizard":
            var pic = document.getElementById('pic');
            pic.setAttribute("src",
                "assets/wizard_smol.png");
            break;
    }
}