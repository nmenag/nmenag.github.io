---
layout: post
title: Páginas estáticas con Jekyll
subtitle: Un generador estático para blogs y websites en Ruby
comments: true
---

<h1>¿Que es Jekyll?</h1>

Jekyll es una herramienta  para generar sitios estáticos diseñado para desarrollar blogs.

<p>El objetivo de usar Jekyll es no usar una base de datos para poder versionar el contenido de manera fácil en <a href="https://github.com/" target = "_blank">github</a>, esta pensado como una herramienta para desarrollar paginas y blogs sobre <a href = "https://pages.github.com/" target="_blank">github pages</a>. para mayor información puedes verlo en <a href = "http://jekyllrb.com/">http://jekyllrb.com/</a>. ¿por que Jekyll? en el  siguiente articulo  lo explican <a href="http://www.profesional.co.cr/es/2014/01/27/por-que-usar-jekyll-en-mi-blog/" target="b_blank">por que usar jekyll en mi blog</a></p>

<h1>Características</h1>
<ul>
  <li>Sistema de plantilla llamado <a href="https://github.com/Shopify/liquid" target="_blank">Liquid</a> creado por Shopify. </li>
  <li>Markdown o textile para escribir los posts o las paginas del sitio</li>
  <li>Extender la funcionalidad mediante plugins</li>
  <li>Uso de preprocesadores css, por su defecto se puede usar <a href="http://sass-lang.com/" target="_blank">SASS</a></li>
  <li><a href="http://jekyllrb.com/docs/frontmatter" target="_blank">YAML Front Matter</a></li>
</ul>

<h1>Construcción del sitio</h1>

<h3>Como empezar a trabajar con Jekyll</h3>

<p>Para manejar Jekyll necesitamos tener instalado Ruby, si estas manejando Linux puedes mirar el post
<a href="{{ "/2015/05/04/programar-con-ruby-en-ubuntu-linux/" | prepend: site.baseurl }}" target = "_blank">programar con Ruby en Ubuntu Linux</a> o si no puedes ver en la  documentación como se inicia con jekyll. En el sitio oficial se encuentra las instrucciones básicas para construir un sitio. </p>

<h3>Extendiendo con plugins</h3>

<p>Podemos extender la funcionalidad de Jekyll y permitir que las cosas sean aun mas simples, escribiendo módulos para el sitio, para ver de que se trata los puedes ver en <a href="http://jekyllrb.com/docs/plugins/" target="_blank">http://jekyllrb.com/docs/plugins/</a>.</p>

En  Jekyll puedes trabajar con gemas, solamente es  crear la estructura del archivo <code>Gemfile</code> y ahí mencionar las gemas que necesite. puedes encontrar una gran variedad de gemas en el siguiente enlace <a href ="http://www.jekyll-plugins.com/" target="_blank"> Jekyll plugins</a>

Para añadir un generador por la consola de comandos, para generar posts y drafts, le recomiendo instalar la gema <a href ="https://github.com/jekyll/jekyll-compose" target="_blank">Jekyll-compose</a>

<h3>Sistema de comentarios</h3>

<p>Unas de las cosas comunes para un blog es el sistema de comentarios, el mas conocido es <a href="https://disqus.com/" target="_blank">Disqus</a>.</p>

<p>Para su instalación se recomienda ver el  siguiente articulo <a href="https://help.disqus.com/customer/portal/articles/472138-jekyll-installation-instructions" target="_blank">Instalar Disqus para Jekyll</a></p>

<h3>Formularios y webhooks</h3>

<p>Otras cosa de las paginas web o blogs es tener un formulario, un formulario  de contáctenos, una encuesta o algo parecido, para eso existen tres servicios que se recomienda para usarlo con jekyll, que  son: </p>

<ul>
  <li><a href="https://getsimpleform.com/" target="_blank">Simple Form</a></li>
  <li><a href="https://formkeep.com/" target="_blank">FormKeep</a></li>
  <li><a href="http://www.typeform.com/" target="_blank">TypeForm</a></li>
</ul>

<h3>Sistema de Tags</h3>

<p>Para un blog es común el manejo etiquetado de contenido o tags, donde cada entrada podemos definir un listado de términos, para Jekyll existen varias formas para hacerlo,  ya sea creando el modulo como se especifica en este articulo <a href="http://charliepark.org/tags-in-jekyll/" target="_blank">Taggs in Jekyll</a>, creando el modulo según su documentación <a href="http://jekyllrb.com/docs/plugins/#tags" target="_blank">Plugins tags</a>  o simplemente instalar la gema <a href="https://github.com/pattex/jekyll-tagging">Jekyll Tagging</a>  </p>

<h3>Sirviendo  datos dinámicos a sus sitios estáticos</h3>

<p>Existe una herramienta llamado <a href="http://pooleapp.com/" target="_blank">Pooleapp</a>, que puede servir para incluir contenidos generado por los  usuarios en  Jekyll,  Ademas puedes hacer  uso de  <a href="https://www.firebase.com/">Firebase</a> para hacer cosas mas robustas.</p>

<h3>Temas</h3>

<p>Si estas buscando un template o un tema para añadirlo a Jekyll puedes buscar en el siguiente enlace <a href ="http://jekyllthemes.org/" target="_blank">Jekyll themes</a> </p>

<h3>Octopress</h3>

Para Jekyll existe un framework llamado Octopress, que posee una serie de herramientas sorprendentes que hace aún mas fácil el uso de Jekyll, para verlo haga click siguiente enlace <a href="http://octopress.org/" target="_blank">Octopress</a>


