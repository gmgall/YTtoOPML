![YT to OPML](yt2opml.png)

# YouTube to OPML

Ferramenta que converte um arquivo CSV com uma lista de canais em que um usuário é inscrito no YouTube em um arquivo [OPML](http://opml.org/) com os *feeds* RSS de cada canal. Arquivos OPML podem ser importados na maioria dos agregadores RSS.

É possível fazer download desse arquivo CSV via [Google Takeout](https://takeout.google.com/).

O Google Takeout é uma forma de fazer download de todos os registros que a Google possui de um usuário. Em fev/2023 o arquivo de inscrições no YouTube fica em `Takeout/YouTube and YouTube Music/subscriptions/subscriptions.csv` e possui as seguintes colunas:

```
Channel ID,Channel URL,Channel title
UC0fGGprihDIlQ3ykWvcb9hg,http://www.youtube.com/channel/UC0fGGprihDIlQ3ykWvcb9hg,Tese Onze
```

Acima listei um canal também para servir como referência do formato dos dados. Não sei com que frequência a Google muda o formato das informações que fornece via Takeout.

## Pacotes usados

* [opmlPackage](https://github.com/scripting/opmlPackage)
* [D3](https://d3js.org/)
* [Simple.css](https://simplecss.org/)
