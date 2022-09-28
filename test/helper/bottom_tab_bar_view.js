class ButtonTabBar {
    get homeTab() {
        return $('~Beranda')
    }

    get dataTab() {
        return $('~Data')
    }

    get settingTab() {
        return $('~Pengaturan')
    }
}

module.exports = new ButtonTabBar()