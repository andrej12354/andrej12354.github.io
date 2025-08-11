function copy() {
    navigator.clipboard.writeText('minedime.org');
    swal({
        title: 'IP COPIED',
        text: 'Have fun',
        icon: 'success',
        timer: 2000,
        buttons: false,
    });
}
