<?php

function json_response($code = 200, $response = null){
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    header('Access-Control-Max-Age: 1728000');
    header('Content-Type: application/json; charset=utf-8');

    return json_encode(array(
        'status' => $code < 300, // success or not?
        'message' => json_encode($response)
    ));
}

$files = glob("../gallery/*");

echo json_response(200, $files);

?>
