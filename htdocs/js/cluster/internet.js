function clusterInternetSetup() {
    $(d).on('click', "#cluster-menu-option-internet", function () {
        $("#cluster-content").html("Loading Hack/Internet");
        $("#cluster-menu-option-hardware").attr("class", "menu-option action");
        $("#cluster-menu-option-software").attr("class", "menu-option action");
        $("#cluster-menu-option-processes").attr("class", "menu-option action");
        $("#cluster-menu-option-internet").attr("class", "menu-option action-selected");
        d.title = "Hack/Internet";
    });
}