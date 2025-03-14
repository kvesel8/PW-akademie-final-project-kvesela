import { test as base} from '@playwright/test' //proc se prejmenovava ten test na base? kvuli rozliseni?
import { HomePagePom } from '../pom/homePagePom'
import { LoginPom } from '../pom/loginPom'

//naimportovat sem vsechny FE pomy a definovat si je jako fixtures?
// v testech pak naimportuju ten test a pouzivam jen ty fixtures, ktere potrebuju?


/*typovou definici fixtures si taky muzu dat zvlast do souboru a potom sem importovat? - 
nebo tuto typovou definici vyuziju jen tady pro fixtures a tak neni potreba delat soubor zvlast
*/
type pomFixtures = {
    homePage: HomePagePom
    login: LoginPom
}

export const test = base.extend<pomFixtures>({   
    
/*1. takze pak do testu importujeme promennou test?\
  2. co znamena extend - v tomhle pripade se nejedna o dedicnost? 
  3. proc se za extend davaji zobacky s datovym typem?
  4. v tomhle bloku si vydefinuju fixtures pro vsechny naimportovany POM? 
*/
    homePage: async({page}, use) => { //1.moc nerozumim tomu zapisu - co dela? 
        const homePage = new HomePagePom(page,test) //odkud si tady prebiram test?

        //co dalsiho tu muzu vyplnit?

        await use(homePage)
    },

    login: async({page}, use) => {
        const login = new LoginPom(page,test) //znovu takto?


    }


})

