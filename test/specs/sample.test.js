const view = require('../helper/helper')
const bottomTabBar = require('../helper/bottom_tab_bar_view')
const homePage = require('../helper/home_page')
const permissionDialog = require('../helper/permission_dialog')
const projectPage = require('../helper/project_page')

describe('NAVIGATION BOTTOM BAR', () => {

    it('should navigation bottom bar', async () => {
        await bottomTabBar.dataTab.click()
        await view.searchEditText.setValue('bibit');
        await bottomTabBar.settingTab.click();
        await allowPermission()
        await bottomTabBar.homeTab.click()
    });

    it('should navigate to data page from click rejected view', async () => {
        await homePage.tvRejected.click()
        await view.searchEditText.setValue('survey')
        await bottomTabBar.homeTab.click()
    })

    it('should navigate to project page when click item project activity', async () => {
        await homePage.mangroveActivityCard.click()
        let title = await projectPage.titleAppbar.getText()
        console.log("---> TITLE-APPBAR: " + title)
        await projectPage.backButton.click()
    })

    async function allowPermission() {
        try {
            await permissionDialog.allowButton.click()
        } catch (e) {
            console.log(e.message)
        }
    }
})