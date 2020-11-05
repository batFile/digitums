accordeon = () => {
    window.addEventListener('load', function () {
        Array.prototype.slice.call(document.getElementsByClassName('at-accordion__panel')).forEach(function (li) {
            li.getElementsByClassName('panel-inner')[0].style.opacity = '0';
            li.style.flexGrow = '1';
            li.addEventListener('mouseenter', function (e) {
                Array.prototype.slice.call(document.getElementsByClassName('at-accordion__panel')).forEach(function (_li) {
                    _li.getElementsByClassName('panel-inner')[0].style.opacity = '0';
                    _li.style.flexGrow = '1';
                });
                li.style.flexGrow = '6';
                li.getElementsByClassName('panel-inner')[0].style.opacity = '1';
            });
            li.addEventListener('mouseleave', function (e) {
                li.style.flexGrow = '1';
                li.getElementsByClassName('panel-inner')[0].style.opacity = '0';
            });

        });
    });

}

accordeon();