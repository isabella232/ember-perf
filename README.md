# Ember Performance Analysis

> [View results]

## Pre-req
* Ensure that you have ember-cli installed
* Download dependencies using 
* Clone https://github.com/wycats/dbmonster
* Run CouchDB to save the results
* Initialize the database using node_modules/.bin/perfjankie --couch-database=ember-perf --couch-user=admin_user --couch-pwd=admin_pass --only-update-site --couch-server=http://localhost:5984

## To Run Tests
 1. Update version of ember in bower.json
 2. Run ember build --environment production
 3. Run a HTTP server on dist directory, at port 8080
 4. Data is recorded in the CouchDB database.
    
## Notes
 * You may also have to replace this.get('attrs.db') to this.get('db').samples in app/components/dbmon-database.js
 * You may also have to replace {{attrs.db.name}} to {{db.name}} in app/templates/components/dbmon-database.hbs
 * Using Ember canary - http://www.ember-cli.com/#using-canary-build-instead-of-release
 * If ember-cli fails due to rimraf/glob error, just create a dummy glob.hasMagic function