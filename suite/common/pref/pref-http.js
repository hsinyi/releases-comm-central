/* -*- Mode: Java; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

function Startup()
{
  CheckPipelining();
  CheckPipeliningProxy();
}
 
function CheckPipelining()
{
  var prefHTTPVersion = document.getElementById("network.http.version");
  var prefKeepAlive = document.getElementById("network.http.keep-alive");

  var enabled = (prefHTTPVersion.value == "1.1" && prefKeepAlive.value);
  EnableElementById("enablePipelining", enabled, false);
}

function CheckPipeliningProxy()
{
  var prefHTTPVersion = document.getElementById("network.http.proxy.version");
  var prefKeepAlive = document.getElementById("network.http.proxy.keep-alive");

  var enabled = (prefHTTPVersion.value == "1.1" && prefKeepAlive.value);
  EnableElementById("enablePipeliningProxy", enabled, false);
}
