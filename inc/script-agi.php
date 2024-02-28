<?php
session_start();
function fetchDataFromAPI($url, $itemCallback) {

    $cachedData = isset($_SESSION['smpland_api_cache']) ? json_decode($_SESSION['smpland_api_cache'], true) : null;
    if ($cachedData !== null && isset($cachedData[$url])) {
        return array("data" => $cachedData[$url], "fromCache" => true);
    }

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt($ch, CURLOPT_HEADER, FALSE);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');

    $response = curl_exec($ch);
    curl_close($ch);

    $xmlData = simplexml_load_string($response);

    if ($xmlData === false) {
        echo "Error parsing XML data.";
        return null;
    }

    $items = $xmlData->body->items->item;

    $data = array();

    foreach ($items as $item) {
        $data[] = $itemCallback($item);
    }

    $jsonData = json_encode($data, 128);

    $_SESSION['smpland_api_cache'] = json_encode(array("data" => $jsonData));

    return array("data" => $jsonData, "fromCache" => false);

}
function fetchDataFromAPIJeju($url, $itemCallback) {

    $cachedData3 = isset($_SESSION['smpjeju_api_cache']) ? json_decode($_SESSION['smpjeju_api_cache'], true) : null;
    if ($cachedData3 !== null  && isset($cachedData3[$url])) {
        return array("data" => $cachedData3[$url], "fromCache" => true);
    }

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt($ch, CURLOPT_HEADER, FALSE);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');

    $response = curl_exec($ch);
    curl_close($ch);

    $xmlData = simplexml_load_string($response);

    if ($xmlData === false) {
        echo "Error parsing XML data.";
        return null;
    }

    $items = $xmlData->body->items->item;

    $data = array();

    foreach ($items as $item) {
        $data[] = $itemCallback($item);
    }

    $jsonData = json_encode($data, 128);

    $_SESSION['smpjeju_api_cache'] = json_encode(array("data" => $jsonData));

    return array("data" => $jsonData, "fromCache" => false);

}
function fetchDataFromJson($url, $itemCallback) {

    $cachedData2 = isset($_SESSION['rec_api_cache']) ? json_decode($_SESSION['rec_api_cache'], true) : null;

    if ($cachedData2 !== null && isset($cachedData2[$url])) {
        return array("data" => $cachedData2[$url], "fromCache" => true);
    } else {
        
    }

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt($ch, CURLOPT_HEADER, FALSE);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');

    $response = curl_exec($ch);

    curl_close($ch);

    $jsonData = json_decode($response, true);

    // if ($jsonData === null) {
    //     echo "Error decoding JSON data.";
    //     return null;
    // }

    if (!isset($jsonData['response'])) {
        echo "Error: 'response' key not found in JSON data.";
        return null;
    }

    $response = $jsonData['response'];

    if (!isset($response['header']) || !isset($response['body'])) {
        echo "Error: 'header' or 'body' key not found in 'response' data.";
        return null;
    }

    if (!isset($response['body']['items']) || !isset($response['body']['items']['item'])) {
        echo "Error: 'items' key not found in 'body' data.";
        return null;
    }

    $items = $response['body']['items']['item'];

    $data = array();

    foreach ($items as $item) {
        $data[] = call_user_func($itemCallback, $item);
    }

    $jsonData = json_encode($data);

    $_SESSION['rec_api_cache'] = json_encode(array("data" => $jsonData));

    return array("data" => $jsonData, "fromCache" => false);
}

function processFirstAPIItem($item) {
    return array(
        "tradeDay" => (string) $item->tradeDay,
        "tradeHour" => (int) $item->tradeHour,
        "areaCd" => (int) $item->areaCd,
        "smp" => (float) $item->smp
    );
}

function processSecondAPIItem($item) {
    return array(
       "clsPrc" => isset($item['clsPrc']) ? (float) $item['clsPrc'] : 0,
       "bzDd" => isset($item['bzDd']) ? (string) $item['bzDd'] : "",
       "jejuOrdCnt" => isset($item['jejuOrdCnt']) ? (float) $item['jejuOrdCnt'] : 0,
       "landOrdCnt" => isset($item['landOrdCnt']) ? (float) $item['landOrdCnt'] : 0,
       "landAvgPrc" => isset($item['landAvgPrc']) ? (float) $item['landAvgPrc'] : 0,
       "landHgPrc" => isset($item['landHgPrc']) ? (float) $item['landHgPrc'] : 0,
       "landLwlmtPrc" => isset($item['landLwlmtPrc']) ? (float) $item['landLwlmtPrc'] : 0,
       "jejuLwlmtPrc" => isset($item['jejuLwlmtPrc']) ? (float) $item['jejuLwlmtPrc'] : 0,
       "jejuAvgPrc" => isset($item['jejuAvgPrc']) ? (float) $item['jejuAvgPrc'] : 0,
       "jejuHgPrc" => isset($item['jejuHgPrc']) ? (float) $item['jejuHgPrc'] : 0,
       "rn" => isset($item['rn']) ? (int) $item['rn'] : 0,
  
    );
}

$url1 = 'https://openapi.kpx.or.kr/openapi/smp1hToday/getSmp1hToday?' . urlencode('serviceKey') . '=/3cTiA0/4RUv74qiwY4aZMKQQYUJFHtMC8uSh4bUc3mV2e9plDS3AXfcFlOOE1JpQgm0VCYRLovBnScnqMtdAA==&' . urlencode('areaCd') . '=1';
$url2 = 'https://apis.data.go.kr/B552115/RecMarketInfo2/getRecMarketInfo2?serviceKey=pSW8QJCUkD7kqRXTeTt5Q09wqoahnlOXPVFEyj4T0hdAiuOAu6RSOgu7WwMAFSvaA7/utKJRrPXMBSIhgI95sg==&pageNo=67&numOfRows=10&dataType=json';

$jsonData1 = fetchDataFromAPI($url1, 'processFirstAPIItem');
$jsonData2 = fetchDataFromJson($url2, 'processSecondAPIItem');


if ($jsonData1 !== null) {
    $dataFetchedFromCache = $jsonData1['fromCache'];
    $jsonData1 = $jsonData1['data'];
    // echo "JSON data from URL 1: $jsonData1";
    echo "<script>console.log('Data SMP fetched from cache: $dataFetchedFromCache')</script>";
}

if ($jsonData2 !== null) {
    $dataFetchedFromCache = $jsonData2['fromCache'];
    $jsonData2 = $jsonData2['data'];
    // echo "JSON data from URL 2: $jsonData2";
    echo "<script>console.log('Data REC fetched from cache: $dataFetchedFromCache')</script>";
}


if (isset($_POST['action']) && $_POST['action'] === 'fetchDataFromAPIJeju') {
    if (isset($_POST['url']) && isset($_POST['itemCallback'])) {
        $url = $_POST['url'];
        $itemCallback = $_POST['itemCallback'];
        $jsonData = fetchDataFromAPIJeju($url, $itemCallback);
        // echo json_encode($jsonData);
    } else {
        echo json_encode(array("error" => "Missing parameters"));
    }
}
?>