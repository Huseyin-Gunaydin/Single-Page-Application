<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Events</title>

    <script>
        {/* // window load wartet, bis alles geladen wurde. Auch externe Ressourcen wie Bilder
        // window.addEventListener("load", function () {
        // const form = document.querySelector("form");
        // console.log(form);
        // }); */}

        // document DOMContentLoaded wartet nur darauf, dass das DOM bereit ist
        document.addEventListener("DOMContentLoaded", function () {
            const form = document.querySelector("form");
            const ul = document.querySelector("ul");

            // Wir können auf das Absenden hören, indem wir das Event "submit" abfangen
            form.addEventListener("submit", function (event) {
                // Um das Standardverhalten des Browsers zu verhindern,
                // rufen wir die Methode event.preventDefault() auf.
                // So verhindern wir bspw. das Neuladen der Seite.
                event.preventDefault();

                // Wir könnten das Eingabefeld über eine Klasse, ID oder den Tag ansprechen.
                // const input = document.querySelector("input.new-task");
                // console.log(input);
                // Allerdings ist es hier einfacher, direkt über unser Formular zu gehen.
                // Dafür müssen die Eingabefelder nur das Attribut name haben.
                // So können wir über den Namen das Element auswählen.
                // Sowohl in form selbst (form.task) als auch in form.elements (form.elements.task)
                // ist das Eingabeformular über den Namen erreichbar.
                // Den Wert lesen wir entsprechend mit .value aus.
                const task = form.elements.task.value;

                // Für den neuen Eintrag benötigen wir ein neues Listenelement,
                // welches wir mit document.createElement() erzeugen.
                const newTask = document.createElement("li");
                // In dieses schreiben wir dann die Eingabe...
                newTask.innerText = task;
                // ...und hängen es an die Aufgabenliste an.
                ul.appendChild(newTask);

                // Damit wir danach mit der nächsten Eingabe weitermachen können,
                // wollen wir das Formular noch zurücksetzen.
                // Hierzu können wir entweder jedes Element leeren:
                // form.elements.task.value = "";
                // Eleganter ist aber die Nutzung der Methode form.reset().
                // Diese funktioniert genauso wie <input type="reset">
                // und setzt das Formular auf den Ursprungszustand zurück.
                form.reset();
            });
        });
    </script>
</head>

<body>
    <h1>Meine Aufgaben</h1>

    <ul>
        <li>Aufgabe 1</li>
        <li>Aufgabe 2</li>
        <li>Aufgabe 3</li>
    </ul>

    <form>
        <label>
            Aufgabe
            <input type="text" placeholder="Neue Aufgabe..." name="task">
        </label>
        <input type="submit" value="Speichern" name="save">
        <input type="reset" value="Zurücksetzen" name="reset-button">
    </form>
</body>

</html>