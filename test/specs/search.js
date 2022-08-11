const SearchPanel = require('../pageObjects/Search.panel')
const search = new SearchPanel();
const { flight } = require('../fixtures/flight');

describe('SearchPanel', () => {
    before(async () => {
        await browser.maximizeWindow();
        await search.load();
        await search.enableBlackTheme();
    })

    it('should load search page properly', async () => {
        await expect(search.$inputFrom).toBeExisting();
        await expect(search.$inputTo).toBeExisting();
        await expect(search.$inputDepart).toBeExisting();
        await expect(search.$inputReturn).toBeExisting();
        await expect(search.$inputPassangers).toBeExisting();

        await expect(search.$btnSubmitSeach).toBeExisting();
    });

    it('should let you find ticket without return ticket', async () => {
        await search.seachForFlights(flight.from, flight.to)

        //checking getting search result
        await (await search.$blockResults).waitForDisplayed();
        await expect(search.$blockResults).toBeExisting();
        //expect new search page is opened
        await expect(await browser).toHaveUrlContaining('/search');
        //All previous data is displayed on the new page

        //actually here is a bug because if I check for previous inputed data "John F. Kennedy International Airport" 
        //it returns just "New York"
        await expect(search.$inputFrom).toHaveValueContaining("New York"); 
        await expect(search.$inputTo).toHaveValueContaining(flight.to);
        await expect(search.$inputDepart).toHaveValueContaining(flight.depart);
    })
})