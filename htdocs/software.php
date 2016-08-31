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
            <div id="cluster-menu-option-hardware" class="cluster-menu-option">Hardware</div>
            <div id="cluster-menu-option-software" class="cluster-menu-option-selected">Software</div>
            <div id="cluster-menu-option-processes" class="cluster-menu-option">Processes</div>
            <div id="cluster-menu-option-internet" class="cluster-menu-option">Internet</div>
            <div class="cluster-menu-option-edge"></div>
        </div>
        <div id="content" class="content">
            <table class="software">
                <tr class="software-row">
                    <td class="software-cell">Name</td>
                    <td class="software-cell">Level</td>
                    <td class="software-cell">Size</td>
                    <td class="software-cell">Status</td>
                    <td class="software-cell">Actions</td>
                </tr>
                <tr class="software-row">
                    <td class="software-cell">Exploit Kit.exp</td>
                    <td class="software-cell">5.0</td>
                    <td class="software-cell">750 MB</td>
                    <td class="software-cell">Idle</td>
                    <td class="software-cell">
                        <div class="software-cell-action"><img src="res/img/info.png">
                            <div class="software-cell-action-tooltip-text">Info</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/run.png">
                            <div class="software-cell-action-tooltip-text">Run</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/encrypt.png">
                            <div class="software-cell-action-tooltip-text">Encrypt</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/delete.png">
                            <div class="software-cell-action-tooltip-text">Delete</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/upload.png">
                            <div class="software-cell-action-tooltip-text">Upload</div>
                        </div>
                    </td>
                </tr>
                <tr class="software-row">
                    <td class="software-cell">Cracker.crk</td>
                    <td class="software-cell">5.0</td>
                    <td class="software-cell">750 MB</td>
                    <td class="software-cell">Active</td>
                    <td class="software-cell">
                        <div class="software-cell-action"><img src="res/img/info.png">
                            <div class="software-cell-action-tooltip-text">Info</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/stop.png">
                            <div class="software-cell-action-tooltip-text">Stop</div>
                        </div>
                        <div class="software-cell-action-disabled"><img src="res/img/disabled.png"></div>
                        <div class="software-cell-action-disabled"><img src="res/img/disabled.png"></div>
                        <div class="software-cell-action"><img src="res/img/upload.png">
                            <div class="software-cell-action-tooltip-text">Upload</div>
                        </div>
                    </td>
                </tr>
                <tr class="software-row">
                    <td class="software-cell">Firewall.fwl</td>
                    <td class="software-cell">5.0</td>
                    <td class="software-cell">750 MB</td>
                    <td class="software-cell">Active</td>
                    <td class="software-cell">
                        <div class="software-cell-action"><img src="res/img/info.png">
                            <div class="software-cell-action-tooltip-text">Info</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/stop.png">
                            <div class="software-cell-action-tooltip-text">Stop</div>
                        </div>
                        <div class="software-cell-action-disabled"><img src="res/img/disabled.png"></div>
                        <div class="software-cell-action-disabled"><img src="res/img/disabled.png"></div>
                        <div class="software-cell-action"><img src="res/img/upload.png">
                            <div class="software-cell-action-tooltip-text">Upload</div>
                        </div>
                    </td>
                </tr>
                <tr class="software-row">
                    <td class="software-cell">Crypter.crp</td>
                    <td class="software-cell">5.0</td>
                    <td class="software-cell">750 MB</td>
                    <td class="software-cell">Encrypted</td>
                    <td class="software-cell">
                        <div class="software-cell-action"><img src="res/img/info.png">
                            <div class="software-cell-action-tooltip-text">Info</div>
                        </div>
                        <div class="software-cell-action-disabled"><img src="res/img/disabled.png"></div>
                        <div class="software-cell-action"><img src="res/img/decrypt.png">
                            <div class="software-cell-action-tooltip-text">Decrypt</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/delete.png">
                            <div class="software-cell-action-tooltip-text">Delete</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/upload.png">
                            <div class="software-cell-action-tooltip-text">Upload</div>
                        </div>
                    </td>
                </tr>
                <tr class="software-row">
                    <td class="software-cell">Scanner.scn</td>
                    <td class="software-cell">5.0</td>
                    <td class="software-cell">750 MB</td>
                    <td class="software-cell">Active</td>
                    <td class="software-cell">
                        <div class="software-cell-action"><img src="res/img/info.png">
                            <div class="software-cell-action-tooltip-text">Info</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/stop.png">
                            <div class="software-cell-action-tooltip-text">Stop</div>
                        </div>
                        <div class="software-cell-action-disabled"><img src="res/img/disabled.png"></div>
                        <div class="software-cell-action-disabled"><img src="res/img/disabled.png"></div>
                        <div class="software-cell-action"><img src="res/img/upload.png">
                            <div class="software-cell-action-tooltip-text">Upload</div>
                        </div>
                    </td>
                </tr>
                <tr class="software-row">
                    <td class="software-cell">Collector Activator.acl</td>
                    <td class="software-cell">5.0</td>
                    <td class="software-cell">750 MB</td>
                    <td class="software-cell">Idle</td>
                    <td class="software-cell">
                        <div class="software-cell-action"><img src="res/img/info.png">
                            <div class="software-cell-action-tooltip-text">Info</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/run.png">
                            <div class="software-cell-action-tooltip-text">Run</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/encrypt.png">
                            <div class="software-cell-action-tooltip-text">Encrypt</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/delete.png">
                            <div class="software-cell-action-tooltip-text">Delete</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/upload.png">
                            <div class="software-cell-action-tooltip-text">Upload</div>
                        </div>
                    </td>
                </tr>
                <tr class="software-row">
                    <td class="software-cell">DDoS Activator.ads</td>
                    <td class="software-cell">5.0</td>
                    <td class="software-cell">750 MB</td>
                    <td class="software-cell">Encrypted</td>
                    <td class="software-cell">
                        <div class="software-cell-action"><img src="res/img/info.png">
                            <div class="software-cell-action-tooltip-text">Info</div>
                        </div>
                        <div class="software-cell-action-disabled"><img src="res/img/disabled.png"></div>
                        <div class="software-cell-action"><img src="res/img/decrypt.png">
                            <div class="software-cell-action-tooltip-text">Decrypt</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/delete.png">
                            <div class="software-cell-action-tooltip-text">Delete</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/upload.png">
                            <div class="software-cell-action-tooltip-text">Upload</div>
                        </div>
                    </td>
                </tr>
                <tr class="software-row">
                    <td class="software-cell">Proxy Activator.apx</td>
                    <td class="software-cell">5.0</td>
                    <td class="software-cell">750 MB</td>
                    <td class="software-cell">Idle</td>
                    <td class="software-cell">
                        <div class="software-cell-action"><img src="res/img/info.png">
                            <div class="software-cell-action-tooltip-text">Info</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/run.png">
                            <div class="software-cell-action-tooltip-text">Run</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/encrypt.png">
                            <div class="software-cell-action-tooltip-text">Encrypt</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/delete.png">
                            <div class="software-cell-action-tooltip-text">Delete</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/upload.png">
                            <div class="software-cell-action-tooltip-text">Upload</div>
                        </div>
                    </td>
                </tr>
                <tr class="software-row">
                    <td class="software-cell">Malware Remover.rmm</td>
                    <td class="software-cell">5.0</td>
                    <td class="software-cell">750 MB</td>
                    <td class="software-cell">Idle</td>
                    <td class="software-cell">
                        <div class="software-cell-action"><img src="res/img/info.png">
                            <div class="software-cell-action-tooltip-text">Info</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/run.png">
                            <div class="software-cell-action-tooltip-text">Run</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/encrypt.png">
                            <div class="software-cell-action-tooltip-text">Encrypt</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/delete.png">
                            <div class="software-cell-action-tooltip-text">Delete</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/upload.png">
                            <div class="software-cell-action-tooltip-text">Upload</div>
                        </div>
                    </td>
                </tr>
                <tr class="software-row">
                    <td class="software-cell">Miner Malware.mmn</td>
                    <td class="software-cell">5.0</td>
                    <td class="software-cell">750 MB</td>
                    <td class="software-cell">Idle</td>
                    <td class="software-cell">
                        <div class="software-cell-action"><img src="res/img/info.png">
                            <div class="software-cell-action-tooltip-text">Info</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/run.png">
                            <div class="software-cell-action-tooltip-text">Run</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/encrypt.png">
                            <div class="software-cell-action-tooltip-text">Encrypt</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/delete.png">
                            <div class="software-cell-action-tooltip-text">Delete</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/upload.png">
                            <div class="software-cell-action-tooltip-text">Upload</div>
                        </div>
                    </td>
                </tr>
                <tr class="software-row">
                    <td class="software-cell">Spam Malware.msp</td>
                    <td class="software-cell">5.0</td>
                    <td class="software-cell">750 MB</td>
                    <td class="software-cell">Idle</td>
                    <td class="software-cell">
                        <div class="software-cell-action"><img src="res/img/info.png">
                            <div class="software-cell-action-tooltip-text">Info</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/run.png">
                            <div class="software-cell-action-tooltip-text">Run</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/encrypt.png">
                            <div class="software-cell-action-tooltip-text">Encrypt</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/delete.png">
                            <div class="software-cell-action-tooltip-text">Delete</div>
                        </div>
                        <div class="software-cell-action"><img src="res/img/upload.png">
                            <div class="software-cell-action-tooltip-text">Upload</div>
                        </div>
                    </td>
                </tr>
                <tr class="software-row">
                    <td class="software-cell">DDoS Malware.mds</td>
                    <td class="software-cell">5.0</td>
                    <td class="software-cell">750 MB</td>
                    <td class="software-cell">Active</td>
                    <td class="software-cell">
                        <div class="software-cell-action-disabled"><img src="res/img/disabled.png"></div>
                        <div class="software-cell-action-disabled"><img src="res/img/disabled.png"></div>
                        <div class="software-cell-action-disabled"><img src="res/img/disabled.png"></div>
                        <div class="software-cell-action"><img src="res/img/remove.png">
                            <div class="software-cell-action-tooltip-text">Remove</div>
                        </div>
                        <div class="software-cell-action-disabled"><img src="res/img/disabled.png"></div>
                    </td>
                </tr>
                <tr class="software-row">
                    <td class="software-cell">Proxy Malware.mpx</td>
                    <td class="software-cell">5.0</td>
                    <td class="software-cell">750 MB</td>
                    <td class="software-cell">Active</td>
                    <td class="software-cell">
                        <div class="software-cell-action-disabled"><img src="res/img/disabled.png"></div>
                        <div class="software-cell-action-disabled"><img src="res/img/disabled.png"></div>
                        <div class="software-cell-action-disabled"><img src="res/img/disabled.png"></div>
                        <div class="software-cell-action"><img src="res/img/remove.png">
                            <div class="software-cell-action-tooltip-text">Remove</div>
                        </div>
                        <div class="software-cell-action-disabled"><img src="res/img/disabled.png"></div>
                    </td>
                </tr>
                <tr class="software-row">
                    <td class="software-cell">Total Size:</td>
                    <td class="software-cell"></td>
                    <td class="software-cell">9750 MB</td>
                    <td class="software-cell"></td>
                    <td class="software-cell"></td>
                </tr>
            </table>
        </div>
    </div>
    <script src="js/jquery-min.js"></script>
    <script src="js/main.js"></script>
</body>

</html>