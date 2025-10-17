export default class replaceParams
{

    // Rep un array de parametres [{id:...,name:...,text:...}]
    // I un html amb parametres a substituir <h1>{{param1}}</h1>
    // Substitueix els paràmetres amb el text
    static replace(params,html)
    {
        $.map(params, function( param, index ) {
            let paramReplace = "{{" + param.name.toUpperCase() +"}}";
            html=html.replace(paramReplace, param.text);
        });
    
        return html;
    }
}