function clusterSetup() {
    $("#cluster-menu").on('click', "#cluster-menu-option-hardware", function () {
        $("#content").html("Loading Hack - Hardware");
        $("#cluster-menu-option-hardware").attr("class", "cluster-menu-option-selected");
        $("#cluster-menu-option-software").attr("class", "cluster-menu-option");
        $("#cluster-menu-option-processes").attr("class", "cluster-menu-option");
        $("#cluster-menu-option-internet").attr("class", "cluster-menu-option");

        d.title = "Hack/Hardware";
        menuSelection.mainMenu = 2;
        menuSelection.clusterMenu = 1;

        $.ajax({
            url: "ajax-testing/hardware.php",
            cache: false,
            success: function (result) {
                var hardwareData = $.parseJSON(result);
                var len = hardwareData.length;
                var hardwareMenus = [];

                var maxCpuLevel = 7;

                function getCpuSpecByLevel(level) {
                    switch (level) {
                        case 0:
                            return "500 MHz";
                        case 1:
                            return "1000 MHz";
                        case 2:
                            return "1500 MHz";
                        case 3:
                            return "2000 MHz";
                        case 4:
                            return "2500 MHz";
                        case 5:
                            return "3000 MHz";
                        case 6:
                            return "3500 MHz";
                        case 7:
                            return "4000 MHz";
                        default:
                            break;
                    }
                    return -1;
                }

                function getCpuUpgradePriceByLevel(level) {
                    switch (level) {
                        case 0:
                            return "$1000";
                        case 1:
                            return "$1500";
                        case 2:
                            return "$2250";
                        case 3:
                            return "$3375";
                        case 4:
                            return "$5000";
                        case 5:
                            return "$7500";
                        case 6:
                            return "$12500";
                        default:
                            break;
                    }
                    return -1;
                }

                var maxRamLevel = 7;

                function getRamSpecByLevel(level) {
                    switch (level) {
                        case 0:
                            return "500 MB";
                        case 1:
                            return "1000 MB";
                        case 2:
                            return "1500 MB";
                        case 3:
                            return "2000 MB";
                        case 4:
                            return "2500 MB";
                        case 5:
                            return "3000 MB";
                        case 6:
                            return "3500 MB";
                        case 7:
                            return "4000 MB";
                        default:
                            break;
                    }
                    return -1;
                }

                function getRamUpgradePriceByLevel(level) {
                    switch (level) {
                        case 0:
                            return "$1000";
                        case 1:
                            return "$1500";
                        case 2:
                            return "$2250";
                        case 3:
                            return "$3375";
                        case 4:
                            return "$5000";
                        case 5:
                            return "$7500";
                        case 6:
                            return "$12500";
                        default:
                            break;
                    }
                    return -1;
                }

                var maxDiskLevel = 7;

                function getDiskSpecByLevel(level) {
                    switch (level) {
                        case 0:
                            return "10000 MB";
                        case 1:
                            return "25000 MB";
                        case 2:
                            return "50000 MB";
                        case 3:
                            return "75000 MB";
                        case 4:
                            return "100000 MB";
                        case 5:
                            return "125000 MB";
                        case 6:
                            return "150000 MB";
                        case 7:
                            return "200000 MB";
                        default:
                            break;
                    }
                    return -1;
                }

                function getDiskUpgradePriceByLevel(level) {
                    switch (level) {
                        case 0:
                            return "$1000";
                        case 1:
                            return "$1500";
                        case 2:
                            return "$2250";
                        case 3:
                            return "$3375";
                        case 4:
                            return "$5000";
                        case 5:
                            return "$7500";
                        case 6:
                            return "$12500";
                        default:
                            break;
                    }
                    return -1;
                }

                $("#content").html("");
                for (i = 0; i < len; i++) {
                    hardwareMenus[i] = d.createElement("div");
                    $(hardwareMenus[i]).attr("class", "hardware")

                    var hardwareTitle = d.createElement("div");
                    $(hardwareTitle).attr("class", "hardware-title").text("Server " + i);

                    $(hardwareTitle).appendTo(hardwareMenus[i]);

                    var hardwareCpu = d.createElement("div");
                    $(hardwareCpu).attr("class", "hardware-option").text("CPU: " + getCpuSpecByLevel(hardwareData[i].CPU));
                    $(hardwareCpu).appendTo(hardwareMenus[i]);

                    if (hardwareData[i].CPU < maxCpuLevel) {
                        var hardwareUpgradeCpu = d.createElement("div");
                        $(hardwareUpgradeCpu).attr("class", "hardware-option-upgrade button").attr("id", "hardware-upgrade-cpu").attr("serverid", i).text("Upgrade CPU to " + getCpuSpecByLevel(hardwareData[i].CPU + 1) + " for " + getCpuUpgradePriceByLevel(hardwareData[i].CPU))
                        $(hardwareUpgradeCpu).appendTo(hardwareMenus[i]);
                    }

                    var hardwareRam = d.createElement("div");
                    $(hardwareRam).attr("class", "hardware-option").text("Ram: " + getRamSpecByLevel(hardwareData[i].RAM));
                    $(hardwareRam).appendTo(hardwareMenus[i]);

                    if (hardwareData[i].RAM < maxRamLevel) {
                        var hardwareUpgradeRam = d.createElement("div");
                        $(hardwareUpgradeRam).attr("class", "hardware-option-upgrade button").attr("id", "hardware-upgrade-ram").attr("serverid", i).text("Upgrade RAM to " + getRamSpecByLevel(hardwareData[i].RAM + 1) + " for " + getRamUpgradePriceByLevel(hardwareData[i].RAM))
                        $(hardwareUpgradeRam).appendTo(hardwareMenus[i]);
                    }

                    var hardwareDisk = d.createElement("div");
                    $(hardwareDisk).attr("class", "hardware-option").text("Disk: " + getDiskSpecByLevel(hardwareData[i].DISK));
                    $(hardwareDisk).appendTo(hardwareMenus[i]);

                    if (hardwareData[i].DISK < maxDiskLevel) {
                        var hardwareUpgradeDisk = d.createElement("div");
                        $(hardwareUpgradeDisk).attr("class", "hardware-option-upgrade button").attr("id", "hardware-upgrade-disk").attr("serverid", i).text("Upgrade Disk to " + getDiskSpecByLevel(hardwareData[i].DISK + 1) + " for " + getDiskUpgradePriceByLevel(hardwareData[i].DISK))
                        $(hardwareUpgradeDisk).appendTo(hardwareMenus[i]);
                    }

                    $(hardwareMenus[i]).appendTo($("#content"));
                }
                var hardwareNewServer = d.createElement("div");
                $(hardwareNewServer).attr("class", "hardware button");
                var hardwareTitle = d.createElement("div");
                $(hardwareTitle).attr("class", "hardware-title").text("Buy new server");
                $(hardwareTitle).appendTo(hardwareNewServer);
                var hardwareCpu = d.createElement("div");
                $(hardwareCpu).attr("class", "hardware-option").text("CPU: " + getCpuSpecByLevel(0));
                $(hardwareCpu).appendTo(hardwareNewServer);
                var hardwareRam = d.createElement("div");
                $(hardwareRam).attr("class", "hardware-option").text("Ram: " + getRamSpecByLevel(0));
                $(hardwareRam).appendTo(hardwareNewServer);
                var hardwareDisk = d.createElement("div");
                $(hardwareDisk).attr("class", "hardware-option").text("Disk: " + getDiskSpecByLevel(0));
                $(hardwareDisk).appendTo(hardwareNewServer);
                $(hardwareNewServer).appendTo($("#content"));
            }
        });
    });

    $("#cluster-menu").on('click', "#cluster-menu-option-software", function () {
        $("#content").html("Loading Hack/Software");
        $("#cluster-menu-option-hardware").attr("class", "cluster-menu-option");
        $("#cluster-menu-option-software").attr("class", "cluster-menu-option-selected");
        $("#cluster-menu-option-processes").attr("class", "cluster-menu-option");
        $("#cluster-menu-option-internet").attr("class", "cluster-menu-option");

        d.title = "Hack/Software";

        menuSelection.mainMenu = 2;
        menuSelection.clusterMenu = 2;

        $.ajax({
            url: "ajax-testing/software.php",
            cache: false,
            success: function (result) {
                var softwareData = $.parseJSON(result);
                var len = softwareData.length;
                var softwareRows = [];
                var totalSize = 0;
                var softwareTable = d.createElement("table");

                function addSoftwareAction(element, fileid, type) {
                    /*
                     * type values:
                     * 0: Disabled
                     * 1: Info
                     * 2: Run
                     * 3: Stop
                     * 4: Encrypt
                     * 5: Decrypt
                     * 6: Delete
                     * 7: Remove
                     * 8: Upload
                     */

                    switch (type) {
                        case 0:
                            var softwareCellDisabled = d.createElement("div");
                            $(softwareCellDisabled).attr("class", "software-cell-action-disabled");
                            var softwareCellDisabledIcon = d.createElement("img");
                            $(softwareCellDisabledIcon).attr("src", "res/img/disabled.png");
                            $(softwareCellDisabledIcon).appendTo(softwareCellDisabled);
                            $(softwareCellDisabled).appendTo(element);
                            break;
                        case 1:
                            var softwareCellInfo = d.createElement("div");
                            $(softwareCellInfo).attr("class", "software-cell-action button").attr("id", "software-info").attr("fileid", fileid);
                            var softwareCellInfoIcon = d.createElement("img");
                            $(softwareCellInfoIcon).attr("src", "res/img/info.png");
                            var softwareCellInfoTooltip = d.createElement("div");
                            $(softwareCellInfoTooltip).attr("class", "software-cell-action-tooltip-text").text("Info");
                            $(softwareCellInfoIcon).appendTo(softwareCellInfo);
                            $(softwareCellInfoTooltip).appendTo(softwareCellInfo);
                            $(softwareCellInfo).appendTo(element);
                            break;
                        case 2:
                            var softwareCellRun = d.createElement("div");
                            $(softwareCellRun).attr("class", "software-cell-action button").attr("id", "software-run").attr("fileid", fileid);
                            var softwareCellRunIcon = d.createElement("img");
                            $(softwareCellRunIcon).attr("src", "res/img/run.png");
                            var softwareCellRunTooltip = d.createElement("div");
                            $(softwareCellRunTooltip).attr("class", "software-cell-action-tooltip-text").text("Run");
                            $(softwareCellRunIcon).appendTo(softwareCellRun);
                            $(softwareCellRunTooltip).appendTo(softwareCellRun);
                            $(softwareCellRun).appendTo(element);
                            break;
                        case 3:
                            var softwareCellStop = d.createElement("div");
                            $(softwareCellStop).attr("class", "software-cell-action button").attr("id", "software-stop").attr("fileid", fileid);
                            var softwareCellStopIcon = d.createElement("img");
                            $(softwareCellStopIcon).attr("src", "res/img/stop.png");
                            var softwareCellStopTooltip = d.createElement("div");
                            $(softwareCellStopTooltip).attr("class", "software-cell-action-tooltip-text").text("Stop");
                            $(softwareCellStopIcon).appendTo(softwareCellStop);
                            $(softwareCellStopTooltip).appendTo(softwareCellStop);
                            $(softwareCellStop).appendTo(element);
                            break;
                        case 4:
                            var softwareCellEncrypt = d.createElement("div");
                            $(softwareCellEncrypt).attr("class", "software-cell-action button").attr("id", "software-encrypt").attr("fileid", fileid);
                            var softwareCellEncryptIcon = d.createElement("img");
                            $(softwareCellEncryptIcon).attr("src", "res/img/encrypt.png");
                            var softwareCellEncryptTooltip = d.createElement("div");
                            $(softwareCellEncryptTooltip).attr("class", "software-cell-action-tooltip-text").text("Encrypt");
                            $(softwareCellEncryptIcon).appendTo(softwareCellEncrypt);
                            $(softwareCellEncryptTooltip).appendTo(softwareCellEncrypt);
                            $(softwareCellEncrypt).appendTo(element);
                            break;
                        case 5:
                            var softwareCellDecrypt = d.createElement("div");
                            $(softwareCellDecrypt).attr("class", "software-cell-action button").attr("id", "software-decrypt").attr("fileid", fileid);
                            var softwareCellDecryptIcon = d.createElement("img");
                            $(softwareCellDecryptIcon).attr("src", "res/img/decrypt.png");
                            var softwareCellDecryptTooltip = d.createElement("div");
                            $(softwareCellDecryptTooltip).attr("class", "software-cell-action-tooltip-text").text("Decrypt");
                            $(softwareCellDecryptIcon).appendTo(softwareCellDecrypt);
                            $(softwareCellDecryptTooltip).appendTo(softwareCellDecrypt);
                            $(softwareCellDecrypt).appendTo(element);
                            break;
                        case 6:
                            var softwareCellDelete = d.createElement("div");
                            $(softwareCellDelete).attr("class", "software-cell-action button").attr("id", "software-delete").attr("fileid", fileid);
                            var softwareCellDeleteIcon = d.createElement("img");
                            $(softwareCellDeleteIcon).attr("src", "res/img/delete.png");
                            var softwareCellDeleteTooltip = d.createElement("div");
                            $(softwareCellDeleteTooltip).attr("class", "software-cell-action-tooltip-text").text("Delete");
                            $(softwareCellDeleteIcon).appendTo(softwareCellDelete);
                            $(softwareCellDeleteTooltip).appendTo(softwareCellDelete);
                            $(softwareCellDelete).appendTo(element);
                            break;
                        case 7:
                            var softwareCellRemove = d.createElement("div");
                            $(softwareCellRemove).attr("class", "software-cell-action button").attr("id", "software-remove").attr("fileid", fileid);
                            var softwareCellRemoveIcon = d.createElement("img");
                            $(softwareCellRemoveIcon).attr("src", "res/img/remove.png");
                            var softwareCellRemoveTooltip = d.createElement("div");
                            $(softwareCellRemoveTooltip).attr("class", "software-cell-action-tooltip-text").text("Remove");
                            $(softwareCellRemoveIcon).appendTo(softwareCellRemove);
                            $(softwareCellRemoveTooltip).appendTo(softwareCellRemove);
                            $(softwareCellRemove).appendTo(element);
                            break;
                        case 8:
                            var softwareCellUpload = d.createElement("div");
                            $(softwareCellUpload).attr("class", "software-cell-action button").attr("id", "software-upload").attr("fileid", fileid);
                            var softwareCellUploadIcon = d.createElement("img");
                            $(softwareCellUploadIcon).attr("src", "res/img/upload.png");
                            var softwareCellUploadTooltip = d.createElement("div");
                            $(softwareCellUploadTooltip).attr("class", "software-cell-action-tooltip-text").text("Upload");
                            $(softwareCellUploadIcon).appendTo(softwareCellUpload);
                            $(softwareCellUploadTooltip).appendTo(softwareCellUpload);
                            $(softwareCellUpload).appendTo(element);
                            break;
                    }
                    return -1;
                }

                function getSoftwareExtById(id) {
                    switch (id) {
                        case 0:
                            return ".exp"; //Exploit Kit
                        case 1:
                            return ".crk"; //Cracker
                        case 2:
                            return ".fwl"; //Firewall
                        case 3:
                            return ".crp"; //Crypter
                        case 4:
                            return ".scn"; //Scanner
                        case 5:
                            return ".acl"; //Collector Activator
                        case 6:
                            return ".ads"; //DDoS Activator
                        case 7:
                            return ".apx"; //Proxy Activator
                        case 8:
                            return ".rmm"; //Malware Remover
                        case 9:
                            return ".mmn"; //Miner Malware
                        case 10:
                            return ".msp"; //Spam Malware
                        case 11:
                            return ".mds"; //DDoS Malware
                        case 12:
                            return ".mpx"; //Proxy Malware
                    }
                    return -1;
                }

                function getSoftwareTypeById(id) {
                    switch (id) {
                        case 0:
                            return "Exploit Kit"; //Exploit Kit
                        case 1:
                            return "Cracker"; //Cracker
                        case 2:
                            return "Firewall"; //Firewall
                        case 3:
                            return "Crypter"; //Crypter
                        case 4:
                            return "Scanner"; //Scanner
                        case 5:
                            return "Collector Activator"; //Collector Activator
                        case 6:
                            return "DDoS Activator"; //DDoS Activator
                        case 7:
                            return "Proxy Activator"; //Proxy Activator
                        case 8:
                            return "Malware Remover"; //Malware Remover
                        case 9:
                            return "Miner Malware"; //Miner Malware
                        case 10:
                            return "Spam Malware"; //Spam Malware
                        case 11:
                            return "DDoS Malware"; //DDoS Malware
                        case 12:
                            return "Proxy Malware"; //Proxy Malware
                    }
                    return -1;
                }

                function getSoftwareStatusById(id) {
                    switch (id) {
                        case 0:
                            return "Idle";
                        case 1:
                            return "Active";
                        case 2:
                            return "Encrypted";
                    }
                    return -1;
                }

                function getSoftwareSizeByLevel(level) {
                    return 500 * level;
                }

                $("#content").html("");

                $(softwareTable).attr("class", "software");

                var softwareHeaderRow = d.createElement("tr");
                $(softwareHeaderRow).attr("class", "software-row");

                var softwareHeaderTextType = d.createElement("td");
                $(softwareHeaderTextType).attr("class", "software-cell").text("Type");

                var softwareHeaderTextName = d.createElement("td");
                $(softwareHeaderTextName).attr("class", "software-cell").text("Name");

                var softwareHeaderTextLevel = d.createElement("td");
                $(softwareHeaderTextLevel).attr("class", "software-cell").text("Level");

                var softwareHeaderTextSize = d.createElement("td");
                $(softwareHeaderTextSize).attr("class", "software-cell").text("Size");

                var softwareHeaderTextStatus = d.createElement("td");
                $(softwareHeaderTextStatus).attr("class", "software-cell").text("Status");

                var softwareHeaderTextActions = d.createElement("td");
                $(softwareHeaderTextActions).attr("class", "software-cell").text("Actions");

                $(softwareHeaderTextType).appendTo(softwareHeaderRow);
                $(softwareHeaderTextName).appendTo(softwareHeaderRow);
                $(softwareHeaderTextLevel).appendTo(softwareHeaderRow);
                $(softwareHeaderTextSize).appendTo(softwareHeaderRow);
                $(softwareHeaderTextStatus).appendTo(softwareHeaderRow);
                $(softwareHeaderTextActions).appendTo(softwareHeaderRow);
                $(softwareHeaderRow).appendTo(softwareTable);

                for (i = 0; i < len; i++) {
                    softwareRows[i] = d.createElement("tr");
                    $(softwareRows[i]).attr("class", "software-row");

                    var softwareRowType = d.createElement("td");
                    $(softwareRowType).attr("class", "software-cell").text(getSoftwareTypeById(softwareData[i].TYPE));
                    $(softwareRowType).appendTo(softwareRows[i]);

                    var softwareRowName = d.createElement("td");
                    $(softwareRowName).attr("class", "software-cell").text(softwareData[i].NAME + getSoftwareExtById(softwareData[i].TYPE));
                    $(softwareRowName).appendTo(softwareRows[i]);

                    var softwareRowLevel = d.createElement("td");
                    $(softwareRowLevel).attr("class", "software-cell").text(softwareData[i].LEVEL);
                    $(softwareRowLevel).appendTo(softwareRows[i]);

                    var softwareRowSize = d.createElement("td");
                    $(softwareRowSize).attr("class", "software-cell").text(getSoftwareSizeByLevel(softwareData[i].LEVEL) + " MB");
                    $(softwareRowSize).appendTo(softwareRows[i]);

                    var softwareRowStatus = d.createElement("td");
                    $(softwareRowStatus).attr("class", "software-cell").text(getSoftwareStatusById(softwareData[i].STATUS));
                    $(softwareRowStatus).appendTo(softwareRows[i]);

                    var softwareRowActions = d.createElement("td");
                    $(softwareRowActions).attr("class", "software-cell");

                    if (softwareData[i].STATUS == 0) {
                        addSoftwareAction(softwareRowActions, softwareData[i].ID, 1);
                        addSoftwareAction(softwareRowActions, softwareData[i].ID, 2);
                        addSoftwareAction(softwareRowActions, softwareData[i].ID, 4);
                        addSoftwareAction(softwareRowActions, softwareData[i].ID, 6);
                        addSoftwareAction(softwareRowActions, softwareData[i].ID, 8);
                    }

                    if (softwareData[i].STATUS == 1) {
                        addSoftwareAction(softwareRowActions, softwareData[i].ID, 1);
                        if (softwareData[i].TYPE >= 9 && softwareData[i].TYPE <= 12) {
                            addSoftwareAction(softwareRowActions, softwareData[i].ID, 0);
                            addSoftwareAction(softwareRowActions, softwareData[i].ID, 0);
                            addSoftwareAction(softwareRowActions, softwareData[i].ID, 7);
                            addSoftwareAction(softwareRowActions, softwareData[i].ID, 0);
                        } else {
                            addSoftwareAction(softwareRowActions, softwareData[i].ID, 3);
                            addSoftwareAction(softwareRowActions, softwareData[i].ID, 0);
                            addSoftwareAction(softwareRowActions, softwareData[i].ID, 0);
                            addSoftwareAction(softwareRowActions, softwareData[i].ID, 8);
                        }
                    }
                    if (softwareData[i].STATUS == 2) {
                        addSoftwareAction(softwareRowActions, softwareData[i].ID, 1);
                        addSoftwareAction(softwareRowActions, softwareData[i].ID, 0);
                        addSoftwareAction(softwareRowActions, softwareData[i].ID, 5);
                        addSoftwareAction(softwareRowActions, softwareData[i].ID, 6);
                        addSoftwareAction(softwareRowActions, softwareData[i].ID, 8);
                    }

                    $(softwareRowActions).appendTo(softwareRows[i]);

                    $(softwareRows[i]).appendTo(softwareTable);

                    totalSize += getSoftwareSizeByLevel(softwareData[i].LEVEL);
                }
                var softwareTotalSizeRow = d.createElement("tr");

                var softwareTotalSizeTitle = d.createElement("td");
                $(softwareTotalSizeTitle).attr("class", "software-cell").text("Total size:");
                $(softwareTotalSizeTitle).appendTo(softwareTotalSizeRow);

                var softwareBlankCell = d.createElement("td");
                $(softwareBlankCell).attr("class", "software-cell");
                $(softwareBlankCell).appendTo(softwareTotalSizeRow);

                var softwareBlankCell = d.createElement("td");
                $(softwareBlankCell).attr("class", "software-cell");
                $(softwareBlankCell).appendTo(softwareTotalSizeRow);

                var softwareTotalSize = d.createElement("td");
                $(softwareTotalSize).attr("class", "software-cell").text(totalSize + " MB");
                $(softwareTotalSize).appendTo(softwareTotalSizeRow);

                var softwareBlankCell = d.createElement("td");
                $(softwareBlankCell).attr("class", "software-cell");
                $(softwareBlankCell).appendTo(softwareTotalSizeRow);

                var softwareBlankCell = d.createElement("td");
                $(softwareBlankCell).attr("class", "software-cell");
                $(softwareBlankCell).appendTo(softwareTotalSizeRow);

                $(softwareTotalSizeRow).appendTo(softwareTable);

                $(softwareTable).appendTo($("#content"));
            }
        });
    });

    $("#cluster-menu").on('click', "#cluster-menu-option-processes", function () {
        $("#content").html("Loading Hack/Processes");
        $("#cluster-menu-option-hardware").attr("class", "cluster-menu-option");
        $("#cluster-menu-option-software").attr("class", "cluster-menu-option");
        $("#cluster-menu-option-processes").attr("class", "cluster-menu-option-selected");
        $("#cluster-menu-option-internet").attr("class", "cluster-menu-option");

        d.title = "Hack/Processes";

        menuSelection.mainMenu = 2
        menuSelection.clusterMenu = 3;

        $.ajax({
            url: "ajax-testing/processes.php",
            cache: false,
            success: function (result) {
                var processesData = $.parseJSON(result);
                var len = processesData.length;
                var processesRows = [];
                var interval = 10;

                function processCountdown(timerElem, statusElem, actionElem, time) {
                    var timeStart = Date.now();
                    var countdown = setInterval(function () {
                        var timeDelta = Date.now() - timeStart;
                        if (timeDelta >= time) {
                            clearInterval(countdown);
                            time = 0;
                            $(timerElem).text("0 seconds");
                            $(statusElem).text("Completed");
                        }
                        if (time > 0) {
                            $(timerElem).text(((time - timeDelta) / 1000).toFixed(2) + " seconds");
                        }
                    }, interval);
                }

                function getStatusById(id) {
                    switch (id) {
                        case 0:
                            return "Active";
                        case 1:
                            return "Paused";
                        case 2:
                            return "Completed";
                    }
                    return -1;
                }

                $("#content").html("");

                var processesTable = d.createElement("table");
                $(processesTable).attr("class", "processes");

                var processHeaderRow = d.createElement("tr");
                $(processHeaderRow).attr("class", "processes-row");

                var processesHeaderTextTitle = d.createElement("td");
                $(processesHeaderTextTitle).attr("class", "processes-cell").text("Process");
                $(processesHeaderTextTitle).appendTo(processHeaderRow);

                var processesHeaderTextTimeRemaining = d.createElement("td");
                $(processesHeaderTextTimeRemaining).attr("class", "processes-cell").text("Time Remaining");
                $(processesHeaderTextTimeRemaining).appendTo(processHeaderRow);

                var processesHeaderTextStatus = d.createElement("td");
                $(processesHeaderTextStatus).attr("class", "processes-cell").text("Status");
                $(processesHeaderTextStatus).appendTo(processHeaderRow);

                var processesHeaderTextActions = d.createElement("td");
                $(processesHeaderTextActions).attr("class", "processes-cell").text("Actions");
                $(processesHeaderTextActions).appendTo(processHeaderRow);

                $(processHeaderRow).appendTo(processesTable);

                for (i = 0; i < len; i++) {
                    processesRows[i] = d.createElement("tr");
                    $(processesRows[i]).attr("class", "processes-row");

                    var processTitle = d.createElement("td");
                    $(processTitle).attr("class", "processes-cell").text(processesData[i].TITLE);
                    $(processTitle).appendTo(processesRows[i]);

                    var processTimeRemaining = d.createElement("td");
                    $(processTimeRemaining).attr("class", "processes-cell").text((processesData[i].TIMEREMAINING / 1000).toFixed(2) + " seconds");
                    $(processTimeRemaining).appendTo(processesRows[i]);

                    var processStatus = d.createElement("td");
                    $(processStatus).attr("class", "processes-cell").text(getStatusById(processesData[i].STATUS));
                    $(processStatus).appendTo(processesRows[i]);

                    var processActions = d.createElement("td");
                    $(processActions).attr("class", "processes-cell").text("");
                    $(processActions).appendTo(processesRows[i]);

                    if (processesData[i].STATUS == 0) {
                        processCountdown(processTimeRemaining, processStatus, processActions, processesData[i].TIMEREMAINING);
                    }

                    if (processesData[i].STATUS == 1) {}

                    if (processesData[i].STATUS == 2) {
                        $(processTimeRemaining).text("0 seconds");
                    }

                    $(processesRows[i]).appendTo(processesTable);

                }

                $(processesTable).appendTo($("#content"));

            }
        });
    });

    $("#cluster-menu").on('click', "#cluster-menu-option-internet", function () {
        $("#content").html("Loading Hack/Internet");
        $("#cluster-menu-option-hardware").attr("class", "cluster-menu-option");
        $("#cluster-menu-option-software").attr("class", "cluster-menu-option");
        $("#cluster-menu-option-processes").attr("class", "cluster-menu-option");
        $("#cluster-menu-option-internet").attr("class", "cluster-menu-option-selected");
        d.title = "Hack/Internet";
        menuSelection.mainMenu = 2;
        menuSelection.clusterMenu = 4;
    });
}