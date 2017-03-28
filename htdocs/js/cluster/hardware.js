function clusterHardwareSetup() {
    $(d).on('click', "#cluster-menu-option-hardware", function () {
        $("#cluster-content").html("Loading Hack/Hardware");
        $("#cluster-menu-option-hardware").attr("class", "menu-option action-selected");
        $("#cluster-menu-option-software").attr("class", "menu-option action");
        $("#cluster-menu-option-processes").attr("class", "menu-option action");
        $("#cluster-menu-option-internet").attr("class", "menu-option action");

        d.title = "Hack/Hardware";

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
                            return "$2000";
                        case 2:
                            return "$4000";
                        case 3:
                            return "$8000";
                        case 4:
                            return "$16000";
                        case 5:
                            return "$32000";
                        case 6:
                            return "$64000";
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
                            return "$2000";
                        case 2:
                            return "$4000";
                        case 3:
                            return "$8000";
                        case 4:
                            return "$16000";
                        case 5:
                            return "$32000";
                        case 6:
                            return "$64000";
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
                            return "$2000";
                        case 2:
                            return "$4000";
                        case 3:
                            return "$8000";
                        case 4:
                            return "$16000";
                        case 5:
                            return "$32000";
                        case 6:
                            return "$64000";
                        default:
                            break;
                    }
                    return -1;
                }

                $("#cluster-content").html("");
                for (i = 0; i < len; i++) {
                    hardwareMenus[i] = d.createElement("div");
                    $(hardwareMenus[i]).attr("class", "hardware")

                    var hardwareTitle = d.createElement("div");
                    $(hardwareTitle).attr("class", "hardware-title").text("Server " + i);

                    $(hardwareTitle).appendTo(hardwareMenus[i]);

                    var hardwareCpu = d.createElement("div");
                    $(hardwareCpu).attr("class", "hardware-info").text("CPU: " + getCpuSpecByLevel(hardwareData[i].CPU));
                    $(hardwareCpu).appendTo(hardwareMenus[i]);

                    if (hardwareData[i].CPU < maxCpuLevel) {
                        var hardwareUpgradeCpu = d.createElement("div");
                        $(hardwareUpgradeCpu).attr("class", "hardware-action action").attr("id", "hardware-upgrade-cpu").attr("serverid", i).text("Upgrade CPU to " + getCpuSpecByLevel(hardwareData[i].CPU + 1) + " for " + getCpuUpgradePriceByLevel(hardwareData[i].CPU))
                        $(hardwareUpgradeCpu).appendTo(hardwareMenus[i]);
                    }

                    var hardwareRam = d.createElement("div");
                    $(hardwareRam).attr("class", "hardware-info").text("Ram: " + getRamSpecByLevel(hardwareData[i].RAM));
                    $(hardwareRam).appendTo(hardwareMenus[i]);

                    if (hardwareData[i].RAM < maxRamLevel) {
                        var hardwareUpgradeRam = d.createElement("div");
                        $(hardwareUpgradeRam).attr("class", "hardware-action action").attr("id", "hardware-upgrade-ram").attr("serverid", i).text("Upgrade RAM to " + getRamSpecByLevel(hardwareData[i].RAM + 1) + " for " + getRamUpgradePriceByLevel(hardwareData[i].RAM))
                        $(hardwareUpgradeRam).appendTo(hardwareMenus[i]);
                    }

                    var hardwareDisk = d.createElement("div");
                    $(hardwareDisk).attr("class", "hardware-info").text("Disk: " + getDiskSpecByLevel(hardwareData[i].DISK));
                    $(hardwareDisk).appendTo(hardwareMenus[i]);

                    if (hardwareData[i].DISK < maxDiskLevel) {
                        var hardwareUpgradeDisk = d.createElement("div");
                        $(hardwareUpgradeDisk).attr("class", "hardware-action action").attr("id", "hardware-upgrade-disk").attr("serverid", i).text("Upgrade Disk to " + getDiskSpecByLevel(hardwareData[i].DISK + 1) + " for " + getDiskUpgradePriceByLevel(hardwareData[i].DISK))
                        $(hardwareUpgradeDisk).appendTo(hardwareMenus[i]);
                    }

                    $(hardwareMenus[i]).appendTo($("#cluster-content"));
                }
                var hardwareNewServer = d.createElement("div");
                $(hardwareNewServer).attr("class", "hardware action");
                var hardwareTitle = d.createElement("div");
                $(hardwareTitle).attr("class", "hardware-title").text("Buy new server");
                $(hardwareTitle).appendTo(hardwareNewServer);
                var hardwareCpu = d.createElement("div");
                $(hardwareCpu).attr("class", "hardware-info").text("CPU: " + getCpuSpecByLevel(0));
                $(hardwareCpu).appendTo(hardwareNewServer);
                var hardwareRam = d.createElement("div");
                $(hardwareRam).attr("class", "hardware-info").text("Ram: " + getRamSpecByLevel(0));
                $(hardwareRam).appendTo(hardwareNewServer);
                var hardwareDisk = d.createElement("div");
                $(hardwareDisk).attr("class", "hardware-info").text("Disk: " + getDiskSpecByLevel(0));
                $(hardwareDisk).appendTo(hardwareNewServer);
                $(hardwareNewServer).appendTo($("#cluster-content"));
            }
        });
    });
}