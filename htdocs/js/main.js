var d = document;

var playerToken;

var menuSelection = {
    mainMenu: 2,
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
    clusterMenu: 3
    /*
     * cluster_menu_selected values:
     * 0: Not Selected
     * 1: Hardware
     * 2: Software
     * 3: Processes
     * 4: Internet
     */
};

$('input').attr('autocomplete', 'off');

clusterSetup();