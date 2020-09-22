//------------------------------------
// main.js
//
// Code for the:   SWx-NWjs project.
// Created:        02/07/2020
// Copyright (c):  David M. Wittend II
//------------------------------------

//------------------------------------
// Auto load the debugger
//------------------------------------
let DEBUG = true;
if(DEBUG)
{
    // Auto load the debugger
    nw.Window.get().showDevTools();
}

//------------------------------------
// docReady()
//------------------------------------
function docReady()
{
    // put all code that executes on startup here.
    // console.log('========= docReady =========');
    loadMainFrame();
}

