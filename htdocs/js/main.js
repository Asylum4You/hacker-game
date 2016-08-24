(function () {
    var d = document;

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
                return "10 GB";
            case 1:
                return "25 GB";
            case 2:
                return "50 GB";
            case 3:
                return "75 GB";
            case 4:
                return "100 GB";
            case 5:
                return "125 GB";
            case 6:
                return "150 GB";
            case 7:
                return "200 GB";
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
                var len = hardwareData.length
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