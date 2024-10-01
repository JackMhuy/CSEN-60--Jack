- CSEN 60 Lab 1
- Jack Tran
- 10/01/2024

# Lab 1 Submission

## Part 1

Chosen webpage: https://www.scu.edu/
### 1a

5 block elements:

```
<video class="vidJumbotron" autoplay="" loop="" muted="" playsinline="" poster="">
			<source src="https://vod.api.video/vod/vi1p8ObDbt6WIw4F2YzBwmKu/mp4/source.mp4" type="video/mp4">
		</video>
```
```
<div class="h1 display-4">Go Anywhere From Here
</div>
```
```
<nav class="navbar navbar-expand-lg navbar-light bg-white d-none d-lg-block py-0 initial nav-users" id="navbarUsers">
    <li class="nav-item">
<a class="nav-link text-uppercase px-3" href="/visitors/">Visitors</a>
</li>
</nav>
```
```
<ul class="navbar-nav ml-auto">
          <li class="nav-item">
<a class="nav-link text-uppercase px-3" href="/students/">Students</a>
</li>
<li class="nav-item">
<a class="nav-link text-uppercase px-3" href="/faculty/">Faculty &amp; Staff</a>
</li>
</ul>
```
```
<p class="bg-gradient-primary mb-0 mt-4 p-3 small text-center"><span id="copyright">©</span> 2024 Santa Clara University</p>
```
### 1b

3 incline elements:
```
<script>
      $(document).ready(function() {
        if ( $('.accordion-item') ) {   
            $.getScript( "https://assets.scu.edu/scripts/t4/accordion-toolkit.js");     
        } 
        $( "table" ).addClass( "table" );
      });
</script>
```
```
<a href="#content" class="sr-only sr-only-focusable">Skip to main content <i class="far fa-arrow-down"></i></a>
```
```
<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=309795393777546&amp;ev=PageView&amp;noscript=1"></noscript>
```
### 1c

3 HTML5 semantic tags (if none found, explain where you would add some):
```
<main id="content">
	<div id="jt-552213" class="jumbotron block bg-white  text-dark has-dim-0 text-center mb-0" style="border-radius:0;padding: 2rem 2rem;" alt="">
		<div class="container">
			<div class="h1 block-title"></div>
			<p class="text-primary h1 font-weight-bolder">We’re students, teachers, and mentors headquartered in the most innovative place on earth: Silicon Valley.</p>
		</div>
	</div>
```
```
<header class="header-legacy bg-light">
    <li class="nav-item">
        <a class="nav-link text-uppercase px-3" href=" visitors/">Visitors</a>
    </li>
</header>
```
```
<footer class="footer-core border-top bg-white pt-4 footer-core">
    <ul class="list-unstyled list-spaced">
<li><a href="https://www.scu.edu/map/">Maps &amp; Directions</a></li>
<li><a href="https://www.scu.edu/phonebook">Contact Us</a></li>
</ul>
</footer>
```