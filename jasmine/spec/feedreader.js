/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is a test suite just contains a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
		 
		it('URL is defined and not empty', function() {
			allFeeds.forEach(function(feed) {
				expect(feed.url).toBeDefined();
				expect(feed.url.length).not.toBe(0);
		});
	});

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
		it('name is defined and not empty', function() {
			 allFeeds.forEach(function(feed) {
				 expect(feed.name).toBeDefined();
				 expect(feed.name.length).not.toBe(0);
		});
	});
  


    // A test suite named "The menu" 
	describe('The Menu', function() { 
        // A test that ensures the menu element is hidden by default. 
         
		it('menu is hidden by default', function() {
			var body = $('body');
			expect(body.hasClass('menu-hidden')).toBe(true);
		});
	});
         /*A test that ensures the menu changes
          * visibility when the menu icon is clicked. 
          * This test has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
		 it('clicking menu button shows or hides menu', function() {
			 var $icon = $('.icon-list'),
			      body = $('body');
			 $('.icon-list').click();
			 expect(body.hasClass('menu-hidden')).toBe(false);
			 $('.icon-list').click();
			 expect(body.hasClass('menu-hidden')).toBe(true);
		});
	});
    // A new test suite named "Initial Entries" 
	describe('Initial Entries', function() {
        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
		 
		beforeEach(function(done){
			loadFeed(0, done);
		});
		
		it('feed container is not empty after loadFeed completes', function(done) {
			expect($('.entry').length).not.toBe(0);
			done();
		});
	});	
		
			
		/* A test suite named "New Feed Selection"
         * has tests that ensure when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */	
	describe('New Feed Selection', function() {
		var lastEntry,
		    newEntry;
		beforeEach(function(done){
			loadFeed(0, function(){
				lastEntry = $('.feed').html();
				loadFeed(1, done);
		});
	});
			 
		it('new feed is different from existing entry', function(done) {
			newEntry = $('.feed').html();
			expect(newEntry).not.toEqual(lastEntry);
			done();
		});	
	});
}());
