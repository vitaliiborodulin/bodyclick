<?php $str = file_get_contents('people.txt') ?: 0 ?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Форма для регистрации</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/awards.css">
</head>

<body class="content-ru awards">
    <div class="awards__wrapper">
        <form method="POST">

            <h1 class="awards__title">Форма для регистрации</h1>
            <p class="awards__subtitle">На бесплатное мероприятие</p>
            <p class="awards__text">Осталось <b><?php echo $str; ?></b> мест</p>
            <p class="awards__input-wrapper">
                <input type="text" name="name" placeholder="Имя" required>
            </p>
            <p class="awards__input-wrapper">
                <input type="tel" name="phone" placeholder="Телефон" required>
            </p>
            <p class="awards__input-wrapper">
                <input type="email" name="email" placeholder="Email" required>
            </p>
            <p class="awards__submit-wrapper">
                <button type="submit">Отправить</button>
            </p>
            <div class="err"></div>
        </form>
    </div>

    <script>
        const form = document.querySelector('.awards__wrapper form');
        const loaderBox = document.querySelector('.awards__submit-wrapper');
        const errorBox = document.querySelector('.err');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            loaderBox.innerHTML = '<img src="img/spinner.gif" alt="spinner" width="20" height="20">';

            let formData = new FormData(form);

            fetch('send.php', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    if (data.res) {
                        form.innerHTML = 'Спасибо за регистрацию!';
                    } else {
                        errorBox.innerHTML = data.error;
                        loaderBox.innerHTML = '<button type="submit">Отправить</button>';
                    }
                })
        });
    </script>
</body>

</html>