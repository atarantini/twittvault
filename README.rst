------------
 TwittVault
------------

**TwittVault** is a simple **NodeJS** script that store all your tweets in a **MySQL** database.

About
^^^^^

This *simple* script will store your tweets into a **MySQL** database consuming the Twitter streaming API with the amazing **Tuiter** library (https://github.com/danzajdband/Tuiter).

Twittvault is released under the **GPL** General Public License V3 (see COPYNG file).

Installation
^^^^^^^^^^^^

* Clone the repository https://github.com/atarantini/twittvault
OR

* Download sources https://github.com/atarantini/twittvault/tarball/master


* Go to the sources directory and run ``npm install`` from your terminal to install dependencies::

	npm install

Setup
^^^^^

* Create a database and run ``twittvault.sql`` or create a table with this structure::

	CREATE TABLE IF NOT EXISTS `tweets` (
	  `id` int(10) NOT NULL AUTO_INCREMENT,
	  `id_tweet` varchar(32) CHARACTER SET latin1 NOT NULL,
	  `text` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
	  `id_user` int(144) NOT NULL,
	  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	  PRIMARY KEY (`id`)
	) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

* Edit ``config.json`` and setup your Twitter API key, MySQL login credentials, database name, tables and Twitter screen name (without the *@*)

Run
^^^^

Just call it with node::

	node twittvault.js

If you want to get some output and debug information, call with with DEBUG::

	DEBUG=* node twittvault.js

Author
^^^^^^

* Andres Tarantini (atarantini@gmail.com)
