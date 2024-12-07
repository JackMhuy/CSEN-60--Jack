# Web Security Lecture
## Potential Security Oversight
<ul>
    <li>No user authentication
    <li>Allowing weak authentication
    <li>Not sanitizing form entries and requests
    <li>Not encrypting sensitive informations
    <li>Sessions that don't time out
    <li>Out-of-date (unpatched) softwares
    <li>Bugs that expose use data
</ul>

## Cross Site Scripting

<ul> 
<li>The attacker inserts arbitrary HTML on your web page
<li>What can go wrong
<ul>
<li>Steal user's information
<li>Change content of page
</ul>
</ul>

## Cross Site Scripting: Mitigation

<ul>
<li>Don’t allow any HTML to be inserted
<ul>
<li>Backend libraries to strip out HTML tags
</ul>
</ul>

<ul>
<li>Don’t allow malicious HTML to be inserted
<ul>
<li>Backend libraries to sanitize HTML
</ul>
</ul>

<ul>
<li>Similar techniques may be used to protect
against SQL injection
</ul>

## Distributed Denial of Service(DDoS)
<p>Overwhelm a server with malicious requests to block regular users

## DDoS Mitigation
<ul>
<li>Rate limiting
<ul>
<li>Limit volume of requests from a user
</ul>
</ul>

<ul>
<li>Throw out excess traffic at random
<ul>
<li>Some will be malicious, some will be legitimate
</ul>
</ul>

<ul>
<li>Distribute traffic across network
<ul>
<li>By distributing load, can accommodate huge
volume
</ul>
</ul>

## Encryption
<ul>
<li>Ensures privacy within an organization and on the
Internet
<li>The conversion of data into an unreadable form,
called ciphertext
</ul>

## Decryption
<ul>
<li>The process of converting the ciphertext back into its
original form, called plaintext or cleartext, so it can be
understood.<li>
</ul>

#### (The encryption/decryption process requires an algorithm and a key.)

