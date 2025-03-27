import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, Page, expect} from "@playwright/test";
import { getRandomInt, selectRandomValueFromArray } from '../utils/randomValues'
import { testConfigType } from "../../src/types/fe/testConfigType";

export class HomePagePom {
  protected _page: Page;
  protected _test: TestType<PlaywrightTestArgs & PlaywrightTestOptions,PlaywrightWorkerArgs & PlaywrightWorkerOptions>;
  protected _testConfig:testConfigType

  constructor(
    page: Page,
    test: TestType<PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>,
    testConfig: testConfigType
  ) {
    this._page = page;
    this._test = test;
    this._testConfig = testConfig
  }

  public async navigateToHomePage() {
    await this._test.step("Navigate to home page", async () => {
      await this._page.goto(endpointUrl);
      await expect(this._page).toHaveURL(endpointUrl);
    });
  }
  //klika se furt na prvni polozku - chyba v selektoru - opravit
  public async displayItemDetail(){
    await this._test.step('Display Item detail', async() => {
      const totalNumberOfElements = await this._page.locator(`a[href="prod.html?idp_=\.*"]`).count()
      const randomNumber = getRandomInt(1,totalNumberOfElements)
      await this._page.waitForLoadState('load')
      await this._page.locator(`a[href="prod.html?idp_=${randomNumber}"]`).first().click()
    })
  }
 
  public async displayCategory(){
    await this._test.step('Display one of the category', async() =>{
      const allCategories = await this._page.locator(`a[onclick="byCat."]`).allInnerTexts()
      const category = selectRandomValueFromArray(allCategories)
      await this._page.getByText(category).first().click({timeout:10_000})
      await this._page.pause()
    })
  } 

  public async pageDialogOn(){
    await this._test.step('Start to listen to page dialog', async() => {
        this._page.on('dialog', async(dialog) =>{
            console.log(dialog.message())
            await dialog.accept()
        })
    })
}

  public async pageDialogOff(){
    await this._test.step('Stop to listen to page dialog', async() => {
        this._page.off('dialog', async() => {
            console.log('Dialog closed')
        })
    })
  }
}
