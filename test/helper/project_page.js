class ProjectPage {
    get titleAppbar() {
        return $('id=id.or.yagasu.dbm:id/tv_project_name')
    }

    get backButton() {
        return $('~button back')
    }
}

module.exports = new ProjectPage()