// ==UserScript==
// @name         Gitlab Merge Request Template Injector
// @namespace    http://gitlab-app.eng.qops.net
// @version      0.2
// @description  Inject a template into a new merge request
// @author       kdubz
// @match        *://gitlab-app.eng.qops.net/*/*/merge_requests/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

var currentUrl = window.location.href;
if (currentUrl.includes('merge_requests') && currentUrl.includes('new')) {
    var textArea = document.getElementById('merge_request_description');
    textArea.value = '#### Description\n\n\n' +
        '#### JIRA\n\n\n' +
        '#### Testing\n\n\n' +
        '#### Screenshot/link\n\n\n' +
        '#### Special notes\n\n\n' +
        '@\n';
    var checkbox = document.getElementById('merge_request_force_remove_source_branch');
    checkbox.value = "1";
    checkbox.checked = "checked";
}
