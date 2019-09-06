(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n    <header class=\"header\">\n        <div class=\"branding\">\n            <a href=\"#\" class=\"nav-link\">\n                <span class=\"title\">ATLAS</span>\n            </a>\n        </div>\n        <div class=\"header-actions\">\n            <clr-dropdown>\n                <button class=\"nav-icon\" clrDropdownTrigger>\n                    <clr-icon shape=\"cog\"></clr-icon>\n                    <clr-icon shape=\"caret down\"></clr-icon>\n                </button>\n                <clr-dropdown-menu *clrIfOpen clrPosition=\"bottom-right\">\n                    <a href=\"home\" clrDropdownItem>About</a>\n                    <a href=\"home\" clrDropdownItem>Preferences</a>\n                    <a href=\"home\" clrDropdownItem>Log out</a>\n                </clr-dropdown-menu>\n            </clr-dropdown>\n        </div>\n    </header>\n    <div class=\"content-container\">\n        <clr-vertical-nav [clrVerticalNavCollapsible]=\"true\" [(clrVerticalNavCollapsed)]=\"collapsed\">\n            <a clrVerticalNavLink routerLink=\"home\" routerLinkActive=\"active\">\n                <clr-icon clrVerticalNavIcon shape=\"dashboard\"></clr-icon>\n                Dashboard\n            </a>\n            <a clrVerticalNavLink routerLink=\"import\" routerLinkActive=\"active\">\n                <clr-icon clrVerticalNavIcon shape=\"upload\"></clr-icon>\n                Import\n            </a>\n            <a clrVerticalNavLink routerLink=\"findings\" routerLinkActive=\"active\">\n                <clr-icon clrVerticalNavIcon shape=\"bullseye\"></clr-icon>\n                Findings\n            </a>\n            <a clrVerticalNavLink routerLink=\"tasks\" routerLinkActive=\"active\">\n                <clr-icon clrVerticalNavIcon shape=\"tasks\"></clr-icon>\n                Tasks\n            </a>\n            <a clrVerticalNavLink routerLink=\"tools\" routerLinkActive=\"active\">\n                <clr-icon clrVerticalNavIcon shape=\"wrench\"></clr-icon>\n                Tools\n            </a>\n            <!--<a clrVerticalNavLink routerLink=\"test\" routerLinkActive=\"active\">\n                <clr-icon clrVerticalNavIcon shape=\"flag\"></clr-icon>\n                Test\n            </a>-->\n        </clr-vertical-nav>\n        <div class=\"content-area\">\n\n            <router-outlet></router-outlet>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/findings/findings.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/findings/findings.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clr-row\">\n    <div class=\"clr-col-5\">\n        <clr-datagrid [(clrDgSingleSelected)]=\"selected_finding\"\n            (clrDgSingleSelectedChange)=\"selectedFindingChanged($event)\" [clrDgRowSelection]=\"true\"\n            class=\"datagrid-compact\">\n            <clr-dg-action-bar>\n                <div class=\"btn-group\">\n                    <button class=\"btn\" (click)=\"addFindingModal = true\">\n                        <clr-icon shape=\"plus\"></clr-icon> Add Finding\n                    </button>\n                    <button class=\"btn\" [disabled]=\"!selected_finding\" (click)=\"editFindingModal = true\">\n                        <clr-icon shape=\"pencil\"></clr-icon> Edit Finding\n                    </button>\n                    <button class=\"btn\" [disabled]=\"!selected_finding\" (click)=\"deleteFindingModal = true\">\n                        <clr-icon shape=\"trash\"></clr-icon> Delete Finding\n                    </button>                    \n                </div>\n                <button class=\"btn\" [disabled]=\"!selected_finding\" (click)=\"toggleFindingDone(selected_finding)\">\n                    <clr-icon shape=\"check\"></clr-icon> Toggle Done\n                </button>\n            </clr-dg-action-bar>\n            <clr-dg-placeholder>No findings found!</clr-dg-placeholder>\n            <clr-dg-column [clrDgField]=\"'name'\">Name<clr-dg-string-filter [clrDgStringFilter]=\"findingFilter\">\n                </clr-dg-string-filter>\n            </clr-dg-column>\n            <clr-dg-column [clrDgField]=\"'Done'\">Done<clr-dg-string-filter [clrDgStringFilter]=\"FindingCheckedFilter\">\n                </clr-dg-string-filter>\n            </clr-dg-column>\n            <clr-dg-row *clrDgItems=\"let finding of findings\" [clrDgItem]=\"finding\">\n                <clr-dg-cell>{{finding.name}}</clr-dg-cell>\n                <clr-dg-cell>\n                    <div *ngIf=\"finding.checked === 1\">\n                        <clr-icon shape=\"check\"></clr-icon>\n                    </div>\n                </clr-dg-cell>\n            </clr-dg-row>\n            <clr-dg-footer>\n                <clr-dg-pagination #finding_pagination [clrDgPageSize]=\"25\">\n                    {{finding_pagination.firstItem + 1}} - {{finding_pagination.lastItem + 1}} of\n                    {{finding_pagination.totalItems}} findings\n                </clr-dg-pagination>\n            </clr-dg-footer>\n        </clr-datagrid>\n    </div>\n    <div class=\"clr-col\">\n        <clr-datagrid [(clrDgSelected)]=\"selected_services\" [clrDgRowSelection]=\"true\" class=\"datagrid-compact\">\n            <clr-dg-action-bar>\n                <div class=\"btn-group\">\n                    <button [disabled]=\"!selected_finding\" class=\"btn\" (click)=\"notYetImplementedModal = true\">\n                        <clr-icon shape=\"plus\"></clr-icon> Add Service\n                    </button>\n                    <button [disabled]=\"!selected_services.length > 0\" class=\"btn\" (click)=\"notYetImplementedModal = true\">\n                        <clr-icon shape=\"pencil\"></clr-icon> Edit Service\n                    </button>\n                    <button [disabled]=\"!selected_services.length > 0\" class=\"btn\" (click)=\"notYetImplementedModal = true\">\n                        <clr-icon shape=\"trash\"></clr-icon> Delete Service\n                    </button>\n                </div>\n                <div class=\"btn-group\">\n                    <button [disabled]=\"!selected_services.length > 0\" class=\"btn\" (click)=\"generatePocModal = true\">\n                        <clr-icon shape=\"play\"></clr-icon> Generate PoC\n                    </button>\n                </div>\n            </clr-dg-action-bar>\n            <clr-dg-placeholder>No services found!</clr-dg-placeholder>\n            <clr-dg-column [clrDgField]=\"'host'\">IP<clr-dg-string-filter [clrDgStringFilter]=\"hostFilter\">\n                </clr-dg-string-filter>\n            </clr-dg-column>\n            <clr-dg-column [clrDgField]=\"'fqdn'\">FQDN<clr-dg-string-filter [clrDgStringFilter]=\"hostFilter\">\n            </clr-dg-string-filter>\n        </clr-dg-column>\n            <clr-dg-column [clrDgField]=\"'port'\">Port<clr-dg-string-filter [clrDgStringFilter]=\"portFilter\">\n                </clr-dg-string-filter>\n            </clr-dg-column>\n            <clr-dg-column [clrDgField]=\"'name'\">Type<clr-dg-string-filter [clrDgStringFilter]=\"typeFilter\">\n                </clr-dg-string-filter>\n            </clr-dg-column>\n            <clr-dg-column [clrDgField]=\"'haspoc'\">Has POC<clr-dg-string-filter [clrDgStringFilter]=\"typeFilter\">\n                </clr-dg-string-filter>\n            </clr-dg-column>\n            <clr-dg-column [clrDgField]=\"'haspoc'\">FP<clr-dg-string-filter [clrDgStringFilter]=\"typeFilter\">\n                </clr-dg-string-filter>\n            </clr-dg-column>\n            <clr-dg-column>PoC's</clr-dg-column>\n            <div *ngIf=\"selected_finding\">\n                <clr-dg-row *clrDgItems=\"let service of finding_services\" [clrDgItem]=\"service\">\n                    <clr-dg-cell>{{service.host.ip}}</clr-dg-cell>\n                    <clr-dg-cell>{{service.host.fqdn}}</clr-dg-cell>\n                    <clr-dg-cell>{{service.port}}</clr-dg-cell>\n                    <clr-dg-cell>{{service.name}}</clr-dg-cell>\n                    <clr-dg-cell>\n                        <div *ngIf=\"service.haspoc === 1; else no_poc\">\n                            <clr-icon shape=\"check\" (click)=\"setHasPoc(service)\"></clr-icon>\n                        </div>\n                        <ng-template #no_poc>\n                            <clr-icon shape=\"times\" (click)=\"setHasPoc(service)\"></clr-icon>\n                        </ng-template>\n                    </clr-dg-cell>\n                    <clr-dg-cell>\n                        <div *ngIf=\"service.falsepositive === 1; else falsepositive\">\n                            <clr-icon shape=\"check\" (click)=\"setFalsePositive(service)\"></clr-icon>\n                        </div>\n                        <ng-template #falsepositive>\n                            <clr-icon shape=\"times\" (click)=\"setFalsePositive(service)\"></clr-icon>\n                        </ng-template>\n                    </clr-dg-cell>\n                    <clr-dg-cell>\n                        <clr-icon shape=\"pop-out\" (click)=\"viewPocs(service)\"></clr-icon>\n                    </clr-dg-cell>\n                </clr-dg-row>\n            </div>\n            <clr-dg-footer>\n                <clr-dg-pagination #poc_pagination [clrDgPageSize]=\"25\">\n                    {{poc_pagination.firstItem + 1}} - {{poc_pagination.lastItem + 1}} of\n                    {{poc_pagination.totalItems}} services\n                </clr-dg-pagination>\n            </clr-dg-footer>\n        </clr-datagrid>\n    </div>\n\n</div>\n\n<clr-modal [(clrModalOpen)]=\"generatePocModal\" [clrModalSize]=\"'lg'\">\n    <h3 class=\"modal-title\">Generate PoC</h3>\n    <div class=\"modal-body\">\n        <clr-datagrid [(clrDgSingleSelected)]=\"selected_tool\"\n            (clrDgSingleSelectedChange)=\"SetThreads(selected_tool.threads)\" [clrDgRowSelection]=\"true\">>\n            <clr-dg-placeholder>No tools found!</clr-dg-placeholder>\n            <clr-dg-column [clrDgField]=\"'name'\">Name\n                <clr-dg-string-filter [clrDgStringFilter]=\"toolFilter\"></clr-dg-string-filter>\n            </clr-dg-column>\n            <clr-dg-column [clrDgField]=\"'commandstring'\">Commandstring\n                <clr-dg-string-filter [clrDgStringFilter]=\"commandstringFilter\"></clr-dg-string-filter>\n            </clr-dg-column>\n            <clr-dg-row *clrDgItems=\"let tool of tools\" [clrDgItem]=\"tool\">\n                <clr-dg-cell>{{tool.name}}</clr-dg-cell>\n                <clr-dg-cell>{{tool.commandstring}}</clr-dg-cell>\n            </clr-dg-row>\n            <clr-dg-footer>\n                <clr-dg-pagination #tool_pagination [clrDgPageSize]=\"20\">\n                    {{tool_pagination.firstItem + 1}} - {{tool_pagination.lastItem + 1}} of\n                    {{tool_pagination.totalItems}} tools\n                </clr-dg-pagination>\n            </clr-dg-footer>\n        </clr-datagrid>\n        <form clrForm>\n            <section class=\"form-block\">\n                <clr-input-container>\n                    <label>Threads</label><input clrInput [(ngModel)]=\"task_threads\" name=\"threadsInput\" type=\"text\"\n                        id=\"requiredInput\" placeholder=\"# of threads\">\n                    <clr-control-error>This field is required!</clr-control-error>\n                </clr-input-container>\n            </section>\n        </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" [disabled]=\"!task_threads\" class=\"btn btn-primary\"\n            (click)=\"generatePocModal = false; AddTask()\">Ok</button>\n    </div>\n</clr-modal>\n\n\n<clr-modal [(clrModalOpen)]=\"viewPocModal\" [clrModalStaticBackdrop]=\"false\" [clrModalSize]=\"'xl'\">\n    <h3 class=\"modal-title\" *ngIf=\"selected_finding && selected_service && selected_service.host\">\n        {{selected_finding.name}}\n        ({{selected_service.host.ip}}:{{selected_service.port}})</h3>\n    <div class=\"modal-body\" height=\"600px\" id=\"pocmodal\">\n\n        <clr-accordion>\n            <clr-accordion-panel *ngFor=\"let poc of service_pocs\">\n                <clr-accordion-title>\n                    {{poc.info}}\n                    <span style=\"float: right;\">\n                        <button type=\"button\" title=\"Copy To Clipboard\" class=\"btn btn-icon btn-primary btn-sm\"\n                            aria-label=\"settings\" (click)=\"copyToClipboard(poc.poc)\">\n                            <clr-icon shape=\"copy\"></clr-icon>\n                        </button>\n                    </span>\n                </clr-accordion-title>\n                <clr-accordion-content *clrIfExpanded>\n                    <textarea name=\"description\" rows=\"15\" cols=\"100\">{{poc.poc}}</textarea>\n                </clr-accordion-content>\n            </clr-accordion-panel>\n        </clr-accordion>\n    </div>\n\n\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"viewPocModal = false\">Ok</button>\n    </div>\n\n</clr-modal>\n\n\n<clr-modal [(clrModalOpen)]=\"addFindingModal\" [clrModalStaticBackdrop]=\"false\" [clrModalSize]=\"'lg'\">\n    <h3 class=\"modal-title\">Add finding</h3>\n    <div class=\"modal-body\" height=\"600px\" id=\"pocmodal\">\n        <form clrForm>\n            <clr-input-container>\n                <label>Finding name</label>\n                <input clrInput placeholder=\"Enter finding name...\" name=\"name\" [(ngModel)]=\"newFindingName\" required />\n                <clr-control-error>This field is required!</clr-control-error>\n            </clr-input-container>\n        </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline\" (click)=\"addFindingModal = false\">Cancel</button>\n        <button type=\"button\" [disabled]=\"!newFindingName\" class=\"btn btn-primary\"\n            (click)=\"addFindingModal = false; AddFinding(newFindingName)\">Add</button>\n    </div>\n</clr-modal>\n\n<clr-modal [(clrModalOpen)]=\"deleteFindingModal\">\n    <h3 class=\"modal-title\">Delete finding?</h3>\n    <div class=\"modal-body\">\n        <p *ngIf=\"selected_finding\">Are you sure you want to delete finding \"<b>{{selected_finding.name}}</b>\"?</p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline\" (click)=\"deleteFindingModal = false\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-warning\"\n            (click)=\"deleteFinding(selected_finding); deleteFindingModal = false\">Delete</button>\n    </div>\n</clr-modal>\n\n<clr-modal [(clrModalOpen)]=\"editFindingModal\" [clrModalStaticBackdrop]=\"false\" [clrModalSize]=\"'lg'\">\n    <h3 class=\"modal-title\">Edit finding</h3>\n    <div class=\"modal-body\" height=\"600px\" id=\"pocmodal\">\n        <form clrForm>\n            <clr-input-container>\n                <p *ngIf=\"selected_finding\">Editing \"<b>{{selected_finding.name}}</b>\"...</p>\n                <label>Finding name</label>\n                <input *ngIf=\"selected_finding\" clrInput placeholder=\"Enter finding name...\" name=\"name\"\n                    [(ngModel)]=\"selected_finding.name\" required />\n                <clr-control-error>This field is required!</clr-control-error>\n            </clr-input-container>\n        </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline\" (click)=\"editFindingModal = false\">Cancel</button>\n        <button *ngIf=\"selected_finding\" type=\"button\" [disabled]=\"!selected_finding.name\" class=\"btn btn-primary\"\n            (click)=\"editFindingModal = false; editFinding(selected_finding)\">Edit</button>\n    </div>\n</clr-modal>\n\n<clr-modal [(clrModalOpen)]=\"addServiceModal\" [clrModalStaticBackdrop]=\"false\" [clrModalSize]=\"'lg'\">\n    <h3 class=\"modal-title\">Add service</h3>\n    <div class=\"modal-body\" height=\"600px\" id=\"pocmodal\">\n        <h5 class=\"modal-title\">Host</h5>\n        <form clrForm>\n            <clr-input-container>\n                <label>IP address</label>\n                <input clrInput placeholder=\"e.g. 192.168.0.1\" name=\"ip\" [(ngModel)]=\"newHostIP\" required />\n                <clr-control-error>This field is required!</clr-control-error>\n            </clr-input-container>\n            <clr-input-container>\n                <label>FQDN</label>\n                <input clrInput placeholder=\"e.g. example.com\" name=\"fqdn\" [(ngModel)]=\"newHostFQDN\" />\n            </clr-input-container>\n            <clr-input-container>\n                <label>MAC address</label>\n                <input clrInput placeholder=\"e.g. 00:0a:95:9d:68:16\" name=\"mac\" [(ngModel)]=\"newHostMAC\" />\n            </clr-input-container>\n            <clr-input-container>\n                <label>Operating System</label>\n                <input clrInput placeholder=\"e.g. Windows Server 2012\" name=\"os\" [(ngModel)]=\"newHostOS\" />\n            </clr-input-container>\n        </form>\n        <h5 class=\"modal-title\">Service</h5>\n        <form clrForm>\n            <clr-input-container>\n                <label>Service name</label>\n                <input clrInput placeholder=\"e.g. www or rdp\" name=\"servicename\" [(ngModel)]=\"newServiceName\"\n                    required />\n                <clr-control-error>This field is required!</clr-control-error>\n            </clr-input-container>\n            <clr-input-container>\n                <label>Port</label>\n                <input clrInput placeholder=\"Enter finding name...\" name=\"serviceport\" [(ngModel)]=\"newServicePort\"\n                    required />\n                <clr-control-error>This field is required!</clr-control-error>\n            </clr-input-container>\n            <clr-select-container>\n                <label>Protocol</label>\n                <select clrSelect name=\"serviceprotocol\" [(ngModel)]=\"newServiceProtocol\" required>\n                    <option value=\"tcp\">tcp</option>\n                    <option value=\"udp\">udp</option>\n                </select>\n                <clr-control-error>This field is required!</clr-control-error>\n            </clr-select-container>\n        </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline\" (click)=\"addServiceModal = false\">Cancel</button>\n        <button type=\"button\" [disabled]=\"!newServiceName\" class=\"btn btn-primary\"\n            (click)=\"addServiceModal = false; addService(newFindingName)\">Add</button>\n    </div>\n</clr-modal>\n\n\n<clr-modal [(clrModalOpen)]=\"notYetImplementedModal\" [clrModalStaticBackdrop]=\"false\" [clrModalSize]=\"'lg'\">\n    <h3 class=\"modal-title\">Feature not yet implemented</h3>\n    <div class=\"modal-body\">\n      Please forward your complaints or requests to /dev/null\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"notYetImplementedModal = false\">Kusje van de boys</button>\n    </div>\n  </clr-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Home</h1><br>\nPlease note that this is a beta version of ATLAS which is<br>\nstill undergoing final testing before its official release. The<br>\nplatform, its software and all content found on it are provided on an<br>\n“as is” and “as available” basis. ATLAS does not give any warranties,<br>\nwhether express or implied, as to the suitability or usability of the<br>\nwebsite, its software or any of its content.<br><br>\n\nATLAS will not be liable for any loss, whether such loss is direct,<br>\nindirect, special or consequential, suffered by any party as a result<br>\nof their use of ATLAS, its software or content. Any<br>\ndownloading or uploading of material to the website is done at the<br>\nuser’s own risk and the user will be solely responsible for any<br>\ndamage to any computer system or loss of data that results from such<br>\nactivities.<br><br>\n\nShould you encounter any bugs, glitches, lack of functionality or<br>\nother problems on the website, please let us know immediately so we<br>\ncan rectify these accordingly. Your help in this regard is greatly<br>\nappreciated! You can write to us at this address noreply@10minutemail.com.<br>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/import/import.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/import/import.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clr-row\">\n    <div class=\"clr-col-4\">\n        <div class=\"card\">\n            <div class=\"card-block\">\n                <h4 class=\"card-title\">Nessus import</h4>\n                <p class=\"card-text\"><label class=\"btn btn-outline\">\n                       <form #NessusForm=\"ngForm\"> <input id=\"inputfile\" type=\"file\" class=\"button-input\" (change)=\"selectFile($event); \" accept=\".nessus\" placeholder=\"Upload file\"></form>\n                    </label></p>                      \n                                  \n            </div>\n            <div class=\"card-footer\">\n                    <ng-container *ngIf=\"uploading; then progress; else noprogress\"></ng-container>\n\n                        <ng-template #progress>                                \n                                <ng-container *ngIf=\"success; then success; else nosuccess\"></ng-container>\n                                <ng-template #success>                                \n                                        <div class=\"progress success\"><progress value=\"100\" max=\"100\"></progress>\n                                        </div>     \n                                    </ng-template>  \n                                <ng-template #nosuccess>                                \n                                    <div class=\"progress loop\"><progress></progress>\n                                    </div>     \n                                </ng-template>   \n                        </ng-template>  \n\n                        <ng-template #noprogress>                                \n                            <div class=\"progress static\"><progress value=\"0\" max=\"100\"></progress>\n                            </div>     \n                        </ng-template>     \n                    <button class=\"btn btn-primary\" [disabled]=\"uploading && !success\" (click)=\"upload()\">Upload</button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"clr-col-4\">\n    <div class=\"card\">\n        <div class=\"card-block\">\n                <h4 class=\"card-title\">Current imports</h4>\n<clr-datagrid>\n    <clr-dg-placeholder>No imports found!</clr-dg-placeholder>\n    <clr-dg-column [clrDgField]=\"'name'\">Name</clr-dg-column>\n    <clr-dg-column [clrDgField]=\"'name'\">State</clr-dg-column>\n    <clr-dg-row *clrDgItems=\"let import of imports\" [clrDgItem]=\"import\">\n      <clr-dg-cell>{{import.name}}</clr-dg-cell>\n      <clr-dg-cell>\n        <span *ngIf=\"import.running; else done\" class=\"spinner spinner-inline\"></span>\n        <ng-template #done>\n          <clr-icon shape=\"check\"></clr-icon>\n        </ng-template></clr-dg-cell>\n    </clr-dg-row>\n  </clr-datagrid>\n  </div>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tasks/tasks.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tasks/tasks.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs\">\n    <clr-datagrid [(clrDgSingleSelected)]=\"selected_task\" [clrDgRowSelection]=\"true\">\n      <clr-dg-placeholder>No tasks found!</clr-dg-placeholder>\n      <clr-dg-column [clrDgField]=\"'name'\">Name\n        <clr-dg-string-filter [clrDgStringFilter]=\"taskFilter\"></clr-dg-string-filter>\n      </clr-dg-column>\n      <clr-dg-column [clrDgField]=\"'starttime'\">Starttime\n        <clr-dg-string-filter [clrDgStringFilter]=\"taskFilter\"></clr-dg-string-filter>\n      </clr-dg-column>\n      <clr-dg-column [clrDgField]=\"'tool'\">Tool\n        <clr-dg-string-filter [clrDgStringFilter]=\"toolFilter\"></clr-dg-string-filter>\n      </clr-dg-column>\n      <clr-dg-column [clrDgField]=\"'completedtargets'\"># Completed\n        <clr-dg-string-filter [clrDgStringFilter]=\"completedtargetsfilter\"></clr-dg-string-filter>\n      </clr-dg-column>\n      <clr-dg-column [clrDgField]=\"'completedtargets'\">Run\n        <clr-dg-string-filter [clrDgStringFilter]=\"completedtargetsfilter\"></clr-dg-string-filter>\n      </clr-dg-column>\n      <clr-dg-column [clrDgField]=\"'completedtargets'\">Error\n        <clr-dg-string-filter [clrDgStringFilter]=\"completedtargetsfilter\"></clr-dg-string-filter>\n      </clr-dg-column>\n      <clr-dg-row *clrDgItems=\"let task of tasks\" [clrDgItem]=\"task\">\n        <clr-dg-cell>{{task.id}}</clr-dg-cell>\n        <clr-dg-cell>{{task.starttime | date:'h:mm:ss, d LLL'}}</clr-dg-cell>\n        <clr-dg-cell>NYI</clr-dg-cell>\n        <clr-dg-cell>{{task.targets_completed}} / {{task.services.length}}</clr-dg-cell>\n        <clr-dg-cell>\n          <span *ngIf=\"task.running; else run\" class=\"spinner spinner-inline\"></span>\n          <ng-template #run>\n            <clr-icon shape=\"play\" (click)=\"loading=true; StartTask(task)\"></clr-icon> Run\n          </ng-template>\n        </clr-dg-cell>\n        <clr-dg-cell>\n          <a role=\"tooltip\" aria-haspopup=\"true\" class=\"tooltip tooltip-lg tooltip-top-left\">\n            <clr-icon *ngIf=\"task.errormessage\" shape=\"error-circle\" class=\"is-error\" (click)=\"errorModal = true\">\n            </clr-icon><span class=\"tooltip-content\">{{task.errormessage}}</span>\n          </a>\n        </clr-dg-cell>\n      </clr-dg-row>\n      <clr-dg-footer>\n        <clr-dg-pagination #task_pagination [clrDgPageSize]=\"20\">\n          {{task_pagination.firstItem + 1}} - {{task_pagination.lastItem + 1}} of {{task_pagination.totalItems}} tasks\n        </clr-dg-pagination>\n      </clr-dg-footer>\n    </clr-datagrid>\n  </div>\n</div>\n\n<button type=\"button\" class=\"btn btn-icon btn-primary\" aria-label=\"settings\" (click)=\"GetTasks()\">\n    <clr-icon shape=\"refresh\"></clr-icon> Refresh\n</button>\n\n<clr-modal [(clrModalOpen)]=\"errorModal\" [clrModalSize]=\"'lg'\">\n  <h3 *ngIf=\"selected_task\" class=\"modal-title\">Task {{selected_task.id}} error log</h3>\n  <div class=\"modal-body\">\n    <textarea *ngIf=\"selected_task\" name=\"description\" rows=\"15\" cols=\"90\">{{selected_task.errormessage}}</textarea>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"errorModal = false\">Ok</button>\n  </div>\n</clr-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/test/test.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/test/test.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"clr-form\">\n    <div class=\"clr-form-control\">\n        <label class=\"clr-control-label\">Basic</label>\n        <div class=\"clr-control-container\">\n            <div class=\"clr-file-wrapper\">\n                <label for=\"basic\" class=\"clr-control-label\"><span class=\"btn btn-sm\">browse</span></label>\n                <input type=\"file\" id=\"basic\" placeholder=\"Enter value here\" class=\"clr-file\">\n            </div>\n            <!-- IMPORTANT DIFFERENCE IN STRUCTURE! ICON IS NOT PART OF THE INPUT WRAPPER -->\n            <clr-icon class=\"clr-validate-icon\" shape=\"exclamation-circle\"></clr-icon>\n            <span class=\"clr-subtext\">Helper Text</span>\n        </div>\n    </div>\n    \n    <div class=\"clr-form-control\">\n        <label for=\"basic-default\" class=\"clr-control-label\">Basic default</label>\n        <div class=\"clr-control-container\">\n            <div class=\"clr-file-wrapper\">\n                <input type=\"file\" id=\"basic-default\" placeholder=\"Enter value here\">\n            </div>\n            <!-- IMPORTANT DIFFERENCE IN STRUCTURE! ICON IS NOT PART OF THE INPUT WRAPPER -->\n            <clr-icon class=\"clr-validate-icon\" shape=\"exclamation-circle\"></clr-icon>\n            <span class=\"clr-subtext\">Helper Text</span>\n        </div>\n    </div>\n    \n    <div class=\"clr-form-control\">\n        <label class=\"clr-control-label\">Error</label>\n        <div class=\"clr-control-container clr-error\">\n            <div class=\"clr-file-wrapper\">\n                <label for=\"error\" class=\"clr-control-label\"><span class=\"btn btn-sm\">browse</span></label>\n                <input type=\"file\" id=\"error\" placeholder=\"Enter value here\" class=\"clr-file\">\n            </div>\n            <!-- IMPORTANT DIFFERENCE IN STRUCTURE! ICON IS NOT PART OF THE INPUT WRAPPER -->\n            <clr-icon class=\"clr-validate-icon\" shape=\"exclamation-circle\"></clr-icon>\n            <span class=\"clr-subtext\">Helper Text</span>\n        </div>\n    </div>\n    \n    <div class=\"clr-form-control\">\n        <label for=\"error-default\" class=\"clr-control-label\">Error default</label>\n        <div class=\"clr-control-container clr-error\">\n            <div class=\"clr-file-wrapper\">\n                <input type=\"file\" id=\"error-default\" placeholder=\"Enter value here\">\n            </div>\n            <!-- IMPORTANT DIFFERENCE IN STRUCTURE! ICON IS NOT PART OF THE INPUT WRAPPER -->\n            <clr-icon class=\"clr-validate-icon\" shape=\"exclamation-circle\"></clr-icon>\n            <span class=\"clr-subtext\">Helper Text</span>\n        </div>\n    </div>\n\n    <div class=\"clr-form-control clr-form-control-disabled\">\n        <label class=\"clr-control-label\">Disabled</label>\n        <div class=\"clr-control-container clr-error\">\n            <div class=\"clr-file-wrapper\">\n                <label for=\"disabled\" class=\"clr-control-label\"><span class=\"btn btn-sm\">browse</span></label>\n                <input type=\"file\" id=\"disaled\" disabled placeholder=\"Enter value here\" class=\"clr-file\">\n            </div>\n            <!-- IMPORTANT DIFFERENCE IN STRUCTURE! ICON IS NOT PART OF THE INPUT WRAPPER -->\n            <clr-icon class=\"clr-validate-icon\" shape=\"exclamation-circle\"></clr-icon>\n            <span class=\"clr-subtext\">Helper Text</span>\n        </div>\n    </div>\n    \n    <div class=\"clr-form-control clr-form-control-disabled\">\n        <label for=\"disabled-default\" class=\"clr-control-label\">Disabled default</label>\n        <div class=\"clr-control-container clr-error\">\n            <div class=\"clr-file-wrapper\">\n                <input type=\"file\" id=\"disabled-default\" disabled placeholder=\"Enter value here\">\n            </div>\n            <!-- IMPORTANT DIFFERENCE IN STRUCTURE! ICON IS NOT PART OF THE INPUT WRAPPER -->\n            <clr-icon class=\"clr-validate-icon\" shape=\"exclamation-circle\"></clr-icon>\n            <span class=\"clr-subtext\">Helper Text</span>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tools/tools.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tools/tools.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs\">\n    <clr-datagrid [(clrDgSingleSelected)]=\"selected_tool\" [clrDgRowSelection]=\"true\">\n      <clr-dg-action-bar>\n        <div class=\"btn-group\">\n          <button class=\"btn\" (click)=\"form_tool = {}; wizardLarge.reset(); lgOpen = true; new_tool = true;\">\n            <clr-icon shape=\"plus\"></clr-icon> Add Tool\n          </button>\n          <button class=\"btn\" [disabled]=\"! selected_tool\"\n            (click)=\"wizardLarge.reset(); test_target=''; test_port=''; lgOpen = true; new_tool = false; form_tool = selected_tool;  ParseCommand()\">\n            <clr-icon shape=\"pencil\"></clr-icon> Edit Tool\n          </button>\n          <button class=\"btn\" [disabled]=\"! selected_tool\" (click)=\"deleteToolModal = true\">\n            <clr-icon shape=\"trash\"></clr-icon> Delete Tool\n          </button>\n        </div>\n      </clr-dg-action-bar>\n      <clr-dg-placeholder>No tools found!</clr-dg-placeholder>\n      <clr-dg-column [clrDgField]=\"'name'\">Name\n        <clr-dg-string-filter [clrDgStringFilter]=\"toolFilter\"></clr-dg-string-filter>\n      </clr-dg-column>\n      <clr-dg-column [clrDgField]=\"'info'\">Info</clr-dg-column>\n      <clr-dg-row *clrDgItems=\"let tool of tools\" [clrDgItem]=\"tool\">\n        <clr-dg-cell>{{tool.name}}</clr-dg-cell>\n        <clr-dg-cell>\n          <a role=\"tooltip\" aria-haspopup=\"true\" class=\"tooltip tooltip-lg tooltip-top-left\">\n            <clr-icon shape=\"info-circle\" class=\"is-info\" (click)=\"infoModal = true\">\n            </clr-icon><span class=\"tooltip-content\"><b>Name: </b>{{tool.name}} <br>\n              <b>Execution string: </b>{{tool.commandstring}} <br>\n              <b>Expected good: </b>{{tool.expected_good}} <br>\n              <b>Expected bad: </b>{{tool.expected_bad}} <br>\n              <b>Timeout: </b>{{tool.timeout}} <br></span>\n          </a>\n        </clr-dg-cell>\n      </clr-dg-row>\n      <clr-dg-footer>\n        <clr-dg-pagination #tool_pagination [clrDgPageSize]=\"20\">\n          {{tool_pagination.firstItem + 1}} - {{tool_pagination.lastItem + 1}} of {{tool_pagination.totalItems}} tools\n        </clr-dg-pagination>\n      </clr-dg-footer>\n    </clr-datagrid>\n  </div>\n</div>\n\n<clr-wizard #wizardlg [(clrWizardOpen)]=\"lgOpen\" clrWizardSize=\"xl\">\n  <clr-wizard-title>\n    <div *ngIf=\"new_tool;else edit_tool\">Add Tool</div>\n    <ng-template #edit_tool>Edit tool</ng-template>\n  </clr-wizard-title>\n\n  <clr-wizard-button [type]=\"'cancel'\">Cancel</clr-wizard-button>\n  <clr-wizard-button [type]=\"'previous'\">Back</clr-wizard-button>\n  <clr-wizard-button [type]=\"'next'\">Next</clr-wizard-button>\n  <clr-wizard-button [type]=\"'finish'\" (click)=\"FinishWizard(form_tool);\">Finish</clr-wizard-button>\n\n  <clr-wizard-page\n    [clrWizardPageNextDisabled]=\"(name.pristine || commandstring.pristine || !toolForm.valid) && new_tool\">\n    <ng-template clrPageTitle>Tool settings</ng-template>\n    <form clrForm #toolForm=\"ngForm\">\n      <section class=\"form-block\">\n\n        <clr-input-container>\n          <label>Name</label>\n          <input placeholder=\"Name\" clrInput [(ngModel)]=\"form_tool.name\" name=\"name\" id=\"name\" #name=\"ngModel\"\n            required />\n          <clr-control-error>This field is required!</clr-control-error>\n        </clr-input-container>\n        <clr-input-container>\n          <label>Command string</label>\n          <input placeholder=\"nmap <host> -p <port>\" clrInput [(ngModel)]=\"form_tool.commandstring\" name=\"commandstring\"\n            #commandstring=\"ngModel\" id=\"commandstring\" required size=\"70\" />\n          <clr-control-error>This field is required!</clr-control-error>\n        </clr-input-container>\n\n        <clr-input-container>\n          <label>Expected good</label>\n          <input clrInput [(ngModel)]=\"form_tool.expected_good\" name=\"expected_good\" size=\"70\" />\n        </clr-input-container>\n\n        <clr-input-container>\n          <label>Expected bad</label>\n          <input clrInput [(ngModel)]=\"form_tool.expected_bad\" name=\"expected_bad\" size=\"70\" />\n        </clr-input-container>\n\n        <clr-input-container>\n          <label>Timeout</label>\n          <input clrInput [(ngModel)]=\"form_tool.timeout\" name=\"timeout\" />\n        </clr-input-container>\n\n        <clr-input-container>\n          <label>Threads</label>\n          <input clrInput [(ngModel)]=\"form_tool.threads\" name=\"threads\" />\n        </clr-input-container>\n\n      </section>\n    </form>\n  </clr-wizard-page>\n  <clr-wizard-page>\n    <ng-template clrPageTitle>Test settings</ng-template>\n    <form>\n      <section class=\"form-block\">\n        <!-- Test options here -->\n\n        <clr-input-container>\n          <label>Target</label>\n          <input clrInput (keyup)=\"ParseCommand()\" [(ngModel)]=\"test_target\" #target name=\"target\" type=\"text\"\n            id=\"target\" placeholder=\"e.g. 192.168.1.53\" required>\n        </clr-input-container>\n\n        <clr-input-container>\n          <label>Port</label>\n          <input clrInput (keyup)=\"ParseCommand()\" [(ngModel)]=\"test_port\" name=\"port\" type=\"text\" id=\"port\"\n            placeholder=\"443\">\n        </clr-input-container>\n\n        <clr-input-container>\n          <label>Command to be executed</label>\n          <input clrInput [(ngModel)]=\"test_commandstring\" name=\"test_commandstring\" type=\"text\" id=\"port\"\n            placeholder=\"443\" size=\"70\">\n        </clr-input-container>\n\n        <div class=\"form-group\">\n          <button [disabled]=\"!target\" class=\"btn btn-outline\" (click)=\"loading=true; Execute()\">\n            <span *ngIf=\"loading; else run\" class=\"spinner spinner-inline\"></span>\n            <ng-template #run>\n              <clr-icon shape=\"play\"></clr-icon> Run\n            </ng-template>\n          </button>\n        </div>\n      </section>\n    </form>\n  </clr-wizard-page>\n</clr-wizard>\n<clr-modal [(clrModalOpen)]=\"testoutputModalOpen\" [clrModalSize]=\"'lg'\">\n  <h3 class=\"modal-title\">Test output</h3>\n  <div class=\"modal-body\">\n    <textarea clrTextarea [(ngModel)]=\"test_output.output\" name=\"test_output\" rows=\"15\" cols=\"100\"></textarea>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"testoutputModalOpen = false\">Ok</button>\n  </div>\n</clr-modal>\n\n<clr-modal [(clrModalOpen)]=\"deleteToolModal\">\n  <h3 class=\"modal-title\">Delete tool?</h3>\n  <div class=\"modal-body\">\n    <p *ngIf=\"selected_tool\">Are you sure you want to delete tool \"\n      <b>{{selected_tool.name}}</b>\"?</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline\" (click)=\"deleteToolModal = false\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-warning\" (click)=\"DeleteTool(selected_tool)\">Delete</button>\n  </div>\n</clr-modal>\n\n<clr-modal [(clrModalOpen)]=\"infoModal\" [clrModalSize]=\"'lg'\">\n  <h3 *ngIf=\"selected_task\" class=\"modal-title\">Task {{selected_task.id}} error log</h3>\n  <div class=\"modal-body\">\n    <h3>Info</h3>\n    <p *ngIf=\"selected_tool\">\n      <b>Name: </b>{{selected_tool.name}} <br>\n      <b>Execution string: </b>{{selected_tool.commandstring}} <br>\n      <b>Expected good: </b>{{selected_tool.expected_good}} <br>\n      <b>Expected bad: </b>{{selected_tool.expected_bad}} <br>\n      <b>Timeout: </b>{{selected_tool.timeout}} <br>\n    </p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"infoModal = false\">Ok</button>\n  </div>\n</clr-modal>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _findings_findings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./findings/findings.component */ "./src/app/findings/findings.component.ts");
/* harmony import */ var _import_import_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./import/import.component */ "./src/app/import/import.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _tools_tools_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tools/tools.component */ "./src/app/tools/tools.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'import',
        component: _import_import_component__WEBPACK_IMPORTED_MODULE_4__["ImportComponent"]
    },
    {
        path: 'findings',
        component: _findings_findings_component__WEBPACK_IMPORTED_MODULE_3__["FindingsComponent"]
    },
    {
        path: 'tools',
        component: _tools_tools_component__WEBPACK_IMPORTED_MODULE_6__["ToolsComponent"]
    },
    {
        path: 'tasks',
        component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_7__["TasksComponent"]
    },
    {
        path: 'test',
        component: _test_test_component__WEBPACK_IMPORTED_MODULE_5__["TestComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(data) {
        this.data = data;
        this.title = 'ATLAS';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.GetRunningTasks().subscribe(function (data) { return _this.runningtasks = data; });
        console.log(this.runningtasks);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _findings_findings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./findings/findings.component */ "./src/app/findings/findings.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _import_import_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./import/import.component */ "./src/app/import/import.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _tools_tools_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tools/tools.component */ "./src/app/tools/tools.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _findings_findings_component__WEBPACK_IMPORTED_MODULE_6__["FindingsComponent"],
                _import_import_component__WEBPACK_IMPORTED_MODULE_9__["ImportComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_10__["TestComponent"],
                _tools_tools_component__WEBPACK_IMPORTED_MODULE_11__["ToolsComponent"],
                _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_13__["TasksComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClarityModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.backend_url = 'http://127.0.0.1:8000/';
    }
    DataService.prototype.getHosts = function () {
        return this.http.get(this.backend_url + 'api/hosts/');
    };
    DataService.prototype.GetFindings = function () {
        return this.http.get(this.backend_url + 'api/findings/');
    };
    DataService.prototype.DeleteFinding = function (finding) {
        return this.http.delete(this.backend_url + 'api/findings/' + finding.id + "/");
    };
    DataService.prototype.AddFinding = function (finding) {
        return this.http.post(this.backend_url + 'api/findings/', finding);
    };
    DataService.prototype.EditFinding = function (finding) {
        return this.http.put(this.backend_url + 'api/findings/' + finding.id + "/", finding);
    };
    DataService.prototype.GetFindingServices = function (finding_id) {
        return this.http.get(this.backend_url + 'api/services/?finding=' + finding_id);
    };
    DataService.prototype.DeleteService = function (service) {
        return this.http.delete(this.backend_url + 'api/services/' + service.id + "/");
    };
    DataService.prototype.AddService = function (service) {
        return this.http.post(this.backend_url + 'api/services/', service);
    };
    DataService.prototype.EditService = function (service) {
        return this.http.put(this.backend_url + 'api/services/' + service.id + "/", service);
    };
    DataService.prototype.GetServicePocs = function (service_id) {
        return this.http.get(this.backend_url + 'api/pocs/?service=' + service_id);
    };
    DataService.prototype.UpdateService = function (service) {
        return this.http.put(this.backend_url + 'api/services/' + service.id + "/", service);
    };
    DataService.prototype.GetImports = function () {
        return this.http.get(this.backend_url + 'api/imports/');
    };
    DataService.prototype.AddImport = function (import_obj) {
        return this.http.post(this.backend_url + 'api/import/', import_obj);
    };
    DataService.prototype.GetTools = function () {
        return this.http.get(this.backend_url + 'api/tools/');
    };
    DataService.prototype.GetTool = function (id) {
        return this.http.get(this.backend_url + 'api/tools/' + id + "/");
    };
    DataService.prototype.AddTool = function (tool) {
        return this.http.post(this.backend_url + 'api/tools/', tool);
    };
    DataService.prototype.DeleteTool = function (tool) {
        return this.http.delete(this.backend_url + 'api/tools/' + tool.id + "/");
    };
    DataService.prototype.EditTool = function (tool) {
        return this.http.put(this.backend_url + 'api/tools/' + tool.id + "/", tool);
    };
    DataService.prototype.Execute = function (commandstring) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.backend_url + 'api/execute/', commandstring, httpOptions);
    };
    DataService.prototype.GetTasks = function () {
        return this.http.get(this.backend_url + 'api/tasks/');
    };
    DataService.prototype.GetRunningTasks = function () {
        return this.http.get(this.backend_url + '/api/tasks/?running=1');
    };
    DataService.prototype.AddTask = function (task) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        console.log(task);
        return this.http.post(this.backend_url + 'api/tasks/', task, httpOptions);
    };
    DataService.prototype.StartTask = function (task_id) {
        return this.http.get(this.backend_url + 'api/tasks/' + task_id + "/start/");
    };
    DataService.prototype.UploadNessus = function (file) {
        var formdata = new FormData();
        formdata.append('file', file);
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', this.backend_url + 'api/importnessus/', formdata, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(req);
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/findings/findings.component.css":
/*!*************************************************!*\
  !*** ./src/app/findings/findings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmRpbmdzL2ZpbmRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/findings/findings.component.ts":
/*!************************************************!*\
  !*** ./src/app/findings/findings.component.ts ***!
  \************************************************/
/*! exports provided: FindingFilter, HostFilter, PortFilter, TypeFilter, FindingCheckedFilter, FindingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindingFilter", function() { return FindingFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostFilter", function() { return HostFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortFilter", function() { return PortFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeFilter", function() { return TypeFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindingCheckedFilter", function() { return FindingCheckedFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindingsComponent", function() { return FindingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FindingFilter = /** @class */ (function () {
    function FindingFilter() {
    }
    FindingFilter.prototype.accepts = function (finding, search) {
        return finding.name.toLowerCase().indexOf(search) >= 0;
    };
    return FindingFilter;
}());

var HostFilter = /** @class */ (function () {
    function HostFilter() {
    }
    HostFilter.prototype.accepts = function (service, search) {
        return service.service.host.ip.toLowerCase().indexOf(search) >= 0;
    };
    return HostFilter;
}());

var PortFilter = /** @class */ (function () {
    function PortFilter() {
    }
    PortFilter.prototype.accepts = function (service, search) {
        return String(service.service.port).indexOf(search) >= 0;
    };
    return PortFilter;
}());

var TypeFilter = /** @class */ (function () {
    function TypeFilter() {
    }
    TypeFilter.prototype.accepts = function (service, search) {
        return service.service.name.toLowerCase().indexOf(search) >= 0;
    };
    return TypeFilter;
}());

var FindingCheckedFilter = /** @class */ (function () {
    function FindingCheckedFilter() {
    }
    FindingCheckedFilter.prototype.accepts = function (finding, search) {
        return String(finding.checked).indexOf(search) >= 0;
    };
    return FindingCheckedFilter;
}());

var FindingsComponent = /** @class */ (function () {
    function FindingsComponent(data) {
        this.data = data;
        this.selected = [];
        this.selected_services = [];
        this.task_threads = 0;
        this.viewPocModal = false;
        this.selected_service = Object;
        this.findingFilter = new FindingFilter();
        this.hostFilter = new HostFilter();
        this.portFilter = new PortFilter();
        this.typeFilter = new TypeFilter();
    }
    FindingsComponent.prototype.ngOnInit = function () {
        this.getFindings();
        this.GetTools();
    };
    FindingsComponent.prototype.getFindings = function () {
        var _this = this;
        this.data.GetFindings().subscribe(function (data) { return _this.findings = data; });
    };
    FindingsComponent.prototype.selectedFindingChanged = function (selected_finding) {
        if (selected_finding) {
            this.selected_finding = selected_finding;
            this.getFindingServices(selected_finding.id);
        }
    };
    FindingsComponent.prototype.getFindingServices = function (finding_id) {
        var _this = this;
        this.data.GetFindingServices(finding_id).subscribe(function (data) { return _this.finding_services = data; });
    };
    FindingsComponent.prototype.getServicePocs = function (service_id) {
        var _this = this;
        this.data.GetServicePocs(service_id).subscribe(function (data) { return _this.service_pocs = data; });
    };
    FindingsComponent.prototype.setHasPoc = function (service) {
        if (service.haspoc == 0) {
            service.haspoc = 1;
            this.data.UpdateService(service).subscribe(function (data) { return service = data; });
        }
        else if (service.haspoc == 1) {
            service.haspoc = 0;
            this.data.UpdateService(service).subscribe(function (data) { return service = data; });
        }
    };
    FindingsComponent.prototype.setFalsePositive = function (service) {
        if (service.falsepositive == 0) {
            service.falsepositive = 1;
            this.data.UpdateService(service).subscribe(function (data) { return service = data; });
        }
        else if (service.falsepositive == 1) {
            service.falsepositive = 0;
            this.data.UpdateService(service).subscribe(function (data) { return service = data; });
        }
    };
    FindingsComponent.prototype.SetThreads = function (threads) {
        this.task_threads = threads;
    };
    FindingsComponent.prototype.GetTools = function () {
        var _this = this;
        this.data.GetTools().subscribe(function (data) { return _this.tools = data; });
    };
    FindingsComponent.prototype.AddTask = function () {
        var _this = this;
        this.new_task = new Object();
        this.new_task.services = new Array();
        this.new_task.tool = this.selected_tool.id;
        this.selected_services.forEach(function (poc) { _this.new_task.services.push(poc.id); });
        this.new_task.threads = this.task_threads;
        this.data.AddTask(this.new_task).subscribe();
    };
    FindingsComponent.prototype.replaceLineBreak = function (s) {
        return s.replace('\n', '<br />');
    };
    FindingsComponent.prototype.viewPocs = function (service) {
        this.selected_service = service;
        this.viewPocModal = true;
        this.getServicePocs(service.id);
    };
    FindingsComponent.prototype.copyToClipboard = function (val) {
        console.log(val);
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.getElementById("pocmodal").appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.getElementById("pocmodal").removeChild(selBox);
    };
    FindingsComponent.prototype.doPrint = function (value) {
        console.log(value.info);
    };
    FindingsComponent.prototype.AddFinding = function (finding_name) {
        this.new_finding = new Object();
        this.new_finding.name = finding_name;
        this.data.AddFinding(this.new_finding).subscribe();
        this.getFindings();
    };
    FindingsComponent.prototype.deleteFinding = function (finding) {
        var _this = this;
        this.data.DeleteFinding(finding).subscribe(function (data) {
            _this.getFindings();
        });
    };
    FindingsComponent.prototype.editFinding = function (finding) {
        var _this = this;
        this.data.EditFinding(finding).subscribe(function (data) {
            _this.getFindings();
        });
    };
    FindingsComponent.prototype.toggleFindingDone = function (finding) {
        var _this = this;
        if (finding.checked == 1) {
            finding.checked = 0;
        }
        else if (finding.checked == 0) {
            finding.checked = 1;
        }
        this.data.EditFinding(finding).subscribe(function (data) {
            _this.getFindings();
        });
    };
    FindingsComponent.prototype.addService = function () {
        this.new_host = new Object();
        this.new_host.ip = this.newHostIP;
        this.new_host.fqdn = this.newHostFQDN;
        this.new_host.mac = this.newHostMAC;
        this.new_host.os = this.newHostOS;
        this.new_service = new Object();
        this.new_service.name = this.newServiceName;
        this.new_service.port = this.newServicePort;
        this.new_service.protocol = this.newServiceProtocol;
        this.new_service.host = this.new_host;
        this.data.AddService(this.new_service).subscribe();
        this.getFindingServices(this.selected_finding);
    };
    FindingsComponent.prototype.clearServices = function () {
        this.finding_services = null;
    };
    FindingsComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }
    ]; };
    FindingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hosts',
            template: __webpack_require__(/*! raw-loader!./findings.component.html */ "./node_modules/raw-loader/index.js!./src/app/findings/findings.component.html"),
            styles: [__webpack_require__(/*! ./findings.component.css */ "./src/app/findings/findings.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], FindingsComponent);
    return FindingsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/import/import.component.css":
/*!*********************************************!*\
  !*** ./src/app/import/import.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-input {\n    padding: 0;\n    border: none;\n    background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1wb3J0L2ltcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9pbXBvcnQvaW1wb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWlucHV0IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/import/import.component.ts":
/*!********************************************!*\
  !*** ./src/app/import/import.component.ts ***!
  \********************************************/
/*! exports provided: ImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportComponent", function() { return ImportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImportComponent = /** @class */ (function () {
    function ImportComponent(data) {
        this.data = data;
        this.progress = { percentage: 0 };
    }
    ImportComponent.prototype.ngOnInit = function () {
        this.success = false;
        this.GetImports();
    };
    ImportComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    ImportComponent.prototype.upload = function () {
        var _this = this;
        this.uploading = true;
        this.success = false;
        this.currentFileUpload = this.selectedFiles.item(0);
        this.data.UploadNessus(this.currentFileUpload).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                _this.progress.percentage = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                _this.success = true;
                _this.currentFileUpload = null;
                _this.GetImports();
            }
        });
        this.selectedFiles = undefined;
    };
    ImportComponent.prototype.GetImports = function () {
        var _this = this;
        this.data.GetImports().subscribe(function (data) { return _this.imports = data; });
    };
    ImportComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
    ]; };
    ImportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-import',
            template: __webpack_require__(/*! raw-loader!./import.component.html */ "./node_modules/raw-loader/index.js!./src/app/import/import.component.html"),
            styles: [__webpack_require__(/*! ./import.component.css */ "./src/app/import/import.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], ImportComponent);
    return ImportComponent;
}());



/***/ }),

/***/ "./src/app/tasks/tasks.component.css":
/*!*******************************************!*\
  !*** ./src/app/tasks/tasks.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/tasks/tasks.component.ts":
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.component.ts ***!
  \******************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TasksComponent = /** @class */ (function () {
    function TasksComponent(data) {
        this.data = data;
    }
    TasksComponent.prototype.ngOnInit = function () {
        this.GetTasks();
    };
    TasksComponent.prototype.GetTasks = function () {
        var _this = this;
        this.data.GetTasks().subscribe(function (data) { return _this.tasks = data; });
    };
    TasksComponent.prototype.GetTool = function (tool_id) {
        var _this = this;
        var tool;
        this.data.GetTool(tool_id).subscribe(function (data) { return _this.tool = data; });
    };
    TasksComponent.prototype.StartTask = function (task) {
        this.data.StartTask(task.id).subscribe();
        task.running = 1;
    };
    TasksComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }
    ]; };
    TasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__(/*! raw-loader!./tasks.component.html */ "./node_modules/raw-loader/index.js!./src/app/tasks/tasks.component.html"),
            styles: [__webpack_require__(/*! ./tasks.component.css */ "./src/app/tasks/tasks.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "./src/app/test/test.component.css":
/*!*****************************************!*\
  !*** ./src/app/test/test.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = /** @class */ (function () {
    function TestComponent() {
        this.loadingFlag = false;
        this.errorFlag = false;
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    // have to define doCancel because page will prevent doCancel from working
    // if the page had a previous button, you would need to call 
    // this.wizard.previous() manually as well...
    TestComponent.prototype.doCancel = function () {
        this.wizard.close();
    };
    TestComponent.prototype.onCommit = function () {
        var _this = this;
        var value = this.formData.value;
        this.loadingFlag = true;
        this.errorFlag = false;
        setTimeout(function () {
            if (value.answer === "42") {
                _this.wizard.forceNext();
            }
            else {
                _this.errorFlag = true;
            }
            _this.loadingFlag = false;
        }, 1000);
    };
    TestComponent.prototype.copyMessage = function (val) {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.select();
        selBox.focus();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("wizard", { static: true }),
        __metadata("design:type", _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrWizard"])
    ], TestComponent.prototype, "wizard", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("myForm", { static: true }),
        __metadata("design:type", Object)
    ], TestComponent.prototype, "formData", void 0);
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! raw-loader!./test.component.html */ "./node_modules/raw-loader/index.js!./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/test/test.component.css")]
        })
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/tools/tools.component.css":
/*!*******************************************!*\
  !*** ./src/app/tools/tools.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rvb2xzL3Rvb2xzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/tools/tools.component.ts":
/*!******************************************!*\
  !*** ./src/app/tools/tools.component.ts ***!
  \******************************************/
/*! exports provided: ToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsComponent", function() { return ToolsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToolsComponent = /** @class */ (function () {
    function ToolsComponent(data) {
        this.data = data;
        this.lgOpen = false;
        this.new_tool = true;
        this.deleteToolModal = false;
        this.loading = false;
        this.test_output = {};
        this.testoutputModalOpen = false;
        this.test_target = '';
        this.test_port = '';
        this.test_commandstring = '';
        this.form_tool = {};
    }
    ToolsComponent.prototype.ngOnInit = function () {
        this.GetTools();
    };
    ToolsComponent.prototype.FinishWizard = function (tool) {
        if (this.new_tool) {
            this.AddTool(tool);
        }
        else {
            this.EditTool(tool);
        }
    };
    ToolsComponent.prototype.AddTool = function (tool) {
        var _this = this;
        this.data.AddTool(tool).subscribe(function (data) {
            tool = data;
            _this.GetTools();
        });
    };
    ToolsComponent.prototype.EditTool = function (tool) {
        var _this = this;
        this.wizardLarge.reset();
        this.data.EditTool(tool).subscribe(function (data) {
            tool = data;
            _this.GetTools();
        });
    };
    ToolsComponent.prototype.DeleteTool = function (tool) {
        var _this = this;
        this.data.DeleteTool(tool).subscribe(function (data) {
            _this.GetTools();
        });
        this.deleteToolModal = false;
    };
    ToolsComponent.prototype.GetTools = function () {
        var _this = this;
        this.data.GetTools().subscribe(function (data) { return _this.tools = data; });
    };
    ToolsComponent.prototype.ParseCommand = function () {
        if (this.form_tool.path) {
            this.test_commandstring = this.form_tool.commandstring.replace("<host>", this.test_target).replace("<port>", this.test_port);
        }
        else {
            this.test_commandstring = this.form_tool.commandstring.replace("<host>", this.test_target).replace("<port>", this.test_port);
        }
    };
    ToolsComponent.prototype.onKey = function (event) {
        this.test_commandstring = event.target.value;
    };
    ToolsComponent.prototype.Execute = function () {
        var _this = this;
        this.data.Execute('{"commandstring":"' + this.test_commandstring + '"}').subscribe(function (data) {
            _this.test_output = data;
            _this.loading = false;
            _this.testoutputModalOpen = true;
            console.log(_this.test_output);
        });
    };
    ToolsComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("wizardlg", { static: true }),
        __metadata("design:type", _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrWizard"])
    ], ToolsComponent.prototype, "wizardLarge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("toolForm", { static: true }),
        __metadata("design:type", Object)
    ], ToolsComponent.prototype, "formData", void 0);
    ToolsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tools',
            template: __webpack_require__(/*! raw-loader!./tools.component.html */ "./node_modules/raw-loader/index.js!./src/app/tools/tools.component.html"),
            styles: [__webpack_require__(/*! ./tools.component.css */ "./src/app/tools/tools.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ToolsComponent);
    return ToolsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/roy/Documents/Projects/atlas/web/atlas/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map