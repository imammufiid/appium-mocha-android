class HomePage {
    get tvRejected() {
        return $('id=id.or.yagasu.dbm:id/tv_reject_now')
    }

    get agroActivityCard() {
        return $('//android.widget.FrameLayout[@index=0]')
    }

    get mangroveActivityCard() {
        return $('//android.widget.FrameLayout[@index=2]')
    }

    get socialDevActivityCard() {
        return $('//android.widget.FrameLayout[@index=3]')
    }

    get rndActivityCard() {
        return $('//android.widget.FrameLayout[@index=4]')
    }

    get agro() {
        return $('//*[@resource-id="id.or.yagasu.dbm:id/card_view"]')[1]
    }
}

module.exports = new HomePage()