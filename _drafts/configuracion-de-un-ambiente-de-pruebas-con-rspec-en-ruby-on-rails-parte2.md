---
layout: post
title: Configuración de un ambiente pruebas con Rspec en Ruby On Rails - parte 2
subtitle:  "Configurar un ambiente de pruebas con Ruby On Rails usando Rspec, Factory-girl, Capybara y otras librerías - parte 2"
description: "Configurar un ambiente de pruebas con Ruby On Rails usando Rspec, Factory-girl, Capybara y otras librerías - parte 2"
category: Posts
author:   "nmenag"
comments: true
---

En el post anterior <a href="{{ "/posts/2016/02/17/configuracion-de-un-ambiente-pruebas-con-rspec-en-ruby-on-rails-parte1/" | prepend: site.baseurl }}" target="_blank" > Configuración de un ambiente pruebas con Rspec en Ruby On Rails - parte 1</a> estuvimos viendo la configuración inicial para  montar un ambiente de pruebas en Rails. En este post veremos el resto de la configuración, que es donde miraremos  como optimizar pruebas y realizar pruebas de integración.

Se me olvidaba mencionar que para probar las configuraciones estamos haciendo  un proyecto en Rails;  puede mirar el  repositorio en github <a href="https://github.com/nmenag/testing-rails-rspec" target="_blank">repositorio</a>, donde va  quedar lo que hacemos durante el post, el proyecto que se va a  desarrollar es  un CRUD, donde vamos a crear unas tareas asociado a un usuario con un login que vamos hacer con
<a href="https://github.com/plataformatec/devise" target="_blank"> Devise.

## El modelo de datos

Partiremos con un modelo sencillo.

<img src="{{ site.baseurl }}/assets/img/ER.png" width="80%">

## Shoulda-matchers

Rspec es un framework, un marco de trabajo que nos permite escribir pruebas guiadas al comportamiento(BDD), en la cual nos permite durante en el proceso escribir especificaciones mucho más legibles que dirijan y validen el desarrollo de una aplicación, para mayor información consultar las siguientes fuentes:

- <a href = "http://rspec.info/" target="_blank">Rspec info </a>
- <a href="http://betterspecs.org/" target="_blank">Better spec</a>
- <a href = "https://www.relishapp.com/rspec" target="_blank">Relishapp Rspec</a>

## Creación del proyecto:

Creamos una aplicación Rails sin testing framework(minitest), Rails por defecto usa <a href="http://ruby-doc.org/stdlib-2.1.0/libdoc/minitest/rdoc/MiniTest.html" target="_blank">minitest</a> para el ambiente de pruebas.

<div class="terminal">
 rails new testing-rails-rspec -T
</div>

## Instalar Rspec

Para instalar `Rspec` en un proyecto de Ruby On rails vamos a usar una gema llamada <a href="https://rubygems.org/gems/rspec-rails" target="_blank">rspec-rails</a>

Especificamos `rspec-rails` en el archivo `Gemfile`:

{% highlight ruby %}
group :development, :test do
  gem 'rspec-rails', '~> 3.4', '>= 3.4.2'
end
{% endhighlight %}

Descargar e instalar mediante el comando:

<div class="terminal">
  bundle install
</div>

Ya cuando tengamos instalado `rspec-rails` ejecutamos el siguente comando:

<div class="terminal">
 rails generate rspec:install
</div>

Esto nos genera los siguientes archivos que se utilizaran para la configuración:

<pre>
create  .rspec
create  spec
create  spec/spec_helper.rb
create  spec/rails_helper.rb
</pre>

> Lea los comentarios de cada archivo para mayor información.

## Instalar Factory_girl y Faker

<a href="https://github.com/thoughtbot/factory_girl_rails" target="_blank">Factory_girl</a> es una libreria para crear objetos de los datos de nuestra aplicación. <a href="https://rubygems.org/gems/faker/versions/1.6.1" target="_blank">Faker</a> es una libreria que nos permite generar datos falsos como nombres, emails, direcciones o números de teléfono.

Para su instalación lo especificamos en el `Gemfile`:

{% highlight ruby %}
group :development, :test do
  gem 'rspec-rails', '~> 3.4', '>= 3.4.2'
  gem 'factory_girl_rails', '~> 4.6'
  gem 'faker', '~> 1.6', '>= 1.6.1'
end
{% endhighlight %}

Si creamos nuestros modelos por el generador de Rails, el nos crea un archivo por cada modelo en la carpeta  `spec/factories/`

por ejemplo si creamos un modelo llamado `User`:

<div class="terminal">
  rails g model user email:string name:string
</div>

Por defecto nos genera esto:

<pre>
invoke  active_record
create    db/migrate/20160215011855_create_users.rb
create    app/models/user.rb
invoke    rspec
create      spec/models/user_spec.rb
invoke      factory_girl
create        spec/factories/users.rb
</pre>

Vemos en el resultado que  nos crear una migración para dicho modelo y vemos que ejecuto  `factory_girl` y nos creo el siguiente archivo ubicado  en `spec/factories/users.rb`, dentro del archivo nos genera el siguente código:

{% highlight ruby %}
FactoryGirl.define do
  factory :user do
    email "MyString"
    name "MyString"
  end
end
{% endhighlight %}

Para que funcione `Factory_girl` con `Rspec` debemos decirle a `Rspec` que use `Factory_girl`, para hacer ese cambio modificamos  lo siguente:

En el archivo `spec/rails_helper.rb`:

{% highlight ruby %}
RSpec.configure do |config|
  # Remove this line if you're not using ActiveRecord or ActiveRecord fixtures
  config.fixture_path = "#{::Rails.root}/spec/fixtures"
  # more code...
end
{% endhighlight %}

Lo que vamos a modificar es comentar la linea `config.fixture_path = "#{::Rails.root}/spec/fixtures"` y añadimos la linea `config.include FactoryGirl::Syntax::Methods` para que quede algo asi:

{% highlight ruby %}
Spec.configure do |config|
  # Remove this line if you're not using ActiveRecord or ActiveRecord fixtures
  # config.fixture_path = "#{::Rails.root}/spec/fixtures"
  config.include FactoryGirl::Syntax::Methods
  # more code...
end
{% endhighlight %}

### usando Faker junto a Factory_girl

Ahora usamos `Faker` para poder generar datos falsos, para mirar todos los datos que se pueden generar con `Faker` lo puede ver en el siguente enlace: <a href="https://github.com/stympy/faker#usage">https://github.com/stympy/faker#usage</a>

Ahora  usamos `Faker` con `factory_girl`, modificando el archivo que este nos creó para el modelo `User`:

{% highlight ruby %}
FactoryGirl.define do
  factory :user do
    email { Faker::Internet.email }
    name { Faker::Name.name }
  end
end
{% endhighlight %}

## Escribiendo tests para los modelos

En la hora de crear nuestro modelo  `User` por el generador de `Rails` dentro de la carpeta  `spec/` nos creo un archivo llamado `spec/models/user_spec.rb` con el siguente código:

{% highlight ruby %}
require 'rails_helper'

RSpec.describe User, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
{% endhighlight %}

Ahora vamos a crear las pruebas:

Vamos a escribir una prueba que valide si es un registro valido, vamos a decirle al test que no es un registro valido si el nombre esta vacio o nulo:

{% highlight ruby %}
require 'rails_helper'

RSpec.describe User, type: :model do
  it 'has invalid factory without name' do
    expect(build(:user, name: nil)).not_to be_valid
  end
  #more code..
end
{% endhighlight %}

Y lo ejecutamos por  consola:

<div class="terminal">
  rspec spec/models/user_spec.rb:17
</div>

En mi caso mi prueba inicia en la linea 17.

Resultado:

<pre>
Run options: include {:locations=>{"./spec/models/user_spec.rb"=>[17]}}
F

Failures:

1) User has invalid factory without name
   Failure/Error: expect(build(:user, name: nil)).not_to be_valid
     expected #<User id: nil, email: "jaida@kohler.name", name: nil, created_at: nil, updated_at: nil> not to be valid
</pre>

Esta prueba no paso ya que nos falta agregar la validación al modelo:

{% highlight ruby %}
class User < ActiveRecord::Base
  validates :name, presence: true
end
{% endhighlight %}

Ahora si ya agregamos la validación al modelo y volvemos a correr el comando que nos hace ejecutar la prueba, el resultado seria el siguente:

<pre>
Run options: include {:locations=>{"./spec/models/user_spec.rb"=>[17]}}
.

Finished in 0.93453 seconds (files took 7.72 seconds to load)
1 example, 0 failures
</pre>

Y listo la prueba ya pasa.

Hasta aqui vimos la funcionalidad conjunta entre `Rspec`, `Factory_girl` y `Faker`.

 Si quiere ver todas las pruebas que se hiceron para el modelo `User` y las validaciones que se agregaron para este  modelo lo puede mirar en el siguente enlace en un repositorio en github:

 <a href = "https://github.com/nmenag/testing-rails-rspec/tree/install-factory-girl" target="_blank">https://github.com/nmenag/testing-rails-rspec/tree/install-factory-girl</a> Este es el proyecto que estamos usando para explicar la configuración de un ambiente de pruebas en Rails.
