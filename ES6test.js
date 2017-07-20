//数组去重
{
    const dedupe = array => Array.from(new Set(array));
    let testArr = [0,0,0,0,],
        dedupeArr = dedupe(testArr);
    console.log('Set数据结构是数组：', new Set(testArr) instanceof Array);
    console.log('使用Set去重', dedupeArr);
    console.log('去重后from()转为数组', dedupeArr instanceof Array);
}
//模板编译
{
    function compile(template){
        let evalExpr = /<%=(.+?)%>/g,
            expr = /<%([\s\S]+?)%>/g;

        template = template
            .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
            .replace(expr, '`); \n $1 \n  echo(`');

        template = 'echo(`' + template + '`);';

        return (
            `(function parse(data){
                let output = "";
            
                function echo(html){
                  output += html;
                }
            
                ${ template }
            
                return output;
            })`);
    }
    let template = `
    <ul>
      <% for(var i=0; i < data.supplies.length; i++) { %>
        <li><%= data.supplies[i] %></li>
      <% } %>
    </ul>
    `;
    let parse = eval(compile(template));

    console.log('解析template模板：', parse({ supplies: [ "broom", "mop", "cleaner" ] }));
}

