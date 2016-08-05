import Application from "./Application";

let app = new Application();
app.initializePlugins();
app.start();

$('#conversion-form').submit(function (e) {
    e.preventDefault();
    var textToConvert = $('#textToConvert').val();
    var viewHelperName = textToConvert.split(/(<(.+?) )/)[2];
    var total = $(textToConvert)[0].attributes.length;
    var textConverted = '{' + viewHelperName + '(';
    $.each($(textToConvert)[0].attributes, function (i, attrib) {
        var attribName = attrib.name;
        var value = attrib.value;
        if (i < total - 1) {
            textConverted += attribName + ': \'' + value + '\', ';
        } else {
            textConverted += attribName + ': \'' + value + '\'';
        }
    });
    textConverted += ')}';
    $('#conversionResult').html(textConverted).removeClass('hide');
});
