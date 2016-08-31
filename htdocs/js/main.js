(function () {
    var d = document;

    var playerToken;

    var main_menu_selected = 2;
    /*
     * main_menu_selected values:
     * 0: Not Selected
     * 1: News
     * 2: Hack
     * 3: E-Mail
     * 4: Finances
     * 5: Database
     * 6: Clan
     * 7: Leaderboards
     * 8: Profile
     */

    var cluster_menu_selected = 3;
    /*
     * cluster_menu_selected values:
     * 0: Not Selected
     * 1: Hardware
     * 2: Software
     * 3: Processes
     * 4: Internet
     */

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
    }

    function getSoftwareSizeByLevel(level) {
        return 500 * level + " MB"
    }

    $("#cluster-menu").on('click', "#cluster-menu-option-hardware", function () {
        $("#content").html("Loading Hack - Hardware");
        $("#cluster-menu-option-hardware").attr("class", "cluster-menu-option-selected");
        $("#cluster-menu-option-software").attr("class", "cluster-menu-option");
        $("#cluster-menu-option-processes").attr("class", "cluster-menu-option");
        $("#cluster-menu-option-internet").attr("class", "cluster-menu-option");
        d.title = "Hack/Hardware";
        main_menu_selected = 2;
        cluster_menu_selected = 1;
        $.ajax({
            url: "ajax-testing/hardware.php",
            cache: false,
            success: function (result) {
                var hardwareData = $.parseJSON(result);
                var len = hardwareData.length;
                var hardwareMenus = [];
                $("#content").html("");
                for (i = 0; i < len; i++) {
                    hardwareMenus[i] = d.createElement("div");
                    $(hardwareMenus[i]).attr("class", "hardware")

                    hardwareTitle = d.createElement("div");
                    $(hardwareTitle).attr("class", "hardware-title").text("Server " + (i + 1));

                    $(hardwareTitle).appendTo(hardwareMenus[i]);

                    hardwareCpu = d.createElement("div");
                    $(hardwareCpu).attr("class", "hardware-option").text("CPU: " + getCpuSpecByLevel(hardwareData[i].CPU));
                    $(hardwareCpu).appendTo(hardwareMenus[i]);

                    if (hardwareData[i].CPU < maxCpuLevel) {
                        hardwareUpgradeCpu = d.createElement("div");
                        $(hardwareUpgradeCpu).attr("class", "hardware-option-upgrade").text("Upgrade CPU to " + getCpuSpecByLevel(hardwareData[i].CPU + 1) + " for " + getCpuUpgradePriceByLevel(hardwareData[i].CPU))
                        $(hardwareUpgradeCpu).appendTo(hardwareMenus[i]);
                    }

                    hardwareRam = d.createElement("div");
                    $(hardwareRam).attr("class", "hardware-option").text("Ram: " + getRamSpecByLevel(hardwareData[i].RAM));
                    $(hardwareRam).appendTo(hardwareMenus[i]);

                    if (hardwareData[i].RAM < maxRamLevel) {
                        hardwareUpgradeRam = d.createElement("div");
                        $(hardwareUpgradeRam).attr("class", "hardware-option-upgrade").text("Upgrade RAM to " + getRamSpecByLevel(hardwareData[i].RAM + 1) + " for " + getRamUpgradePriceByLevel(hardwareData[i].RAM))
                        $(hardwareUpgradeRam).appendTo(hardwareMenus[i]);
                    }

                    hardwareDisk = d.createElement("div");
                    $(hardwareDisk).attr("class", "hardware-option").text("Disk: " + getDiskSpecByLevel(hardwareData[i].DISK));
                    $(hardwareDisk).appendTo(hardwareMenus[i]);

                    if (hardwareData[i].DISK < maxDiskLevel) {
                        hardwareUpgradeDisk = d.createElement("div");
                        $(hardwareUpgradeDisk).attr("class", "hardware-option-upgrade").text("Upgrade Disk to " + getDiskSpecByLevel(hardwareData[i].DISK + 1) + " for " + getDiskUpgradePriceByLevel(hardwareData[i].DISK))
                        $(hardwareUpgradeDisk).appendTo(hardwareMenus[i]);
                    }

                    $(hardwareMenus[i]).appendTo($("#content"));
                }
                hardwareNewServer = d.createElement("div");
                $(hardwareNewServer).attr("class", "hardware-big-option");
                hardwareTitle = d.createElement("div");
                $(hardwareTitle).attr("class", "hardware-title").text("Buy new server");
                $(hardwareTitle).appendTo(hardwareNewServer);
                hardwareCpu = d.createElement("div");
                $(hardwareCpu).attr("class", "hardware-big-option-upgrade").text("CPU: " + getCpuSpecByLevel(0));
                $(hardwareCpu).appendTo(hardwareNewServer);
                hardwareRam = d.createElement("div");
                $(hardwareRam).attr("class", "hardware-big-option-upgrade").text("Ram: " + getRamSpecByLevel(0));
                $(hardwareRam).appendTo(hardwareNewServer);
                hardwareDisk = d.createElement("div");
                $(hardwareDisk).attr("class", "hardware-big-option-upgrade").text("Disk: " + getDiskSpecByLevel(0));
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
        main_menu_selected = 2;
        cluster_menu_selected = 2;
        $.ajax({
            url: "ajax-testing/software.php",
            cache: false,
            success: function (result) {
                var softwareData = $.parseJSON(result);
                var len = softwareData.length;
                var softwareRows = [];
                var totalSize = 0;
                var softwareTable = d.createElement("table");
                $(softwareTable).attr("class", "software");

                var softwareInitialRow = d.createElement("tr");
                $(softwareInitialRow).attr("class", "software-row");

                var softwareInitialRowHeaderName = d.createElement("td");
                $(softwareInitialRowHeaderName).attr("class", "software-cell").text("Name");

                var softwareInitialRowHeaderLevel = d.createElement("td");
                $(softwareInitialRowHeaderLevel).attr("class", "software-cell").text("Level");

                var softwareInitialRowHeaderSize = d.createElement("td");
                $(softwareInitialRowHeaderSize).attr("class", "software-cell").text("Size");

                var softwareInitialRowHeaderStatus = d.createElement("td");
                $(softwareInitialRowHeaderStatus).attr("class", "software-cell").text("Status");

                var softwareInitialRowHeaderActions = d.createElement("td");
                $(softwareInitialRowHeaderActions).attr("class", "software-cell").text("Actions");

                $(softwareInitialRowHeaderName).appendTo(softwareInitialRow);
                $(softwareInitialRowHeaderLevel).appendTo(softwareInitialRow);
                $(softwareInitialRowHeaderSize).appendTo(softwareInitialRow);
                $(softwareInitialRowHeaderStatus).appendTo(softwareInitialRow);
                $(softwareInitialRowHeaderActions).appendTo(softwareInitialRow);
                $(softwareInitialRow).appendTo(softwareTable);

                $("#content").html("");

                for (i = 0; i < len; i++) {
                    softwareRows[i] = d.createElement("tr");

                    softwareRowName = d.createElement("td");
                    $(softwareRowName).attr("class", "software-cell").text(softwareData[i].NAME + getSoftwareExtById(softwareData[i].TYPE));
                    $(softwareRowName).appendTo(softwareRows[i]);

                    softwareRowLevel = d.createElement("td");
                    $(softwareRowLevel).attr("class", "software-cell").text(softwareData[i].LEVEL);
                    $(softwareRowLevel).appendTo(softwareRows[i]);

                    softwareRowSize = d.createElement("td");
                    $(softwareRowSize).attr("class", "software-cell").text(getSoftwareSizeByLevel(softwareData[i].LEVEL));
                    $(softwareRowSize).appendTo(softwareRows[i]);

                    softwareRowStatus = d.createElement("td");
                    $(softwareRowStatus).attr("class", "software-cell").text(getSoftwareStatusById(softwareData[i].STATUS));
                    $(softwareRowStatus).appendTo(softwareRows[i]);

                    softwareRowActions = d.createElement("td");
                    $(softwareRowActions).attr("class", "software-cell");

                    if (softwareData[i].STATUS == 0) {
                        softwareCellInfo = d.createElement("div");
                        $(softwareCellInfo).attr("class", "software-cell-action");
                        softwareCellInfoIcon = d.createElement("img");
                        $(softwareCellInfoIcon).attr("src", "res/img/info.png");
                        softwareCellInfoTooltip = d.createElement("div");
                        $(softwareCellInfoTooltip).attr("class", "software-cell-action-tooltip-text").text("Info");
                        $(softwareCellInfoIcon).appendTo(softwareCellInfo);
                        $(softwareCellInfoTooltip).appendTo(softwareCellInfo);
                        $(softwareCellInfo).appendTo(softwareRowActions);

                        softwareCellRun = d.createElement("div");
                        $(softwareCellRun).attr("class", "software-cell-action");
                        softwareCellRunIcon = d.createElement("img");
                        $(softwareCellRunIcon).attr("src", "res/img/run.png");
                        softwareCellRunTooltip = d.createElement("div");
                        $(softwareCellRunTooltip).attr("class", "software-cell-action-tooltip-text").text("Run");
                        $(softwareCellRunIcon).appendTo(softwareCellRun);
                        $(softwareCellRunTooltip).appendTo(softwareCellRun);
                        $(softwareCellRun).appendTo(softwareRowActions);

                        softwareCellEncrypt = d.createElement("div");
                        $(softwareCellEncrypt).attr("class", "software-cell-action");
                        softwareCellEncryptIcon = d.createElement("img");
                        $(softwareCellEncryptIcon).attr("src", "res/img/encrypt.png");
                        softwareCellEncryptTooltip = d.createElement("div");
                        $(softwareCellEncryptTooltip).attr("class", "software-cell-action-tooltip-text").text("Encrypt");
                        $(softwareCellEncryptIcon).appendTo(softwareCellEncrypt);
                        $(softwareCellEncryptTooltip).appendTo(softwareCellEncrypt);
                        $(softwareCellEncrypt).appendTo(softwareRowActions);

                        softwareCellDelete = d.createElement("div");
                        $(softwareCellDelete).attr("class", "software-cell-action");
                        softwareCellDeleteIcon = d.createElement("img");
                        $(softwareCellDeleteIcon).attr("src", "res/img/delete.png");
                        softwareCellDeleteTooltip = d.createElement("div");
                        $(softwareCellDeleteTooltip).attr("class", "software-cell-action-tooltip-text").text("Delete");
                        $(softwareCellDeleteIcon).appendTo(softwareCellDelete);
                        $(softwareCellDeleteTooltip).appendTo(softwareCellDelete);
                        $(softwareCellDelete).appendTo(softwareRowActions);

                        softwareCellUpload = d.createElement("div");
                        $(softwareCellUpload).attr("class", "software-cell-action");
                        softwareCellUploadIcon = d.createElement("img");
                        $(softwareCellUploadIcon).attr("src", "res/img/upload.png");
                        softwareCellUploadTooltip = d.createElement("div");
                        $(softwareCellUploadTooltip).attr("class", "software-cell-action-tooltip-text").text("Upload");
                        $(softwareCellUploadIcon).appendTo(softwareCellUpload);
                        $(softwareCellUploadTooltip).appendTo(softwareCellUpload);
                        $(softwareCellUpload).appendTo(softwareRowActions);
                    }

                    if (softwareData[i].STATUS == 1) {
                        softwareCellInfo = d.createElement("div");
                        $(softwareCellInfo).attr("class", "software-cell-action");
                        softwareCellInfoIcon = d.createElement("img");
                        $(softwareCellInfoIcon).attr("src", "res/img/info.png");
                        softwareCellInfoTooltip = d.createElement("div");
                        $(softwareCellInfoTooltip).attr("class", "software-cell-action-tooltip-text").text("Info");
                        $(softwareCellInfoIcon).appendTo(softwareCellInfo);
                        $(softwareCellInfoTooltip).appendTo(softwareCellInfo);
                        $(softwareCellInfo).appendTo(softwareRowActions);

                        if (softwareData[i].TYPE >= 9 && softwareData[i].TYPE <= 12) {
                            softwareCellDisabled = d.createElement("div");
                            $(softwareCellDisabled).attr("class", "software-cell-action-disabled");
                            softwareCellDisabledIcon = d.createElement("img");
                            $(softwareCellDisabledIcon).attr("src", "res/img/disabled.png");
                            $(softwareCellDisabledIcon).appendTo(softwareCellDisabled);
                            $(softwareCellDisabled).appendTo(softwareRowActions);
                        } else {
                            softwareCellStop = d.createElement("div");
                            $(softwareCellStop).attr("class", "software-cell-action");
                            softwareCellStopIcon = d.createElement("img");
                            $(softwareCellStopIcon).attr("src", "res/img/stop.png");
                            softwareCellStopTooltip = d.createElement("div");
                            $(softwareCellStopTooltip).attr("class", "software-cell-action-tooltip-text").text("Stop");
                            $(softwareCellStopIcon).appendTo(softwareCellStop);
                            $(softwareCellStopTooltip).appendTo(softwareCellStop);
                            $(softwareCellStop).appendTo(softwareRowActions);
                        }

                        softwareCellDisabled = d.createElement("div");
                        $(softwareCellDisabled).attr("class", "software-cell-action-disabled");
                        softwareCellDisabledIcon = d.createElement("img");
                        $(softwareCellDisabledIcon).attr("src", "res/img/disabled.png");
                        $(softwareCellDisabledIcon).appendTo(softwareCellDisabled);
                        $(softwareCellDisabled).appendTo(softwareRowActions);

                        if (softwareData[i].TYPE >= 9 && softwareData[i].TYPE <= 12) {
                            softwareCellRemove = d.createElement("div");
                            $(softwareCellRemove).attr("class", "software-cell-action");
                            softwareCellRemoveIcon = d.createElement("img");
                            $(softwareCellRemoveIcon).attr("src", "res/img/remove.png");
                            softwareCellRemoveTooltip = d.createElement("div");
                            $(softwareCellRemoveTooltip).attr("class", "software-cell-action-tooltip-text").text("Remove");
                            $(softwareCellRemoveIcon).appendTo(softwareCellRemove);
                            $(softwareCellRemoveTooltip).appendTo(softwareCellRemove);
                            $(softwareCellRemove).appendTo(softwareRowActions);
                        } else {
                            softwareCellDisabled = d.createElement("div");
                            $(softwareCellDisabled).attr("class", "software-cell-action-disabled");
                            softwareCellDisabledIcon = d.createElement("img");
                            $(softwareCellDisabledIcon).attr("src", "res/img/disabled.png");
                            $(softwareCellDisabledIcon).appendTo(softwareCellDisabled);
                            $(softwareCellDisabled).appendTo(softwareRowActions);
                        }

                        if (softwareData[i].TYPE >= 9 && softwareData[i].TYPE <= 12) {
                            softwareCellDisabled = d.createElement("div");
                            $(softwareCellDisabled).attr("class", "software-cell-action-disabled");
                            softwareCellDisabledIcon = d.createElement("img");
                            $(softwareCellDisabledIcon).attr("src", "res/img/disabled.png");
                            $(softwareCellDisabledIcon).appendTo(softwareCellDisabled);
                            $(softwareCellDisabled).appendTo(softwareRowActions);
                        } else {
                            softwareCellUpload = d.createElement("div");
                            $(softwareCellUpload).attr("class", "software-cell-action");
                            softwareCellUploadIcon = d.createElement("img");
                            $(softwareCellUploadIcon).attr("src", "res/img/upload.png");
                            softwareCellUploadTooltip = d.createElement("div");
                            $(softwareCellUploadTooltip).attr("class", "software-cell-action-tooltip-text").text("Upload");
                            $(softwareCellUploadIcon).appendTo(softwareCellUpload);
                            $(softwareCellUploadTooltip).appendTo(softwareCellUpload);
                            $(softwareCellUpload).appendTo(softwareRowActions);
                        }
                    }

                    if (softwareData[i].STATUS == 2) {
                        softwareCellInfo = d.createElement("div");
                        $(softwareCellInfo).attr("class", "software-cell-action");
                        softwareCellInfoIcon = d.createElement("img");
                        $(softwareCellInfoIcon).attr("src", "res/img/info.png");
                        softwareCellInfoTooltip = d.createElement("div");
                        $(softwareCellInfoTooltip).attr("class", "software-cell-action-tooltip-text").text("Info");
                        $(softwareCellInfoIcon).appendTo(softwareCellInfo);
                        $(softwareCellInfoTooltip).appendTo(softwareCellInfo);
                        $(softwareCellInfo).appendTo(softwareRowActions);

                        softwareCellDisabled = d.createElement("div");
                        $(softwareCellDisabled).attr("class", "software-cell-action-disabled");
                        softwareCellDisabledIcon = d.createElement("img");
                        $(softwareCellDisabledIcon).attr("src", "res/img/disabled.png");
                        $(softwareCellDisabledIcon).appendTo(softwareCellDisabled);
                        $(softwareCellDisabled).appendTo(softwareRowActions);

                        softwareCellDecrypt = d.createElement("div");
                        $(softwareCellDecrypt).attr("class", "software-cell-action");
                        softwareCellDecryptIcon = d.createElement("img");
                        $(softwareCellDecryptIcon).attr("src", "res/img/decrypt.png");
                        softwareCellDecryptTooltip = d.createElement("div");
                        $(softwareCellDecryptTooltip).attr("class", "software-cell-action-tooltip-text").text("Decrypt");
                        $(softwareCellDecryptIcon).appendTo(softwareCellDecrypt);
                        $(softwareCellDecryptTooltip).appendTo(softwareCellDecrypt);
                        $(softwareCellDecrypt).appendTo(softwareRowActions);

                        softwareCellDelete = d.createElement("div");
                        $(softwareCellDelete).attr("class", "software-cell-action");
                        softwareCellDeleteIcon = d.createElement("img");
                        $(softwareCellDeleteIcon).attr("src", "res/img/delete.png");
                        softwareCellDeleteTooltip = d.createElement("div");
                        $(softwareCellDeleteTooltip).attr("class", "software-cell-action-tooltip-text").text("Delete");
                        $(softwareCellDeleteIcon).appendTo(softwareCellDelete);
                        $(softwareCellDeleteTooltip).appendTo(softwareCellDelete);
                        $(softwareCellDelete).appendTo(softwareRowActions);

                        softwareCellUpload = d.createElement("div");
                        $(softwareCellUpload).attr("class", "software-cell-action");
                        softwareCellUploadIcon = d.createElement("img");
                        $(softwareCellUploadIcon).attr("src", "res/img/upload.png");
                        softwareCellUploadTooltip = d.createElement("div");
                        $(softwareCellUploadTooltip).attr("class", "software-cell-action-tooltip-text").text("Upload");
                        $(softwareCellUploadIcon).appendTo(softwareCellUpload);
                        $(softwareCellUploadTooltip).appendTo(softwareCellUpload);
                        $(softwareCellUpload).appendTo(softwareRowActions);
                    }

                    $(softwareRowActions).appendTo(softwareRows[i]);

                    $(softwareRows[i]).appendTo(softwareTable);

                    totalSize += getSoftwareSizeByLevel(softwareData[i].LEVEL);
                }

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
        main_menu_selected = 2;
        cluster_menu_selected = 3;
    });

    $("#cluster-menu").on('click', "#cluster-menu-option-internet", function () {
        $("#content").html("Loading Hack/Internet");
        $("#cluster-menu-option-hardware").attr("class", "cluster-menu-option");
        $("#cluster-menu-option-software").attr("class", "cluster-menu-option");
        $("#cluster-menu-option-processes").attr("class", "cluster-menu-option");
        $("#cluster-menu-option-internet").attr("class", "cluster-menu-option-selected");
        d.title = "Hack/Internet";
        main_menu_selected = 2;
        cluster_menu_selected = 4;
    });
})();