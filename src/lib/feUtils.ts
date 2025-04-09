import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, Page, expect} from "@playwright/test";

export class FeUtils {
    protected _page: Page;
    protected _test: TestType<PlaywrightTestArgs & PlaywrightTestOptions,PlaywrightWorkerArgs & PlaywrightWorkerOptions>;
  
    constructor(
      page: Page,
      test: TestType<PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>,
     
    ) {
      this._page = page;
      this._test = test;
    }

    protected async _goTo( url: string){
        await this._test.step('Navigate to page', async () => {
            await this._page.goto(url)
        })
    }

    protected async _clickBySelector(selector: string){
        await this._test.step('Click by selector', async () => {
            await this._page.locator(selector).nth(0).click()
        })
    }

    protected async _fillBySelector(selector:string, value: string | number){
        await this._test.step('Fill value by selector', async () => {
            await this._page.locator(selector).nth(0).fill(value.toString())
        })
    }

    protected async _startListenPageDialog(){
        await this._test.step('Start to listen to page dialog', async() => {
            this._page.on('dialog', async(dialog) =>{
                console.log(dialog.message())
                await dialog.accept()
            })
        })
    }

    protected async _checkPageDialogMessage(pagedialogMessage: string){
        await this._test.step('Start to listen to page dialog', async() => {
            this._page.on('dialog', async(dialog) =>{
                const dialogMessage = dialog.message()
               
                if (dialogMessage == pagedialogMessage) {
                    console.log('Dialog text verified successfully!')
                } else {
                    console.log('Dialog text verification failed')
                }
                await dialog.accept()
            })
        })
    }

    protected async _endListenPageDialog(){
        await this._test.step('Stop to listen to page dialog', async() => {
            this._page.off('dialog', async() => {
                console.log('Dialog closed')
            })
        })
    }
}