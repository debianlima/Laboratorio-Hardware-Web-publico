function csrf_input() {
    return '<input type="hidden" name="csrf" value="' . generate_csrf() . '" />';
}
