describe('NAVIGATION BOTTOM BAR', () => {
    it('should navigation bottom bar', async () => {

        let el12 = await $('~Data');
        el12.click();

        let asdf = await $("id=id.or.yagasu.dbm:id/search")
        await asdf.setValue('bibit');

        let el14 = await $("~Pengaturan");
        await el14.click();

        await allowPermission()

        let el15 = await $("~Beranda");
        await el15.click();
    });

    it('should navigate to data page from click rejected view', async () => {
        let tvRejectedView = await $('id=id.or.yagasu.dbm:id/tv_reject_now')
        await tvRejectedView.click()

        let asdf = await $('id=id.or.yagasu.dbm:id/search')
        await asdf.setValue('bibit');
    })

    it('should navigate to project page when click item project acitity', async () => {
        let itemAgro = await $('//android.widget.FrameLayout[@index=0]')
        await itemAgro.click()
    })

    async function allowPermission() {
        try {
            let allowButton = await $('id=com.android.permissioncontroller:id/permission_allow_button')
            await allowButton.click()
        } catch (e) {
            console.log(e.message)
        }
    }

    async function denyPermission() {
        while (await $('id=com.android.permissioncontroller:id/content_container')) {
            await $('id=com.android.permissioncontroller:id/permission_deny_button').click()
        }
    }
})