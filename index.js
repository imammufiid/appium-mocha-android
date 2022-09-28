const wdio = require("webdriverio")

const opt = {
    path: "/wd/hub",
    port: 4723,
    capabilities: {
        platformName: "android",
        appPackage: "id.or.yagasu.dbm",
        appActivity: ".main.MainActivity",
        automationName: "UiAutomator2",
        newCommandTimeout: "3600",
        noReset: true
    }
}

async function main() {
    const client = await wdio.remote(opt)
    // await client.setImplicitTimeout(20);

    let el11 = await client.$("~Beranda");
    await el11.click();

    let el12 = await client.$("~Data");
    await el12.click();

    // let el13 = await client.$('//*[@resource-id="id.or.yagasu.dbm:id/search"]')
    let asdf = await client.$('id=id.or.yagasu.dbm:id/search')
    await asdf.setValue('bibit');

    let el14 = await client.$("~Pengaturan");
    await el14.click();

    let el15 = await client.$("~Beranda");
    await el15.click();

    // await client.deleteSession()
}

main()