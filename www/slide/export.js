// SPDX-FileCopyrightText: 2023 XWiki CryptPad Team <contact@cryptpad.org> and contributors
//
// SPDX-License-Identifier: AGPL-3.0-or-later

// This file is used when a user tries to export the entire CryptDrive.
// Pads from the slide app will be exported using this format instead of plain text.
define([
    '/common/sframe-common-codemirror.js',
], function (SFCodeMirror) {
    var module = {
        ext: '.md'
    };

    module.main = function (userDoc, cb) {
        var content = userDoc.content;
        cb(SFCodeMirror.fileExporter(content));
    };

    return module;
});


