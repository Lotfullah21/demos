.feature-icon {
font-size: 2.4rem;
transition: var(--transition);
margin-bottom: 1.24rem;
}

<h3>Important</h3>
due to the fact that span as an inline element, margin cannot be respected by the browser.
to have that margin we need to add display inlin-block

.feature-icon {
display: inline-block;
font-size: 2.4rem;
transition: var(--transition);
margin-bottom: 1.24rem;
}
