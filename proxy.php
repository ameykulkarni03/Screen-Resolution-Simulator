<?php
if (isset($_GET['url'])) {
    $url = urldecode($_GET['url']);
    $html = file_get_contents($url);
    header("Content-Type: text/html");
    echo $html;
} else {
    header("HTTP/1.1 400 Bad Request");
}
?>
