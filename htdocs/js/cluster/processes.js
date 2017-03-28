function clusterProcessesSetup() {
    $(d).on('click', "#cluster-menu-option-processes", function () {
        $("#cluster-content").html("Loading Hack/Processes");
        $("#cluster-menu-option-hardware").attr("class", "menu-option action");
        $("#cluster-menu-option-software").attr("class", "menu-option action");
        $("#cluster-menu-option-processes").attr("class", "menu-option action-selected");
        $("#cluster-menu-option-internet").attr("class", "menu-option action");

        d.title = "Hack/Processes";

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
                            $(statusElem).text("Finished");
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
                            return "Finished";
                    }
                    return -1;
                }

                function addProcessAction(element, processId, type) {
                    /*
                     * type values:
                     * 0: Complete
                     * 1: Pause
                     * 2: Resume
                     * 3: Cancel
                     */

                    switch (type) {
                        case 0:
                            var processCellComplete = d.createElement("div");
                            $(processCellComplete).attr("class", "action").attr("id", "process-complete").attr("process-id", processId);
                            var processCellCompleteIcon = d.createElement("img");
                            $(processCellCompleteIcon).attr("src", "res/img/run.png");
                            break;
                    }
                    return -1;
                }

                $("#cluster-content").html("");

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

                    if (processesData[i].STATUS == 1) { }

                    if (processesData[i].STATUS == 2) {
                        $(processTimeRemaining).text("0 seconds");
                    }

                    $(processesRows[i]).appendTo(processesTable);

                }

                $(processesTable).appendTo($("#cluster-content"));

            }
        });
    });
}