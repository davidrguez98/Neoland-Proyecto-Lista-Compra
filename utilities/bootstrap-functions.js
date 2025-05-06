export function modalClose(selector) {
    const modal = bootstrap.Modal.getInstance(document.querySelector(selector));
    if (modal) {
        modal.hide();
    }
}