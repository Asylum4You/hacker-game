<!--
Hey there! Welcome to this game's front-end source code.

Know what all (or some) the code below means?

If so, we'd love for YOU to help contribute to the game.

Want to make a new front-end? Fix up the back-end? Find some bugs and (hopefully) report them?

Join the official game development chat over at {DISCORD LINK},

or take a look at the full code at {GITHUB LINK}.
-->
<!doctype html>
<html lang="">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="apple-touch-icon" href="apple-touch-icon.png">
    <link rel="stylesheet" href="css/reset-min.css">
    <link rel="stylesheet" href='css/font.css'>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/cluster.css">
    <link rel="stylesheet" href="css/hardware.css">
    <link rel="stylesheet" href="css/processes.css">
    <link rel="stylesheet" href="css/software.css">
    <title>RAW</title>
    <style></style>
</head>

<body>
    <div class="main-menu">
        <div class="main-menu-option">News</div>
        <div class="main-menu-option-selected">Hack</div>
        <div class="main-menu-option">E-Mail</div>
        <div class="main-menu-option">Finances</div>
        <div class="main-menu-option">Database</div>
        <div class="main-menu-option">Clan</div>
        <div class="main-menu-option">Leaderboards</div>
        <div class="main-menu-option">Profile</div>
    </div>
    <div class="container">
        <ul class="sidebar">
            <li class="sidebar-option">
                <div class="sidebar-option-title">Cluster first:</div>
                IP: ff:ff:ff:ff:ff:ff:ff:ff
                <br>CPU: 12000 MHz
                <br>Memory: 24000 MB
                <br>Disk: 300 GB</li>
            <li class="sidebar-option-selected">
                <div class="sidebar-option-title">Cluster 2</div>
                IP: ff:ff:ff:ff:ff:ff:ff:00
                <br>CPU: 6000 MHz
                <br>Memory: 12000 MB
                <br>Disk: 150 GB</li>
            <li class="sidebar-option">
                <div class="sidebar-option-title">Cluster 3</div>
                IP: ff:ff:ff:ff:ff:ff:ff:00
                <br>CPU: 6000 MHz
                <br>Memory: 12000 MB
                <br>Disk: 150 GB</li>
            <li class="sidebar-option">
                <div class="sidebar-option-title">Cluster 4</div>
                IP: ff:ff:ff:ff:ff:ff:ff:00
                <br>CPU: 6000 MHz
                <br>Memory: 12000 MB
                <br>Disk: 150 GB</li>
            <li class="sidebar-option">
                <div class="sidebar-option-title">Cluster 5</div>
                IP: ff:ff:ff:ff:ff:ff:ff:00
                <br>CPU: 6000 MHz
                <br>Memory: 12000 MB
                <br>Disk: 150 GB</li>
            <li class="sidebar-option">
                <div class="sidebar-option-title">Cluster 6</div>
                IP: ff:ff:ff:ff:ff:ff:ff:00
                <br>CPU: 6000 MHz
                <br>Memory: 12000 MB
                <br>Disk: 150 GB</li>
            <li class="sidebar-option">
                <div class="sidebar-option-title">Cluster 7</div>
                IP: ff:ff:ff:ff:ff:ff:ff:00
                <br>CPU: 6000 MHz
                <br>Memory: 12000 MB
                <br>Disk: 150 GB</li>
            <li class="sidebar-option">
                <div class="sidebar-option-title">Cluster last</div>
                IP: ff:ff:ff:ff:ff:ff:ff:00
                <br>CPU: 6000 MHz
                <br>Memory: 12000 MB
                <br>Disk: 150 GB</li>
            <li class="sidebar-option">
                <div class="sidebar-option-title">ADD NEW CLUSTER</div>
                IP: -
                <br>CPU: -
                <br>Memory: -
                <br>Disk: -</li>
        </ul>
        <div id="cluster-menu" class="cluster-menu">
            <div class="cluster-menu-option-edge"></div>
            <div id="cluster-menu-option-hardware" class="cluster-menu-option-selected">Hardware</div>
            <div id="cluster-menu-option-software" class="cluster-menu-option">Software</div>
            <div id="cluster-menu-option-processes" class="cluster-menu-option">Processes</div>
            <div id="cluster-menu-option-internet" class="cluster-menu-option">Internet</div>
            <div class="cluster-menu-option-edge"></div>
        </div>
        <div id="content" class="content">
            <div class="hardware">
                <div class="hardware-title">Server 1</div>
                <div class="hardware-option">CPU: 2000 MHz</div>
                <div class="hardware-option-upgrade">Upgrade to 4000 MHz for $100000</div>
                <div class="hardware-option">Memory: 4000 MB</div>
                <div class="hardware-option-upgrade">Upgrade to 8000 MB for $75000</div>
                <div class="hardware-option">Disk: 50 GB</div>
                <div class="hardware-option-upgrade">Upgrade to 100 GB for $100000</div>
            </div>
            <div class="hardware">
                <div class="hardware-title">Server 1</div>
                <div class="hardware-option">CPU: 2000 MHz</div>
                <div class="hardware-option-upgrade">Upgrade to 4000 MHz for $100000</div>
                <div class="hardware-option">Memory: 4000 MB</div>
                <div class="hardware-option-upgrade">Upgrade to 8000 MB for $75000</div>
                <div class="hardware-option">Disk: 50 GB</div>
                <div class="hardware-option-upgrade">Upgrade to 100 GB for $100000</div>
            </div>
            <div class="hardware">
                <div class="hardware-title">Server 1</div>
                <div class="hardware-option">CPU: 2000 MHz</div>
                <div class="hardware-option-upgrade">Upgrade to 4000 MHz for $100000</div>
                <div class="hardware-option">Memory: 4000 MB</div>
                <div class="hardware-option-upgrade">Upgrade to 8000 MB for $75000</div>
                <div class="hardware-option">Disk: 50 GB</div>
                <div class="hardware-option-upgrade">Upgrade to 100 GB for $100000</div>
            </div>
            <div class="hardware-big-option">
                <div class="hardware-title">ADD NEW SERVER</div>
                <div class="hardware-option">CPU: -</div>
                <div class="hardware-big-option-upgrade">Upgrade to - for $-</div>
                <div class="hardware-option">Memory: 4000 MB</div>
                <div class="hardware-big-option-upgrade">Upgrade to - for $-</div>
                <div class="hardware-option">Disk: 50 GB</div>
                <div class="hardware-big-option-upgrade">Upgrade to - for $-</div>
            </div>
        </div>
    </div>
    <script src="js/jquery-min.js"></script>
    <script src="js/main.js"></script>
</body>

</html>