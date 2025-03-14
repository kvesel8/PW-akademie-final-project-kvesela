import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, Page, expect} from "@playwright/test";
import { homePageSel } from '../../data/selectors/homePageSel'
import { getRandomInt, selectRandomValueFromArray } from '../utils/randomValues'


// udelat v dalsich krocich konfiguraci prostredi (to se dela v test souboru)
const url = "https://www.demoblaze.com/";

export class HomePagePom {
  protected _page: Page;
  protected _test: TestType<PlaywrightTestArgs & PlaywrightTestOptions,PlaywrightWorkerArgs & PlaywrightWorkerOptions>;
  protected _url: string;

  constructor(
    page: Page,
    test: TestType<PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>
  ) {
    this._page = page;
    this._test = test;
    this._url = url;
  }

  public async navigateToHomePage() {
    await this._test.step("Navigate to home page", async () => {
      await this._page.goto(this._url);
      await expect(this._page).toHaveURL(this._url);
    });
  }

  public async displayItemDetail(){
    await this._test.step('Display Item detail', async() => {
      const totalNumberOfElements = await this._page.locator(`a[href*="prod.html?idp_="]`).count()
      const randomNumber = getRandomInt(1,totalNumberOfElements)
      await this._page.locator(`a[href="prod.html?idp_=${randomNumber}"]`).first().click()
    })
  }
 
  public async displayCategory(){
    await this._test.step('Display one of the category', async() =>{
      const allCategories = await this._page.locator(`a[onclick*="byCat"]`).allInnerTexts()
      const category = selectRandomValueFromArray(allCategories)
      await this._page.getByText(category).first().click()
    })
  } 
}
