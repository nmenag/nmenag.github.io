---
layout: post
title: "Programar con Ruby en Ubuntu Linux"
subtitle: "Preparación de un entorno  de desarrollo para  Ruby en Ubuntu Linux."
category: Posts
comments: true
---

# Ante todo  la terminal

El uso de la terminal es algo imprescindible  para programar, La terminal mas apropiada para programar  es sin duda terminator, considerado el rey de los terminales según el blog
<a href="http://blog.desdelinux.net/terminator-el-rey-de-los-terminales/">DesdeLinux</a>

Para su instalación, solamente hacemos lo siguiente:

<div class="terminal">
sudo apt-get install terminator
</div>

# Instalar  Ruby

Para la instalación  tanto para computadores que tengan instalado Linux o MacOs la mejor forma para  instalarlo es hacerlo via <a href="http://rbenv.org/">Rbev</a> o por  <a href="https://rvm.io/">RVM</a>. Para muchos desarrolladores prefieren Rbenv ya que dicen es  mas sencillo en su instalación, en este post vamos instalar RVM, ya que es el que uso hasta momento y no he tenido problema en su manejo.

### - Instalar RVM(Ruby version manager)

Para su  instalación de, la terminal debe estar habilitado la opción gnome-terminal <a href="https://rvm.io/integration/gnome-terminal" target="_blank">https://rvm.io/integration/gnome-terminal</a>.

Si no tiene todavía instalado el <a href="http://es.wikipedia.org/wiki/CURL" target="_blank">curl</a>

<div class="terminal">
sudo apt-get install curl
</div>

Importación de las llaves

<div class="terminal">
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
</div>

Instalación RVM

<div class="terminal">
\curl -sSL https://get.rvm.io | bash -s stable
</div>

Cargar RVM

<div class="terminal">
source ~/.rvm/scripts/rvm
</div>

Verificar los requerimientos necesarios para su ejecución

<div class="terminal">
rvm requirements
</div>

Instalar Ruby

<div class="terminal">
$ rvm install ruby
$ rvm --default use 2.1.5
</div>

Instalar Rubygems

<div class="terminal">
rvm rubygems current
</div>


# Instalar y configurar  Git

Unas de las herramientas bien importante para un programador  es un sistema de control de cambios, todo buen programador maneja uno. Git no es la única herramienta que existe, existen otros como <a href="http://mercurial.selenic.com/">mercurial</a> o <a href="https://subversion.apache.org/">SVN</a>,  Git es como el sistema mas popular, para mayor información de Git puedes revisar en su pagina<a href="http://git-scm.com/"> http://git-scm.com/</a>.

### - Instalar Git

<div class="terminal">
sudo apt-get install git
</div>

Comprobar si Git se instalo correctamente y ver que versión se instalo.

<div class="terminal">
git --version
</div>

### - Configurar Git

Primero la identidad

<div class="terminal">
$ git config --global user.name "name"
$ git config --global user.email username@example.com
</div>

El editor de Git que  utilizara para los mensajes o los commits, Git generalmente usa Vi o Vim.

<div class="terminal">
git config --global core.editor nano
</div>

<h3>- Configuraciones extras</h3>

Para las configuraciones extras modificar el archivo <code> ~/.gitconfig</code> ese archivo es donde queda guardado todas parámetros de configuración que hemos dado a Git.

Colores
<pre>
[color]
    status = auto
    branch = auto
    diff = auto
    interactive = auto
    ui = auto

[color "branch"]

    current = yellow reverse
    local = yellow
    remote = green

[color "diff"]

    meta = yellow bold
    frag = magenta bold
    old = red bold
    new = green bold
</pre>

Unas de las configuraciones extras de Git es el uso de los  alias, para mayor información de su uso y como implementarlo <a href="http://githowto.com/aliases">http://githowto.com/aliases</a>

### - Configuración en el archivo .bashrc

Para mostrar el branch actual en la linea de comandos.

<pre>
parse_git_branch() {
 git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}

PS1='$ \u@\h:\w\[\033[1;33m\]$(parse_git_branch)\[\e[0;37m\]$ '
</pre>


### El uso de un buen editor

Para programar en Ruby y otro lenguaje no solamente en Ruby,  necesitamos un editor de texto para escribir nuestro código, para muchos programadores prefieren un <a href="http://es.wikipedia.org/wiki/Ambiente_de_desarrollo_integrado">IDE</a>  como puede ser  <a href="http://eclipse.org/downloads/">Eclipse</a> o  <a href="https://netbeans.org/">Netbeans</a>, yo personalmente me encuentro mas cómodo en usar editores minimalistas tipo <a href="http://www.sublimetext.com/">Sublime Text</a> o <a href="https://atom.io/">Atom Editor.</a>

### - Instalar Sublime Text

Para instalar sublime Text lo puedes descargar desde la página oficial  o puedes instalarlo vía PPA:

<div class="terminal">
$ sudo add-apt-repository ppa:webupd8team/sublime-text-3
$ sudo apt-get update
$ sudo apt-get install sublime-text-installer
</div>

### - Configurar Sublime Text

Para la configuración  de sublime Text lo primero que hacemos es instalar el package control <a href="https://packagecontrol.io/installation">https://packagecontrol.io/installation</a>, esta herramienta nos va permitir instalar  paquetes que nos hará la vida mas fácil si programamos con este editor.


Paquetes o plugins recomendados para instalar:

* <a href = "http://emmet.io/blog/sublime-text-3/">Emmet</a>
* <a href = "https://packagecontrol.io/packages/Gutter%20Color">Gutter Color</a>
* <a href = "https://github.com/maltize/sublime-text-2-ruby-tests">Ruby Test</a>
* <a href = "https://github.com/weslly/ColorPicker">Color picker</a>
* <a href = "http://editorconfig.org/">Editor Config</a>


# Herramientas para trabajar con Base de Datos


Si estas trabajando con MongoDB, unos de los mejores es <a href="https://github.com/paralect/robomongo">Robomongo</a>, si estas manejando postgreSQL el mas recomendado es usar <a href="http://www.pgadmin.org/">pgamdin 3</a>, para SQLite esta <a href="http://sqliteman.yarpen.cz/">Sqliteman</a> o <a href="http://sqlitebrowser.org/">SQLite browser</a>, Para MySQL esta <a href = "http://www.phpmyadmin.net/home_page/index.php">phpMyAdmin</a> y <a href="http://www.heidisql.com/">HeidiMysql</a>.

Bueno esto fue todo, ojala haya sido de gran utilidad.
