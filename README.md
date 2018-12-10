# sonastikapi

# Andmebaasi loomine
* mongo shellis teha andmebaas nimega "sonastik"
* use sonastik

# Käivitamine
* Lae failid alla
* navigeerida command promptis kausta kuhu failid laetud sai
* npm install
* mongoimport --db sonastik --collection words --type json --file akittahendus.json --jsonArray
* nodemon app.js
