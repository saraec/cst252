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

            var twoEl = document.createElement("button");
            twoEl.innerHTML = "Stay in the Matrix";
            twoEl.style.backgroundColor = "blue";
            twoEl.style.color = "white";
            twoEl.style.margin = "7px";
            outputEl.appendChild(twoEl);
