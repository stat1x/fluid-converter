# FluidConverter #
Convert Fluid tags into inline notation.

## What does it do? ##
This tool can convert fluid tags ```<f:myTag myAttr="myAttrVal"/>``` to its inline notation ```{f:myTag(myAttr: 'myAttrVal')}```. 

It also converts `if` nested tags for example :

```
<f:if condition="myCond">
    <f:then>condition is met</f:then>
    <f:else>condition is not met</f:else>
</f:if>
``` 

becomes ```{f:if(condition: 'myCond', then: 'condition is met' else: 'condition is not met')}```.

Another feature produces ```{foo -> f:format.html()}``` from ```<f:format.html>foo</f:format.html>```

## Want to improve this tool? ##
1. Clone the repository
2. Open your terminal and move where you cloned the repository ```cd your/project/```
3. Run ```npm install``` to install dev dependencies
4. Run  ```gulp``` and start working
5. Open your browser and tip [localhost:3000](localhost:3000)
