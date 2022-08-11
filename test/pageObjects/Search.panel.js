const Generic = require('./Generic.page');

class SearchPanel extends Generic {
    constructor() {
        super('./')
    }

    //defining all of inputs and buttons at seach panel
    get $inputFrom() { return $('[data-test-id="origin-autocomplete-field"]'); }
    get $inputTo() { return $('[data-test-id="destination-autocomplete-field"]'); }
    get $fieldDepart() { return $('[data-test-id="departure-date-field"]'); }
    get $inputDepart() {return $('[data-test-id="departure-date-input"]'); }
    get $calendarOption() { return $("div[aria-label='Tue Aug 30 2022'] div[class='calendar-day']"); } 
    get $inputReturn() { return $('[data-test-id="return-date-field"]'); }
    get $inputPassangers() { return $('[data-test-id="passengers-field"]'); }
    get $btnIncrementPassanger() { return $('.additional-fields__passenger-control.--increment'); }


    get $btnNotNeedTicket() { return $('[data-test-id="no-return-ticket"]'); }
    get $btnSubmitSeach() { return $('[data-test-id="form-submit"]'); }

    //search results
    get $blockResults() { return $('div.app__content')}

    async seachForFlights(from, to) {
        await (await this.$inputFrom).waitForDisplayed();
        await (await this.$inputTo).waitForDisplayed();
        await (await this.$inputTo).waitForDisplayed();
        await (await this.$inputReturn).waitForDisplayed();
        //fill out all fields
        await (await this.$inputFrom).setValue(from);
        await browser.pause(200)
        await (await this.$inputTo).setValue(to);
        await (await this.$fieldDepart).click();
        await (await this.$calendarOption).click();

        await (await this.$inputPassangers).click();
        await (await this.$btnIncrementPassanger).click();

        await this.check_open_in_current_tab()
        await (await this.$btnSubmitSeach).click();
    }
}

module.exports = SearchPanel;

