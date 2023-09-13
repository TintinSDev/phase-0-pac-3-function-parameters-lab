
function introduction(name = "Aki") {

    return `Hi, my name is ${name}.`;
}
function introductionWithLanguage(name = "Aki", language = "Ember.js.") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
function introductionWithLanguage(name = "Grace", language = "Javascript.") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name = "Gracie", language = "Javascript") {

    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}