# Reflection

Answer each question in 2-3 sentences.

## Most surprising discovery

Which vulnerability surprised you the most to find? Why didn't you expect it?

The secret in git history surprised me the most. I knew that `.env` files shouldn't be committed, but I didn't realize that even after deleting a file, anyone with repo access can recover its full contents from any historical commit using `git show`. It made me realize that git never truly forgets.

## Real-world risk

Pick one vulnerability you found. How would you explain its danger to a teammate who's never heard of it?

I'd explain XSS (Cross-Site Scripting) like this: "When you use innerHTML to display user input, you're telling the browser to treat that input as HTML code. So if someone types `<script>stealCookies()</script>` into a form, the browser will actually run that code. They could steal login sessions, redirect users to fake sites, or take actions on behalf of logged-in users. The fix is simple: use textContent instead, which treats everything as plain text."

## Future practice

What specific habit or check will you add to your own coding workflow to catch these issues before they ship?

I'll add `npm audit` to my pre-commit workflow so I'm alerted to vulnerable dependencies before pushing code. I'll also make it a habit to always add `.env` to `.gitignore` in my very first commit, before any secrets could accidentally be tracked. Finally, I'll search my code for `innerHTML` and `eval` before any PR and ask myself if user input could reach those functions.
