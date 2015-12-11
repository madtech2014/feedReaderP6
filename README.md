# Project Overview

This project is a web-based application that reads RSS feeds. 

# How to view the project:

	http://madtech2014.github.io/feedReaderP6/#
	
# How I completed this project:
	
1. Wrote a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
2. Wrote a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
3. Wrote a new test suite named "The menu".
4. Wrote a test that ensures the menu element is hidden by default. 
5. Wrote a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
6. Wrote a new test suite named "Initial Entries"
7. Wrote a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Used Jasmine's beforeEach a Done.
8. Wrote a new test suite named "New Feed Selection"
9. Wrote a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Used Jasmine's beforeEach a Done.

# Resources utilized:

Udacity Course: Javascript Testing 
http://jasmine.github.io/2.2/introduction.html
http://jasmine.github.io/
http://code.tutsplus.com/tutorials/testing-your-javascript-with-jasmine--net-21229
http://api.jquery.com/jQuery.ajax/
http://addyosmani.com/resources/essentialjsdesignpatterns


