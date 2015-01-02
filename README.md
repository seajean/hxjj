## express-starter

A very simple boilerplate to get [express.js](http://expressjs.com) projects off the ground quickly.

Features:

* Uses Mustache for templating (via Consolidate.js)
	* Mustache partials not yet enabled correctly
* Uses assets folder to serve static files to http://url/
* Logs 404 errors to the console (Disable this for production environments.)
* Logs all other errors to the console. (You may or may not want to disable this in production.)
* Skeleton CSS
* LESS setup
* Minification of assets
	* Enabled for LESS
	* Other assets *not yet implemented*

---

### Configure

```
git clone https://github.com/shakna-israel/express-starter.git
cd express-starter
npm install
```

The above set of commands will grab you the repository, and install all the dependencies.

### Run

Running the app is as simple as:

```
node app.js
```
