const { URL } = require('url');

class Generic {
    constructor(path) {
        this.path = path;

        this.url = new URL(path, browser.config.baseUrl);
    }
    load() {
        browser.url(this.path);
    }

    //common objects for entire app
    get $themeSwitcher() { return $('[data-test-id="switch"]'); }
    get $checkBoxNewTab() { return $('label.of_input_checkbox__label')}

    async enableBlackTheme () {
        await (await this.$themeSwitcher).waitForDisplayed();
        await (await this.$themeSwitcher).click();
    }

    async check_open_in_current_tab () {
        await (await this.$checkBoxNewTab).waitForDisplayed();
        await (await this.$checkBoxNewTab).click();
    }
}

module.exports = Generic;