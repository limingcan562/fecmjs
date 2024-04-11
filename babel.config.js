// Babel配置
const presets = [
    [
        '@babel/preset-env',
        {
            modules: false,
        }
    ]
];
const plugins = [
    '@babel/plugin-transform-runtime'
];



module.exports = {presets,/*  plugins */ };