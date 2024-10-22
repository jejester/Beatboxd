<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="{{ URL::to('/images/icon.png') }}" type="image/x-icon">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ env('app_name') }}</title>
    @vite('resources/css/app.css')
</head>
<body>
    <div id="app">
        <navbar-component></navbar-component>  <!-- Vue component goes here -->
        <header-component></header-component>   
        <main>
            @yield('content')  <!-- Other content will be injected here -->
        </main>
    </div>
    
    @vite('resources/js/app.js')  <!-- Link to your JS files (Vue app) -->
</body>
</html>