var isFirst = true,
    num = 1,
    burgerItem = ".burger-item";

$(burgerItem).each(function() {
    var list = $(this);
    list.attr("start", num);
    num = num + list.find("span").length;
});