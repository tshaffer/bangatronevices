/**
 * Created by tedshaffer on 4/24/16.
 */
export default class TestModule  {

    constructor() {
    }

    invokeTest() {


        console.log("test module invoked");

        const remote = require('electron').remote;
        const dialog = remote.dialog;
        const Menu = remote.Menu;

        const fs = require('fs');
        var path = require('path');

        console.log("test module complete");

    }
}
