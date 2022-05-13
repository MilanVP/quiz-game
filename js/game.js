/*
    Name:           Milankumar Vinubhai Prajapati, 000813839
    Date created:   December 8, 2020
    Description:    This js file will display and hide different
                    parts of html file depending on which
                    page user should be seeing. It will also
                    get the input from html page and output
                    the result back to the html page where required.
*/

window.addEventListener("load", function () {

    console.log("form loaded");
    let submit_button = document.getElementById("submit_button");

    submit_button.addEventListener("click", function (event) {

        username = document.forms.my_form.name.value;
        age = document.forms.my_form.age.value;
        color = document.forms.my_form.colorname.value;

        console.log("Your name is " + username);
        console.log("Your age is " + age);
        console.log("Your color is " + color);

        event.preventDefault();
        console.log("submit clicked");

        let form_container = document.getElementById("form_container");
        form_container.style.display = "none";

        let game_container = document.getElementById("game_container");
        game_container.style.display = "block";

        let end_container = document.getElementById("end_container");
        end_container.style.display = "none";

        document.body.style.backgroundColor = color;
        document.body.style.color = "white";

        e = document.getElementById("welcome");
        e.innerHTML = "Welcome to the game " + username + "!";

        array = [
            [1, 2, 3, 4, 5],
            ["SpaceX, an American aerospace manufacturer was founded in 2002 by which entrepreneur?",
                "Which Apollo 11 crew member did not walk on the moon?",
                "An Astronomical Unit is the mean distance between the center of what two objects?",
                "Named for the fleet-footed Roman messenger god, which planet has the shortest orbit around the sun?",
                "The Venera space probes, sent to gather information about Venus, were developed by which country?"
            ],
            [
                ["Elon Musk", "Dave Calhoun", "Guillaume Faury"],
                ["Neil Armstrong", "Michael Collins", "Buzz Aldrin"],
                ["The Sun and Earth", "The Earth and Moon", "The Solar System and Alpha Centauri"],
                ["Mercury", "Venus", "Mars"],
                ["US", "The Soviet Union (USSR)", "China"]
            ],
            [1, 2, 1, 1, 2]
        ];

        j = 0;
        k = 0;
        i = 0;
        score = 0;

        //option 1
        e = document.getElementById("question_no_1");
        e.innerHTML = "Question " + array[i][j];

        e = document.getElementById("question_1");
        e.innerHTML = array[i + 1][j];

        e = document.getElementById("option_11");
        e.innerHTML = array[i + 2][j][k];

        e = document.getElementById("option_12");
        e.innerHTML = array[i + 2][j][k + 1];

        e = document.getElementById("option_13");
        e.innerHTML = array[i + 2][j][k + 2];

        j++;
        //option 2
        e = document.getElementById("question_no_2");
        e.innerHTML = "Question " + array[i][j];

        e = document.getElementById("question_2");
        e.innerHTML = array[i + 1][j];

        e = document.getElementById("option_21");
        e.innerHTML = array[i + 2][j][k];

        e = document.getElementById("option_22");
        e.innerHTML = array[i + 2][j][k + 1];

        e = document.getElementById("option_23");
        e.innerHTML = array[i + 2][j][k + 2];


        j++;
        //option 3
        e = document.getElementById("question_no_3");
        e.innerHTML = "Question " + array[i][j];

        e = document.getElementById("question_3");
        e.innerHTML = array[i + 1][j];

        e = document.getElementById("option_31");
        e.innerHTML = array[i + 2][j][k];

        e = document.getElementById("option_32");
        e.innerHTML = array[i + 2][j][k + 1];

        e = document.getElementById("option_33");
        e.innerHTML = array[i + 2][j][k + 2];

        j++;
        //option 4
        e = document.getElementById("question_no_4");
        e.innerHTML = "Question " + array[i][j];

        e = document.getElementById("question_4");
        e.innerHTML = array[i + 1][j];

        e = document.getElementById("option_41");
        e.innerHTML = array[i + 2][j][k];

        e = document.getElementById("option_42");
        e.innerHTML = array[i + 2][j][k + 1];

        e = document.getElementById("option_43");
        e.innerHTML = array[i + 2][j][k + 2];

        j++;
        //option 5
        e = document.getElementById("question_no_5");
        e.innerHTML = "Question " + array[i][j];

        e = document.getElementById("question_5");
        e.innerHTML = array[i + 1][j];

        e = document.getElementById("option_51");
        e.innerHTML = array[i + 2][j][k];

        e = document.getElementById("option_52");
        e.innerHTML = array[i + 2][j][k + 1];

        e = document.getElementById("option_53");
        e.innerHTML = array[i + 2][j][k + 2];



    });

    let next_button = document.getElementById("next_button");

    next_button.addEventListener("click", function (event) {

        event.preventDefault();

        form_container.style.display = "none";
        game_container.style.display = "none";
        end_container.style.display = "block";

        if (document.getElementById('o11').checked) {
            score++;
        }
        if (document.getElementById('o22').checked) {
            score++;
        }
        if (document.getElementById('o31').checked) {
            score++;
        }
        if (document.getElementById('o41').checked) {
            score++;
        }
        if (document.getElementById('o52').checked) {
            score++;
        }

        e = document.getElementById("score");
        e.innerHTML = score;

    });

    /*
    1. user clicks start
    2. start disapper forever
    3. show question #, question, options, next button, check answer, manipulate score
    4. next clicked ->
    5. step 3 and 4 until no next quesion left
    6. show score
    */

});