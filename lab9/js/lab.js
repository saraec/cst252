/**
 * Author:    Sara Christensen
 * Created:   2.28.2022
 **/

            // find element & assign element variable
            var outputEl = document.getElementById("output");

            // create two new elements then append and style new elements

            var oneEl = document.createElement("button");
            oneEl.innerHTML = "Exit the Matrix";
            oneEl.style.backgroundColor = "red";
            oneEl.style.color = "white";
            oneEl.style.margin = "7px";
            outputEl.appendChild(oneEl);
            console.log("Button 1 " + oneEl);

            var twoEl = document.createElement("button");
            twoEl.innerHTML = "Stay in the Matrix";
            twoEl.style.backgroundColor = "blue";
            twoEl.style.color = "white";
            twoEl.style.margin = "7px";
            outputEl.appendChild(twoEl);
            console.log("Button 2 " + twoEl);

            // Task x https://www.w3schools.com/jsref/met_document_createattribute.asp
                function newAttribute() {
                // Create a class attribute:
                const att = document.createAttribute("style");

                // Set a value of the class attribute
                att.value = "color: green";

                // Add the class attribute to the first h1;
                document.getElementsByTagName("h1")[0].setAttributeNode(att);
                }

                console.log(newAttribute);
