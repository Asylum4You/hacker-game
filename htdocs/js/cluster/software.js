function clusterSoftwareSetup() {
    $(d).on('click', "#cluster-menu-option-software", function () {
        $("#cluster-content").html("Loading Hack/Software");
        $("#cluster-menu-option-hardware").attr("class", "menu-option action");
        $("#cluster-menu-option-software").attr("class", "menu-option action-selected");
        $("#cluster-menu-option-processes").attr("class", "menu-option action");
        $("#cluster-menu-option-internet").attr("class", "menu-option action");

        d.title = "Hack/Software";

        $.ajax({
            url: "ajax-testing/software.php",
            cache: false,
            success: function (result) {
                var softwareData = $.parseJSON(result);
                var len = softwareData.length;
                var softwareRows = [];
                var totalSize = 0;
                var softwareTable = d.createElement("table");

                function addSoftwareAction(element, fileId, type) {
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
                            var softwareActionDisabled = d.createElement("div");
                            $(softwareActionDisabled).attr("class", "software-action action-disabled");
                            var softwareActionDisabledIcon = d.createElement("img");
                            $(softwareActionDisabledIcon).attr("src", "res/img/disabled.png");
                            $(softwareActionDisabledIcon).appendTo(softwareActionDisabled);
                            $(softwareActionDisabled).appendTo(element);
                            break;
                        case 1:
                            var softwareActionInfo = d.createElement("div");
                            $(softwareActionInfo).attr("class", "software-action action").attr("id", "software-info").attr("fileid", fileId);
                            var softwareActionInfoIcon = d.createElement("img");
                            $(softwareActionInfoIcon).attr("src", "res/img/info.png");
                            var softwareActionInfoTooltip = d.createElement("div");
                            $(softwareActionInfoTooltip).attr("class", "action-tooltip").text("Info");
                            $(softwareActionInfoIcon).appendTo(softwareActionInfo);
                            $(softwareActionInfoTooltip).appendTo(softwareActionInfo);
                            $(softwareActionInfo).appendTo(element);
                            break;
                        case 2:
                            var softwareActionRun = d.createElement("div");
                            $(softwareActionRun).attr("class", "software-action action").attr("id", "software-run").attr("fileid", fileId);
                            var softwareActionRunIcon = d.createElement("img");
                            $(softwareActionRunIcon).attr("src", "res/img/run.png");
                            var softwareActionRunTooltip = d.createElement("div");
                            $(softwareActionRunTooltip).attr("class", "action-tooltip").text("Run");
                            $(softwareActionRunIcon).appendTo(softwareActionRun);
                            $(softwareActionRunTooltip).appendTo(softwareActionRun);
                            $(softwareActionRun).appendTo(element);
                            break;
                        case 3:
                            var softwareActionStop = d.createElement("div");
                            $(softwareActionStop).attr("class", "software-action action").attr("id", "software-stop").attr("fileid", fileId);
                            var softwareActionStopIcon = d.createElement("img");
                            $(softwareActionStopIcon).attr("src", "res/img/stop.png");
                            var softwareActionStopTooltip = d.createElement("div");
                            $(softwareActionStopTooltip).attr("class", "action-tooltip").text("Stop");
                            $(softwareActionStopIcon).appendTo(softwareActionStop);
                            $(softwareActionStopTooltip).appendTo(softwareActionStop);
                            $(softwareActionStop).appendTo(element);
                            break;
                        case 4:
                            var softwareActionEncrypt = d.createElement("div");
                            $(softwareActionEncrypt).attr("class", "software-action action").attr("id", "software-encrypt").attr("fileid", fileId);
                            var softwareActionEncryptIcon = d.createElement("img");
                            $(softwareActionEncryptIcon).attr("src", "res/img/encrypt.png");
                            var softwareActionEncryptTooltip = d.createElement("div");
                            $(softwareActionEncryptTooltip).attr("class", "action-tooltip").text("Encrypt");
                            $(softwareActionEncryptIcon).appendTo(softwareActionEncrypt);
                            $(softwareActionEncryptTooltip).appendTo(softwareActionEncrypt);
                            $(softwareActionEncrypt).appendTo(element);
                            break;
                        case 5:
                            var softwareActionDecrypt = d.createElement("div");
                            $(softwareActionDecrypt).attr("class", "software-action action").attr("id", "software-decrypt").attr("fileid", fileId);
                            var softwareActionDecryptIcon = d.createElement("img");
                            $(softwareActionDecryptIcon).attr("src", "res/img/decrypt.png");
                            var softwareActionDecryptTooltip = d.createElement("div");
                            $(softwareActionDecryptTooltip).attr("class", "action-tooltip").text("Decrypt");
                            $(softwareActionDecryptIcon).appendTo(softwareActionDecrypt);
                            $(softwareActionDecryptTooltip).appendTo(softwareActionDecrypt);
                            $(softwareActionDecrypt).appendTo(element);
                            break;
                        case 6:
                            var softwareActionDelete = d.createElement("div");
                            $(softwareActionDelete).attr("class", "software-action action").attr("id", "software-delete").attr("fileid", fileId);
                            var softwareActionDeleteIcon = d.createElement("img");
                            $(softwareActionDeleteIcon).attr("src", "res/img/delete.png");
                            var softwareActionDeleteTooltip = d.createElement("div");
                            $(softwareActionDeleteTooltip).attr("class", "action-tooltip").text("Delete");
                            $(softwareActionDeleteIcon).appendTo(softwareActionDelete);
                            $(softwareActionDeleteTooltip).appendTo(softwareActionDelete);
                            $(softwareActionDelete).appendTo(element);
                            break;
                        case 7:
                            var softwareActionRemove = d.createElement("div");
                            $(softwareActionRemove).attr("class", "software-action action").attr("id", "software-remove").attr("fileid", fileId);
                            var softwareActionRemoveIcon = d.createElement("img");
                            $(softwareActionRemoveIcon).attr("src", "res/img/remove.png");
                            var softwareActionRemoveTooltip = d.createElement("div");
                            $(softwareActionRemoveTooltip).attr("class", "action-tooltip").text("Remove");
                            $(softwareActionRemoveIcon).appendTo(softwareActionRemove);
                            $(softwareActionRemoveTooltip).appendTo(softwareActionRemove);
                            $(softwareActionRemove).appendTo(element);
                            break;
                        case 8:
                            var softwareActionUpload = d.createElement("div");
                            $(softwareActionUpload).attr("class", "software-action action").attr("id", "software-upload").attr("fileid", fileId);
                            var softwareActionUploadIcon = d.createElement("img");
                            $(softwareActionUploadIcon).attr("src", "res/img/upload.png");
                            var softwareActionUploadTooltip = d.createElement("div");
                            $(softwareActionUploadTooltip).attr("class", "action-tooltip").text("Upload");
                            $(softwareActionUploadIcon).appendTo(softwareActionUpload);
                            $(softwareActionUploadTooltip).appendTo(softwareActionUpload);
                            $(softwareActionUpload).appendTo(element);
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

                $("#cluster-content").html("");

                $(softwareTable).attr("class", "software-table");

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

                $(softwareTable).appendTo($("#cluster-content"));
            }
        });
    });
}