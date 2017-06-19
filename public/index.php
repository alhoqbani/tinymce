<?php
function dd(...$data) {
    die(dump($data));
}
if (isset($_POST['submit'])) {

    dd($_POST);

    

}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/style.css">

    <script src="./js/tinymce/tinymce.js"></script>
</head>
<body>
<div class="container">
    <div class="row col-md-8 col-md-offset-2">
        <form action="index.php" method="POST">
            <h1>Hello, world!</h1>
            <textarea id="mytinymce" name="tinymce">Hello, World!</textarea>
            <input type="submit" class="btn btn-success btn-block" name="submit">
        </form>
    </div>
</div>
<hr>
<hr>
    <div class="row col-md-8 col-md-offset-2">
        <form action="index.php" method="POST" enctype="multipart/form-data">
            <h1>Image</h1>
            <textarea id="tinymce" name="tinymce">Hello, World!</textarea>
            <input type="submit" class="btn btn-success btn-block" name="submit">
        </form>
    </div>

<hr>
<hr>
    <div class="row col-md-8 col-md-offset-2">
        <form action="index.php" method="POST" enctype="multipart/form-data">
            <h1>Image</h1>
            <textarea id="editor" name="tinymce">Hello, World!</textarea>
            <input type="submit" class="btn btn-success btn-block" name="submit">
        </form>
    </div>
</div>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
        integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
        crossorigin="anonymous"></script>
<script src="./js/script.js"></script>
</body>
</html>