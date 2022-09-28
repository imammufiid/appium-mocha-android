class PermissionDialog {
    get allowButton() {
        return $('id=com.android.permissioncontroller:id/permission_allow_button')
    }

    get denyButton() {
        return$('id=com.android.permissioncontroller:id/permission_deny_button')
    }
}

module.exports = new PermissionDialog()