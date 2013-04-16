<h2>A flatiron http server template in coffee-script</h2>

<h3>based on <a href="https://github.com/twilson63/iron-coffee">iron-coffee</a></h3>

<p>by <a href="https://github.com/twilson63/">Tom Wilson</a></p>

<h3><a href="https://github.com/gradus/black-coffee">Fork black-coffee on Github</a></h3>

<h2>About</h2>

<p><a href="https://github.com/gradus/black-coffee">Black Coffee</a> is a template or boiler-plate to get started writing flatiron web applications in CoffeeScript.</p>

<p>It includes a Cakefile that lets you build, and watch your coffeescript as you develop.</p>

<p>Just hack away at app.coffee in the src directory and create your own<br />pages.  <a href="http://www.getskeleton.com/">Skeleton CSS framework</a> is included as well as a default skeleton page. </p>

<p>The default CoffeeCup templates for black-coffee are located in the src/pages directory.  3 pages and a layout template are included as examples in addition to the skeleton page.</p>

<p>Assets can be served from the 'assets' directory using <a href="https://github.com/jesusabdullah/node-ecstatic">ecstatic</a>.</p>

<h4>Example Website</h4>

<p><a href="http://black-coffee.jit.su">Drink your Black Coffee</a></p>

<hr />

<h2>Technologies</h2>

<p>This template uses the following to create nodejs applications </p>

<ul>
<li><a href="http://nodejs.org/">Node v0.6.14</a></li>
<li><a href="http://flatironjs.org/">Flatiron</a></li>
<li><a href="http://coffeescript.org/">CoffeeScript v1.3.1</a></li>
<li><a href="https://github.com/gradus/coffeecup">CoffeeCup Master</a></li>
<li><a href="https://github.com/twilson63/creamer">Creamer</a></li>
<li><a href="https://github.com/jesusabdullah/node-ecstatic">node-ecstatic</a></li>
<li><a href="http://www.getskeleton.com/">Skeleton</a></li>
</ul>

<hr />

<h2>Getting Started</h2>

<h4>Install <a href="http://nodejs.org/">nodejs and npm</a></h4>

<pre><code>git clone <a href='http://github.com/gradus/black-coffee.git'>http://github.com/gradus/black-coffee.git</a> [project-name]
cd [project-name]
npm install .
</code></pre>

<p>This is just a template to get you started.</p>

<p>If you want to make this your own project on github:</p>

<pre><code>git remote rm origin
git remote add origin <a href='mailto:git@github.com'>git@github.com</a>:[your github accountname]/[project-name].git
</code></pre>

<h4>Dependencies</h4>

<pre><code>npm install .
npm install flatiron
</code></pre>

<p>Black-Coffee currently requires the master version of director</p>

<pre><code>cd node_modules/flatiron
npm uninstall director
npm install git://github.com/flatiron/director.git
cd ../../
</code></pre>

<h5>Build</h5>

<pre><code>cake build
</code></pre>

<h5>Watch</h5>

<pre><code>cake watch
</code></pre>

<h5>Test</h5>

<p>write tests, put them in the test directory and run</p>

<pre><code>cake test
</code></pre>

<h5>Run</h5>

<pre><code>npm start
</code></pre>

<hr />

<h2>Thanks</h2>
