---
layout: post
title: Páginas estáticas con Jekyll
subtitle: Un generador estático para blogs y websites en Ruby
description: Un generador estático para blogs y websites en Ruby
category: Posts
comments: true
---

Hoy en dia muchos sitios web esta elaborados en una herramienta conocida como gestores de contenido o simplemente CMS(Content Managment System), tal vez hayas escuchado este termino o hayas usado uno, como Worpress, Joomla, Drupal, etc, pues bien, se puede decir  que Jekyll es  algo parecido, una herramienta para administrar contenido.

# ¿Que es Jekyll?

Como hemos dicho Jekyll es una herramienta para administrar contenido. Es un generador de sitios estáticos.

Definición desde su  pagina oficial:

#### So what is Jekyll, exactly?

> Jekyll is a simple, blog-aware, static site generator. It takes a template directory containing raw text files in various formats, runs it through a converter (like Markdown) and our Liquid renderer, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server. Jekyll also happens to be the engine behind GitHub Pages, which means you can use Jekyll to host your project’s page, blog, or website from GitHub’s servers for free

Para su funcionamiento no necesitamos usar una base de datos, incluso es unos de los objetivos de Jekyll,  no  depender de las  configuraciones y concentrarse  en lo que mas importa, el contenido. Lo que hace Jekyll es simplemente convertir  archivos de texto a Html.

# Construcción del sitio

### Como empezar a trabajar con Jekyll

Antes de comenzar a crear  nuestro sitio web o nuestro blog, debemos instalar jekyll, para poder trabajar con  Jekyll necesitamos tener instalado  Ruby, si estas manejando Linux puedes mirar el siguiente  post que escribi sobre
<a href="{{ "/2015/05/04/programar-con-ruby-en-ubuntu-linux/" | prepend: site.baseurl }}" target = "_blank">programar con Ruby en Ubuntu Linux</a>. Jekyll no es mas que una gema, entonces la instalamos de la siguiente manera:

<div class="terminal">
gem install jekyll
</div>

Luego de instalar Jekyll empezamos en crear el primer sitio:

<div class="terminal">
jekyll new site
</div>

Luego entramos a la carpeta o directorio que acabamos de crear con Jekyll y corremos el servidor:

<div class="terminal">
cd site
~/site/$ jekyll s
</div>

Puedes mirar el sitio creado, entrando a un navegador escribiendo la ruta `http://localhost:4000/`

### Estructura de directorio

Jekyll por defecto  genera varias carpetas y archivos, en la documentación oficial puedes encontrar y  entender el objetivo de cada uno de ellos, véalo en el siguiente enlace <a href="http://jekyllrb.com/docs/structure/" target="_blank">http://jekyllrb.com/docs/structure/</a>


  * **_posts:** Ahí se almacenan los artículos, los archivos deben tener un formato `'aaa-mm-dd-titulo'`, el nombre del archivo separado por guiones.

  * **_includes:** Se guardan los componentes que se reutilizan en todo el sitio web como los footers o los headers.

  * **_layouts:** Ahí se aguarda todas las plantillas, Jekyll por defecto crea 3 plantillas que son `default`, `page` y `post`, el `default` es la plantilla que va a usar todas las paginas, `page` es la plantilla que va a usar las paginas  que no son artículos y `post` es la plantilla que van usar nuestros artículos, `post` y `page` usan la plantilla `default`.

  * **_config.yml:** Archivo de configuración de Jekyll, ahi se especifican los datos generales del sitio Web.

### Markdown

Unos de los términos mas importantes que debemos aprender es el termino Markdown, ya que Jekyll soporta este formato  para escribir los posts. Markdown es una forma ligera para escribir textos para web, podemos escribir palabras itálicas, negrita, listas y mucho mas. Lo que hace markdown es convertir el texto plano a HTML, puedes encontrar muy buena información sobre markdown y como aplicarlo en el siguiente enlace <a href="https://guides.github.com/features/mastering-markdown/" target="_blank">Mastering Markdown. </a>. Existen editores para poder trabajar con este Formato como son
<a href="http://dillinger.io/" target="_blank">Dillinger</a> y <a href="http://pad.haroopress.com/" target="_blank">Haroopad</a>. Para los archivos que soporten markdown se deben guardar con la extensión  md, markdown o textile.


### Liquid

Es el sistema de plantillas que usa Jekyll, desarrollado por <a href = "http://es.shopify.com/" target="_blank">Shopify</a>, liquid  nos ofrece una serie de etiquetas, filtros y sentencias que nos ayuda a facilitar el desarrollo de nuestro sitio web, puedes encontrar mas información en la documentación oficial de <a href="https://github.com/Shopify/liquid/wiki" target="_blank">Liquid</a>.

### Yaml Front Matter

En los templates y en los posts que por defecto  crea Jekyll, en la parte superior del archivo se encuentra un bloque de código con tres lineas en puntos, algo parecido como esto:

{% highlight html %}
---
layout: post
title: Blogging Like a Hacker
---
{% endhighlight %}

Ese bloque de código esta con un formato <a href="http://fdik.org/yml/" target="_blank">YML</a>, que es un formato para la serialización de datos basado en el lenguaje XML. Jekyll usa <a href="http://jekyllrb.com/docs/frontmatter/" target="_blank">
Yaml front Matter</a> para  definir  variables a los archivos, para luego  usarlas con las etiquetas de Liquid.  

# Plugins

Jekyll siendo un producto desarrollado con Ruby, se puede extender su funcionalidad mediante plugins o gemas. Puedes encontrar diferentes gemas en el siguiente enlace <a href="http://www.jekyll-plugins.com/" target="_blank">Jekyll plugins</a>, ademas puedes crear tus propios módulos siguiendo la documentación oficial <a href="http://jekyllrb.com/docs/plugins/" target="_blank">http://jekyllrb.com/docs/plugins/</a>.

### Jekyll-Compose

Unas de las gemas que me pareció interesante es <a href="https://github.com/jekyll/jekyll-compose" target="_blank">Jekyll-compose</a>, un generador por comandos de consola que nos permite generar nuestros  posts y luego publicarlos por consola o terminal.

#### Agregar Jekyll-compose al sitio.

Para agregar jekyll-compose debemos crear el archivo `Gemfile` en el directorio raiz.

**Gemfile**
{% highlight ruby %}
source 'https://rubygems.org'

gem 'jekyll'

group :jekyll_plugins do
  gem 'jekyll-compose'
end
{% endhighlight %}

El Gemfile debe esta estructurado de esa forma para poder funcionar.

Luego corremos el comando `bundle install`  para instalar las gemas.

<div class="terminal">
bundle install
</div>

Ahora corremos el `Jekyll help`

<div class="terminal">
Jekyll help
</div>

Y veremos que nos agrego unos nuevos comandos que son:

 * **draft**
 * **post**
 * **publish**

#### Crear un post

<div class="terminal">
 jekyll post "My new post"
</div>

Crea el archivo de post en la carpeta `_posts` con el formato adecuado que debe tener los posts.

#### Crear un draft

<div class="terminal">
 jekyll draft "My new draft"
</div>

Crea un Post como borrador  y lo guarda en una carpeta llamado  `_drafts` el crea esa carpeta automáticamente.

#### Publicar el draft

<div class="terminal">
 jekyll publish "_drafts/my-new-draft.md"
</div>

Pasa el archivo que esta guardado en `_drafts` y lo pasa a  la carpeta `_posts`.

# Sistema de comentarios

Para agregar un sistema de comentarios a nuestro sitio web podemos usar el servicio <a href="https://disqus.com/" >Disqus</a>. Para hacer uso de esta herramienta debes estar previamente registrado.

Para agregar el sistema de comentario debemos agregar la variable `comments` al YAML Front Matter con un valor de `true` al layout que queremos:

ejemplo:

{% highlight html %}
---
layout: default
comments: true
# other options
---
{% endhighlight %}

Luego añadimos el <a href="https://disqus.com/admin/universalcode/" target="_blank">Código universal.</a>, en la plantilla donde quiera que cargue Disqus, debe ser colocado en el medio de las sentencia `% if page.comments %` y `% endif %`.

Para agregar un sistemas de comentarios en Jekyll, existen  diferentes maneras para hacerlo,  Disqus no es la única forma que existe. Para hacer un sistema de comentarios en Jekyll tambien se puede hacer con  <a href = "https://www.firebase.com/" target="_blank">Firebase</a> o <a href="http://pooleapp.com/" target = "_blank">pooleapp</a>, que son dos herramientas para servir datos dinámicos.


# Añadir formularios

Para añadir formularios a un sitio desarrollado por Jekyll es muy usual usar servicios externos, para los formularios los mas conocidos son:

 * **<a href="https://getsimpleform.com" target="_blank">Simple Form</a>**
 * **<a href="https://formkeep.com/" target="_blank">FormKeep</a>**  
 * **<a href="http://www.typeform.com/" target="_blank">TypeForm</a>**

Cada uno de estos servicios tiene una funcionalidad especial, que se  pueden usar para un mismo objetivo, si. Para poder utilizarlos solamente es coger el código de formulario Html que cada uno provee y pegarlo a donde quiera que  se vea formulario, estos servicios son muy buenos cuando deseen algún servicio de webhooks, un formulario de contacto o una encuesta.


# En Conclusión

Jekyll no es la única herramienta de su tipo, existen muchas mas con su mismo fin, en esta página vas a encontrar las diferentes herramientas que actúan como facilitadoras en la generación de páginas estáticas <a href="https://www.staticgen.com/" target="_blank">https://www.staticgen.com/</a>.
