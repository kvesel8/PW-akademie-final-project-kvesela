import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, Page} from "@playwright/test";
import { getRandomInt, selectRandomValueFromArray } from '../utils/randomValues'
import { TestConfigType } from "../../src/types/fe/globalTypes";
import { FeUtils } from '../../src/lib/feUtils'

export class HomePagePom extends FeUtils {
  protected _testConfig:TestConfigType

  constructor(
    page: Page,
    test: TestType<PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>,
    testConfig: TestConfigType
  ) {
    super(page, test)
    this._testConfig = testConfig
  }

  public async navigateToHomePage() {
    await this._test.step("Navigate to home page", async () => {
      await this._goTo(this._testConfig.url)
     // await expect(this._page.url()).toContain(this._testConfig.url);
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
    await this._test.step('Page dialog On', async() => {
       await this._startListenPageDialog()
    })
}

  public async pageDialogOff(){
    await this._test.step('Page dialog Off', async() => {
        await this._endListenPageDialog()
    })
  }
}
