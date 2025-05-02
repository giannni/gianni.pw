function random_pic($dir = 'random')
{
    $files = glob($dir . '/*.*');
    $file = array_rand($files);
    return $files[$file];
}