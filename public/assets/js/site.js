
// #region Notyf
window.showMessage = function NotyfNews(message, type) {
    var bg = "#198754";
    var text = "";
    switch (type) {
        case "success":
            bg = "#198754";
            text = "عملیات با موفقیت انجام شد";
            break;
        case "error":
            bg = "#f44336";
            text = "عملیات با خطا مواجه شده است. لطفا با پشتیبانی تماس بگیرید!!";
            break;

        case "warning":
            bg = "#ddc900";
            text = "لطفا با پشتیبانی تماس بگیرید!!";
            break;
    }

    if (message)
        text = message;

    var notyf = new Notyf({
        duration: 0,
        position: { x: 'left', y: 'top' },
        dismissible: true,
        types: [
            {
                type: 'success',
                background: bg,
                dismissible: true,
                icon: false
            }
        ]
    });

    const notification = notyf.success(text);
    setTimeout(() => {
        const elements = document.querySelectorAll('.notyf__toast');
        elements.forEach((element, index) => {
            let hideTimeout;
            element.style.marginTop = `${10 + (index * 100)}px`;
            element.addEventListener('mouseover', () => {
                clearTimeout(hideTimeout);
            });

            element.addEventListener('mouseout', () => {
                hideTimeout = setTimeout(() => {
                    element.remove();
                }, 3000);
            });

            hideTimeout = setTimeout(() => {
                element.remove();
            }, 3000);
        });
    }, 100);
}
// #endregion

window.clickEvent = function clickEvent(currentElement, targetId) {
    // المان هدف رو پیدا می‌کنیم
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
        targetElement.focus()  // مثلاً فوکوس می‌کنیم روی اون
        // یا هر کاری که می‌خوای اینجا انجام بده
    }
}

// #region Validation Message
window.requared = function requared(filed){window.showMessage( `لطفا ${filed} را وارد کنید` , "error")}
window.fixLength = function fixLength(filed, length){window.showMessage( `${filed} باید ${length} باشد` , "error")}
window.minLength = function minLength(filed, length){window.showMessage( `${filed} باید بیشتر از ${length} باشد` , "error")}
window.maxLength = function maxLength(filed, length){window.showMessage( `${filed} باید کمتر از ${length} باشد` , "error")}
//window.requared = function requared(filed){window.showMessage( ` ` , "error")}
// #endregion